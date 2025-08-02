"use client"

import { useState, useEffect } from "react"

interface StatusData {
  text: string
  color: string
  bgColor: string
  borderColor: string
}

const statusOptions: StatusData[] = [
  {
    text: "Available for work",
    color: "text-green-700 dark:text-green-300",
    bgColor: "bg-green-500/5 dark:bg-green-400/5",
    borderColor: "border-green-500/30 dark:border-green-400/30",
  },
  {
    text: "Building something cool",
    color: "text-blue-700 dark:text-blue-300",
    bgColor: "bg-blue-500/5 dark:bg-blue-400/5",
    borderColor: "border-blue-500/30 dark:border-blue-400/30",
  },
  {
    text: "Learning new tech",
    color: "text-purple-700 dark:text-purple-300",
    bgColor: "bg-purple-500/5 dark:bg-purple-400/5",
    borderColor: "border-purple-500/30 dark:border-purple-400/30",
  },
  {
    text: "Open to opportunities",
    color: "text-green-700 dark:text-green-300",
    bgColor: "bg-green-500/5 dark:bg-green-400/5",
    borderColor: "border-green-500/30 dark:border-green-400/30",
  },
  {
    text: "Coding right now",
    color: "text-orange-700 dark:text-orange-300",
    bgColor: "bg-orange-500/5 dark:bg-orange-400/5",
    borderColor: "border-orange-500/30 dark:border-orange-400/30",
  },
]

export default function LiveStatus() {
  const [currentStatus, setCurrentStatus] = useState(statusOptions[0])
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out
      setIsVisible(false)

      setTimeout(() => {
        // Change status
        const randomIndex = Math.floor(Math.random() * statusOptions.length)
        setCurrentStatus(statusOptions[randomIndex])

        // Fade in
        setIsVisible(true)
      }, 200)
    }, 7000) // Change every 6 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className={`flex items-center gap-2 px-3 py-1.5 border rounded-full backdrop-blur-sm transition-all duration-200 ${
        currentStatus.borderColor
      } ${currentStatus.bgColor} ${isVisible ? "opacity-100 scale-100" : "opacity-70 scale-95"}`}
    >
      <div className="relative">
        <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full"></div>
        <div className="absolute inset-0 w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-ping opacity-75"></div>
        <div className="absolute inset-0 w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-pulse"></div>
      </div>
      <span className={`text-xs font-medium whitespace-nowrap transition-colors duration-200 ${currentStatus.color}`}>
        {currentStatus.text}
      </span>
    </div>
  )
}
