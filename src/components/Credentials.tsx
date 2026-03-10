export default function Credentials() {
  const certs = [
    { title: 'CPO Certified', sub: 'Certified Pool & Spa Operator' },
    { title: 'PHTA Member', sub: 'Pool & Hot Tub Alliance' },
    { title: 'Pentair Authorized', sub: 'Factory-Trained Technician' },
    { title: 'Hayward Certified', sub: 'Authorized Service Partner' },
  ]
  return (
    <section className="py-12 px-6 bg-white border-y border-zinc-100">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-xs font-bold tracking-[0.3em] uppercase text-zinc-400 mb-8">Certifications & Manufacturer Authorizations</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certs.map((c) => (
            <div key={c.title} className="flex flex-col items-center text-center p-4 rounded-2xl border border-zinc-100">
              <p className="font-bold text-zinc-900 text-sm mt-2">{c.title}</p>
              <p className="text-zinc-400 text-xs">{c.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
