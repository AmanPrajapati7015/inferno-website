'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Linkedin } from 'lucide-react'
import Link from 'next/link'

const teamMembers = [
  {
    name: 'Garvit Jain',
    role: 'Team Lead and Mechanical Lead',
    image: '/photosenior/garvit.jpg',
    linkedin: 'https://www.linkedin.com/in/janedoe',
    // bio: 'Jane is an experienced robotics engineer with a passion for Mars exploration.'
  },
  {
    name: 'Rachit Sharma',
    role: 'Team Manager',
    image: '/photosenior/rachit.jpeg',
    // linkedin: 'https://www.linkedin.com/in/bobwilliams',
    // bio: 'Bob designs power systems and communication modules for our rover.'
  },

  {
    name: 'Samriddh Sinha',
    role: 'Vice Captain and Science Lead',
    image: '/photosenior/samriddh.jpg',
    linkedin: 'https://www.linkedin.com/in/bobwilliams',
    // bio: 'Bob designs power systems and communication modules for our rover.'
  },

  {
    name: 'Hitesh Nanda',
    role: 'Team Treasurer',
    image: '/photosenior/hitesh.jpg',
    linkedin: 'https://www.linkedin.com/in/bobwilliams',
    // bio: 'Bob designs power systems and communication modules for our rover.'
  },

  {
    name: 'Ayush Yadav',
    role: 'Electrical Lead',
    image: '/photosenior/aayush.jpg',
    linkedin: 'https://www.linkedin.com/in/bobwilliams',
    // bio: 'Bob designs power systems and communication modules for our rover.'
  },
  {
    name: 'Anshumaan',
    role: 'Software Lead',
    image: '/photosenior/anshuman.jpg',
    linkedin: 'https://www.linkedin.com/in/johnsmith',
    // bio: 'John specializes in designing robust mechanical systems for extreme environments.'
  },
  {
    name: 'Satyam Gupta',
    role: 'Autonomus Lead',
    image: '/photosenior/satyam.jpg',
    linkedin: 'https://www.linkedin.com/in/alicejohnson',
    // bio: 'Alice is an AI expert, focusing on autonomous navigation systems.'
  },
]


export default function Team() {


  return (
    <>
      <div
        className="h-screen bg-cover bg-center bg-no-repeat"
        style={{
          width: "100%",
          height: "90vh",
          backgroundImage: "url('/our-team-banner.jpg')",
          backgroundAttachment: "fixed",
        }}
      >
      </div>
      <div className='bg-gray-900 p-5'>
        <Block heading="Core Members" teamMembers={teamMembers} />
        {/* <Block heading="Junior Members" teamMembers={teamMembers} /> */}
      </div>
    </>

  )
}



function Block({ teamMembers, heading }) {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  return (

    <section id="team" ref={ref} className="my-20">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {heading}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative">
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <p className="text-sm text-gray-300">{member.role}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-400 mb-4">{member.bio}</p>
                <Link
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Linkedin size={20} className="mr-2" />
                  Connect on LinkedIn
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  )

}