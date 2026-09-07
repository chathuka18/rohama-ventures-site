import { Link } from 'react-router-dom'
export default function NotFound(){return <section className="container-shell flex min-h-[60vh] flex-col items-center justify-center text-center"><div className="eyebrow">404</div><h1 className="mt-4 font-display text-5xl">Page not found.</h1><Link className="mt-7 rounded-full bg-navy-900 px-6 py-3 text-sm text-white" to="/">Back to home</Link></section>}
