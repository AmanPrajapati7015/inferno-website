'use client'

import { motion } from 'framer-motion'

export default function MissionHero() {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      <div style={{backgroundImage:"url('/missions-banner.jpg')", backgroundAttachment: "fixed"}} className="absolute inset-0 bg-cover bg-attach bg-center opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      <motion.div
        className="text-center z-10 max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Exploring Mars, One Mission at a Time
        </motion.h1>
        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Discover how our advanced rover is pushing the boundaries of Mars exploration through autonomous navigation, astrobiology research, precision tasks, and critical supply delivery.
        </motion.p>
      </motion.div>
    </section>
  )
}

