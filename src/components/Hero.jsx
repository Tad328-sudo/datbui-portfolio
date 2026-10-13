import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'

export default function Hero() {
  const { t } = useLang()
  const h = t.hero

  return (
    <section id="top" className="relative flex min-h-[85dvh] items-center pb-16 pt-28 sm:min-h-[80dvh] sm:pt-36">
      <div className="section-container w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <p className="inline-flex items-start gap-2 rounded-2xl border border-line px-3.5 py-1.5 text-xs leading-snug text-muted sm:items-center sm:rounded-full">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 sm:mt-0" />
            {h.status}
          </p>

          <p className="mt-6 font-mono text-xs uppercase leading-relaxed tracking-[0.18em] text-muted">
            {h.eyebrow}
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-7xl">
            {h.title}
          </h1>

          <p className="mt-6 max-w-[62ch] text-base leading-relaxed text-muted sm:text-xl">
            {h.sub}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-bg transition-all hover:bg-accent-soft active:scale-[0.98]"
            >
              {h.ctaPrimary}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white transition-all hover:border-white/50 active:scale-[0.98]"
            >
              {h.ctaSecondary}
            </a>
          </div>
        </motion.div>
      </div>

      <a
        href="#projects"
        aria-label={h.scrollAria}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 p-2 text-muted transition-colors hover:text-white lg:inline-flex"
      >
        <ArrowDown size={18} />
      </a>
    </section>
  )
}
