'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const updates = [
  {
    title: 'Gearing Up for International Rover Challenge 2025',
    content: 'Final testing Ongoing for the various on site tasks to be held.',
    image: '/irc-tasks.jpg',
  },
  {
    title: 'IRDC Presentation Submitted for the semi-finals',
    content: 'A comprehensive approach on the given problem statement was submitted in the form of presentation which gave idea on how the Mother rover and Daughter Rover will behave under various parameters.',
    image: '/team-diversity.jpg',
  },
  {
    title: 'Mars Base Challenge 2025 submission completed',
    content: 'Comprehensive Concept report for starting and expanding a sustainable Mars habitat submitted as the result is awaited.  ',
    image: '/team-departure.jpg',
  },
]

export default function InteractiveUpdates() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-20 " 
    style={{
      backgroundImage: 'url("/latest_update_bg.jpg")',  
      backgroundSize: "cover", 
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}>
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Latest Updates
        </motion.h2>
        <div className="space-y-12">
          {updates.map((update, index) => (
            <motion.div
              key={update.title}
              className="flex flex-col md:flex-row items-center rounded-lg overflow-hidden"
              style={{backgroundColor: 'rgba(0, 0, 0,0.7)'}}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">{update.title}</h3>
                <p className="text-gray-300">{update.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

