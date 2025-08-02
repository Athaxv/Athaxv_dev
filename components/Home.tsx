import Link from "next/link";
// import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SpinningText } from "./magicui/spinning-text";
import { RainbowButton } from "./magicui/rainbow-button";
import { Italianno } from "next/font/google";

const italianno = Italianno({ subsets: ["latin"], weight: "400" });

export function HomePage() {
  return (
    // 1. A full-width section with a background grid for a modern SaaS feel.
    <section id="home" className="relative w-full overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 -z-20 bg-repeat bg-[url('https://tailwindcss.com/_next/static/media/grid.83c34863.svg')] [mask-image:linear-gradient(to_bottom,white_10%,transparent_100%)] dark:[mask-image:linear-gradient(to_bottom,white_5%,transparent_100%)]" />

      {/* 2. A container to center content and manage padding and height. */}
      <div className="container mx-auto flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-4 py-24 text-center md:min-h-screen">
        
        {/* Main Content Wrapper */}
        <div className="max-w-3xl">
          <h1 className={`text-7xl font-bold tracking-tight text-foreground sm:text-9xl ${italianno.className}`}>
            Atharv Gaur
          </h1>
          
          <div className="my-4">
            <SpinningText>Eat more • code more • sleep more •</SpinningText>
          </div>
          
          <p className="mx-auto max-w-2xl text-lg leading-8 text-muted-foreground">
            Hey, I specialize in full-stack development. My focus is on creating clean, efficient, and engaging digital products from concept to deployment.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-4">
            <Button variant={'ghost'}>
              Get in Touch
            </Button>
            <RainbowButton href="#">Resume</RainbowButton>
          </div>
        </div>
        
      </div>
    </section>
  );
}