'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const achievements = [
  {
    year: '2024',
    title: 'First Place in University Rover Challenge',
    description: 'Our team secured the top position in the prestigious University Rover Challenge, showcasing our rover\'s exceptional capabilities.'
  },
  {
    year: '2023',
    title: 'Best Innovation Award',
    description: 'Received recognition for our groundbreaking AI-driven navigation system at the International Conference on Robotics and Automation.'
  },
  {
    year: '2022',
    title: 'NASA Space Apps Challenge Winner',
    description: 'Our team\'s innovative solution for Martian resource utilization won first place in the global NASA Space Apps Challenge.'
  },
  {
    year: '2021',
    title: 'Patent for Novel Wheel Design',
    description: 'Successfully patented our unique wheel design, optimized for traversing challenging Martian terrain.'
  },
  {
    year: '2020',
    title: 'Best Technical Paper',
    description: 'Our research on advanced power systems for Mars rovers was awarded the Best Technical Paper at the International Astronautical Congress.'
  }
]

export default function Achievements() {
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
          Our Achievements
        </motion.h1>
        <div className="space-y-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.year}
              className="flex flex-col md:flex-row items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="md:w-1/4">
                <span className="text-3xl font-bold text-red-500">{achievement.year}</span>
              </div>
              <div className="md:w-3/4 mt-4 md:mt-0">
                <h3 className="text-2xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-gray-300">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

