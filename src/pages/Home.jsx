import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Building2, Mail, MapPin, Phone } from 'lucide-react'
import CTA from '../components/CTA'
import { services, process, company } from '../data/content'

const visualCards = [
  {
    title: 'Independent advisory',
    text: 'Business and financial advice grounded in analysis, strategy and real commercial insight.',
    image: '/images/boardroom.png',
  },
  {
    title: 'Structured decision support',
    text: 'From reporting and valuation to planning and restructuring, we help you move with confidence.',
    image: '/images/financial-dashboard.png',
  },
  {
    title: 'Implementation-focused approach',
    text: 'We stay focused on practical outcomes, not just recommendations on paper.',
    image: '/images/strategy-meeting.png',
  },
]

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#F7F9FC]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,165,104,.16),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(11,32,55,.08),transparent_28%)]" />
        <div className="absolute inset-0 grid-fade opacity-40" />

        <div className="container-shell relative grid min-h-[760px] items-center gap-12 py-16 lg:grid-cols-[1.02fr_.98fr] lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="eyebrow">{company.tagline}</div>
            <h1 className="mt-6 max-w-5xl font-display text-[46px] leading-[.98] tracking-[-.04em] text-navy-900 sm:text-6xl lg:text-[76px]">
              Better decisions. Stronger businesses. Sustainable value.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-navy-900/65">
              ROHAMA Ventures helps business owners, investors and organisations navigate complex
              financial and strategic decisions through independent analysis, experienced advisory
              support and practical business solutions.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white"
              >
                Discuss your challenge <ArrowUpRight size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-navy-900/15 bg-white px-6 py-3.5 text-sm font-semibold text-navy-900"
              >
                Explore services <ArrowRight size={16} />
              </Link>
            </div>
            <div className="mt-12 grid gap-3 sm:grid-cols-3">
              <QuickContact icon={<Building2 size={18} />} label="Company" value={company.name} />
              <QuickContact
                icon={<Mail size={18} />}
                label="Email"
                value={company.email}
                href={`mailto:${company.email}`}
              />
              <QuickContact
                icon={<Phone size={18} />}
                label="Telephone"
                value={company.phoneDisplay}
                href={`tel:${company.phoneHref}`}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/40 p-3 shadow-[0_30px_80px_rgba(11,32,55,.18)] backdrop-blur-xl">
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <motion.img
                  src="/images/colombo-hero.png"
                  alt="Colombo skyline with Lotus Tower"
                  className="hero-image h-[300px] w-full object-cover sm:h-[420px] lg:h-[560px]"
                  initial={{ scale: 1.06 }}
                  animate={{ scale: 1.12 }}
                  transition={{ duration: 16, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,20,33,.08),rgba(7,20,33,.52))]" />
                <div className="absolute left-5 top-5 rounded-full border border-white/25 bg-black/15 px-4 py-2 text-[10px] uppercase tracking-[.26em] text-white backdrop-blur-md">
                  Colombo · Sri Lanka
                </div>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute left-5 bottom-5 max-w-[240px] rounded-2xl border border-white/15 bg-white/12 p-4 text-white backdrop-blur-xl"
                >
                  <div className="text-xs uppercase tracking-[.18em] text-gold-300">Insight · Analysis</div>
                  <div className="mt-2 text-lg font-semibold">Advisory rooted in Colombo.</div>
                  <p className="mt-2 text-sm leading-6 text-white/75">
                    The right place to grow your business with practical and independent support.
                  </p>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute right-5 top-5 hidden w-[190px] rounded-2xl border border-white/15 bg-white/85 p-4 text-navy-900 shadow-soft backdrop-blur-xl sm:block"
                >
                  <div className="text-xs uppercase tracking-[.16em] text-gold-500">What we deliver</div>
                  <div className="mt-3 space-y-2 text-sm font-medium">
                    <div>• Financial reporting</div>
                    <div>• Strategic planning</div>
                    <div>• Valuation & due diligence</div>
                    <div>• Restructuring support</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <div className="eyebrow">Who we are</div>
              <h2 className="mt-5 font-display text-4xl leading-tight text-navy-900 sm:text-5xl">
                A trusted partner for business & financial advisory.
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              <Stat n="01" t="Structured Methodology" b="A defined seven-stage process for every assignment." />
              <Stat n="02" t="Experienced Resource Network" b="Professionals with strong finance and advisory credentials." />
              <Stat n="03" t="Broad Deliverable Range" b="From due diligence reports to financial models and board packs." />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mist py-20 lg:py-28">
        <div className="container-shell">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="eyebrow">What we do</div>
              <h2 className="mt-4 font-display text-4xl text-navy-900 sm:text-5xl">
                Five pillars. One advisory relationship.
              </h2>
            </div>
            <Link to="/services" className="text-sm font-semibold text-navy-900">
              View all services →
            </Link>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-5">
            {services.map((s) => (
              <motion.div whileHover={{ y: -7 }} transition={{ type: 'spring', stiffness: 220 }} key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  className="group flex min-h-[340px] flex-col rounded-[1.6rem] bg-navy-900 p-6 text-white shadow-soft"
                >
                  <div className="font-display text-4xl text-gold-400">{s.number}</div>
                  <div className="mt-auto">
                    <div className="text-lg font-semibold leading-snug">{s.title}</div>
                    <p className="mt-3 text-sm leading-6 text-white/50">{s.short}</p>
                    <div className="mt-5 inline-flex items-center gap-2 text-xs text-gold-400">
                      Explore <ArrowUpRight size={14} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-shell">
          <div className="grid items-center gap-6 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <div className="eyebrow">Visual insight</div>
              <h2 className="mt-4 font-display text-4xl leading-tight text-navy-900 sm:text-5xl">
                Advisory built around real business challenges.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-navy-900/60">
                From management reporting to strategy and financial decision-making, ROHAMA Ventures
                combines numbers with commercial context so leaders can act with clarity.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {visualCards.map((card, idx) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="overflow-hidden rounded-[1.7rem] border border-navy-900/10 bg-mist shadow-soft"
                >
                  <img src={card.image} alt={card.title} className="h-48 w-full object-cover" />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-navy-900">{card.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-navy-900/58">{card.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-shell">
          <div className="grid items-start gap-12 lg:grid-cols-[.85fr_1.15fr]">
            <div className="lg:sticky lg:top-28">
              <div className="eyebrow">Our philosophy</div>
              <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
                Good decisions need more than good numbers.
              </h2>
              <p className="mt-6 max-w-lg text-base leading-8 text-navy-900/60">
                We combine financial analysis, commercial evaluation, strategic thinking and practical
                implementation in every assignment.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                'Where does the business currently stand?',
                'Why are financial and operational results changing?',
                'What risks may affect the business?',
                'What opportunities are available?',
                'What is the business worth?',
                'How should capital be deployed?',
                'Does an acquisition or investment make commercial sense?',
                'How should debt and financing be structured?',
              ].map((q, i) => (
                <div key={q} className="rounded-2xl border border-navy-900/10 bg-mist p-5">
                  <span className="text-xs text-gold-500">0{i + 1}</span>
                  <p className="mt-3 text-sm font-medium leading-6 text-navy-900">{q}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-navy-950 py-20 text-white lg:py-28">
        <div className="container-shell">
          <div className="eyebrow">Our approach</div>
          <div className="mt-4 grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">
              A structured, seven-stage engagement methodology.
            </h2>
            <p className="max-w-xl text-base leading-8 text-white/55">
              Every engagement follows a transparent path while keeping recommendations grounded in a
              clear understanding of the business.
            </p>
          </div>
          <div className="mt-14 overflow-x-auto pb-2">
            <div className="grid min-w-[980px] grid-cols-7">
              {process.map((p) => (
                <div className="relative border-t border-white/15 pt-7 pr-5" key={p.title}>
                  <span className="absolute -top-[5px] left-0 h-2.5 w-2.5 rounded-full bg-gold-400" />
                  <div className="font-display text-3xl text-gold-400">{p.number}</div>
                  <div className="mt-3 font-semibold">{p.title}</div>
                  <p className="mt-2 text-xs leading-5 text-white/45">{p.summary}</p>
                </div>
              ))}
            </div>
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
                <p className="mt-4 text-sm leading-7 text-navy-900/55">
                  Start with a free, no-obligation conversation about the business decision or challenge
                  in front of you.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-4">
                <ContactItem icon={<MapPin size={18} />} label="Address" value="Pelawatta, Sri Lanka" />
                <ContactItem icon={<Mail size={18} />} label="Email" value={company.email} href={`mailto:${company.email}`} />
                <ContactItem icon={<Phone size={18} />} label="Telephone" value={company.phoneDisplay} href={`tel:${company.phoneHref}`} />
                <ContactItem icon={<Building2 size={18} />} label="Office" value="Colombo" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  )
}

function Stat({ n, t, b }) {
  return (
    <div className="rounded-3xl border border-navy-900/10 bg-mist p-6">
      <div className="font-display text-3xl text-gold-500">{n}</div>
      <h3 className="mt-8 font-semibold text-navy-900">{t}</h3>
      <p className="mt-3 text-sm leading-6 text-navy-900/55">{b}</p>
    </div>
  )
}

function QuickContact({ icon, label, value, href }) {
  const Component = href ? 'a' : 'div'
  return (
    <Component href={href} className="rounded-2xl border border-navy-900/10 bg-white/90 p-4 shadow-sm backdrop-blur-xl">
      <div className="text-gold-500">{icon}</div>
      <div className="mt-3 text-[10px] uppercase tracking-[.18em] text-navy-900/42">{label}</div>
      <div className="mt-1 text-sm font-semibold leading-6 text-navy-900">{value}</div>
    </Component>
  )
}

function ContactItem({ icon, label, value, href }) {
  const C = href ? 'a' : 'div'
  return (
    <C href={href} className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-0.5">
      <div className="text-gold-500">{icon}</div>
      <div className="mt-4 text-xs uppercase tracking-[.16em] text-navy-900/40">{label}</div>
      <div className="mt-2 break-words text-sm font-semibold text-navy-900">{value}</div>
    </C>
  )
}
