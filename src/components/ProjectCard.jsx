import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import MediaSlot from './MediaSlot'
import { localizeProject, useLang } from '../i18n/LanguageContext'

const ease = [0.22, 1, 0.36, 1]

// forwardRef is required so AnimatePresence mode="popLayout" can measure exiting cards.
const ProjectCard = forwardRef(function ProjectCard({ project: rawProject, onOpen }, ref) {
  const { lang, t } = useLang()
  const project = localizeProject(rawProject, lang)
  const categoryName = t.projects.cardCategories[project.category] || project.category
  const extra = project.episodes?.length ? t.projects.episodesCount(project.episodes.length) : project.badgeExtra

  return (
    <motion.article
      ref={ref}
      layout="position"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, transition: { duration: 0.2, ease } }}
      transition={{ duration: 0.4, ease, layout: { type: 'spring', stiffness: 350, damping: 34 } }}
      className="flex h-full"
    >
      <button
        id={`project-card-${project.id}`}
        onClick={() => onOpen(rawProject)}
        data-cursor="video"
        data-cursor-label={t.projects.view}
        className="project-card group flex w-full flex-col text-left"
      >
        <MediaSlot
          src={project.thumbnail}
          alt={project.title}
          label={`[THUMB] ${project.id}`}
          spec="Tỉ lệ 16:9 · ≥1280×720"
          className="aspect-video w-full rounded-xl border border-line transition-colors duration-300 group-hover:border-white/40"
        >
          <span className="absolute right-3 top-3 z-10 rounded-full bg-black/60 px-2.5 py-1 font-mono text-[11px] text-white/80 backdrop-blur">
            {project.timeline}
          </span>
          <span className="absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 [@media(hover:none)]:opacity-100">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-white/15 ring-1 ring-white/40 backdrop-blur-md">
              <Play size={18} fill="currentColor" className="ml-0.5 text-white" />
            </span>
          </span>
        </MediaSlot>

        <div className="mt-4">
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
            {categoryName}
            {extra ? ` · ${extra}` : ''}
          </p>
          <h3 className="mt-1.5 line-clamp-2 text-lg font-medium leading-snug text-white transition-colors group-hover:text-accent-soft">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-muted">{project.role}</p>
        </div>
      </button>
    </motion.article>
  )
})

export default ProjectCard
