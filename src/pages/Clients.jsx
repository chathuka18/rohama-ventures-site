import PageHero from '../components/PageHero'
import CTA from '../components/CTA'
import { clients, siteImages } from '../data/content'

const audienceImages = [siteImages.connectedCity, siteImages.boardroomTeam, siteImages.homeHero]

export default function Clients() {
  return (
    <>
      <PageHero eyebrow="Clients" title="Advisory support for the people making consequential decisions." body="We serve entrepreneurs, corporate organisations, investors, buyers and sellers, financial institutions, family-owned businesses and SMEs." image={siteImages.connectedCity} />
      <section className="bg-white py-20">
        <div className="container-shell grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((c, i) => <div key={c[0]} className="overflow-hidden rounded-[2rem] border border-navy-900/10 bg-mist"><img src={audienceImages[i % audienceImages.length]} alt={c[0]} className="h-48 w-full object-cover" /><div className="p-7"><div className="font-display text-4xl text-gold-500">0{i + 1}</div><h2 className="mt-6 text-lg font-semibold">{c[0]}</h2><p className="mt-3 text-sm leading-7 text-navy-900/55">{c[1]}</p></div></div>)}</div>
      </section>
      <CTA />
    </>
  )
}
