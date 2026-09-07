import { motion } from 'framer-motion'
export default function PageHero({eyebrow,title,body}){
  return <section className="relative overflow-hidden border-b border-navy-900/5 bg-mist py-20 lg:py-28"><div className="absolute inset-0 grid-fade opacity-60"/><div className="container-shell relative"><motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.6}} className="max-w-4xl"><div className="eyebrow">{eyebrow}</div><h1 className="display-title mt-5">{title}</h1>{body&&<p className="mt-7 max-w-2xl text-lg leading-8 text-navy-900/65">{body}</p>}</motion.div></div></section>
}
