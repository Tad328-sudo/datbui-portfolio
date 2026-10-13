import { createContext, useContext, useEffect, useState } from 'react'
import Lenis from '@studio-freight/lenis'

/** Shares the Lenis instance (or null) so components can stop/start/scrollTo. */
export const LenisContext = createContext(null)
export const useLenisInstance = () => useContext(LenisContext)

const NAV_OFFSET = -72

/**
 * Smooth-scroll hook. Call once at the app root and pass the result to <LenisContext.Provider>.
 * - Uses lerp (frame-rate independent) instead of fixed duration for a lighter feel.
 * - Disabled automatically when the user prefers reduced motion.
 * - Intercepts in-page anchor links (#id) so they scroll via Lenis with a navbar offset.
 */
export default function useLenis(options = {}) {
  const [lenis, setLenis] = useState(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const instance = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      ...options,
    })
    setLenis(instance)

    let rafId
    const raf = (time) => {
      instance.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    const onAnchorClick = (e) => {
      const link = e.target.closest('a[href^="#"]')
      if (!link) return
      const hash = link.getAttribute('href')
      if (hash === '#' || hash === '#top') {
        e.preventDefault()
        instance.scrollTo(0)
        return
      }
      const target = document.querySelector(hash)
      if (!target) return
      e.preventDefault()
      instance.scrollTo(target, { offset: NAV_OFFSET })
    }
    document.addEventListener('click', onAnchorClick)

    return () => {
      document.removeEventListener('click', onAnchorClick)
      cancelAnimationFrame(rafId)
      instance.destroy()
      setLenis(null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return lenis
}

export { useLenis }
