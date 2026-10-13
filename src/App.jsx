import { useCallback, useMemo, useState } from 'react'
import { AnimatePresence, LayoutGroup, MotionConfig } from 'framer-motion'
import useLenis, { LenisContext } from './hooks/useLenis'
import projectsData from './data/projects.json'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ProjectFilter from './components/ProjectFilter'
import ProjectCard from './components/ProjectCard'
import ProjectModal from './components/ProjectModal'
import Experience from './components/Experience'
import SkillsGear from './components/SkillsGear'
import ContactFooter from './components/ContactFooter'
import CustomCursor from './components/CustomCursor'
import InteractiveBackground from './components/InteractiveBackground'
import { LanguageProvider, useLang } from './i18n/LanguageContext'

const CATEGORY_IDS = ['all', 'long-form', 'short-form', 'commercial', 'training']

const allProjects = Array.isArray(projectsData) ? projectsData : projectsData.projects || []

const counts = CATEGORY_IDS.reduce((acc, id) => {
  acc[id] = id === 'all' ? allProjects.length : allProjects.filter((p) => p.category === id).length
  return acc
}, {})

function AppContent() {
  const lenis = useLenis()
  const { t } = useLang()
  const [category, setCategory] = useState('all')
  const [selected, setSelected] = useState(null)

  const categories = CATEGORY_IDS.map((id) => ({ id, label: t.projects.categories[id] }))

  const filteredProjects = useMemo(
    () => (category === 'all' ? allProjects : allProjects.filter((p) => p.category === category)),
    [category]
  )

  const closeModal = useCallback(() => setSelected(null), [])

  return (
    <LenisContext.Provider value={lenis}>
      {/* reducedMotion="user" respects the OS "reduce motion" setting for every motion component */}
      <MotionConfig reducedMotion="user">
        <div className="relative min-h-[100dvh] bg-[#0a0a0a] text-[#ededed]">
          <InteractiveBackground />
          <CustomCursor />
          <Navbar />
          <main className="relative z-10">
            <Hero />
            <About />

            <section id="projects" className="section-container py-16 sm:py-24">
              <h2 className="mb-8 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                {t.projects.heading(allProjects.length)}
              </h2>

              <LayoutGroup>
                <div className="mb-8 sm:mb-10">
                  <ProjectFilter
                    categories={categories}
                    active={category}
                    onChange={setCategory}
                    counts={counts}
                    ariaLabel={t.projects.filterAria}
                  />
                </div>

                {/* Grid with responsive columns and smooth animations */}
                <div className="relative grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                  <AnimatePresence mode="popLayout" initial={false}>
                    {filteredProjects.map((p) => (
                      <ProjectCard key={p.id} project={p} onOpen={setSelected} />
                    ))}
                  </AnimatePresence>
                </div>
              </LayoutGroup>
            </section>

            <SkillsGear />
            <Experience />
          </main>
          <div className="relative z-10">
            <ContactFooter />
          </div>
          <ProjectModal project={selected} onClose={closeModal} />
        </div>
      </MotionConfig>
    </LenisContext.Provider>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}
