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
    <Card className={
      `w-full pt-0 bg-black max-w-sm overflow-hidden rounded-2xl shadow-xl  backdrop-blur-md
      border border-neutral-800 transition-all duration-200 hover:shadow-2xl  ${className}`
    }>
      {/* Image section */}
      {image && (
        <div className="relative h-40 w-full overflow-hidden block">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className=" transition-transform duration-200 hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      {/* Card header */}
      <CardHeader className="space-y-1">
        <div className="space-y-1">
          <CardTitle className="text-2xl md:text-xl font-bold leading-tight text-white">{title}</CardTitle>
          {subtitle && (
            <CardDescription className="text-sm font-medium text-neutral-400">{subtitle}</CardDescription>
          )}
        </div>
      </CardHeader>

      {/* Card content */}
      <CardContent className="space-y-3 pt-0">
        <p className="text-sm text-neutral-300 leading-relaxed">{description}</p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1 pt-0">
            {tags.map((tag, idx) => (
              <Badge
                key={idx}
                variant="secondary"
                className="rounded-lg text-xs px-2 py-1 bg-neutral-800 text-neutral-200 border border-neutral-700"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      {/* Footer Button */}
      {buttonText && (
        <CardFooter className="pt-0 pb-2">
          {buttonHref ? (
            <Button asChild className="w-full bg-transparent border-2 border-neutral-700 hover:border-pink-500" variant="outline">
              <Link href={buttonHref} className="flex items-center gap-1 font-medium text-pink-400">
                <ExternalLink className="w-4 h-4" />
                {buttonText}
              </Link>
            </Button>
          ) : (
            <Button onClick={onButtonClick} className="w-full bg-transparent border-2 border-neutral-700" variant="outline">
              {buttonText}
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  )
}
