'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const roverFeatures = [
  { title: 'Advanced Mobility', description: 'Six-wheel drive system with independent suspension for unparalleled terrain navigation' },
  { title: 'Scientific Suite', description: 'State-of-the-art analytical instruments for comprehensive Martian surface analysis' },
  { title: 'Autonomous Navigation', description: 'AI-powered pathfinding and obstacle avoidance for efficient exploration' },
  { title: 'Solar Power System', description: 'High-efficiency solar panels and advanced power management for extended missions' },
  { title: 'Robotic Arm', description: 'Versatile manipulator for sample collection and instrument deployment' },
]

export default function RoverDetails() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h1
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          About Our Rover: AROHN
        </motion.h1>
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <motion.div
            className="w-full md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              style={{height:'250px', width:'auto', margin:'auto'}}
              src="/arohn.jpeg"
              alt="AROHN Rover"
              className="w-full h-auto rounded-lg shadow-lg" />
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 md:pl-12"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg text-gray-300 mb-6">
              AROHN (Advanced Rover for Harsh Otherworldly Navigation) is our state-of-the-art Mars rover, designed and built by the talented team at Inferno. With its cutting-edge technology and robust design, AROHN is equipped to tackle the challenges of Martian exploration.
            </p>
            <p className="text-lg text-gray-300">
              Our rover combines advanced mobility, scientific capabilities, and autonomous systems to push the boundaries of what's possible in space robotics.
            </p>
          </motion.div>
        </div>
        <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roverFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-4 text-red-500">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

