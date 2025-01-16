'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const achievements = [
  { title: 'Global Recognition', description: 'Ranked among top 10 rover teams worldwide' },
  { title: 'Innovation Awards', description: '3 patents filed for novel rover technologies' },
  { title: 'Interdisciplinary Expertise', description: 'Team members from 5 different engineering disciplines' },
]

export default function TeamAchievements() {
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
          Team Achievements & Contributions
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className="bg-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-2">{achievement.title}</h3>
              <p className="text-gray-300">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <img src="/team-photo.jpg" alt="Inferno Team" className="w-full max-w-3xl mx-auto rounded-lg shadow-lg" />
        </motion.div>
      </div>
    </section>
  )
}

