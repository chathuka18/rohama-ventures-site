import CTA from '../components/CTA'
import PageHero from '../components/PageHero'
import { values } from '../data/content'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About ROHAMA Ventures"
        title="Independent advice. Practical solutions. Measurable value."
        body="ROHAMA Ventures is a professional business consultancy and advisory firm supporting businesses, entrepreneurs, investors and organisations with practical, independent and results-oriented advice."
      />

      <section className="bg-white py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div>
            <div className="eyebrow">Our vision</div>
            <h2 className="mt-4 font-display text-4xl leading-tight">To be a trusted and respected business advisory partner.</h2>
            <p className="mt-6 text-base leading-8 text-navy-900/60">
              Enabling organisations and entrepreneurs to make better decisions, unlock value and
              achieve sustainable growth.
            </p>
            <div className="mt-8 rounded-[2rem] bg-navy-900 p-8 text-white lg:p-10">
              <div className="eyebrow">Our mission</div>
              <p className="mt-5 font-display text-3xl leading-snug">
                To provide high-quality, independent and practical business and financial advisory services.
              </p>
              <p className="mt-5 text-sm leading-7 text-white/55">
                By combining professional expertise, analytical thinking and real-world business experience.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-navy-900/10 bg-mist shadow-soft">
            <img src="/images/boardroom.png" alt="Professional advisory boardroom meeting" className="h-[470px] w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-mist py-20">
        <div className="container-shell">
          <div className="eyebrow">Our core values</div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">The principles behind every engagement.</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v[1]} className="rounded-3xl bg-white p-6 shadow-soft">
                <div className="font-display text-3xl text-gold-500">{v[0]}</div>
                <h3 className="mt-8 font-semibold">{v[1]}</h3>
                <p className="mt-3 text-sm leading-6 text-navy-900/55">{v[2]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <div className="eyebrow">Our people</div>
            <h2 className="mt-4 font-display text-4xl leading-tight">A network of experienced advisory professionals.</h2>
            <p className="mt-6 text-base leading-8 text-navy-900/60">
              ROHAMA Ventures is supported by experienced resource persons with strong professional
              qualifications and practical exposure in finance, accounting, business analysis,
              corporate transactions, restructuring and management advisory.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <img src="/images/strategy-meeting.png" alt="Strategy planning meeting" className="h-64 w-full rounded-[1.7rem] object-cover shadow-soft" />
            <div className="rounded-[1.7rem] border border-navy-900/10 bg-mist p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-navy-900">Areas of expertise</h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  'Financial Reporting',
                  'Financial Analysis',
                  'Corporate Finance',
                  'Business Valuation',
                  'Due Diligence',
                  'Financial Modelling',
                  'Debt Restructuring',
                  'Business Turnaround',
                  'Investment Appraisal',
                  'Transaction Advisory',
                  'Management Reporting',
                  'Strategic Planning',
                ].map((x) => (
                  <span key={x} className="rounded-full border border-navy-900/10 bg-white px-4 py-2 text-sm">
                    {x}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  )
}
