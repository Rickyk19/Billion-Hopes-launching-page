'use client'

import { useState, useEffect } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer() {
  // Set launch date to 30 days from now
  const launchDate = new Date()
  launchDate.setDate(launchDate.getDate() + 30)
  
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = launchDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [launchDate])

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ]

  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
      {timeUnits.map(({ label, value }) => (
        <div
          key={label}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 min-w-[80px] sm:min-w-[100px]"
        >
          <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
            {value.toString().padStart(2, '0')}
          </div>
          <div className="text-sm sm:text-base text-gray-300 uppercase tracking-wide">
            {label}
          </div>
        </div>
      ))}
    </div>
  )
} 