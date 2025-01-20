'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const benefits = [
  { title: 'Drive Innovation', description: 'Be at the forefront of space robotics technology' },
  { title: 'Global Visibility', description: 'Showcase your brand on our rover and in international competitions' },
  { title: 'Talent Pipeline', description: 'Connect with top engineering talent for future recruitment' },
]

export default function SponsorshipAppeal() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="sponsorship" ref={ref} className="py-20" style={{backgroundColor: 'rgb(19, 24, 30)'}}>
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Why Partner With Us?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="bg-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="/brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors inline-block"
          >
            Explore Our Sponsorship Brochure
          </a>
        </motion.div>
      </div>
    </section>
  )
}

