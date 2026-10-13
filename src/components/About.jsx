import { motion } from 'framer-motion'
import { useLang } from '../i18n/LanguageContext'

export default function About() {
  const { t } = useLang()
  const a = t.about

  return (
    <section id="about" className="section-container py-16 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 lg:order-2"
        >
          <div className="aspect-[4/5] w-full overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-900/40">
            <img
              src="/images/about-workspace.jpg"
              alt={a.portraitAlt}
              loading="lazy"
              className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>
        </motion.div>

        <div className="lg:col-span-7 lg:order-1">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">{a.title}</h2>
          <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-muted sm:text-lg">{a.intro}</p>
          {a.value && <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-muted">{a.value}</p>}

          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-6 border-t border-line pt-6">
            {a.stats.map((s) => (
              <div key={s.label} className="max-w-[16ch]">
                <dt className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{s.value}</dt>
                <dd className="mt-1 text-sm leading-snug text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>

          <ul className="mt-10 divide-y divide-line border-y border-line">
            {a.principles.map((p) => (
              <li key={p.title} className="py-5">
                <h3 className="text-base font-medium text-white sm:text-lg">{p.title}</h3>
                <p className="mt-1.5 max-w-[60ch] text-sm leading-relaxed text-muted">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
