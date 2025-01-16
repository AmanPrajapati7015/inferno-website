'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const roverFeatures = [
  { name: 'Advanced Mobility', description: 'Capable of traversing challenging Martian terrain with adaptive suspension' },
  { name: 'Scientific Instruments', description: 'Equipped with state-of-the-art tools for comprehensive geological analysis' },
  { name: 'Solar Powered', description: 'Harnessing the power of the sun for long-duration missions with efficient energy management' },
  { name: 'AI-driven Navigation', description: 'Autonomous path-finding and obstacle avoidance using cutting-edge machine learning algorithms' },
]

export default function RoverShowcase() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="rover" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Our Mars Rover
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="w-full md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img src="/rover.jpg" alt="Mars Rover" className="w-full h-auto rounded-lg shadow-lg" />
          </motion.div>
          <div className="w-full md:w-1/2 md:pl-12">
            {roverFeatures.map((feature, index) => (
              <motion.div
                key={feature.name}
                className={`mb-6 p-6 rounded-lg cursor-pointer transition-all ${
                  activeFeature === index ? 'bg-gradient-to-r from-red-600 to-orange-600' : 'glassmorphism hover:bg-gray-800'
                }`}
                onClick={() => setActiveFeature(index)}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
                <p className={activeFeature === index ? 'text-white' : 'text-gray-400'}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

