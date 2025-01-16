'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const labAreas = [
  {
    name: "Mechanical Workshop",
    description: "Where we design and build the rover's chassis and mechanical components.",
    image: "/mechanical-workshop.jpg"
  },
  {
    name: "Electronics Lab",
    description: "Home to our circuit design and embedded systems development.",
    image: "/electronics-lab.jpg"
  },
  {
    name: "Software Development Center",
    description: "Where our AI and control systems come to life.",
    image: "/software-center.jpg"
  },
  {
    name: "Testing Arena",
    description: "A simulated Martian environment for putting our rover through its paces.",
    image: "/testing-arena.jpg"
  }
]

export default function VirtualLab() {
  const [activeArea, setActiveArea] = useState(0)

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
          Virtual Lab Tour
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <motion.div
            className="w-full md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={labAreas[activeArea].image}
              alt={labAreas[activeArea].name}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
          <div className="w-full md:w-1/2 md:pl-8">
            <h2 className="text-2xl font-bold mb-4">{labAreas[activeArea].name}</h2>
            <p className="text-gray-400 mb-6">{labAreas[activeArea].description}</p>
            <div className="flex flex-wrap gap-4">
              {labAreas.map((area, index) => (
                <motion.button
                  key={index}
                  className={`px-4 py-2 rounded-full ${
                    activeArea === index ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-300'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveArea(index)}
                >
                  {area.name}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

