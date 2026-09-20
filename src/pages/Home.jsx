import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react'
import CTA from '../components/CTA'
import { services, process, company, siteImages, serviceImages } from '../data/content'

const showcases = [
  {
    title: 'Sharper business insight',
    body: 'Turn reporting, analysis and strategic evaluation into clearer executive decisions.',
    image: siteImages.growthGlobe,
  },
  {
    title: 'Collaborative advisory support',
    body: 'Work alongside experienced professionals who translate complexity into action.',
    image: siteImages.teamCollaboration,
  },
  {
    title: 'Implementation with momentum',
    body: 'Move from ideas and plans toward measurable progress and stronger outcomes.',
    image: siteImages.glassBoard,
  },
]

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#F7F9FC] py-16 lg:py-20">
        <div className="absolute inset-0 bg-radial-soft" />
        <div className="absolute inset-0 grid-fade opacity-40" />
        <div className="container-shell relative grid items-center gap-10 lg:grid-cols-[.92fr_1.08fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
            <div className="eyebrow">{company.tagline}</div>
            <h1 className="mt-6 max-w-5xl font-display text-[46px] leading-[.98] tracking-[-.04em] text-navy-900 sm:text-6xl lg:text-[76px]">Better decisions. Stronger businesses. Sustainable value.</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-navy-900/65">ROHAMA Ventures combines financial expertise, commercial insight, analytical capability and practical business experience to help clients navigate complex decisions with confidence.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white">Discuss your challenge <ArrowUpRight size={16} /></Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-navy-900/15 bg-white px-6 py-3.5 text-sm font-semibold text-navy-900">Explore services <ArrowRight size={16} /></Link>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                ['Independent advice', 'Objective and commercially grounded.'],
                ['Practical execution', 'Advice designed to be implemented.'],
                ['Sustainable growth', 'Focus on long-term value creation.'],
              ].map(([title, body]) => (
                <div key={title} className="rounded-2xl border border-navy-900/10 bg-white/80 p-4 backdrop-blur">
                  <div className="text-sm font-semibold text-navy-900">{title}</div>
                  <div className="mt-2 text-sm leading-6 text-navy-900/55">{body}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .1 }} className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-navy-900/10 bg-white p-3 shadow-soft sm:p-4">
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <img src={siteImages.homeHero} alt="ROHAMA Ventures business advisory scene" className="h-[340px] w-full object-cover sm:h-[460px] lg:h-[560px]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,20,33,.08),rgba(7,20,33,.38))]" />
                <div className="absolute left-5 top-5 rounded-full border border-white/25 bg-white/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[.22em] text-white backdrop-blur">Business & Financial Advisory</div>
                <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/20 bg-white/14 p-4 text-white backdrop-blur-xl">
                    <div className="text-[11px] uppercase tracking-[.18em] text-white/65">Focused outcomes</div>
                    <div className="mt-2 text-xl font-semibold">Strategy, reporting, valuation, growth.</div>
                  </div>
                  <div className="rounded-2xl border border-white/20 bg-[#071421]/55 p-4 text-white backdrop-blur-xl">
                    <div className="text-[11px] uppercase tracking-[.18em] text-gold-300">Decision support</div>
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm text-white/80">
                      <span>Transactions</span><span>Restructuring</span><span>Planning</span><span>Performance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-3 rounded-2xl bg-navy-900 px-5 py-4 text-white shadow-soft sm:-left-6">
              <div className="text-[11px] uppercase tracking-[.18em] text-gold-300">ROHAMA</div>
              <div className="mt-1 text-sm">Premium advisory presentation powered by your uploaded brand visuals.</div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-shell">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="eyebrow">Brand showcase</div>
              <h2 className="mt-4 font-display text-4xl text-navy-900 sm:text-5xl">Premium visuals placed where they matter most.</h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-navy-900/60">Your uploaded images now shape the homepage experience and reinforce ROHAMA’s positioning across strategy, finance, growth and executive advisory.</p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {showcases.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: i * .06 }} className="overflow-hidden rounded-[2rem] border border-navy-900/10 bg-mist shadow-soft">
                <img src={item.image} alt={item.title} className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="text-xs uppercase tracking-[.18em] text-gold-500">0{i + 1}</div>
                  <h3 className="mt-3 text-xl font-semibold text-navy-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-navy-900/55">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-20 lg:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <div className="eyebrow">What we do</div>
              <h2 className="mt-4 font-display text-4xl text-navy-900 sm:text-5xl">Five pillars. One advisory relationship.</h2>
              <p className="mt-5 max-w-lg text-base leading-8 text-navy-900/60">From transactions through restructuring, reporting, planning and strategy, each service now has stronger visual storytelling using your supplied imagery.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
              {services.map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}`} className="group overflow-hidden rounded-[1.8rem] border border-navy-900/10 bg-white shadow-soft transition hover:-translate-y-1">
                  <div className="relative h-40 overflow-hidden">
                    <img src={serviceImages[s.slug]} alt={s.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,20,33,.10),rgba(7,20,33,.55))]" />
                    <div className="absolute left-4 top-4 font-display text-4xl text-gold-300">{s.number}</div>
                  </div>
                  <div className="p-5">
                    <div className="text-lg font-semibold leading-snug text-navy-900">{s.title}</div>
                    <p className="mt-3 text-sm leading-6 text-navy-900/55">{s.short}</p>
                    <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.14em] text-gold-500">Explore <ArrowUpRight size={14} /></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-[.92fr_1.08fr]">
          <div>
            <div className="eyebrow">Our approach</div>
            <h2 className="mt-5 font-display text-4xl leading-tight text-navy-900 sm:text-5xl">A structured, seven-stage engagement methodology.</h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-navy-900/60">Every engagement follows a transparent path while keeping recommendations grounded in a clear understanding of the business.</p>
            <div className="mt-8 space-y-4">
              {process.slice(0, 4).map((p) => (
                <div key={p.title} className="flex items-start gap-4 rounded-2xl border border-navy-900/10 bg-mist p-4">
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-900 text-sm font-semibold text-white">{p.number}</div>
                  <div>
                    <div className="font-semibold text-navy-900">{p.title}</div>
                    <div className="mt-1 text-sm leading-6 text-navy-900/55">{p.summary}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/our-approach" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy-900">See the full methodology <ArrowRight size={15} /></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <img src={siteImages.ideaPlanGrow} alt="Structured approach" className="h-64 w-full rounded-[1.8rem] object-cover shadow-soft sm:h-full" />
            <div className="grid gap-4">
              <img src={siteImages.planExecuteGrow} alt="Plan execute grow" className="h-56 w-full rounded-[1.8rem] object-cover shadow-soft" />
              <img src={siteImages.executiveDesk} alt="Executive desk" className="h-56 w-full rounded-[1.8rem] object-cover shadow-soft" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-20 text-white lg:py-28">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <div className="eyebrow">Why ROHAMA</div>
            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">Good decisions need more than good numbers.</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/60">We combine financial analysis, commercial evaluation, strategic thinking and practical implementation in every assignment.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                'Independent analysis grounded in evidence.',
                'Commercial insight shaped by practical business experience.',
                'Clear communication with management and stakeholders.',
                'Action-focused support beyond the final report.',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[.04] p-4">
                  <CheckCircle2 size={18} className="mt-0.5 text-gold-400" />
                  <p className="text-sm leading-7 text-white/72">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.04] shadow-soft">
            <img src={siteImages.disciplineToday} alt="ROHAMA workspace" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-shell">
          <div className="rounded-[2rem] border border-navy-900/10 bg-mist p-7 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <div className="eyebrow">Contact</div>
                <h2 className="mt-4 font-display text-4xl text-navy-900">Talk to ROHAMA Ventures.</h2>
                <p className="mt-4 text-sm leading-7 text-navy-900/55">Start with a free, no-obligation conversation about the business decision or challenge in front of you.</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <ContactItem icon={<MapPin size={18} />} label="Colombo, Sri Lanka" value="Pelawatta" />
                <ContactItem icon={<Mail size={18} />} label="Email" value={company.email} href={`mailto:${company.email}`} />
                <ContactItem icon={<Phone size={18} />} label="Telephone" value={company.phoneDisplay} href={`tel:${company.phoneHref}`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}

function ContactItem({ icon, label, value, href }) {
  const C = href ? 'a' : 'div'
  return <C href={href} className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-0.5"><div className="text-gold-500">{icon}</div><div className="mt-4 text-xs uppercase tracking-[.16em] text-navy-900/40">{label}</div><div className="mt-2 break-words text-sm font-semibold text-navy-900">{value}</div></C>
}
