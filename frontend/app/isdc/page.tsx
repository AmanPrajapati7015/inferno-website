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
              INTERNATIONAL SPACE DRONE CHALLENGE - <span style={{ color: "#63caff" }}>2025</span>
            </motion.h1>
            <motion.p
              className="text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
             Challenging university students to conceptualise, design, develop and operate an astronaut-assistive next-generation space drone and perform specific missions in Mars simulated conditions. 
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
                  <p>Jan 31 - Feb 2, 2025</p>
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
                  <h3 className="font-semibold">New Feature</h3>
                  <p>Onboard Science Module</p>
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
            Space drones provide multiple advantages over rovers, such as better reach and range. It is easier for drones to reach places off-limit to the rovers. In addition to solo exploration, the drones can act as wings to the rover and explore together. 
            </p>
            <p className="text-gray-600 mb-6">
            The objective of the competition is to provide students with a real-world interdisciplinary engineering experience, combining practical engineering skills with soft skills, including business planning and project management. 
            </p>
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
              title="Mission 1: SCIENCE MISSION"
              description="The mission involves deploying drones to collect atmospheric data and detailed images from three locations at different elevations, simulating Martian conditions. Teams will analyze and compare findings with Mars' atmosphere and present their results to judges."
              />
            <MissionCard
              icon={Robot}
              title="Mission 2: NAVIGATION MISSION"
              description="The drone will guide a fictitious Mars rover to optimal paths while avoiding obstacles like craters, rocks, and loose soil. It must locate orange marker cones (up to 400m from the base station) and map the best routes, earning points for marker identification and path planning."
            />
            <MissionCard
              icon={Cog}
              title="Mission 3: PIMA"
              description="Teams will present their drone development journey to judges, focusing on system engineering, project management, and lessons learned. The presentation will include planning, manufacturing, testing, and potential spin-offs, with opportunities for judges to ask detailed questions."
            />
            {/* <MissionCard
              icon={Drone}
              title="Mission 4: AutEx"
              description="Autonomous Mission: The rover is required to traverse between markers across moderately rugged terrain autonomously using arrow signs. Teleoperation is not allowed in this mission."
            /> */}
          </div>
        </section>
      </main>
    </>
  )
}
