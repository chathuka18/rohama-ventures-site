import { Navigate, Link, useParams } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { services } from '../data/content'
import PageHero from '../components/PageHero'
import CTA from '../components/CTA'

const serviceVisuals = {
  'transaction-advisory': '/images/boardroom.png',
  'restructuring-turnaround': '/images/financial-dashboard.png',
  'financial-management-reporting': '/images/financial-dashboard.png',
  'corporate-finance-planning': '/images/strategy-meeting.png',
  'strategic-business-advisory': '/images/strategy-meeting.png',
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const s = services.find((x) => x.slug === slug)
  if (!s) return <Navigate to="/services" replace />

  return (
    <>
      <PageHero eyebrow={`Service ${s.number} · ${s.accent}`} title={s.title} body={s.intro} />
      <section className="bg-white py-20">
        <div className="container-shell grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-[2rem] border border-navy-900/10 bg-mist shadow-soft">
              <img src={serviceVisuals[s.slug]} alt={s.title} className="h-[270px] w-full object-cover" />
            </div>
            <div className="mt-7 eyebrow">Capabilities</div>
            <h2 className="mt-4 font-display text-4xl">Focused expertise for complex decisions.</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-navy-900/60">
              We begin by understanding your business, objectives and available information before
              developing practical recommendations grounded in financial and commercial analysis.
            </p>
          </div>
          <div className="space-y-4">
            {s.details.map((x, i) => (
              <div key={x.title} className="rounded-3xl border border-navy-900/10 bg-mist p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-900 text-white">
                    <Check size={15} />
                  </div>
                  <div>
                    <div className="text-xs text-gold-500">0{i + 1}</div>
                    <h3 className="mt-1 text-xl font-semibold">{x.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-navy-900/60">{x.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-mist py-20">
        <div className="container-shell">
          <div className="grid gap-6 lg:grid-cols-3">
            <Info t="Independent analysis" b="Objective recommendations based on facts, analysis and the client’s best interests." />
            <Info t="Commercial perspective" b="Financial expertise combined with an understanding of commercial realities." />
            <Info t="Implementation focus" b="Advice designed to be practical, understandable and implementable." />
          </div>
          <div className="mt-10">
            <Link to="/our-approach" className="inline-flex items-center gap-2 text-sm font-semibold">
              See how we work <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
      <CTA />
    </>
  )
}

function Info({ t, b }) {
  return (
    <div className="rounded-3xl bg-white p-7 shadow-soft">
      <h3 className="text-lg font-semibold">{t}</h3>
      <p className="mt-3 text-sm leading-7 text-navy-900/55">{b}</p>
    </div>
  )
}
