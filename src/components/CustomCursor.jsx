import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/**
 * Minimal, recruiter-friendly cursor:
 * - a small dot that follows the pointer 1:1 (no lag, so it never feels broken)
 * - a soft ring that trails slightly and grows over interactive items
 * - over project/showreel media the ring becomes a labelled "Xem" button
 * Pointer position lives in motion values (no React re-render per mouse move).
 */
const RING = { default: 34, link: 54, media: 84 }

export default function CustomCursor() {
  const [mode, setMode] = useState('default') // 'default' | 'link' | 'media'
  const [label, setLabel] = useState('Xem')
  const [enabled, setEnabled] = useState(false)
  const [visible, setVisible] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { damping: 30, stiffness: 420, mass: 0.4 })
  const ringY = useSpring(y, { damping: 30, stiffness: 420, mass: 0.4 })

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!fine) return

    setEnabled(true)
    document.documentElement.classList.add('has-custom-cursor')

    const onMove = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
    }

    const onOver = (e) => {
      const t = e.target
      if (!(t instanceof Element)) return
      const media = t.closest('[data-cursor="video"]')
      if (media) {
        setMode('media')
        setLabel(media.getAttribute('data-cursor-label') || 'Xem')
      } else if (t.closest('a, button, [role="tab"], [data-cursor="link"]')) {
        setMode('link')
      } else {
        setMode('default')
      }
    }

    const onLeave = () => setVisible(false)

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })
    document.documentElement.addEventListener('mouseleave', onLeave)

    return () => {
      document.documentElement.classList.remove('has-custom-cursor')
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      document.documentElement.removeEventListener('mouseleave', onLeave)
    }
  }, [x, y])

  if (!enabled) return null

  const size = RING[mode]

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-200"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <motion.div
        className="fixed left-0 top-0 flex items-center justify-center rounded-full"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          width: size,
          height: size,
          backgroundColor: mode === 'media' ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0)',
          borderColor: mode === 'media' ? 'rgba(255,255,255,0)' : mode === 'link' ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.35)',
        }}
        transition={{ type: 'spring', damping: 26, stiffness: 300 }}
        initial={false}
      >
        <span className="absolute inset-0 rounded-full border" style={{ borderColor: 'inherit' }} />
        <motion.span
          className="relative text-[12px] font-semibold tracking-wide text-bg"
          animate={{ opacity: mode === 'media' ? 1 : 0, scale: mode === 'media' ? 1 : 0.6 }}
          transition={{ duration: 0.15 }}
        >
          {label}
        </motion.span>
      </motion.div>

      <motion.div
        className="fixed left-0 top-0 h-1.5 w-1.5 rounded-full bg-white"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
        animate={{ opacity: mode === 'media' ? 0 : 1 }}
        transition={{ duration: 0.12 }}
      />
    </div>
  )
}
