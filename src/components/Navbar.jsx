import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react'
import Logo from './Logo'
import { services } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [mega, setMega] = useState(false)
  const navClass = ({isActive}) => `text-sm transition ${isActive ? 'text-gold-500' : 'text-navy-900/70 hover:text-navy-900'}`
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-navy-900/5 bg-[#F7F9FC]/90 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-7 xl:flex">
          <NavLink className={navClass} to="/about">About</NavLink>
          <div className="relative" onMouseEnter={()=>setMega(true)} onMouseLeave={()=>setMega(false)}>
            <button className="flex items-center gap-1 py-7 text-sm text-navy-900/70 hover:text-navy-900">Services <ChevronDown size={14}/></button>
            {mega && (
              <div className="absolute left-1/2 top-[72px] w-[760px] -translate-x-1/2 rounded-3xl border border-navy-900/10 bg-white p-7 shadow-soft">
                <div className="mb-5 flex items-center justify-between"><span className="eyebrow">Our Services</span><Link onClick={()=>setMega(false)} className="text-sm font-medium text-navy-900" to="/services">View all services →</Link></div>
                <div className="grid grid-cols-2 gap-3">
                  {services.map(s=><Link onClick={()=>setMega(false)} key={s.slug} to={`/services/${s.slug}`} className="group rounded-2xl bg-mist p-4 transition hover:-translate-y-0.5 hover:bg-navy-900 hover:text-white"><div className="text-xs text-gold-500">{s.number}</div><div className="mt-2 font-medium">{s.title}</div><div className="mt-1 text-xs opacity-55">{s.short}</div></Link>)}
                </div>
              </div>
            )}
          </div>
          <NavLink className={navClass} to="/our-approach">Our Approach</NavLink>
          <NavLink className={navClass} to="/clients">Clients</NavLink>
          <NavLink className={navClass} to="/insights">Insights</NavLink>
          <NavLink className={navClass} to="/faq">FAQ</NavLink>
        </nav>
        <div className="hidden xl:block"><Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-navy-800">Let's Talk <ArrowUpRight size={15}/></Link></div>
        <button className="xl:hidden" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
      </div>
      {open && <div className="border-t border-navy-900/5 bg-white p-6 xl:hidden"><div className="flex flex-col gap-4 text-base"><Link onClick={()=>setOpen(false)} to="/about">About</Link><Link onClick={()=>setOpen(false)} to="/services">Services</Link><Link onClick={()=>setOpen(false)} to="/our-approach">Our Approach</Link><Link onClick={()=>setOpen(false)} to="/clients">Clients</Link><Link onClick={()=>setOpen(false)} to="/insights">Insights</Link><Link onClick={()=>setOpen(false)} to="/faq">FAQ</Link><Link onClick={()=>setOpen(false)} to="/contact" className="mt-2 rounded-full bg-navy-900 px-5 py-3 text-center text-white">Let's Talk</Link></div></div>}
    </header>
  )
}
