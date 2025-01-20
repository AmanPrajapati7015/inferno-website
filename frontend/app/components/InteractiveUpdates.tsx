'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const updates = [
  {
    title: 'IRC 2025 Tasks and Missions',
    content: 'Our team is gearing up for the challenging tasks at IRC 2025, including autonomous navigation, sample collection, and equipment servicing.',
    image: '/irc-tasks.jpg',
  },
  {
    title: 'Team Participation',
    content: 'Inferno boasts a diverse team of 30 members from various engineering disciplines, including Mechanical, Electrical, and Computer Science.',
    image: '/team-diversity.jpg',
  },
  {
    title: 'Team Departure',
    content: 'The Inferno team is set to depart for IRC 2025 on July 1st, 2025. Follow our journey as we represent our university on the global stage!',
    image: '/team-departure.jpg',
  },
]

export default function InteractiveUpdates() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-20 " style={{backgroundColor: 'rgb(19, 24, 30)'}}>
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Latest Updates
        </motion.h2>
        <div className="space-y-12">
          {updates.map((update, index) => (
            <motion.div
              key={update.title}
              className="flex flex-col md:flex-row items-center bg-gray-800 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={update.image} alt={update.title} className="w-full md:w-1/3 h-64 object-cover" />
              <div className="p-6 md:w-2/3">
                <h3 className="text-2xl font-bold mb-2">{update.title}</h3>
                <p className="text-gray-300">{update.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

