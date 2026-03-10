export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-sky-600 mb-4">Transparent Pricing</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 mb-6">Pick Your Plan.<br />Change It Anytime.</h2>
          <p className="text-zinc-500 text-lg max-w-xl mx-auto leading-relaxed">Every plan includes our full AquaShield™ 47-point protocol, digital reports, and your dedicated technician. Zero lock-in. Zero hidden fees.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          <PricingCard tier="Essential" price="$120" desc="Perfect for standard residential pools up to 15,000 gallons." features={['Weekly AquaShield™ service visit','Full skim, vacuum & brush','Chemical testing & balancing','Filter rinse (bi-weekly)','Digital report after every visit','Same tech every week']} cta="Start with Essential" highlighted={false} />
          <PricingCard tier="Premium" price="$185" desc="Our most popular plan. Full-service pool care with priority support." features={['Everything in Essential','Equipment health inspection','Tile line & waterline cleaning','Priority same-day scheduling','Free monthly shock treatment','Quarterly filter deep-clean','1-year labor warranty on repairs']} cta="Start with Premium" highlighted={true} />
          <PricingCard tier="Elite" price="$265" desc="For larger pools, spas, water features, or commercial properties." features={['Everything in Premium','Salt chlorine generator service','Spa & water feature maintenance','Full quarterly deep clean','Dedicated account manager','Emergency same-day response','48-hour equipment repair guarantee']} cta="Start with Elite" highlighted={false} />
        </div>
        <p className="text-center text-zinc-400 text-sm mt-10">All plans month-to-month. Cancel anytime with a single text. Custom quotes available for commercial properties.</p>
      </div>
    </section>
  )
}

function PricingCard({ tier, price, desc, features, cta, highlighted }: { tier: string; price: string; desc: string; features: string[]; cta: string; highlighted: boolean }) {
  if (highlighted) {
    return (
      <div className="relative rounded-3xl p-8 flex flex-col bg-sky-600 text-white shadow-2xl shadow-sky-500/30 scale-105">
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-zinc-900 text-white text-xs font-bold rounded-full tracking-widest uppercase">Most Popular</span>
        <div className="mb-8">
          <h3 className="text-lg font-bold uppercase tracking-widest mb-2 text-sky-100">{tier}</h3>
          <div className="flex items-end gap-1 mb-3"><span className="text-5xl font-extrabold text-white">{price}</span><span className="text-lg mb-1 text-sky-200">/month</span></div>
          <p className="text-sm leading-relaxed text-sky-100">{desc}</p>
        </div>
        <ul className="space-y-3 mb-10 flex-1">
          {features.map((f) => <li key={f} className="flex items-start gap-3"><span className="text-sky-200 mt-0.5">✓</span><span className="text-sm text-sky-50">{f}</span></li>)}
        </ul>
        <a href="#contact" className="block w-full py-4 rounded-2xl font-bold text-base text-center transition-all bg-white text-sky-600 hover:bg-sky-50">{cta}</a>
      </div>
    )
  }
  return (
    <div className="relative rounded-3xl p-8 flex flex-col bg-white border border-zinc-100 shadow-sm">
      <div className="mb-8">
        <h3 className="text-lg font-bold uppercase tracking-widest mb-2 text-zinc-400">{tier}</h3>
        <div className="flex items-end gap-1 mb-3"><span className="text-5xl font-extrabold text-zinc-900">{price}</span><span className="text-lg mb-1 text-zinc-400">/month</span></div>
        <p className="text-sm leading-relaxed text-zinc-500">{desc}</p>
      </div>
      <ul className="space-y-3 mb-10 flex-1">
        {features.map((f) => <li key={f} className="flex items-start gap-3"><span className="text-sky-500 mt-0.5">✓</span><span className="text-sm text-zinc-600">{f}</span></li>)}
      </ul>
      <a href="#contact" className="block w-full py-4 rounded-2xl font-bold text-base text-center transition-all bg-zinc-900 text-white hover:bg-zinc-800">{cta}</a>
    </div>
  )
}
