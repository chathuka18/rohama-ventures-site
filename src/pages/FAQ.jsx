import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import PageHero from '../components/PageHero'
import CTA from '../components/CTA'
import { faqs } from '../data/content'

export default function FAQ(){
  const [open,setOpen]=useState(0)
  return <>
    <PageHero eyebrow="FAQ" title="Clear answers before we get started." body="A practical overview of how ROHAMA Ventures works, the clients we support and what to expect from an engagement."/>
    <section className="bg-white py-20 lg:py-24"><div className="container-shell max-w-5xl">
      <div className="space-y-3">{faqs.map(([q,a],i)=>{
        const active=open===i
        return <div key={q} className="overflow-hidden rounded-2xl border border-navy-900/10 bg-mist">
          <button onClick={()=>setOpen(active?null:i)} className="flex w-full items-center justify-between gap-6 p-5 text-left sm:p-6"><span className="flex gap-4"><span className="font-display text-xl text-gold-500">{String(i+1).padStart(2,'0')}</span><span className="font-semibold text-navy-900">{q}</span></span><ChevronDown size={18} className={`shrink-0 transition ${active?'rotate-180':''}`}/></button>
          {active&&<div className="px-5 pb-6 pl-[4.4rem] text-sm leading-7 text-navy-900/60 sm:px-6 sm:pb-7 sm:pl-[4.9rem]">{a}</div>}
        </div>
      })}</div>
    </div></section>
    <CTA/>
  </>
}
