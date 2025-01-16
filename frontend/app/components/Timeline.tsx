'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const timelineEvents = [
  { year: 2020, title: "Team Formation", description: "Inferno was founded by a group of passionate engineering students." },
  { year: 2021, title: "First Prototype", description: "We completed our first rover prototype and participated in our first competition." },
  { year: 2022, title: "Major Upgrades", description: "Significant improvements were made to our rover's mobility and sensor systems." },
  { year: 2023, title: "International Recognition", description: "Inferno gained international recognition for innovative rover design." },
  { year: 2024, title: "Championship Victory", description: "We secured first place in a major international rover competition." }
]

export default function Timeline() {
  const [activeEvent, setActiveEvent] = useState(0)

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
          Inferno Timeline
        </h1>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-500" />
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className={`mb-8 flex justify-${index % 2 === 0 ? 'start' : 'end'}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={`relative w-1/2 p-6 bg-gray-800 rounded-lg cursor-pointer ${
                  activeEvent === index ? 'border-2 border-red-500' : ''
                }`}
                onClick={() => setActiveEvent(index)}
              >
                <div className="absolute top-6 w-6 h-6 rounded-full bg-red-500 shadow" style={{
                  [index % 2 === 0 ? 'right' : 'left']: '-44px'
                }} />
                <h3 className="text-2xl font-bold mb-2">{event.year}</h3>
                <h4 className="text-xl font-semibold mb-2">{event.title}</h4>
                <p className="text-gray-400">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

