# Pool Website 2 — Luciano Pools

A professional pool cleaning & maintenance website built with **React + TypeScript + Vite + TailwindCSS**.

## Project Structure

```
├── public/images/          # Static image assets (logos, pool photos)
├── src/
│   ├── components/         # React components
│   │   ├── Navbar.tsx      # Scroll-aware navigation with mobile menu
│   │   ├── Hero.tsx        # Full-screen hero with lead capture form
│   │   ├── TrustBar.tsx    # Stats bar (20+ years, 4.9★, certifications)
│   │   ├── HowItWorks.tsx  # 3-step process cards
│   │   ├── Services.tsx    # 5 service cards with hover animations
│   │   ├── AquaShield.tsx  # Proprietary protocol section
│   │   ├── WhyChooseUs.tsx # Features list + technician photo
│   │   ├── BeforeAfter.tsx # Interactive before/after slider
│   │   ├── Credentials.tsx # Certification badges
│   │   ├── Reviews.tsx     # Google review testimonials
│   │   ├── Pricing.tsx     # 3-tier pricing cards
│   │   ├── ServiceAreas.tsx # Miami-Dade & Broward service areas
│   │   ├── FAQ.tsx         # Accordion FAQ section
│   │   ├── Contact.tsx     # Contact form + info
│   │   ├── Footer.tsx      # Site footer
│   │   └── WhatsAppWidget.tsx # Floating chat button
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # React entry point
│   └── index.css           # Global styles + Tailwind directives
├── index.html              # Vite entry HTML
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
└── index.original.html     # Original single-file HTML (reference)
```

## Getting Started

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
npm run preview
```

## Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite 6](https://vite.dev/)
- [TailwindCSS 3](https://tailwindcss.com/)
- [Inter Font](https://fonts.google.com/specimen/Inter) (Google Fonts)

## License

All rights reserved.
