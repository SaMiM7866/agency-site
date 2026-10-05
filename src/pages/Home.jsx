import { Sec, Head, Cards, Btn, Cta } from '../ui.jsx'
import { C } from '../content.js'

export default function Home() {
  return (
    <>
      <Sec id="hero" shape="brain" cx={0.42} scale={0.34} cls="">
        <div className="wide">
          <div className="eyebrow">{C.tagline}</div>
          <h1><span className="grad">We Make Brands</span><br />Impossible to Ignore.</h1>
          <p>Strategy. Content. Creatives. Ads.<br />Everything your brand needs to grow on social media — under one roof.</p>
          <div className="row"><Btn to="/contact">Start Your Growth</Btn><Btn to="/work" ghost>View Our Work</Btn></div>
        </div>
      </Sec>
      <div className="marq"><div className="track2">
        {[1, 2].map((k) => <span key={k}>STRATEGY ✦ CONTENT ✦ DESIGN ✦ REELS ✦ PERFORMANCE ✦ GROWTH ✦&nbsp;</span>)}
      </div></div>
      <Sec id="highlight" shape="globe" scale={0.38}>
        <Head eyebrow="Who we are" title="3 Creative Minds. One Growth-Driven Team."
          text="We started with one simple idea — brands deserve social media that does more than just look good. It should connect, engage and drive business." />
      </Sec>
      <Sec id="what"><Head eyebrow="What we do" title="Everything Your Brand Needs to Stay Ahead." /><Cards items={C.what} /></Sec>
      <Sec id="why">
        <Head eyebrow="Why us" title="Not Just Another Social Media Agency."
          text="We combine creative thinking, strategy and performance marketing to turn social media into a real business asset." />
        <Cards items={C.why} />
      </Sec>
      <Sec id="process"><Head eyebrow="Our process" title="From First Call to Real Growth." /><Cards items={C.process} /></Sec>
      <Sec id="preview" shape="bulb" scale={0.4}>
        <Head eyebrow="Portfolio preview" title="Work That Speaks Before We Do." />
        <div className="chips">{C.chips.map((c) => <span key={c}>{c}</span>)}</div>
        <Btn to="/work">Explore Our Work</Btn>
      </Sec>
      <Cta />
    </>
  )
}
