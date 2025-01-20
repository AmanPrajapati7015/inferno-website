'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const competitions = [
  {
    name: "International Rover Challenge 2025",
    description: "Space Robotics Engineering competetion organised by Space Robotics Society (SPROS) challenging university students to conceptualise, design, develop and operate an astonaut-assistive next generation space rover and perform specific missions in Mars simulated conditions.",
    date: "28th January - 2nd February, 2025",
  },
  {
    name: "International Space Drone Challenge 2025",
    description: "To be held on 1st February, 2025, it challenges university students to conceptualise, design, develop and operate an astronaut-assistive next-generation space drone and perform specific missions in Mars simulated conditions.",
    date: "1st February, 2025",
  },
  {
    name: "International Rover Design Challenge, 2025",
    description: "It is an online space engineering design and research competetion by Space Robotics Society.",
    date: "2nd February, 2025",
  },
]

export default function Competitions() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <>
    <div className="absolute inset-0 bg-black bg-opacity-10"></div>
    <section ref={ref} className="py-20 "
    
      style={{
        backgroundImage:"url('/upcomming_comp.png')",
        backgroundSize:'cover',
        backgroundAttachment:'fixed'
      }}>
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
              style={{backgroundColor:'rgb(31 41 55 / 85%)', borderRadius:'10px'}}
            >
              <h3 className="text-2xl font-bold mb-2">{competition.name}</h3>
              <p className="text-gray-300 mb-4">{competition.description}</p>
              <p className="text-red-500 font-semibold">{competition.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>

  )
}

