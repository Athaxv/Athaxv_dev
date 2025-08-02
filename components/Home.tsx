import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export function HomePage() {
  return (
    <section className="relative w-full overflow-hidden bg-background">
      {/* Background Grid Pattern & Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(40%_120%_at_50%_0%,hsl(var(--primary)/0.1),transparent_40%)]" />
      <div className="absolute inset-0 -z-20 bg-repeat bg-[url('https://tailwindcss.com/_next/static/media/grid.83c34863.svg')] [mask-image:linear-gradient(to_bottom,white_10%,transparent_100%)] dark:[mask-image:linear-gradient(to_bottom,white_5%,transparent_100%)]" />

      <div className="container mx-auto px-4 lg:px-8 py-24 sm:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Column: Text Content & CTAs */}
          <div className="max-w-xl text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Crafting Digital Experiences that Inspire
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Hi, I'm [Your Name]. A passionate developer and designer building beautiful, functional, and user-centric web applications.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-4 lg:justify-start">
              <Button asChild size="lg">
                <Link href="#contact">Get in Touch</Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="group">
                <Link href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Bento Grid using Cards */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <Card className="col-span-2 row-span-1">
              <CardHeader>
                <CardTitle>Featured Project</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  A web application for real-time data visualization built with the latest technologies.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  React, Next.js, TypeScript, and Node.js
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Currently open to new freelance and full-time opportunities.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}