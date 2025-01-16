'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const competitions = [
  {
    name: "University Rover Challenge",
    description: "An annual competition to design and build the next generation of Mars rovers.",
    date: "June 2024",
  },
  {
    name: "European Rover Challenge",
    description: "Europe's largest space and robotics event, focusing on Mars exploration technologies.",
    date: "September 2024",
  },
  {
    name: "Indian Rover Challenge",
    description: "A national-level competition showcasing the best rover designs from across India.",
    date: "November 2024",
  },
]

export default function Competitions() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Upcoming Competitions
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {competitions.map((competition, index) => (
            <motion.div
              key={competition.name}
              className="bg-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-2">{competition.name}</h3>
              <p className="text-gray-300 mb-4">{competition.description}</p>
              <p className="text-red-500 font-semibold">{competition.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

