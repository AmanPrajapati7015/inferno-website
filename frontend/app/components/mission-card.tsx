"use client"

import { Card, CardContent } from "../../ui/card"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface MissionCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function MissionCard({ icon: Icon, title, description }: MissionCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <Icon className="h-6 w-6 text-blue-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

