'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { EnvelopeIcon, CheckIcon } from '@heroicons/react/24/outline'

export default function EmailSignup() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsLoading(false)
    setIsSubmitted(true)
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setEmail('')
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="flex items-center justify-center bg-green-500/20 border border-green-500/30 rounded-2xl p-6 max-w-md mx-auto"
      >
        <CheckIcon className="w-6 h-6 text-green-400 mr-3" />
        <span className="text-green-400 font-medium">
          Thanks! You are on the waitlist.
        </span>
      </motion.div>
    )
  }

  return (
    <div className="max-w-md mx-auto">
      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
        Join the Waitlist
      </h3>
      <p className="text-gray-300 mb-6">
        Be the first to know when we launch. Get exclusive early access.
      </p>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-grow">
          <EnvelopeIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className={`px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-2xl transition-all duration-200 ${
            isLoading 
              ? 'opacity-70 cursor-not-allowed' 
              : 'hover:from-purple-600 hover:to-pink-600 hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105'
          }`}
        >
          {isLoading ? (
            <div className="flex items-center">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              Joining...
            </div>
          ) : (
            'Notify Me'
          )}
        </button>
      </form>
      
      <p className="text-xs text-gray-400 mt-4 text-center">
        No spam, unsubscribe at any time. We respect your privacy.
      </p>
    </div>
  )
} 