'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const competitions = [
  {
    name: 'University Rover Challenge',
    description: 'An annual competition to design and build the next generation of Mars rovers.',
    image: '/placeholder-competition.jpg',
  },
  {
    name: 'European Rover Challenge',
    description: "Europe's largest space and robotics event, focusing on Mars exploration technologies.",
    image: '/placeholder-competition.jpg',
  },
  // Add more competitions as needed
]

export default function Competitions() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h1
          className="text-4xl font-bold mb-12 text-center"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Our Competitions
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {competitions.map((competition, index) => (
            <motion.div
              key={competition.name}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <img src={competition.image} alt={competition.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{competition.name}</h2>
                <p className="text-gray-400">{competition.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

