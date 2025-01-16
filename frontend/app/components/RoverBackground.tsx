'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function RoverBackground() {
  const [position, setPosition] = useState({ x: -100, y: 50 })

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prev => ({
        x: prev.x > window.innerWidth ? -100 : prev.x + 0.5,
        y: prev.y + Math.sin(prev.x * 0.01) * 0.25
      }))
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="absolute w-64 h-64"
        style={{
          x: position.x,
          y: position.y,
          backgroundImage: "url('/rover.jpg')",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          filter: 'grayscale(100%) brightness(50%)'
        }}
      />
    </motion.div>
  )
}

