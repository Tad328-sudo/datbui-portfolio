import { useState } from 'react'
import { useLang } from '../i18n/LanguageContext'

const EMAIL = 'whitekin2520@gmail.com'

function CopyButton({ value, label }) {
  const { t } = useLang()
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard?.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button
      onClick={copy}
      aria-label={label}
      className="whitespace-nowrap rounded-full border border-line px-3.5 py-1.5 text-xs text-muted transition-colors hover:border-white/40 hover:text-white"
    >
      {copied ? t.contact.copied : t.contact.copy}
    </button>
  )
}

export default function ContactFooter() {
  const { t } = useLang()
  const c = t.contact

  return (
    <footer id="contact" className="border-t border-line">
      <div className="section-container py-16 sm:py-24">
        <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">{c.title}</h2>
        <p className="mt-5 flex max-w-3xl items-start gap-2 text-sm text-muted sm:text-base">
          <span className="mt-[0.45rem] h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
          {c.sub}
        </p>

        <div className="mt-12 divide-y divide-line border-y border-line">
          <div className="flex flex-wrap items-center justify-between gap-4 py-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">{c.emailLabel}</p>
              <a
                href={`mailto:${EMAIL}`}
                className="mt-1 block break-all text-xl font-medium text-white transition-colors hover:text-accent-soft sm:text-3xl"
              >
                {EMAIL}
              </a>
            </div>
            <CopyButton value={EMAIL} label={c.copyEmail} />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 py-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">{c.phoneLabel}</p>
              <a
                href={c.phoneHref}
                className="mt-1 block text-xl font-medium text-white transition-colors hover:text-accent-soft sm:text-3xl"
              >
                {c.phoneDisplay}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={c.messenger.href}
                target="_blank"
                rel="noreferrer"
                className="whitespace-nowrap rounded-full border border-line px-3.5 py-1.5 text-xs text-muted transition-colors hover:border-white/40 hover:text-white"
              >
                {c.messenger.label}
              </a>
              <CopyButton value={c.phoneCopyValue} label={c.copyPhone} />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-line py-6 text-xs text-muted">
        <div className="section-container flex flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
          <p>© 2026 {t.nav.brand}</p>
          <p>{c.location}</p>
        </div>
      </div>
    </footer>
  )
}
