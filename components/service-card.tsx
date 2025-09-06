"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface ServiceCardProps {
  price?: string
  index?: number
  icon?: "instagram" | "tiktok" | "facebook"
}

export function ServiceCard({ price = "$4", index = 0, icon = "instagram" }: ServiceCardProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1 },
    },
  }

  const getIcon = () => {
    switch (icon) {
      case "instagram":
        return (
          <svg className="w-6 h-6 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2c-2.716 0-3.056.012-4.123.06-1.064.049-1.791.218-2.427.465a4.88 4.88 0 00-1.77 1.153 4.897 4.897 0 00-1.153 1.772c-.247.636-.416 1.363-.465 2.427C2.012 8.944 2 9.284 2 12s.012 3.056.06 4.123c.049 1.064.218 1.791.465 2.427a4.915 4.915 0 001.153 1.772 4.88 4.88 0 001.77 1.153c.636.247 1.363.416 2.427.465 1.067.048 1.407.06 4.123.06s3.056-.012 4.123-.06c1.064-.049 1.791-.218 2.427-.465a4.89 4.89 0 001.77-1.153 4.904 4.904 0 001.153-1.772c.247-.636.416-1.363.465-2.427.048-1.067.06-1.407.06-4.123s-.012-3.056-.06-4.123c-.049-1.064-.218-1.791-.465-2.427a4.88 4.88 0 00-1.153-1.772 4.897 4.897 0 00-1.77-1.153c-.636-.247-1.363-.416-2.427-.465C15.056 2.012 14.716 2 12 2zm0 1.802c2.67 0 2.986.01 4.04.058.976.045 1.505.207 1.858.344.466.182.8.399 1.15.748.35.35.566.684.748 1.15.137.353.3.882.344 1.857.048 1.055.058 1.37.058 4.041 0 2.67-.01 2.986-.058 4.04-.045.976-.207 1.505-.344 1.858-.182.466-.399.8-.748 1.15-.35.35-.684.566-1.15.748-.353.137-.882.3-1.857.344-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-.976-.045-1.505-.207-1.858-.344a3.088 3.088 0 01-1.15-.748 3.098 3.098 0 01-.748-1.15c-.137-.353-.3-.882-.344-1.857-.048-1.055-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.045-.976.207-1.505.344-1.858.182-.466.399-.8.748-1.15.35-.35.684-.566 1.15-.748.353-.137.882-.3 1.857-.344 1.055-.048 1.37-.058 4.041-.058z" />
          </svg>
        )
      case "tiktok":
        return (
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 015.16-1.74V12.2a6.32 6.32 0 005.65 5.63V14.4a4.83 4.83 0 01-3.77-4.25V9.39a4.34 4.34 0 004.37 2.69V8.59a4.19 4.19 0 01-.59.05z" />
          </svg>
        )
      case "facebook":
        return (
          <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
        )
      default:
        return (
          <svg className="w-6 h-6 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2c-2.716 0-3.056.012-4.123.06-1.064.049-1.791.218-2.427.465a4.88 4.88 0 00-1.77 1.153 4.897 4.897 0 00-1.153 1.772c-.247.636-.416 1.363-.465 2.427C2.012 8.944 2 9.284 2 12s.012 3.056.06 4.123c.049 1.064.218 1.791.465 2.427a4.915 4.915 0 001.153 1.772 4.88 4.88 0 001.77 1.153c.636.247 1.363.416 2.427.465 1.067.048 1.407.06 4.123.06s3.056-.012 4.123-.06c1.064-.049 1.791-.218 2.427-.465a4.89 4.89 0 001.77-1.153 4.904 4.904 0 001.153-1.772c.247-.636.416-1.363.465-2.427.048-1.067.06-1.407.06-4.123s-.012-3.056-.06-4.123c-.049-1.064-.218-1.791-.465-2.427a4.88 4.88 0 00-1.153-1.772 4.897 4.897 0 00-1.77-1.153c-.636-.247-1.363-.416-2.427-.465C15.056 2.012 14.716 2 12 2zm0 1.802c2.67 0 2.986.01 4.04.058.976.045 1.505.207 1.858.344.466.182.8.399 1.15.748.35.35.566.684.748 1.15.137.353.3.882.344 1.857.048 1.055.058 1.37.058 4.041 0 2.67-.01 2.986-.058 4.04-.045.976-.207 1.505-.344 1.858-.182.466-.399.8-.748 1.15-.35.35-.684.566-1.15.748-.353.137-.882.3-1.857.344-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-.976-.045-1.505-.207-1.858-.344a3.088 3.088 0 01-1.15-.748 3.098 3.098 0 01-.748-1.15c-.137-.353-.3-.882-.344-1.857-.048-1.055-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.045-.976.207-1.505.344-1.858.182-.466.399-.8.748-1.15.35-.35.684-.566 1.15-.748.353-.137.882-.3 1.857-.344 1.055-.048 1.37-.058 4.041-.058z" />
          </svg>
        )
    }
  }

  const serviceNames = {
    instagram: "Buy Instagram Followers",
    tiktok: "Buy TikTok Followers",
    facebook: "Buy Facebook Likes",
  }

  const serviceName = serviceNames[icon] || "Buy Instagram Followers"

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      className="rounded-lg overflow-hidden"
    >
      <motion.div
        className="glass-effect p-6 rounded-lg shadow-sm hover:shadow-xl transition-all border border-white/10"
        whileHover={{
          y: -8,
          boxShadow: "0 20px 25px -5px rgba(124, 58, 237, 0.2), 0 10px 10px -5px rgba(124, 58, 237, 0.1)",
        }}
      >
        <div className="flex items-start justify-between mb-6">
          <motion.div
            className="bg-white/10 p-3 rounded-full shadow-md backdrop-blur-sm"
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {getIcon()}
          </motion.div>
          <motion.div
            className="bg-purple-500/20 px-2 py-1 rounded-full text-xs font-semibold text-purple-300"
            whileHover={{ scale: 1.05 }}
          >
            Best Seller
          </motion.div>
        </div>

        <h3 className="font-bold text-lg mb-2 text-white">{serviceName}</h3>

        <div className="mb-4">
          <div className="flex items-center mb-2">
            <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <p className="text-sm text-gray-300">High Quality</p>
          </div>
          <div className="flex items-center mb-2">
            <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <p className="text-sm text-gray-300">Fast Delivery</p>
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <p className="text-sm text-gray-300">24/7 Support</p>
          </div>
        </div>

        <div className="flex justify-between items-end">
          <p className="text-gray-300">
            From <span className="font-bold text-2xl text-purple-400">{price}</span>
          </p>
          <motion.button
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors flex items-center"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link href="/order" className="flex items-center">
              <span>Order</span>
              <motion.div
                animate={{ x: [0, 3, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                className="ml-1"
              >
                <ArrowRight size={16} />
              </motion.div>
            </Link>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}
