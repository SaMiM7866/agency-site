import { Sec, Head, Cards, Cta } from '../ui.jsx'
import { C } from '../content.js'
import f1 from '../assets/f1.jpg'
import f2 from '../assets/f2.jpg'
import f3 from '../assets/f3.jpg'

const IMG = [f1, f2, f3]

export default function About() {
  return (
    <>
      <Sec id="story" shape="brain" scale={0.4}>
        <Head eyebrow="About us" title={'Three Friends. One Shared Obsession —\nCreating Better Brands.'} />
        <div className="story">
          <p>What started as conversations between three friends turned into a creative company built around one common passion: helping businesses stand out online.</p>
          <p>We believe successful social media isn't about posting every day. It's about understanding people, communicating clearly and creating content that makes them stop, remember and act.</p>
          <p>Today, we bring together strategy, creativity and performance marketing to help businesses build stronger digital brands.</p>
        </div>
      </Sec>
      <Sec id="team">
        <Head eyebrow="The founders" title="Different strengths. One team." />
        <div className="grid team3">
          {C.founders.map((f, i) => (
            <div className="card2 founder" key={i}>
              <img src={IMG[i]} alt={f.name} />
              <h3>{f.name}</h3>
              <p className="sub">{f.role}</p>
            </div>
          ))}
        </div>
      </Sec>
      <Sec id="mvv" shape="bulb" scale={0.4}>
        <Cards items={[
          { title: 'Our Mission', text: 'To make professional, creative and result-driven social media marketing accessible to ambitious businesses.' },
          { title: 'Our Vision', text: 'To become a creative growth partner brands can trust — not simply another agency they hire.' },
          { title: 'Our Values', list: C.values },
        ]} />
      </Sec>
      <Cta />
    </>
  )
}
