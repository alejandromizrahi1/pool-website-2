import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navClass = scrolled
    ? 'fixed top-0 w-full z-50 transition-all duration-500 bg-white/90 backdrop-blur-lg py-3 shadow-sm'
    : 'fixed top-0 w-full z-50 transition-all duration-500 bg-transparent py-5'

  const linkClass = scrolled
    ? 'text-sm font-medium tracking-wide uppercase transition-colors text-zinc-600 hover:text-sky-600'
    : 'text-sm font-medium tracking-wide uppercase transition-colors text-white/80 hover:text-white'

  const phoneClass = scrolled
    ? 'flex items-center gap-2 font-bold text-sm text-sky-600'
    : 'flex items-center gap-2 font-bold text-sm text-white'

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src="/images/logo.svg"
            alt="Luciano Pools"
            className={`h-10 w-auto ${!scrolled ? 'brightness-0 invert' : ''}`}
            style={{ maxHeight: 40 }}
          />
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#services" className={linkClass}>Services</a>
          <a href="#how-it-works" className={linkClass}>How It Works</a>
          <a href="#about" className={linkClass}>About</a>
          <a href="#pricing" className={linkClass}>Pricing</a>
          <a href="#reviews" className={linkClass}>Reviews</a>
          <a href="tel:+13059681265" className={phoneClass}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            (305) 968-1265
          </a>
          <a href="#contact" className="px-6 py-2.5 rounded-full text-sm font-semibold bg-sky-500 text-white hover:bg-sky-400 transition-all">Free Quote</a>
        </div>
        <button className={`md:hidden p-1 ${scrolled ? 'text-zinc-900' : 'text-white'}`} onClick={() => setMobileOpen(!mobileOpen)}>
          {!mobileOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          )}
        </button>
      </div>
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden">
          <a href="#services" className="text-lg font-medium text-zinc-900 border-b border-zinc-100 pb-2" onClick={() => setMobileOpen(false)}>Services</a>
          <a href="#how-it-works" className="text-lg font-medium text-zinc-900 border-b border-zinc-100 pb-2" onClick={() => setMobileOpen(false)}>How It Works</a>
          <a href="#about" className="text-lg font-medium text-zinc-900 border-b border-zinc-100 pb-2" onClick={() => setMobileOpen(false)}>About</a>
          <a href="#pricing" className="text-lg font-medium text-zinc-900 border-b border-zinc-100 pb-2" onClick={() => setMobileOpen(false)}>Pricing</a>
          <a href="#reviews" className="text-lg font-medium text-zinc-900 border-b border-zinc-100 pb-2" onClick={() => setMobileOpen(false)}>Reviews</a>
          <a href="tel:+13059681265" className="flex items-center gap-2 text-sky-600 font-bold text-lg py-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            (305) 968-1265
          </a>
          <a href="#contact" className="w-full bg-sky-600 text-white py-4 rounded-xl font-bold mt-2 text-center" onClick={() => setMobileOpen(false)}>Get a Free Quote</a>
        </div>
      )}
    </nav>
  )
}
