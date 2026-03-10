import { useState } from 'react'

const faqs = [
  { q: 'How often should I service my pool in South Florida?', a: "In Miami-Dade and Broward, weekly service is non-negotiable. Florida's year-round heat, humidity, and frequent rainstorms deplete chlorine and spike pH levels 2–3x faster than northern climates." },
  { q: 'Do I need to sign a contract?', a: 'No. Every Luciano Pools plan is month-to-month. Cancel anytime with a single text. No fees, no penalties.' },
  { q: 'Are you licensed and insured?', a: 'Yes. Fully licensed (FL CPC9876543), $2M in liability coverage, workers\' comp on every technician. CPO-certified, Pentair and Hayward authorized.' },
  { q: "What if I'm not happy with a service?", a: 'Call or text us within 48 hours. We\'ll send your technician back at no charge, no questions asked.' },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  return (
    <section className="py-24 px-6 bg-zinc-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-sky-600 mb-4">Common Questions</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">Everything Miami Pool<br />Owners Ask Us.</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-zinc-100 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left font-bold text-zinc-900 hover:text-sky-600 transition-colors cursor-pointer"
              >
                <span>{faq.q}</span>
                <span className={`shrink-0 ml-4 text-zinc-400 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 text-zinc-500 leading-relaxed border-t border-zinc-50 pt-4">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
