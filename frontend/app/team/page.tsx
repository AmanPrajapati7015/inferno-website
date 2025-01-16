'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const teamMembers = [
  { name: 'Jane Doe', role: 'Team Lead', image: '/placeholder-user.jpg' },
  { name: 'John Smith', role: 'Mechanical Engineer', image: '/placeholder-user.jpg' },
  { name: 'Alice Johnson', role: 'Software Engineer', image: '/placeholder-user.jpg' },
  { name: 'Bob Williams', role: 'Electrical Engineer', image: '/placeholder-user.jpg' },
  // Add more team members as needed
]

export default function Team() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h1
          className="text-4xl font-bold mb-12 text-center"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Meet Our Team
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

