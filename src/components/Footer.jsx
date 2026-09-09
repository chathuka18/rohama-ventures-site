import { Link } from 'react-router-dom'
import { Linkedin, Facebook, Instagram, Mail, Phone } from 'lucide-react'
import Logo from './Logo'
import { services, company, socialLinks } from '../data/content'

const icons = { LinkedIn: Linkedin, Facebook, Instagram }

export default function Footer(){
  return <footer className="bg-navy-950 text-white">
    <div className="container-shell py-16 lg:py-20">
      <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.25fr_.8fr_1.2fr_1fr]">
        <div><Logo inverted/><p className="mt-6 max-w-sm text-sm leading-7 text-white/55">Independent, practical and results-oriented business and financial advisory for businesses, entrepreneurs, investors and organisations.</p><p className="mt-6 text-xs uppercase tracking-[.25em] text-gold-400">{company.tagline}</p><div className="mt-6 flex gap-2">{socialLinks.map(({label,href})=>{const Icon=icons[label]; return href ? <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition hover:border-gold-400 hover:text-gold-400"><Icon size={17}/></a> : <span key={label} title={`${label} URL can be added in src/data/content.js`} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/30"><Icon size={17}/></span>})}</div></div>
        <div><div className="text-sm font-semibold">Company</div><div className="mt-5 space-y-3 text-sm text-white/55"><Link className="block hover:text-white" to="/about">About</Link><Link className="block hover:text-white" to="/our-approach">Our Approach</Link><Link className="block hover:text-white" to="/clients">Clients</Link><Link className="block hover:text-white" to="/insights">Insights</Link><Link className="block hover:text-white" to="/faq">FAQ</Link></div></div>
        <div><div className="text-sm font-semibold">Services</div><div className="mt-5 space-y-3 text-sm text-white/55">{services.map(s=><Link className="block hover:text-white" key={s.slug} to={`/services/${s.slug}`}>{s.title}</Link>)}</div></div>
        <div><div className="text-sm font-semibold">Contact</div><div className="mt-5 space-y-4 text-sm leading-6 text-white/55"><p>{company.addressLines.map((line,i)=><span key={line}>{line}{i<company.addressLines.length-1 && <br/>}</span>)}</p><a className="flex items-center gap-2 hover:text-white" href={`mailto:${company.email}`}><Mail size={15}/>{company.email}</a><a className="flex items-center gap-2 hover:text-white" href={`tel:${company.phoneHref}`}><Phone size={15}/>{company.phoneDisplay}</a><p>Reg. No. {company.registration}</p><Link className="inline-block text-gold-400 hover:text-gold-300" to="/contact">Start a conversation →</Link></div></div>
      </div>
      <div className="flex flex-col gap-3 pt-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} ROHAMA Ventures (Private) Limited.</span><span>Business & Financial Advisory · Colombo, Sri Lanka</span></div>
    </div>
  </footer>
}
