"use client"

import {
  CalendarDays,
  MapPin,
  DrillIcon as Drone,
  BotIcon as Robot,
  Rocket,
  Cog,
  FlaskRoundIcon as Flask,
  Satellite,
} from "lucide-react"
import { Card, CardContent } from "../../ui/card"
import { motion } from "framer-motion"
import { AnimatedRobot } from "../components/animated-robot"
import { ParticleBackground } from "../components/particle-background"
import { MissionCard } from "../components/mission-card"

export default function RoverChallenge() {
  return (
    <>

      <div className="min-h-screen relative overflow-hidden">
        <ParticleBackground />

        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center relative overflow-hidden">
          <div style={{ backgroundImage: "url('/irc_bg.png')" }}
            className="absolute inset-0 bg-cover bg-attach bg-center" />
          <motion.div
            className="text-center z-10 max-w-4xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-6xl font-bold mb-6 bg-clip-text "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              INTERNATIONAL ROVER DESIGN CHALLENGE - <span style={{ color: "#63caff" }}>2025</span>
            </motion.h1>
            <motion.p
              className="text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
             Challenging university students to conceptualise and design Next-Gen Rovers for exploration of extra-terrestrial bodies.
            </motion.p>
          </motion.div>
        </section>


        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-20 text-white/20"
        >
          <Rocket size={40} />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-20 text-white/20"
        >
          <Satellite size={40} />
        </motion.div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Event Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <CalendarDays className="h-8 w-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold">Date</h3>
                  <p>Feb 1, 2025</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <MapPin className="h-8 w-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold">Venue</h3>
                  <p>BITS Pilani, Goa, India</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <Drone className="h-8 w-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold">Brownie Points</h3>
                  <p>Think Creative</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">About the Competition</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
            Teams are supposed to carefully plan each sub-system of the Rover considering various extra-terrestrial parameters in design. This online research-oriented competition is designed for students to explore their mind and spark the innovative design thinking of individuals, free from constraints on available physical resources.             </p>
            {/* <p className="text-gray-600 mb-6">
            
The objective of the competition is to provide students with a real-world interdisciplinary engineering experience, combining practical engineering skills with soft skills, including business planning and project management. 
            </p> */}
          </div>
        </motion.section>

        {/* Missions Section */}
        <section>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            Competition Missions
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <MissionCard
              icon={Flask}
              title="Mission 1"
              description="Explore the unique region of the Moon near the Shiv Shakti Point"
              />
            <MissionCard
              icon={Robot}
              title="Mission 2"
              description="Conduct a visual reconnaissance of the region by navigating and traversing successfully
through the diferent terrains of this region."
            />
            <MissionCard
              icon={Cog}
              title="Mission 3"
              description="Conduct various scientific experiments (biological, geological, etc.) and analysis,
including in-situ analysis with the Rover for signs of microbial life, habitability, and
characteristics."
            />
            <MissionCard
              icon={Drone}
              title="Mission 4"
              description="Conduct various scientific experiments (biological, geological, etc.) and analysis,
including in-situ analysis with the Rover for signs of microbial life, habitability, and
characteristics."
            />

<MissionCard
              icon={Flask}
              title="Mission 5"
              description="Characterise surface and subsurface physical properties and mineralogical
composition of the layered landscape."
              />

<MissionCard
              icon={Flask}
              title="Mission 6"
              description="Characterise the climate and local weather of the landing site, and conduct an
aerobiology investigation."
              />
          </div>
        </section>
      </main>
    </>
  )
}
