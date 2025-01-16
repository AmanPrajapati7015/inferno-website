'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const tasks = [
  { name: 'Navigation', description: 'Autonomous navigation through challenging Martian terrain' },
  { name: 'Autonomous Operations', description: 'Performing complex tasks without human intervention' },
  { name: 'Science Missions', description: 'Conducting geological surveys and sample collection' },
]

export default function IRC2025() {
  const [activeTask, setActiveTask] = useState(0)

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
          About IRC 2025
        </h2>
        <p className="text-xl mb-8 text-center">
          The International Rover Challenge 2025 is the premier global competition for university teams to showcase their Mars rover designs and capabilities.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src="/irc-2025.jpg" alt="IRC 2025" className="w-full h-auto rounded-lg shadow-lg" />
          </motion.div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Key Tasks</h3>
            {tasks.map((task, index) => (
              <motion.div
                key={task.name}
                className={`mb-4 p-4 rounded-lg cursor-pointer transition-all ${
                  activeTask === index ? 'bg-red-600' : 'bg-gray-800'
                }`}
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveTask(index)}
              >
                <h4 className="text-xl font-semibold">{task.name}</h4>
                <p className="text-gray-300">{task.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

