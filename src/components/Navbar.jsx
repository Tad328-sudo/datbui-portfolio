import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '../lib/utils'
import { useLang } from '../i18n/LanguageContext'

const LANGS = ['vi', 'en']

// Segmented VI | EN switch. `id` keeps the sliding pill's layoutId unique per mounted instance.
function LanguageToggle({ id, className }) {
  const { lang, setLang, t } = useLang()

  return (
    <div
      role="group"
      aria-label={t.meta.langLabel}
      className={cn('relative inline-flex items-center rounded-full border border-line p-0.5 font-mono text-[11px]', className)}
    >
      {LANGS.map((code) => {
        const active = lang === code
        return (
          <button
            key={code}
            id={`lang-${id}-${code}`}
            type="button"
            aria-pressed={active}
            onClick={() => setLang(code)}
            className={cn(
              'relative rounded-full px-3 py-1 font-medium uppercase tracking-[0.12em] transition-colors duration-200',
              active ? 'text-bg' : 'text-muted hover:text-white'
            )}
          >
            {active && (
              <motion.span
                layoutId={`lang-pill-${id}`}
                className="absolute inset-0 rounded-full bg-white"
                transition={{ type: 'spring', stiffness: 500, damping: 38 }}
              />
            )}
            <span className="relative z-10">{code}</span>
          </button>
        )
      })}
    </div>
  )
}

export default function Navbar() {
  const { t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      id="navbar"
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || open ? 'border-b border-line bg-bg/85 backdrop-blur-xl' : 'border-b border-transparent'
      )}
    >
      <nav className="section-container flex h-16 items-center justify-between">
        <a href="#top" className="text-base font-semibold tracking-tight text-white">
          {t.nav.brand}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {t.nav.links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="whitespace-nowrap text-sm text-muted transition-colors hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageToggle id="desktop" />
          <a
            href="#contact"
            className="whitespace-nowrap rounded-full bg-white px-5 py-2 text-sm font-semibold text-bg transition-colors hover:bg-accent-soft"
          >
            {t.nav.contact}
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle id="mobile" />
          <button
            id="navbar-toggle"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted hover:text-white"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="section-container border-t border-line/60 bg-bg/95 pb-6 pt-4 md:hidden">
          <ul className="flex flex-col">
            {t.nav.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line/50 py-3 text-sm text-muted transition-colors hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-5 flex w-full items-center justify-center rounded-full bg-white px-4 py-3 text-sm font-semibold text-bg"
          >
            {t.nav.contact}
          </a>
        </div>
      )}
    </header>
  )
}
