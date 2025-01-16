'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'Mission', path: '/mission' },
  { name: 'About Rover', path: '/about-rover' },
  { name: 'Achievements', path: '/achievements' },
  { name: 'Our Team', path: '/our-team' },
  { name: 'Sponsorship', path: '/sponsorship' },
  { name: 'Contact us', path: '/contact-us' },
  {
    name: 'More',
    submenu: [
      { name: 'Timeline', path: '/timeline' },
      { name: 'Community', path: '/community' }
    ],
  },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glassmorphism py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500"
          whileHover={{ scale: 1.05 }}
        >
          <Link href="/">Inferno</Link>
        </motion.div>
        <ul className="flex space-x-6 items-center">
          {menuItems.map((item) => (
            <motion.li key={item.name} whileHover={{ scale: 1.05 }}>
              {item.submenu ? (
                <div className="relative">
                  <button
                    className="text-sm font-medium hover:text-red-600 transition-colors flex items-center"
                    onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                  {isSubmenuOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.path}
                          className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link href={item.path} className="text-sm font-medium hover:text-red-600 transition-colors">
                  {item.name}
                </Link>
              )}
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}

