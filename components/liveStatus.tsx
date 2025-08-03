"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils" // Assumes you have this from shadcn/ui

interface StatusData {
  text: string
  // 1. We now store the actual color values
  color: string
  bgColor: string
  borderColor: string
  dotColor: string
}

// HSL colors are great for this, as we can easily control opacity
const statusOptions: StatusData[] = [
  {
    text: "Available for work",
    color: "hsl(143, 76%, 36%)", // green-700
    bgColor: "hsla(143, 76%, 36%, 0.05)",
    borderColor: "hsla(143, 76%, 36%, 0.3)",
    dotColor: "hsl(142, 71%, 45%)", // green-500
  },
  {
    text: "Building something cool",
    color: "hsl(221, 83%, 53%)", // blue-700
    bgColor: "hsla(221, 83%, 53%, 0.05)",
    borderColor: "hsla(221, 83%, 53%, 0.3)",
    dotColor: "hsl(221, 83%, 53%)", // blue-500
  },
  {
    text: "Learning new tech",
    color: "hsl(262, 83%, 58%)", // purple-700
    bgColor: "hsla(262, 83%, 58%, 0.05)",
    borderColor: "hsla(262, 83%, 58%, 0.3)",
    dotColor: "hsl(262, 83%, 58%)", // purple-500
  },
  {
    text: "Doing Leetcode",
    color: "hsl(35, 91%, 54%)", // orange-700
    bgColor: "hsla(35, 91%, 54%, 0.05)",
    borderColor: "hsla(35, 91%, 54%, 0.3)",
    dotColor: "hsl(25, 95%, 53%)", // orange-500
  },
  {
    // New "Sleeping" status 😴
    text: "Sleeping right now",
    color: "hsl(0, 72%, 51%)", // red-700
    bgColor: "hsla(0, 84%, 60%, 0.05)",
    borderColor: "hsla(0, 84%, 60%, 0.3)",
    dotColor: "hsl(0, 84%, 60%)", // red-500
  }
]

export default function LiveStatus() {
  const [currentStatus, setCurrentStatus] = useState(statusOptions[0])
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)

      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * statusOptions.length)
        setCurrentStatus(statusOptions[randomIndex])
        setIsVisible(true)
      }, 300) 
    }, 5000) 

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      // 2. Apply the colors via CSS variables
      style={{
        '--bg-color': currentStatus.bgColor,
        '--border-color': currentStatus.borderColor,
        '--dot-color': currentStatus.dotColor,
        '--text-color': currentStatus.color,
      } as React.CSSProperties}
      className={cn(
        "flex items-center gap-2 rounded-full border px-3 py-1.5 backdrop-blur-sm transition-all duration-300",
        "bg-[var(--bg-color)] border-[var(--border-color)]", // Use the variables
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      )}
    >
      <div className="relative">
        {/* 3. The dot now uses the CSS variable for its background color */}
        <div className="h-2 w-2 rounded-full bg-[var(--dot-color)]"></div>
        <div className="absolute inset-0 h-2 w-2 animate-ping rounded-full opacity-75 bg-[var(--dot-color)]"></div>
        <div className="absolute inset-0 h-2 w-2 animate-pulse rounded-full bg-[var(--dot-color)]"></div>
      </div>
      <span className="text-xs font-medium whitespace-nowrap text-[var(--text-color)]">
        {currentStatus.text}
      </span>
    </div>
  )
}