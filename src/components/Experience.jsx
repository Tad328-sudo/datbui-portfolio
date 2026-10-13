import { ExternalLink } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'

// Only the third entry carries an external link; the URL is language-independent.
const LOOKBOOK_URL = 'https://drive.google.com/drive/folders/1Cu4IpkzIk8w82pqnql5LYNoms6yxvT7H'

export default function Experience() {
  const { t } = useLang()
  const e = t.experience

  return (
    <section id="experience" className="section-container py-16 sm:py-24">
      <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">{e.title}</h2>

      <ol className="mt-12 divide-y divide-line border-y border-line">
        {e.items.map((it, i) => (
          <li key={i} className="grid gap-4 py-8 lg:grid-cols-12 lg:gap-10">
            <p className="font-mono text-sm text-muted lg:col-span-3">{it.period}</p>

            <div className="lg:col-span-9">
              <h3 className="text-xl font-medium text-white">{it.title}</h3>
              <p className="mt-1 text-sm text-accent-soft">{it.place}</p>
              <p className="mt-3 max-w-[65ch] text-sm leading-relaxed text-muted sm:text-base">{it.desc}</p>

              <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                <span className="text-white/90">{it.highlight}</span>
                {it.linkLabel && (
                  <a
                    href={LOOKBOOK_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-accent-soft underline-offset-4 hover:underline"
                  >
                    {it.linkLabel} <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
