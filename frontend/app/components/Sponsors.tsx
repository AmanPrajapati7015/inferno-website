'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Marquee from './Marquee'

const sponsors_logo = [
    "/sponsors/nvidia_logo.jpg",
    "/sponsors/altium.png",
    "/sponsors/ansys_logo.png",
    "/sponsors/solidworks_logo.png",
    "/sponsors/indiacircuits.png",
    "/sponsors/neutronium.png",
    "/sponsors/69rigs.png",
  
  ];

export default function SponserSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className=" bg-gray-900" >
      <div style={{width:"100%"}}>
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Our Sponsors
        </motion.h2>
        <Marquee images={sponsors_logo}/>
        
      </div>
    </section>
  )
}


