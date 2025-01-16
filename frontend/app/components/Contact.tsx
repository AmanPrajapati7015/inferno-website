'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h2>
        <motion.form
          className="max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          action="https://api.web3forms.com/submit" 
          method="POST"
        >
          <input type="hidden" name="access_key" value="d9941202-0c79-4d8e-8c35-f87fa983ae92"/>
          <input type="checkbox" name="botcheck" className="hidden" style={{display:"none"}}/>
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>

      <div className="container mx-auto px-6">
        <Details/>
      </div>
    </section>
  )
}

function Details(){
  return(
    <>
    <div className="bg-grey-900 flex flex-col p-6 mt-5 md:flex-row md:p-12 ">
      {/* Left Side: Contact Info */}
      <div className="md:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="mb-2">
          <span className="font-semibold">Address:</span> 123 Main Street, New York, NY 10001
        </p>
        <p className="mb-2">
          <span className="font-semibold">Phone:</span> +1 (123) 456-7890
        </p>
        <p className="mb-2">
          <span className="font-semibold">Email:</span> info@example.com
        </p>
        <p>
          <span className="font-semibold">Working Hours:</span> Mon - Fri: 9:00 AM - 6:00 PM
        </p>
      </div>

      {/* Right Side: Google Map */}
      <div className=" md:w-1/2 h-64 md:h-auto mt-6 md:mt-0">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.05214429754858!2d77.11875441192852!3d28.75104791457612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01bb7d82cf9f%3A0xcc023687815559e8!2sInferno%20Workshop!5e0!3m2!1sen!2sin!4v1736974993075!5m2!1sen!2sin" 
        width="100%" 
        height="300" 
        style={{border:'0'}} 
        loading="lazy" ></iframe>
      </div>
    </div>
    </>
  )
}

