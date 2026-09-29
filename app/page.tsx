import Link from "next/link";
import Navbar from "./components/Navbar";

const cats = [
  ["Weddings","/images/weddings/4O1A5526.jpg","The day, as it felt.","/portfolio/weddings"],
  ["Events","/images/events/events/IMG_2228.JPG","Energy, atmosphere, people.","/portfolio/events"],
  ["Lifestyle","/images/girlsout.JPG","Life, beautifully observed.","/portfolio/lifestyle"],
  ["Studio","/images/studio/4O1A1726.jpg","Clean. Modern. Considered.","/portfolio/studio"],
];

export default function Home(){return <main className="page-shell"><Navbar/>
  <section className="hero">
    <div className="hero-bg" style={{backgroundImage:"url('/images/weddings/4O1A8487.jpg')"}}/>
    <div className="container hero-content">
      <div className="eyebrow">Grace Westray · Photographer</div>
      <h1 className="display hero-title">Photographs with presence.</h1>
      <p className="hero-sub">Manchester wedding, event, lifestyle and studio photography — honest moments, considered portraits and imagery made to last.</p>
      <div className="hero-meta"><span className="line"/><Link className="btn btn-solid" href="/portfolio/weddings">Explore wedding stories</Link><Link className="btn" href="/contact">Check your date ↗</Link></div>
    </div>
    <div className="hero-rail">Scroll to explore</div>
  </section>

  <section className="intro"><div className="container intro-grid"><div><div className="eyebrow">A visual point of view</div><h2 className="display intro-title">Elegant when it matters. Unscripted when it counts.</h2></div><div className="intro-copy"><p>Grace Westray photographs people, celebrations and brands with a fashion-led eye and a calm documentary instinct. The aim is simple: photographs that feel beautiful now and intelligent years from now.</p><div className="intro-stats"><div className="stat"><strong>01</strong><span>Editorial eye</span></div><div className="stat"><strong>02</strong><span>Honest moments</span></div></div><div className="rule"/><Link className="btn" href="/about">Meet Grace ↗</Link></div></div></section>

  <section className="section"><div className="container"><div className="section-head"><div><div className="eyebrow">Selected work</div><h2 className="display section-title">Stories, not just images.</h2></div><Link className="btn" href="/portfolio/weddings">View portfolios ↗</Link></div><div className="editorial"><Link href="/portfolio/weddings" className="media feature"><img src="/images/weddings/IMG_1194.JPG" alt="Bride in an outdoor portrait"/><span className="project-tag">Wedding story · 01</span><div className="media-caption"><span className="eyebrow">Wedding story</span><div className="serif" style={{fontSize:'2rem'}}>Quiet moments. Strong frames.</div></div></Link><div className="stack"><Link href="/portfolio/studio" className="media small"><img src="/images/studio/4O1A0328.jpg" alt="Studio portrait session"/><span className="project-tag">Studio · 02</span></Link><Link href="/portfolio/events" className="media small"><img src="/images/events/events/IMG_0321.JPG" alt="Guests enjoying an event"/><span className="project-tag">Events · 03</span></Link></div></div></div></section>

  <section className="section" style={{paddingTop:40}}><div className="container"><div className="section-head"><div><div className="eyebrow">The collections</div><h2 className="display section-title">Choose your story.</h2></div></div><div className="category-grid">{cats.map(([name,img,sub,href])=><Link className="category-card media" key={href} href={href}><img src={img} alt={name}/><div className="label"><span>{name}</span><h3>{sub}</h3></div><span className="arrow">↗</span></Link>)}</div></div></section>

  <section className="quote"><div className="container"><small>The philosophy</small><p>“The best photographs don't just show what happened. They bring you back to how it felt.”</p><Link className="btn" href="/contact">Let's talk about your story ↗</Link></div></section>
</main>}
