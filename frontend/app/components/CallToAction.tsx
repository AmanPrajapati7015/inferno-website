'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

export default function CallToAction() {
  const [ref, inView] = useInView({
    triggerOnce: true, threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Support Us in Shaping the Future of Space Robotics!
        </motion.h2>
        <motion.p
          className="text-xl mb-8 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Join us on our mission to push the boundaries of Mars exploration technology.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/contact-us" >
            <button
              className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors inline-block mr-4"
            >
              Get in Touch
            </button>
          </Link>
          <Link href="/sponsorship" className="bg-transparent border-2 border-red-600 text-red-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-600 hover:text-white transition-colors inline-block">
            Sponsor Now
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

