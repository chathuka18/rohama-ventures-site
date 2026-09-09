import { MessageCircle } from 'lucide-react'
import { company } from '../data/content'

export default function WhatsAppButton(){
  const message = encodeURIComponent('Hello ROHAMA Ventures, I would like to discuss a business advisory requirement.')
  return (
    <a
      href={`https://wa.me/${company.whatsapp}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      className="group fixed bottom-5 right-5 z-[70] flex items-center gap-2 rounded-full bg-[#25D366] p-3.5 text-white shadow-[0_14px_35px_rgba(0,0,0,.2)] transition hover:-translate-y-1 sm:px-4"
      aria-label="Chat with ROHAMA Ventures on WhatsApp"
    >
      <MessageCircle size={22} fill="currentColor" className="text-white"/>
      <span className="hidden text-sm font-semibold sm:block">Chat with us</span>
    </a>
  )
}
