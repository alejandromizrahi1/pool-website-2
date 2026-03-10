export default function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-100 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-full bg-sky-500 text-white">💧</div>
              <span className="text-2xl font-bold tracking-tighter text-zinc-900">LUCIANO<span className="font-light italic">POOLS</span></span>
            </div>
            <p className="text-zinc-500 text-lg max-w-md leading-relaxed mb-6">Miami's top-rated pool maintenance company. AquaShield™ certified service, digital reports, no contracts. Serving Miami-Dade &amp; Broward since 2005.</p>
            <a href="tel:+13059681265" className="flex items-center gap-2 text-sky-600 font-bold text-lg">📞 (305) 555-0123</a>
          </div>
          <nav>
            <h3 className="font-bold text-zinc-900 mb-6 uppercase tracking-widest text-sm">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#services" className="text-zinc-500 hover:text-sky-600 transition-colors">Services</a></li>
              <li><a href="#how-it-works" className="text-zinc-500 hover:text-sky-600 transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="text-zinc-500 hover:text-sky-600 transition-colors">Pricing</a></li>
              <li><a href="#reviews" className="text-zinc-500 hover:text-sky-600 transition-colors">Reviews</a></li>
              <li><a href="#contact" className="text-zinc-500 hover:text-sky-600 transition-colors">Get a Quote</a></li>
            </ul>
          </nav>
          <nav>
            <h3 className="font-bold text-zinc-900 mb-6 uppercase tracking-widest text-sm">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-500 hover:text-sky-600 transition-colors">About Us</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-sky-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-sky-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-sky-600 transition-colors">Licensing &amp; Insurance</a></li>
            </ul>
          </nav>
        </div>
        <div className="pt-10 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-400 text-sm">© 2026 Luciano Pools. All rights reserved. Licensed &amp; Insured · FL CPC9876543</p>
        </div>
      </div>
    </footer>
  )
}
