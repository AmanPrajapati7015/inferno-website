"use client"

import { motion } from "framer-motion"

export function AnimatedRobot() {
  return (
    <div className="relative w-24 h-24">
      <motion.div
        className="absolute inset-0 border-4 border-blue-500 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute inset-2 border-4 border-red-500 rounded-full"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 0],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute inset-4 bg-gradient-to-r from-blue-500 to-red-500 rounded-full"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}

