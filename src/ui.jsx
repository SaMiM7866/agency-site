import { useContext, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ParticleContext } from './ParticleContext.js'

// Section that switches the particle shape when it is in the middle of the screen
export function Sec({ id, shape = 'scatter', cx = 0, scale = 0.4, cls = 'col', children }) {
  const ref = useRef(null)
  const set = useContext(ParticleContext)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) set({ shape, cx, scale }) }, { rootMargin: '-50% 0px -50% 0px' })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [shape, cx, scale, set])
  return <section id={id} ref={ref} className={cls}>{children}</section>
}

export const Lines = ({ t }) => t.split('\n').map((x, i, a) => <span key={i}>{x}{i < a.length - 1 && <br />}</span>)

export const Btn = ({ to, href, ghost, children }) => {
  const c = 'btn' + (ghost ? ' ghost' : '')
  return href ? <a className={c} href={href}>{children}</a> : <Link className={c} to={to}>{children}</Link>
}

export const Head = ({ eyebrow, title, text, big }) => (
  <div className="head">
    {eyebrow && <div className="eyebrow">{eyebrow}</div>}
    <h2 className={big ? 'big' : ''}><Lines t={title} /></h2>
    {text && <p>{text}</p>}
  </div>
)

export const Cards = ({ items }) => (
  <div className="grid">
    {items.map((c, i) => (
      <div className={'card2' + (c.hot ? ' hot' : '')} key={i}>
        {c.num && <div className="num">{c.num}</div>}
        <h3>{c.title}</h3>
        {c.sub && <p className="sub">{c.sub}</p>}
        {c.text && <p>{c.text}</p>}
        {c.list && <ul>{c.list.map((l) => <li key={l}>{l}</li>)}</ul>}
      </div>
    ))}
  </div>
)

export const Cta = () => (
  <Sec id="cta" shape="swirl" scale={0.32}>
    <Head big title={'Your Brand Has Potential.\nLet’s Make People Notice It.'}
      text="Whether you're starting from zero or looking to scale an existing brand, we're ready to build something worth following." />
    <Btn to="/contact">Let’s Work Together</Btn>
  </Sec>
)
