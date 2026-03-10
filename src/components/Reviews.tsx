export default function Reviews() {
  const reviews = [
    { text: '"Before Luciano Pools, we went through 3 pool companies in 2 years. Missed visits, green water, zero communication. Luciano Pools has been the total opposite — same tech every Tuesday, digital reports on my phone, and our pool hasn\'t gone green once in 18 months."', name: 'Maria S.', location: 'Brickell · Client since 2023', avatar: 'https://i.pravatar.cc/150?u=maria' },
    { text: '"I manage 4 rental properties, all with pools. Luciano Pools handles every single one. The AquaShield™ reports are genuinely useful — I forward them to my property manager so we both know the pool\'s status without driving over."', name: 'James T.', location: 'Coconut Grove · Client since 2021', avatar: 'https://i.pravatar.cc/150?u=james' },
    { text: '"The no-contract policy is what got me to try them. The service quality is what made me stay. Our tech, Miguel, texts me before he arrives and sends photos after. 3 years in and I\'ve literally never had a complaint."', name: 'Linda P.', location: 'Coral Gables · Client since 2022', avatar: 'https://i.pravatar.cc/150?u=linda' },
  ]
  return (
    <section id="reviews" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-sky-600 mb-4">Don't Take Our Word For It</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 mb-6">154 Families Can't Be Wrong.</h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            <span className="text-amber-400 text-2xl">★★★★★</span>
            <span className="ml-2 text-2xl font-extrabold text-zinc-900">4.9</span>
          </div>
          <p className="text-zinc-400">average rating across <strong className="text-zinc-600">154 verified Google reviews</strong></p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <figure key={r.name} className="bg-zinc-50 rounded-3xl p-8 flex flex-col gap-6">
              <div className="flex text-amber-400 text-lg">★★★★★</div>
              <blockquote><p className="text-zinc-600 leading-relaxed italic">{r.text}</p></blockquote>
              <figcaption className="flex items-center gap-4 mt-auto">
                <img src={r.avatar} alt={r.name} className="w-12 h-12 rounded-full border-2 border-sky-200" loading="lazy" />
                <div>
                  <p className="font-bold text-zinc-900">{r.name}</p>
                  <p className="text-sm text-zinc-400">{r.location}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center gap-2 text-sky-600 font-bold hover:text-sky-700 transition-colors">Read all 154 reviews on Google →</a>
        </div>
      </div>
    </section>
  )
}
