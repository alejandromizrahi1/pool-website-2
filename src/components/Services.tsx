export default function Services() {
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-sky-600 mb-4">What We Do</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900">Complete Pool Care,<br />Zero Hassle.</h2>
        </div>
        <p className="text-zinc-500 text-lg max-w-md leading-relaxed">South Florida's heat and rain destroy pool chemistry fast. We handle everything — so the only thing you do is enjoy your backyard.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServiceCard image="https://images.unsplash.com/photo-1562133567-b6a0a9c7e6eb?auto=format&fit=crop&q=80&w=800" alt="Weekly Pool Cleaning" title="Weekly Pool Cleaning & Maintenance" desc="Full skim, vacuum, brush, and chemical balance on every visit. Same certified technician, same day, same time — every single week. You'll get a digital photo report within 1 hour of each service." seo="Pool cleaning Miami · Weekly pool service · Residential pool maintenance" icon="droplet" />
        <ServiceCard image="/images/water-chemistry.png" alt="Water Chemistry" title="Water Chemistry & Algae Prevention" desc="Miami's year-round humidity and heavy rain dilute chemicals faster than anywhere in the U.S. Our CPO-certified techs test, balance, and document every reading — preventing green water before it starts." seo="Pool water chemistry · Algae prevention Miami · Green pool treatment" icon="shield" />
        <ServiceCard image="/images/pool-equipment.png" alt="Equipment Repair" title="Equipment Repair & Installation" desc="Pumps, filters, heaters, salt chlorine generators — our Pentair and Hayward authorized technicians diagnose the problem fast and fix it right the first time. All repairs backed by our 1-year labor warranty." seo="Pool pump repair Miami · Pool heater installation · Salt system repair" icon="wrench" />
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <ServiceCard image="/images/pool-renovation.png" alt="Pool Renovation" title="Pool Renovation & Resurfacing" desc="Cracked plaster, faded tile, outdated coping? We partner with top South Florida contractors for full pool remodels — Diamond Brite, Pebble Tec, and LED lighting upgrades. Free design consultation included." seo="Pool resurfacing Miami · Pool remodel · Diamond Brite Miami" icon="sparkle" />
        <ServiceCard image="/images/commercial-pool.png" alt="Commercial Pool" title="Commercial Pool Service" desc="HOAs, apartment complexes, hotels, and fitness centers across Miami-Dade and Broward trust Luciano Pools for code-compliant commercial pool maintenance. We carry $2M in liability coverage and handle all health department documentation." seo="Commercial pool service Miami · HOA pool maintenance · Hotel pool cleaning" icon="users" />
      </div>
    </section>
  )
}

function ServiceCard({ image, alt, title, desc, seo, icon }: { image: string; alt: string; title: string; desc: string; seo: string; icon: string }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white border border-zinc-100 shadow-sm hover:shadow-xl hover:-translate-y-2.5 transition-all duration-500">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={image} alt={alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
      </div>
      <div className="p-8">
        <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
          <ServiceIcon type={icon} />
        </div>
        <h3 className="text-xl font-bold text-zinc-900 mb-3">{title}</h3>
        <p className="text-zinc-500 leading-relaxed mb-4">{desc}</p>
        <p className="text-xs text-zinc-400">{seo}</p>
        <a href="#contact" className="flex items-center gap-2 text-sm font-bold text-sky-600 group-hover:gap-4 transition-all mt-4">
          Get a Quote
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
        </a>
      </div>
    </div>
  )
}

function ServiceIcon({ type }: { type: string }) {
  const icons: Record<string, JSX.Element> = {
    droplet: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" /></svg>,
    shield: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>,
    wrench: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>,
    sparkle: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>,
    users: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  }
  return icons[type] || null
}
