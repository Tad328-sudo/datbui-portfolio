import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { dictionary } from './dictionary'

const STORAGE_KEY = 'portfolio-lang'
const LanguageContext = createContext(null)

function getInitialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'vi' || saved === 'en') return saved
  } catch {
    /* storage unavailable: fall through */
  }
  return 'vi'
}

/** Returns a project with its `en` fields merged over the Vietnamese base when lang === 'en'. */
export function localizeProject(project, lang) {
  if (!project || lang !== 'en' || !project.en) return project
  return { ...project, ...project.en }
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLang)

  const setLang = useCallback((next) => {
    if (next !== 'vi' && next !== 'en') return
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = dictionary[lang].meta.title
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t: dictionary[lang] }), [lang, setLang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used inside <LanguageProvider>')
  return ctx
}
