import { Link } from 'react-router-dom'
import Logo from './Logo'
import { services } from '../data/content'

export default function Footer(){
  return <footer className="bg-navy-950 text-white">
    <div className="container-shell py-16 lg:py-20">
      <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div><Logo inverted/><p className="mt-6 max-w-sm text-sm leading-7 text-white/55">Independent, practical and results-oriented business and financial advisory for businesses, entrepreneurs, investors and organisations.</p><p className="mt-6 text-xs uppercase tracking-[.25em] text-gold-400">Insight · Analysis · Strategy · Value</p></div>
        <div><div className="text-sm font-semibold">Company</div><div className="mt-5 space-y-3 text-sm text-white/55"><Link className="block hover:text-white" to="/about">About</Link><Link className="block hover:text-white" to="/our-approach">Our Approach</Link><Link className="block hover:text-white" to="/clients">Clients</Link><Link className="block hover:text-white" to="/insights">Insights</Link></div></div>
        <div><div className="text-sm font-semibold">Services</div><div className="mt-5 space-y-3 text-sm text-white/55">{services.slice(0,4).map(s=><Link className="block hover:text-white" key={s.slug} to={`/services/${s.slug}`}>{s.title}</Link>)}</div></div>
        <div><div className="text-sm font-semibold">Contact</div><div className="mt-5 space-y-3 text-sm leading-6 text-white/55"><p>No. 9/12, Jayanthi Mawatha,<br/>Wijithapura, Pelawatta,<br/>Sri Lanka</p><p>Reg. No. PV 00366134</p><Link className="inline-block text-gold-400 hover:text-gold-300" to="/contact">Start a conversation →</Link></div></div>
      </div>
      <div className="flex flex-col gap-3 pt-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} ROHAMA Ventures (Private) Limited.</span><span>Business & Financial Advisory · Colombo, Sri Lanka</span></div>
    </div>
  </footer>
}
