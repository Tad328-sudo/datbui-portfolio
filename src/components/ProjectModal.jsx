import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Calendar, ExternalLink, User, X, Layers, Play } from 'lucide-react'
import MediaSlot from './MediaSlot'
import { useLenisInstance } from '../hooks/useLenis'
import { localizeProject, useLang } from '../i18n/LanguageContext'

const ease = [0.22, 1, 0.36, 1]

const panel = {
  hidden: { opacity: 0, scale: 0.88, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.45, ease, when: 'beforeChildren', staggerChildren: 0.05 },
  },
  exit: { opacity: 0, scale: 0.92, y: 12, transition: { duration: 0.25, ease } },
}

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease } },
}

export default function ProjectModal({ project: rawProject, onClose }) {
  const { lang, t } = useLang()
  const project = localizeProject(rawProject, lang)
  const lenis = useLenisInstance()
  const closeRef = useRef(null)

  // Esc to close + focus the close button for keyboard users
  useEffect(() => {
    if (!project) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    closeRef.current?.focus({ preventScroll: true })
    return () => window.removeEventListener('keydown', onKey)
  }, [project, onClose])

  // Freeze page scroll while open (Lenis when active, native overflow as fallback)
  useEffect(() => {
    if (!project) return
    lenis?.stop()
    document.body.style.overflow = 'hidden'
    return () => {
      lenis?.start()
      document.body.style.overflow = ''
    }
  }, [project, lenis])

  return (
    // AnimatePresence must stay mounted so the exit (scale-out) animation can play.
    <AnimatePresence>
      {project && (
        <motion.div
          key="backdrop"
          className="fixed inset-0 z-[90] grid place-items-center bg-black/80 p-3 backdrop-blur-sm sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.25, delay: 0.05 } }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            key={project.id}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            variants={panel}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-line bg-card shadow-2xl will-change-transform sm:rounded-3xl"
          >
            <button
              ref={closeRef}
              id="modal-close"
              aria-label={t.projects.closeModal}
              onClick={onClose}
              className="absolute right-3.5 top-3.5 z-20 grid h-10 w-10 place-items-center rounded-full border border-line/80 bg-black/70 text-white shadow-md transition-colors hover:border-accent hover:bg-accent hover:text-bg"
            >
              <X size={18} />
            </button>

            {/* data-lenis-prevent lets the wheel scroll this panel instead of the (stopped) page */}
            <div data-lenis-prevent className="no-scrollbar overflow-y-auto overscroll-contain">
              {/* Video stage */}
              <motion.a
                variants={item}
                href={project.driveUrl}
                target="_blank"
                rel="noreferrer"
                data-cursor="video"
                data-cursor-label={t.projects.view}
                className="group relative block"
              >
                <MediaSlot
                  src={project.thumbnail}
                  alt={project.title}
                  label={`[THUMB] ${project.id}`}
                  spec="Tỉ lệ 16:9 · ≥1280×720"
                  className="aspect-video w-full border-b border-line"
                >
                  <span className="absolute inset-0 grid place-items-center">
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-white/15 ring-1 ring-white/40 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                      <Play size={22} fill="currentColor" className="ml-0.5 text-white" />
                    </span>
                  </span>
                </MediaSlot>
              </motion.a>

              <div className="p-5 sm:p-8">
                <motion.div variants={item}>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
                    {t.projects.modalCategories[project.category] || project.category}
                  </p>
                  <h4 id="modal-title" className="mt-1.5 text-xl font-semibold text-white sm:text-2xl">
                    {project.title}
                  </h4>
                </motion.div>
                <motion.div
                  variants={item}
                  className="mt-4 flex flex-wrap items-center justify-between gap-2 border-b border-line/60 pb-4"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold text-accent sm:text-sm">
                    <User size={15} /> <span>{t.projects.role}</span>
                    <span className="font-medium text-white">{project.role}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted sm:text-sm">
                    <Calendar size={14} /> <span>{project.timeline}</span>
                  </div>
                </motion.div>

                <motion.div variants={item} className="mt-5">
                  <p className="text-sm leading-relaxed text-[#d4d4d4] sm:text-base">{project.description}</p>
                </motion.div>

                {project.episodes?.length > 0 && (
                  <motion.div variants={item} className="mt-6 rounded-xl border border-line/70 bg-bg/60 p-4">
                    <h5 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
                      <Layers size={14} /> {t.projects.episodeList} ({project.episodes.length})
                    </h5>
                    <ul className="flex flex-wrap gap-2">
                      {project.episodes.map((ep, i) => (
                        <motion.li
                          key={ep}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.25 + i * 0.04, duration: 0.25, ease }}
                          className="rounded-lg border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent"
                        >
                          {ep}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                <motion.p variants={item} className="mt-6 text-sm text-muted">
                  {project.tags.join(' · ')}
                </motion.p>

                <motion.div variants={item} className="mt-8 border-t border-line/60 pt-5">
                  <motion.a
                    href={project.driveUrl}
                    target="_blank"
                    rel="noreferrer"
                    whileTap={{ scale: 0.97 }}
                    className="flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-bg transition-colors hover:bg-accent-soft sm:inline-flex sm:w-auto"
                  >
                    {project.driveUrl?.includes('docs.google.com') ? t.projects.openDocs : t.projects.openDrive}
                    <ExternalLink size={16} />
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
