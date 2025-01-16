import { Instagram, Twitter, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-6 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400">© 2024 InfernoDTU. All rights reserved.</p>
            <p className="text-gray-500 mt-2">Desgined by Bipul, Made with love by Aman.</p>
          </div>
          <div className="flex space-x-4">
            <Link href="https://www.instagram.com/infernodtu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={24} />
            </Link>
            <Link href="https://twitter.com/infernodtu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={24} />
            </Link>
            <Link href="https://www.linkedin.com/company/infernodtu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

