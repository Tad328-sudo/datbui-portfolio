import { Play } from 'lucide-react'
import MediaSlot from './MediaSlot'
import { media } from '../data/media'
import { useLang } from '../i18n/LanguageContext'

const SHOWREEL_URL = 'https://drive.google.com/drive/folders/1HIgh63ACwNhAFbs_st-MjXFi3PmGO8fI'

export default function ShowreelBanner() {
  const { t } = useLang()
  const s = t.showreel

  return (
    <section id="showreel" className="section-container py-12 sm:py-20">
      <h2 className="mb-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{s.title}</h2>

      <a
        href={SHOWREEL_URL}
        target="_blank"
        rel="noreferrer"
        aria-label={s.aria}
        data-cursor="video"
        data-cursor-label={s.cursor}
        className="group relative block"
      >
        <MediaSlot
          src={media.showreelPoster}
          video={media.showreelVideo}
          alt={s.alt}
          label="[SHOWREEL] Khung hình / clip preview"
          spec="Tỉ lệ 21:9 · ≥1920×820 · preview 10-15s muted loop"
          className="aspect-video w-full rounded-xl border border-line transition-colors duration-300 group-hover:border-white/40 sm:aspect-[21/9]"
        >
          <div className="absolute inset-0 grid place-items-center">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-white/10 ring-1 ring-white/30 backdrop-blur-md transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
              <Play size={26} fill="currentColor" className="ml-1 text-white" />
            </span>
          </div>
        </MediaSlot>
      </a>

      <p className="mt-4 max-w-[65ch] text-sm leading-relaxed text-muted">{s.desc}</p>
    </section>
  )
}
