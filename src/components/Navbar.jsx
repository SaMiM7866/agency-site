import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { C } from '../content.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <nav>
      <Link className="logo" to="/" onClick={close}><i /><span>{C.name}</span></Link>
      <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu">{open ? '✕' : '☰'}</button>
      <div className={'links' + (open ? ' open' : '')}>
        {C.nav.map((n) => (
          <NavLink key={n.to} to={n.to} end={n.to === '/'} onClick={close} className={({ isActive }) => (isActive ? 'on' : '')}>{n.label}</NavLink>
        ))}
        <Link className="btn" to="/contact" onClick={close}>Start your growth</Link>
      </div>
    </nav>
  )
}
