'use client'

import { useInView } from 'react-intersection-observer'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const containerRef = useRef<HTMLElement>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <section ref={containerRef} id="about" className="py-20 bg-gray-900 relative">
      <motion.div 
        className="container mx-auto px-6"
        style={{ opacity, scale }}
      >
        <motion.h2
          className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          About AROHN
        </motion.h2>
        <motion.p
          className="text-xl text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          AROHN is our advanced Mars rover, designed and built by a passionate team of engineers at InfernoDTU. 
          With its sophisticated mobility system and cutting-edge scientific instruments, AROHN represents the 
          future of Mars exploration technology.
        </motion.p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {[
            { title: "Advanced Mobility", description: "Six-wheel drive system with independent suspension for unparalleled terrain navigation" },
            { title: "Scientific Suite", description: "State-of-the-art analytical instruments for comprehensive Martian surface analysis" },
            { title: "Autonomous Navigation", description: "AI-powered pathfinding and obstacle avoidance for efficient exploration" }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              className="glassmorphism p-8 rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-red-500">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

