#!/usr/bin/env node

import fs from "node:fs"
import fsp from "node:fs/promises"
import os from "node:os"
import path from "node:path"

const ROOT = path.resolve(import.meta.dirname, "..")
const MANIFEST_PATH = path.join(ROOT, "assets/portfolio/manifest.json")
const METRICS_PATH = path.join(ROOT, "assets/portfolio/metrics.json")
const STATS_PATH = path.join(ROOT, "assets/stats.json")
const PORTFOLIO_START = process.env.INSTAGRAM_PORTFOLIO_START || "2026-05-01"
const GRAPH_VERSION = process.env.INSTAGRAM_GRAPH_VERSION || "v23.0"
const GRAPH_BASE = `https://graph.facebook.com/${GRAPH_VERSION}`
const TITLE_OVERRIDES = {
  "18418558528176379": "Why leaked API keys put products at risk",
  "18159866923486645": "AI Search checklist with a comment-led CTA",
  "18088436213576090": "Founder-style product explanation",
  "17934559134277567": "Choose your side: a fast visual hook",
  "17958979817964459": "Make a technical concept concrete",
  "18095469617590067": "Turn a founder story into a learning hook",
  "18128790184621531": "Explain a niche topic in plain language",
  "18112554292710912": "Turn a visual trend into a useful how-to",
  "18127658746529604": "Make an abstract topic feel urgent",
  "18091609091343964": "Make product building feel possible",
}

function localCredentials() {
  const storePath =
    process.env.PAGE_TOKEN_STORE ||
    path.join(os.homedir(), ".local/share/claude-design/igbot/page-tokens.json")
  if (!fs.existsSync(storePath)) return {}
  const store = JSON.parse(fs.readFileSync(storePath, "utf8"))
  const account = store["onurhuseyinkocak.ai"] || Object.values(store).find((row) =>
    /onurhuseyinkocak/i.test(String(row?.ig_username || ""))
  )
  return {
    token: account?.page_token,
    userId: account?.ig_id,
  }
}

const local = localCredentials()
const ACCESS_TOKEN = process.env.INSTAGRAM_PAGE_TOKEN || local.token
const USER_ID = process.env.INSTAGRAM_USER_ID || local.userId

if (!ACCESS_TOKEN || !USER_ID) {
  console.error("Missing INSTAGRAM_PAGE_TOKEN or INSTAGRAM_USER_ID. No files were changed.")
  process.exit(1)
}

async function graph(pathname, params = {}) {
  const url = new URL(`${GRAPH_BASE}/${pathname}`)
  for (const [key, value] of Object.entries(params)) url.searchParams.set(key, String(value))
  url.searchParams.set("access_token", ACCESS_TOKEN)
  const response = await fetch(url, { headers: { Accept: "application/json" } })
  const payload = await response.json().catch(() => ({}))
  if (!response.ok || payload.error) {
    const error = payload.error || {}
    throw new Error(
      `Instagram Graph API ${response.status}: ${error.message || response.statusText} ` +
        `(code ${error.code || "unknown"})`
    )
  }
  return payload
}

async function collectMedia() {
  const fields = [
    "id",
    "caption",
    "media_type",
    "media_product_type",
    "permalink",
    "thumbnail_url",
    "media_url",
    "timestamp",
    "comments_count",
    "like_count",
  ].join(",")
  const first = await graph(`${USER_ID}/media`, { fields, limit: 100 })
  const media = [...(first.data || [])]
  let next = first.paging?.next
  while (next && media.length < 200) {
    const response = await fetch(next, { headers: { Accept: "application/json" } })
    const payload = await response.json().catch(() => ({}))
    if (!response.ok || payload.error) throw new Error("Instagram media pagination failed. No files were changed.")
    media.push(...(payload.data || []))
    next = payload.paging?.next
  }
  return media
}

async function insightsFor(mediaId) {
  const payload = await graph(`${mediaId}/insights`, {
    metric: "reach,views,saved,shares,comments,likes,total_interactions",
  })
  const output = {}
  for (const metric of payload.data || []) {
    output[metric.name] = metric.values?.[0]?.value ?? metric.total_value?.value ?? 0
  }
  return output
}

function captionTitle(caption) {
  const clean = String(caption || "New creator sample").replace(/\s+/g, " ").trim()
  const sentence = clean.split(/(?<=[.!?])\s/)[0] || clean
  return sentence.length > 92 ? `${sentence.slice(0, 89).trim()}...` : sentence
}

async function validAsset(relativePath, minimumBytes) {
  try {
    const stat = await fsp.stat(path.join(ROOT, relativePath))
    return stat.isFile() && stat.size >= minimumBytes
  } catch {
    return false
  }
}

async function downloadAsset(url, relativePath, expectedType, minimumBytes, maximumBytes) {
  if (!url) throw new Error(`Instagram did not return a source for ${relativePath}`)
  const response = await fetch(url)
  const contentType = response.headers.get("content-type") || ""
  const contentLength = Number(response.headers.get("content-length") || 0)
  if (!response.ok || !contentType.startsWith(expectedType)) {
    throw new Error(`Invalid ${expectedType} response for ${relativePath}`)
  }
  if (contentLength && contentLength > maximumBytes) {
    throw new Error(`Downloaded asset exceeds the safe repository limit: ${relativePath}`)
  }
  const bytes = Buffer.from(await response.arrayBuffer())
  if (bytes.length < minimumBytes) throw new Error(`Downloaded asset is too small: ${relativePath}`)
  if (bytes.length > maximumBytes) throw new Error(`Downloaded asset exceeds the safe repository limit: ${relativePath}`)
  const destination = path.join(ROOT, relativePath)
  const temporary = `${destination}.tmp`
  await fsp.mkdir(path.dirname(destination), { recursive: true })
  await fsp.writeFile(temporary, bytes)
  await fsp.rename(temporary, destination)
}

const previousRaw = JSON.parse(await fsp.readFile(MANIFEST_PATH, "utf8"))
const previousItems = Array.isArray(previousRaw) ? previousRaw : previousRaw.items || []
const previousById = new Map(previousItems.map((item) => [String(item.id), item]))
const maximumIndex = previousItems.reduce((max, item) => Math.max(max, Number(item.i) || 0), 0)

const profile = await graph(USER_ID, { fields: "id,username,followers_count,media_count" })
const allMedia = await collectMedia()
const selected = allMedia.filter((item) =>
  item.media_type === "VIDEO" &&
  item.media_product_type === "REELS" &&
  String(item.timestamp || "").slice(0, 10) >= PORTFOLIO_START
)

if (selected.length < previousItems.length) {
  throw new Error(
    `Safety stop: API returned ${selected.length} portfolio Reels, fewer than the existing ${previousItems.length}. ` +
      "No JSON files were changed."
  )
}

let nextIndex = maximumIndex
const enriched = []
for (const media of selected) {
  const prior = previousById.get(String(media.id))
  const metrics = await insightsFor(media.id)
  const i = Number(prior?.i) || ++nextIndex
  const slug = `ig-${media.id}`
  const video = prior?.video || (prior?.i ? `assets/video/reel-${prior.i}.mp4` : `assets/video/${slug}.mp4`)
  const thumb = prior?.thumb || (prior?.i ? `assets/portfolio/reel-${prior.i}.jpg` : `assets/portfolio/${slug}.jpg`)
  const title = TITLE_OVERRIDES[String(media.id)] || prior?.title || captionTitle(media.caption)
  enriched.push({
    i,
    id: String(media.id),
    permalink: media.permalink,
    video,
    thumb,
    title,
    alt: prior?.alt || `Onur Koçak creator sample: ${title}`,
    caption: String(media.caption || "").trim(),
    likes: Number(media.like_count ?? metrics.likes ?? 0),
    comments: Number(media.comments_count ?? metrics.comments ?? 0),
    views: Number(metrics.views ?? 0),
    reach: Number(metrics.reach ?? 0),
    saved: Number(metrics.saved ?? 0),
    shares: Number(metrics.shares ?? 0),
    totalInteractions: Number(metrics.total_interactions ?? 0),
    date: String(media.timestamp || "").slice(0, 10),
    _mediaUrl: media.media_url,
    _thumbnailUrl: media.thumbnail_url,
  })
}

for (const item of enriched) {
  if (!(await validAsset(item.video, 100_000))) {
    await downloadAsset(item._mediaUrl, item.video, "video/", 100_000, 90_000_000)
  }
  if (!(await validAsset(item.thumb, 10_000))) {
    await downloadAsset(item._thumbnailUrl, item.thumb, "image/", 10_000, 12_000_000)
  }
}

enriched.sort((a, b) => b.date.localeCompare(a.date) || Number(b.id) - Number(a.id))
const updatedAt = new Date().toISOString()
const publicItems = enriched.map(({ _mediaUrl, _thumbnailUrl, ...item }) => item)
const topViews = [...publicItems].sort((a, b) => b.views - a.views)[0]
const topComments = [...publicItems].sort((a, b) => b.comments - a.comments)[0]
const topSaves = [...publicItems].sort((a, b) => b.saved - a.saved)[0]

const manifest = {
  version: 2,
  updatedAt,
  source: "Instagram Graph API",
  profile: `@${profile.username}`,
  items: publicItems,
}
const metrics = {
  updatedAt,
  source: "Instagram Graph API",
  reels: Object.fromEntries(
    publicItems.map((item) => [item.id, {
      views: item.views,
      reach: item.reach,
      likes: item.likes,
      comments: item.comments,
      saved: item.saved,
      shares: item.shares,
      totalInteractions: item.totalInteractions,
    }])
  ),
}
const stats = {
  followers: Number(profile.followers_count || 0),
  posts: Number(profile.media_count || 0),
  portfolioReels: publicItems.length,
  updatedAt,
  source: "Instagram Graph API",
  topViews: { id: topViews.id, value: topViews.views },
  topComments: { id: topComments.id, value: topComments.comments },
  topSaves: { id: topSaves.id, value: topSaves.saved },
}

await Promise.all([
  fsp.writeFile(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`),
  fsp.writeFile(METRICS_PATH, `${JSON.stringify(metrics, null, 2)}\n`),
  fsp.writeFile(STATS_PATH, `${JSON.stringify(stats, null, 2)}\n`),
])

console.log(
  `Instagram portfolio synced: ${publicItems.length} Reels, ${profile.followers_count} followers, ` +
    `top Reel ${topViews.views} views. No credentials were written to the repository.`
)
