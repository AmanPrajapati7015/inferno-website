'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        style={{backgroundAttachment: "fixed"}}
        className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vecteezy_mars-surface-mountains-on-mars-background-red-planet_28833002.jpg-R8QKUQ5JqJUxKZ3VnIJ5LYsoeDbZOF.jpeg')] bg-cover bg-center opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      <motion.div
        className="text-center z-10 max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className=" text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">Fuel the Future of Space </span>
           <span className=" text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">Robotics with </span>
          <span className="text-white">Team Inferno</span>
        </motion.h1>
        <motion.p
          className="text-2xl mb-8 text-white-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Mars Rover Team of Delhi Technological University 
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="space-x-4">
            <button
              onClick={() => {
                document.getElementById('sponsorship')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all"
            >
              Partner With Us
            </button>
            <Link href="/mission">
              <motion.button
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Mission
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  )
}

