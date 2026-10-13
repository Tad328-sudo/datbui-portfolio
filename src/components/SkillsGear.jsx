import { motion, useReducedMotion } from 'framer-motion'
import { Camera, Clock, Compass, Cpu, Headphones, RefreshCw, Scissors, Users, Zap } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'

const ease = [0.22, 1, 0.36, 1]
const ICON = { className: 'h-4 w-4', strokeWidth: 1.5 }

// Mono badge in the Adobe-style rounded square (neutral, no brand colours: keeps one palette)
function TextBadge({ children }) {
  return <span className="font-mono text-[11px] font-semibold leading-none tracking-tight">{children}</span>
}

// Language-independent structure (names of software, icons, levels). Copy comes from the dictionary by index.
const software = [
  { name: 'CapCut PC', level: 9, icon: <Scissors {...ICON} /> },
  { name: 'Adobe Premiere Pro', level: 7, icon: <TextBadge>Pr</TextBadge> },
  { name: 'Adobe Lightroom', level: 7, icon: <TextBadge>Lr</TextBadge> },
  { name: 'DaVinci Resolve', level: 6, icon: <TextBadge>DR</TextBadge> },
  { name: 'Adobe After Effects', level: 4, icon: <TextBadge>Ae</TextBadge> },
]
const workflowIcons = [<Compass key="c" {...ICON} />, <RefreshCw key="r" {...ICON} />, <Clock key="t" {...ICON} />, <Users key="u" {...ICON} />]
const gearIcons = [<Camera key="c" {...ICON} />, <Zap key="z" {...ICON} />, <Cpu key="p" {...ICON} />, <Headphones key="h" {...ICON} />]

// Thin mastery bar: width reveals once when scrolled into view
function MasteryBar({ level, label, reduce }) {
  return (
    <div
      role="meter"
      aria-valuemin={0}
      aria-valuemax={10}
      aria-valuenow={level}
      aria-label={label}
      className="mt-2.5 h-1 w-full overflow-hidden bg-zinc-800"
    >
      <motion.div
        className="h-full bg-zinc-200"
        initial={{ width: 0 }}
        whileInView={{ width: `${level * 10}%` }}
        viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        transition={reduce ? { duration: 0 } : { duration: 0.9, ease, delay: 0.1 }}
      />
    </div>
  )
}

export default function SkillsGear() {
  const reduce = useReducedMotion()
  const { t } = useLang()
  const s = t.skills

  const groups = [
    {
      title: s.groupTitles[0],
      hasLevel: true,
      items: software.map((it, i) => ({ ...it, note: s.software[i] })),
    },
    {
      title: s.groupTitles[1],
      items: s.workflow.map((it, i) => ({ ...it, icon: workflowIcons[i] })),
    },
    {
      title: s.groupTitles[2],
      items: s.gear.map((it, i) => ({ ...it, icon: gearIcons[i] })),
    },
  ]

  return (
    <section id="skills" className="section-container py-16 sm:py-24">
      <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">{s.title}</h2>

      <div className="mt-12 border-b border-zinc-800/80">
        {groups.map((g, gi) => (
          <div key={gi} className="grid gap-6 border-t border-zinc-800/80 py-8 lg:grid-cols-12 lg:gap-10">
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-muted lg:col-span-3">{g.title}</h3>

            <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:col-span-9">
              {g.items.map((it, i) => (
                <li key={i} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-x-3.5">
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900 text-zinc-300"
                  >
                    {it.icon}
                  </span>

                  {/* Row 1 is h-8 so title + X/10 centre on the icon box; bar and note align with the title column */}
                  <div className="min-w-0">
                    <div className="flex min-h-8 items-center justify-between gap-3">
                      <p className="text-base font-medium leading-tight text-white">{it.name}</p>
                      {g.hasLevel && <span className="shrink-0 font-mono text-xs text-zinc-400">{it.level}/10</span>}
                    </div>
                    {g.hasLevel && <MasteryBar level={it.level} label={s.levelLabel(it.level)} reduce={reduce} />}
                    <p className="mt-2.5 max-w-[46ch] text-sm leading-relaxed text-muted">{it.note}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
