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
import { cn } from "@/lib/utils" // Import cn for cleaner class merging

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
  buttonText,
  buttonHref,
  onButtonClick,
  className = ""
}: CustomCardProps) {
  return (
    <Card className={cn(
      // Base (Light Mode) Styles
      "w-full max-w-sm overflow-hidden pt-0 rounded-2xl border border-neutral-200 bg-white shadow-lg backdrop-blur-md transition-all duration-200 hover:shadow-xl",
      // Dark Mode Overrides
      "dark:border-neutral-800 dark:bg-black/80 dark:shadow-xl dark:hover:shadow-2xl",
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

      {/* Card content */}
      <CardContent className="space-y-3 pt-0">
        <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">{description}</p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1 pt-0">
            {tags.map((tag, idx) => (
              // The "secondary" variant handles theming automatically
              <Badge key={idx} variant="secondary" className="rounded-lg text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      {/* Footer Button */}
      {buttonText && (
        <CardFooter className="pb-4 pt-0">
          {buttonHref ? (
            <Button asChild className="w-full" variant="outline">
              <Link href={buttonHref} className="flex items-center gap-1.5 font-medium text-pink-500 hover:text-pink-600 dark:text-pink-400 dark:hover:text-pink-500">
                <ExternalLink className="h-4 w-4" />
                {buttonText}
              </Link>
            </Button>
          ) : (
            <Button onClick={onButtonClick} className="w-full" variant="outline">
              {buttonText}
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  )
}