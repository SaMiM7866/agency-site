import { Link } from 'react-router-dom'
import { C } from '../content.js'

export default function Footer() {
  return (
    <footer>
      <strong>Turning Ideas Into Brands People Notice.</strong>
      <div className="fl">{C.nav.map((n) => <Link key={n.to} to={n.to}>{n.label}</Link>)}</div>
      <div className="fl">{C.social.map((s) => <a key={s.label} href={s.href}>{s.label}</a>)}</div>
      <span>© 2026 {C.name}. All Rights Reserved.</span>
    </footer>
  )
}
