'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const achievements = [
  {
    year: '2024',
    title: 'Best Project Management in IRC 2024',
    description: 'Received Award for  Best Project Management in the International Rover Challenge 2024 and bagged 4th position globally.'
  },
  {
    year: '2023',
    title: 'Best Project Management IRC 2023',
    description: 'Participated and recieved award for “Best Project Management” in International Rover Challenge 2023 held at Presidency University, Yelehanka, Bangalore, India.'
  },
  {
    year: '2023',
    title: 'Ranked 8th in International Rover Design',
    description: 'Ranked 8th in International Rover Design Challenge 2023 organised by Space Robotic Society.'
  },
  {
    year: '2022',
    title: 'Ranked 8th in European Rover Challenge',
    description: 'Ranked 8th in European Rover Challenge 2022 Remote Edition.'
  },
  {
    year: '2022',
    title: 'Ranked 10th in International Rover Design',
    description: 'Ranked 10th in International Rover Design Challenge 2022 organised by Space Robotics Society. '
  },
  {
    year: "2022",
    title: '  "Ranked 26th in University Rover Challenge",',
    description: 'Ranked 26th in University Rover Challenge 2022 at Mars Desert Research Center, Utah, USA.'
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

