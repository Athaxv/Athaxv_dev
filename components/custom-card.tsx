"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import { RainbowButton } from "./magicui/rainbow-button"

interface CustomCardProps {
  title: string
  subtitle?: string
  description: string
  image?: string
  imageAlt?: string
  tags?: string[]
  buttonText?: string
  buttonHref?: string
  onButtonClick?: () => void
  className?: string
}

export default function CustomCard({
  title,
  subtitle,
  description,
  image,
  imageAlt = "Card image",
  tags = [],
  buttonText = "View Project", // Default text
  buttonHref = "#", // Default href
  onButtonClick,
  className = ""
}: CustomCardProps) {
  return (
    // 1. Added `flex h-full flex-col` to make the card a full-height flex container
    <Card className={cn(
      "w-full pt-0 max-w-sm overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg backdrop-blur-md transition-all duration-200 hover:shadow-xl dark:border-neutral-800 dark:bg-black/80 dark:shadow-xl dark:hover:shadow-2xl flex h-full flex-col",
      className
    )}>
      {/* Image section */}
      {image && (
        <div className="relative block h-40 w-full overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="transition-transform duration-200 hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      {/* Card header */}
      <CardHeader className="space-y-1">
        <div className="space-y-1">
          <CardTitle className="text-xl font-bold leading-tight text-neutral-900 dark:text-white">{title}</CardTitle>
          {subtitle && (
            <CardDescription className="text-sm font-medium text-neutral-500 dark:text-neutral-400">{subtitle}</CardDescription>
          )}
        </div>
      </CardHeader>

      {/* 2. Added `flex-grow` to the content to make it expand and push the footer down */}
      <CardContent className="flex-grow space-y-3 pt-0">
        <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 line-clamp-3">{description}</p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1 pt-0">
            {tags.map((tag, idx) => (
              <Badge key={idx} variant="secondary" className="rounded-lg text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      {/* 3. Placed the RainbowButton inside a CardFooter for proper structure and padding */}
      <CardFooter className="p-4 pt-0">
        <RainbowButton href={buttonHref} variant={'outline'} className="w-full">
            <div className="flex items-center justify-center gap-2">
              <ExternalLink className="h-4 w-4" />
              {buttonText}
            </div>
        </RainbowButton>
      </CardFooter>
    </Card>
  )
}