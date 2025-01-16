'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface MissionSectionProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  reverse: boolean
}

export default function MissionSection({ title, description, imageSrc, imageAlt, reverse }: MissionSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-20 bg-gray-900">
      <div className={`container mx-auto px-6 flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}>
        <motion.div
          className="w-full md:w-1/2 mb-10 md:mb-0"
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <img src={imageSrc} alt={imageAlt} className="w-full h-auto rounded-lg shadow-lg" />
        </motion.div>
        <motion.div
          className={`w-full md:w-1/2 ${reverse ? 'md:pr-12' : 'md:pl-12'}`}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
            {title}
          </h2>
          <p className="text-lg text-gray-300">{description}</p>
        </motion.div>
      </div>
    </section>
  )
}

