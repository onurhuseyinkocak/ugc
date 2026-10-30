from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle
from fontTools.ttLib import TTFont as VariableFont
from fontTools.varLib.instancer import instantiateVariableFont
from io import BytesIO

ROOT = Path(__file__).resolve().parent.parent
for name, weight in [('Manrope',500),('ManropeStrong',650)]:
    font=VariableFont(str(ROOT / 'assets/fonts/manrope-variable.ttf'))
    instance=instantiateVariableFont(font,{'wght':weight},inplace=True)
    data=BytesIO();instance.save(data);data.seek(0)
    pdfmetrics.registerFont(TTFont(name,data))
target = ROOT / 'Onur_Huseyin_Kocak_UGC_Rate_Card_2026.pdf'
c = canvas.Canvas(str(target), pagesize=A4)
c.setTitle('Onur Hüseyin Koçak — Tech UGC rates and usage rights')
c.setAuthor('Onur Hüseyin Koçak')
width, height = A4
paper, ink, muted, green = map(HexColor, ['#f2f0ea','#18201c','#5b645d','#184e3e'])
c.setFillColor(paper); c.rect(0, 0, width, height, fill=1, stroke=0)
def text(x, y, value, size=11, color=ink):
    c.setFillColor(color); c.setFont('ManropeStrong' if size>=14 else 'Manrope', size); c.drawString(x, y, value)
def paragraph(value, y, size=9.3, color=muted):
    p = Paragraph(value, ParagraphStyle('body', fontName='Manrope', fontSize=size, leading=size*1.55, textColor=color))
    _, h = p.wrap(width-84, 500); p.drawOn(c,42,y-h); return y-h

text(42,height-47,'ONUR HÜSEYİN KOÇAK',20)
text(42,height-71,'TECH UGC  /  VIDEO + CAROUSEL  /  TURKISH + ENGLISH',9,green)
text(42,height-95,'Brand collaborations · USD base rates · Updated 30 October 2026',9,muted)
y=height-139
for title,price,description in [
    ('Video','$300','One vertical product video: concept, explanation and edit.'),
    ('Carousel slide','$100','One sponsored slide in a relevant editorial carousel.'),
    ('Dedicated carousel','$200','One product-focused carousel; slide count agreed in the brief.')]:
    c.setStrokeColor(HexColor('#c9cec5'));c.line(42,y+18,width-42,y+18)
    text(42,y-4,title,14);text(width-116,y-4,price,20)
    text(42,y-26,description,9,muted);y-=76

y-=9;text(42,y,'Scope and usage rights',15,green);y-=15
terms=[
    'Duration, slide count, language, revision scope, delivery date and publication channel are agreed in the written brief.',
    '<b>Paid use is separate:</b> ads, boosting, whitelisting / Partnership Ads, Spark Ads and dark posts are not included.',
    'Brand-account reposts, website use, raw files, extra edits, exclusivity and extended usage require a separate written quote.',
    'Ownership is retained. A licence identifies the asset, platforms, countries, term and permitted edits. No perpetual, transferable or unlimited buyout is included.',
    'AI training, voice cloning, synthetic likeness and sublicensing are excluded unless separately agreed in writing.',
    'Production, payment and tax / invoicing terms are confirmed in writing. Usage starts only under the written agreement and agreed payment terms.',
    'Sponsored content is disclosed. Views, sales, rankings and conversions are not guaranteed.'
]
for value in terms:y=paragraph('• '+value,y)-9
assert y>90, 'Rate card content would overflow'
c.setStrokeColor(HexColor('#c9cec5'));c.line(42,82,width-42,82)
text(42,60,'info@vibecodingturkey.com',11,green)
c.linkURL('mailto:info@vibecodingturkey.com',(42,56,290,75),relative=0)
text(42,39,'ugc-onur.vibecodingturkey.com  ·  @onurhuseyinkocak.ai',9,muted)
c.linkURL('https://ugc-onur.vibecodingturkey.com/#rates',(42,30,width-42,52),relative=0)
c.save()
print(f'Updated {target.name}')
