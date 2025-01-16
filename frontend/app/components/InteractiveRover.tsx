'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function InteractiveRover() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [rotation, setRotation] = useState(0)

  const moveRover = (direction: 'up' | 'down' | 'left' | 'right') => {
    setPosition(prev => {
      switch (direction) {
        case 'up': return { ...prev, y: prev.y - 10 }
        case 'down': return { ...prev, y: prev.y + 10 }
        case 'left': return { ...prev, x: prev.x - 10 }
        case 'right': return { ...prev, x: prev.x + 10 }
      }
    })
  }

  const rotateRover = (degrees: number) => {
    setRotation(prev => prev + degrees)
  }

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
          Interactive Rover
        </h1>
        <div className="flex flex-col items-center">
          <div className="w-64 h-64 bg-gray-800 rounded-lg relative mb-8">
            <motion.img
              src="/rover.jpg"
              alt="Interactive Rover"
              className="w-32 h-32 absolute"
              style={{
                top: '50%',
                left: '50%',
              }}
              animate={{
                x: position.x,
                y: position.y,
                rotate: rotation,
              }}
              transition={{ type: 'spring', stiffness: 100 }}
            />
          </div>
          <div className="grid grid-cols-3 gap-2 mb-4">
            <button onClick={() => moveRover('up')} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Up</button>
            <button onClick={() => rotateRover(-45)} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Rotate Left</button>
            <button onClick={() => rotateRover(45)} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Rotate Right</button>
            <button onClick={() => moveRover('left')} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Left</button>
            <button onClick={() => moveRover('down')} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Down</button>
            <button onClick={() => moveRover('right')} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Right</button>
          </div>
        </div>
      </div>
    </div>
  )
}

