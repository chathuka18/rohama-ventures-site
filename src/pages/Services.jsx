import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import CTA from '../components/CTA'
import { services, serviceImages, siteImages } from '../data/content'

export default function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title="A full-spectrum business & financial advisory platform." body="Our services are organised around five strategic pillars spanning the lifecycle of a business and financial decision — from transaction through restructuring to long-term planning." image={siteImages.turningNumbers} />
      <section className="bg-white py-20">
        <div className="container-shell space-y-5">
          {services.map(s => <Link to={`/services/${s.slug}`} key={s.slug} className="group overflow-hidden rounded-[2rem] border border-navy-900/10 bg-mist transition hover:bg-white hover:shadow-soft"><div className="grid gap-5 sm:grid-cols-[280px_1fr_auto] sm:items-center"><img src={serviceImages[s.slug]} alt={s.title} className="h-full min-h-[220px] w-full object-cover" /><div className="p-6 sm:p-8"><div className="font-display text-5xl text-gold-500">{s.number}</div><h2 className="mt-5 text-xl font-semibold">{s.title}</h2><p className="mt-2 max-w-2xl text-sm leading-6 opacity-55">{s.short}</p><div className="mt-4 flex flex-wrap gap-2">{s.details.map(x => <span className="rounded-full border border-current/15 px-3 py-1.5 text-xs opacity-70" key={x.title}>{x.title}</span>)}</div></div><div className="px-6 pb-6 sm:px-8 sm:pb-0"><div className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900">Explore <ArrowUpRight className="transition group-hover:rotate-45" /></div></div></div></Link>)}
        </div>
      </section>
      <CTA />
    </>
  )
}
