import { cn } from '../lib/utils'

/**
 * Renders a real image/video when `src`/`video` is provided,
 * otherwise an intentionally empty, clearly labelled slot to be filled later.
 */
export default function MediaSlot({ src, video, alt = '', label, spec, className, children }) {
  const hasMedia = Boolean(src || video)

  return (
    <div className={cn('relative overflow-hidden bg-[#101112]', className)}>
      {video ? (
        <video
          src={video}
          poster={src || undefined}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      ) : src ? (
        <img src={src} alt={alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      ) : null}

      {!hasMedia && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-1 border border-dashed border-white/15 p-4 text-center"
          data-media-slot={label}
        >
          <span className="font-mono text-[11px] text-white/45">{label}</span>
          {spec && <span className="font-mono text-[10px] text-white/30">{spec}</span>}
        </div>
      )}

      {children}
    </div>
  )
}
