(() => {
  const legacyHash={cases:'work',portfolio:'work',packages:'rates',contact:'brief',stats:'results'};
  const destination=legacyHash[location.hash.slice(1)]||location.hash.slice(1);
  if(location.pathname==='/'&&new URLSearchParams(location.search).get('lang')==='tr'){location.replace('/tr/'+(destination?'#'+destination:''));return;}
  if(legacyHash[location.hash.slice(1)])document.getElementById(destination)?.scrollIntoView({behavior:'auto'});
  const form = document.getElementById('brief-form');
  form?.addEventListener('submit',event=>{
    event.preventDefault();
    if(!form.reportValidity())return;
    const data=new FormData(form),product=new URL(String(data.get('product')));
    if(!['https:','http:'].includes(product.protocol)){document.getElementById('form-status').textContent=document.documentElement.lang==='tr'?'HTTP veya HTTPS ürün bağlantısı kullanın.':'Use an HTTP or HTTPS product link.';return;}
    const fields=['brand','product','format','usage','deadline','notes'];
    const body=fields.map(name=>name+': '+String(data.get(name)||'').trim()).join('\n');
    const link=document.getElementById('draft-link');
    link.href='mailto:info@vibecodingturkey.com?subject='+encodeURIComponent('Tech UGC brief - '+String(data.get('brand')))+'&body='+encodeURIComponent(body);
    link.hidden=false;
    window.gtag?.('event','contact_click',{channel:'email_draft',page_type:'tech_ugc_portfolio'});
    document.getElementById('form-status').textContent=document.documentElement.lang==='tr'?'E-posta taslağınız hazır. Açılan uygulamadan gönderin; açılmazsa aşağıdaki bağlantıyı kullanın.':'Your email draft is ready. Send it from your email app; use the link below if it did not open.';
    link.click();
  });
  const videos=[...document.querySelectorAll('video')];
  for(const video of videos)video.addEventListener('play',()=>{if(!video.muted)videos.forEach(other=>{if(other!==video)other.pause();});});
  document.querySelectorAll('[data-format]').forEach(a=>a.addEventListener('click',()=>{const select=form?.querySelector('select[name="format"]');if(select)select.selectedIndex=Number(a.dataset.format);}));
  const page=document.documentElement,calm=!window.matchMedia||window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // Enhancements only; the page is complete without them (no observer support, reduced motion or data saver).
  if(window.IntersectionObserver&&page.classList){
    const lite=calm||window.navigator?.connection?.saveData;
    const watch=new IntersectionObserver(entries=>{for(const entry of entries){const v=entry.target;if(v.dataset.full)continue;if(entry.isIntersecting){if(v.dataset.preview&&!v.dataset.on){v.dataset.on='1';v.src=v.dataset.preview;}v.play().catch(()=>{});}else v.pause();}},{threshold:.5});
    // Silent previews replay twice and stop; a click pauses or resumes them.
    const loops=v=>{let plays=0;v.addEventListener('ended',()=>{if(!v.dataset.full&&++plays<3)v.play().catch(()=>{});});v.addEventListener('click',()=>{if(!v.controls){if(v.paused)v.play().catch(()=>{});else v.pause();}});};
    for(const v of videos){
      const sound=v.parentElement.querySelector('.sound');
      if(sound){
        sound.hidden=false;v.controls=false;v.muted=true;v.loop=false;loops(v);
        sound.addEventListener('click',()=>{v.dataset.full='1';v.loop=false;v.muted=false;v.controls=true;v.src=v.querySelector('source').src;sound.hidden=true;v.play().catch(()=>{});v.focus();});
        if(!lite&&v.dataset.preview)watch.observe(v);
      }else if(v.dataset.autoplay!==undefined&&!lite){v.controls=false;v.loop=false;loops(v);watch.observe(v);}
    }
    const dock=document.querySelector('[data-dock]'),hero=document.querySelector('.hero'),brief=document.getElementById('brief');
    if(dock&&hero&&brief){
      let past=false,atBrief=false;const sync=()=>dock.classList.toggle('on',past&&!atBrief);
      new IntersectionObserver(([entry])=>{past=!entry.isIntersecting;sync();}).observe(hero);
      new IntersectionObserver(([entry])=>{atBrief=entry.isIntersecting;sync();}).observe(brief);
    }
    if(!calm){
      page.classList.add('motion');
      const show=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting){entry.target.classList.add('in');show.unobserve(entry.target);}},{rootMargin:'0px 0px -8% 0px'});
      [...document.querySelectorAll('.section-top,.case,.shelf li,.craft-grid figure,.steps li,.rate,.about-grid,.contact-grid')].filter(el=>el.getBoundingClientRect().top>=window.innerHeight).forEach(el=>{
        el.dataset.reveal='';el.style.setProperty('--d',[...el.parentElement.children].indexOf(el)%4*70+'ms');show.observe(el);
      });
      const stack=document.querySelector('[data-tilt]');
      if(stack&&window.matchMedia('(hover:hover) and (pointer:fine)').matches){
        const scene=stack.firstElementChild,set=(x,y)=>Object.entries({'--ry':x*7+'deg','--rx':-y*7+'deg','--ax':-x*14+'px','--ay':-y*14+'px','--bx':x*22+'px','--by':y*22+'px'}).forEach(([k,v])=>scene.style.setProperty(k,v));
        let frame;
        stack.addEventListener('pointermove',event=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>{const r=stack.getBoundingClientRect();set((event.clientX-r.left)/r.width-.5,(event.clientY-r.top)/r.height-.5);});});
        stack.addEventListener('pointerleave',()=>{cancelAnimationFrame(frame);set(0,0);});
      }
    }
  }
  if(location.hostname==='ugc-onur.vibecodingturkey.com'){
    if(form){const control=document.createElement('script');control.src='/vct-control.js';control.dataset.site='ugc-onur';document.head.appendChild(control);}
    window.dataLayer=window.dataLayer||[];
    window.gtag=window.gtag||function(){window.dataLayer.push(arguments);};
    window.gtag('js',new Date());window.gtag('config','G-K9XZ9B08V9',{anonymize_ip:true});
    const script=document.createElement('script');script.async=true;script.src='https://www.googletagmanager.com/gtag/js?id=G-K9XZ9B08V9';document.head.appendChild(script);
    document.querySelectorAll('a[href^="mailto:"]').forEach(a=>a.addEventListener('click',()=>window.gtag('event','contact_click',{channel:'email',page_type:'tech_ugc_portfolio'})));
    fetch('https://raw.githubusercontent.com/onurhuseyinkocak/ugc/main/assets/creator/snapshot.json',{signal:AbortSignal.timeout(5000)})
      .then(r=>{if(!r.ok)throw Error();return r.json();}).then(d=>{
        const old=document.querySelector('[data-measured]');
        if(d.username!=='onurhuseyinkocak.ai'||d.source!=='Meta Graph API'||d.days!==30||!old||
          !Number.isFinite(Date.parse(d.measuredAt))||Date.parse(d.measuredAt)<=Date.parse(old.dateTime)||
          Date.parse(d.endDate)-Date.parse(d.startDate)!==29*86400000||
          !['views','reach','comments','saves','shares','likes','total_interactions'].every(k=>typeof d.metrics?.[k]==='number'&&Number.isFinite(d.metrics[k])&&d.metrics[k]>=0)||
          !Number.isSafeInteger(d.followers)||d.followers<0)return;
        const lang=document.documentElement.lang==='tr'?'tr-TR':'en-US';
        document.querySelectorAll('[data-account]').forEach(e=>{const k=e.dataset.account;e.textContent=(k==='followers'?d.followers:d.metrics[k]).toLocaleString(lang);});
        document.querySelector('[data-hero-views]')?.replaceChildren(d.metrics.views.toLocaleString(lang));
        const format=s=>new Date(s).toLocaleDateString(lang,{day:'numeric',month:'short',year:'numeric',timeZone:'UTC'});
        for(const key of ['startDate','endDate']){const e=document.querySelector('[data-period="'+key+'"]');if(e){e.dateTime=d[key];e.textContent=format(d[key]);}}
        old.dateTime=d.measuredAt;old.textContent=format(d.measuredAt);
        if(Array.isArray(d.daily)&&d.daily.length>1&&d.daily.every(p=>typeof p.value==='number'&&Number.isFinite(p.value)&&p.value>=0&&Number.isFinite(Date.parse(p.date)))){
          const max=Math.max(1,...d.daily.map(p=>p.value)),line=document.querySelector('.reach-chart polyline'),dot=document.querySelector('.reach-chart circle');
          line?.setAttribute('points',d.daily.map((p,i)=>(4+i/(d.daily.length-1)*352)+','+(72-p.value/max*64)).join(' '));
          dot?.setAttribute('cy',String(72-d.daily.at(-1).value/max*64));
          const caption=document.querySelector('[data-reach-caption]');if(caption)caption.textContent=caption.dataset.label+' · '+format(d.daily[0].date)+' - '+format(d.daily.at(-1).date);
        }
        const byId=new Map([...(d.campaigns??[]),...(d.carousels??[]),...(d.reels??[])].map(p=>[p.id,p]));
        document.querySelectorAll('[data-post-metric]').forEach(e=>{const v=byId.get(e.dataset.postId)?.metrics?.[e.dataset.postMetric];if(v===null)e.textContent='-';else if(typeof v==='number'&&Number.isFinite(v)&&v>=0)e.textContent=v.toLocaleString(lang);});
        document.querySelectorAll('[data-post-measured]').forEach(e=>{e.dateTime=d.measuredAt;e.textContent=format(d.measuredAt);});
      }).catch(()=>{});
  }
})();
