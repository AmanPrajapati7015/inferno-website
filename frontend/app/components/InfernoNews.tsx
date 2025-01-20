'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const newsItems = [
  {
    title: "Qualified for the semi-finals in the International Rover Design Challenge",
    date: "Januray 5, 2024",
    description: "Inferno proudly secured a spot in the Top 12 at the International Rover Design Challenge (IRDC), showcasing innovation and engineering excellence on a global stage."
  },
  {
    title: "Inferno x Robolution",
    date: "January 20, 2025",
    description: "An informative seminar, in collaboration with Robolution Society, hosted at IGDTUW."
  },
  {
    title: "Inferno Secures Major Sponsorship",
    date: "January 13, 2024",
    description: "We're thrilled to announce a new partnership with Neutronium 3D, providing us with cutting-edge equipment for our rover."
  }
]

export default function InfernoNews() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false) // State to track hover status

  useEffect(() => {
    if (isPaused) return // Stop the interval when paused
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % newsItems.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isPaused]) // Re-run the effect when `isPaused` changes

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
          Inferno News
        </h2>
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)} // Pause on hover
          onMouseLeave={() => setIsPaused(false)} // Resume on leave
        >
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `${-activeIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {newsItems.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    className="bg-gray-800 rounded-lg p-6 h-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400 mb-4">{item.date}</p>
                    <p className="text-gray-300">{item.description}</p>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
          <div className="flex justify-center mt-8">
            {newsItems.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-2 ${
                  index === activeIndex ? 'bg-red-500' : 'bg-gray-500'
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
