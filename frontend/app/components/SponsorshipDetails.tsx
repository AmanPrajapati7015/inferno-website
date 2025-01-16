'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const sponsorshipLevels = [
  { name: 'Platinum', amount: '₹500,000 and above', benefits: ['Large logo on rover', 'Prominent website placement', 'VIP access to all events', 'Personalized team demonstration'] },
  { name: 'Gold', amount: '₹250,000 - ₹499,999', benefits: ['Medium logo on rover', 'Website recognition', 'Invitation to special events', 'Team merchandise package'] },
  { name: 'Silver', amount: '₹100,000 - ₹249,999', benefits: ['Small logo on rover', 'Website mention', 'Team updates and newsletter', 'Certificate of appreciation'] },
  { name: 'Bronze', amount: 'Up to ₹99,999', benefits: ['Name listed on website', 'Team updates and newsletter', 'Social media shoutout'] },
]

export default function SponsorshipDetails() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h1
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Sponsorship Opportunities
        </motion.h1>
        <motion.p
          className="text-xl mb-12 text-center text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Join us in our mission to push the boundaries of Mars exploration. Your support can make a significant impact on the future of space robotics.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sponsorshipLevels.map((level, index) => (
            <motion.div
              key={level.name}
              className="bg-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-4">{level.name} Sponsor</h2>
              <p className="text-xl mb-4 text-red-500">{level.amount}</p>
              <ul className="list-disc list-inside text-gray-300">
                {level.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="mailto:sponsor@inferno.com"
            className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors inline-block"
          >
            Become a Sponsor
          </a>
        </motion.div>
      </div>
    </section>
  )
}

