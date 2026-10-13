import { motion } from 'framer-motion'
import { cn } from '../lib/utils'

export default function ProjectFilter({ categories, active, onChange, counts = {}, ariaLabel = 'Filter' }) {
  return (
    <div
      id="project-filter"
      role="tablist"
      aria-label={ariaLabel}
      className="no-scrollbar -mx-2 flex items-center gap-2 overflow-x-auto px-2 pb-2 pt-1 sm:flex-wrap"
    >
      {categories.map((c) => {
        const key = typeof c === 'string' ? c : c.id
        const label = typeof c === 'string' ? c : c.label
        const isSelected = active === key

        return (
          <button
            key={key}
            id={`filter-${key}`}
            role="tab"
            aria-selected={isSelected}
            onClick={() => onChange(key)}
            className={cn(
              'relative shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-xs font-medium transition-colors duration-200 sm:px-5 sm:text-sm',
              isSelected
                ? 'border-transparent text-bg'
                : 'border-line bg-card/80 text-muted hover:border-muted hover:text-white'
            )}
          >
            {isSelected && (
              <motion.span
                layoutId="filter-active-pill"
                className="absolute inset-0 rounded-full bg-accent shadow-sm shadow-accent/20"
                transition={{ type: 'spring', stiffness: 450, damping: 35 }}
              />
            )}
            <span className="relative z-10 font-semibold">
              {label}
              {counts[key] != null && <span className="ml-1.5 opacity-60">{counts[key]}</span>}
            </span>
          </button>
        )
      })}
    </div>
  )
}
