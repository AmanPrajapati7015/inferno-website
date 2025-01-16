'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Sponsorship() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Sponsorship Opportunities
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Why Sponsor Us?</h3>
            <p className="text-gray-300">
              By sponsoring Inferno, you're investing in the future of space exploration and fostering innovation in robotics and AI. Your support helps us push the boundaries of what's possible in Mars rover technology.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Sponsorship Levels</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Platinum Sponsor: ₹500,000 and above</li>
              <li>Gold Sponsor: ₹250,000 - ₹499,999</li>
              <li>Silver Sponsor: ₹100,000 - ₹249,999</li>
              <li>Bronze Sponsor: Up to ₹99,999</li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors">
            Become a Sponsor
          </button>
        </motion.div>
      </div>
    </section>
  )
}

