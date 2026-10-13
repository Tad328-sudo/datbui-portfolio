import { useEffect, useState } from 'react'
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'

export default function InteractiveBackground() {
  const [isPointerFine, setIsPointerFine] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(hover: hover) and (pointer: fine)').matches
  })

  // Start coordinates at the center of the viewport
  const initialX = typeof window !== 'undefined' ? window.innerWidth / 2 : 500
  const initialY = typeof window !== 'undefined' ? window.innerHeight / 2 : 400

  const mouseX = useMotionValue(initialX)
  const mouseY = useMotionValue(initialY)

  // Primary Key Light (600px radius, responsive & snappy: damping 30, stiffness 200)
  const springX1 = useSpring(mouseX, { damping: 30, stiffness: 200 })
  const springY1 = useSpring(mouseY, { damping: 30, stiffness: 200 })

  // Secondary Ambient Light (850px radius, lags behind for 3D depth: damping 45, stiffness 90)
  const springX2 = useSpring(mouseX, { damping: 45, stiffness: 90 })
  const springY2 = useSpring(mouseY, { damping: 45, stiffness: 90 })

  // Hardware-accelerated radial gradients driven by motion values (zero React re-renders)
  const bgLayer1 = useMotionTemplate`radial-gradient(600px circle at ${springX1}px ${springY1}px, rgba(2, 132, 199, 0.10) 0%, rgba(2, 132, 199, 0.03) 50%, transparent 80%)`
  const bgLayer2 = useMotionTemplate`radial-gradient(850px circle at ${springX2}px ${springY2}px, rgba(255, 255, 255, 0.035) 0%, rgba(255, 255, 255, 0.01) 60%, transparent 80%)`

  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine)')
    const onMediaChange = (e) => setIsPointerFine(e.matches)
    media.addEventListener?.('change', onMediaChange)

    if (!media.matches) return () => media.removeEventListener?.('change', onMediaChange)

    const onMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      media.removeEventListener?.('change', onMediaChange)
      window.removeEventListener('mousemove', onMove)
    }
  }, [mouseX, mouseY])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Base Canvas */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />

      {/* Layer 2: Secondary Ambient Light (warm silver-white, 850px, slower) */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{
          background: isPointerFine
            ? bgLayer2
            : 'radial-gradient(850px circle at 50% 30%, rgba(255, 255, 255, 0.025) 0%, transparent 80%)',
        }}
      />

      {/* Layer 1: Primary Key Light (soft studio cyan/blue, 600px, snappy) */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{
          background: isPointerFine
            ? bgLayer1
            : 'radial-gradient(600px circle at 50% 25%, rgba(2, 132, 199, 0.08) 0%, transparent 80%)',
        }}
      />
    </div>
  )
}
