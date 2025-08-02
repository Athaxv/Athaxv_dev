"use client"; // Animation requires this to be a client component

import Link from "next/link";
import { motion } from "framer-motion"; // 1. Import motion
import { Button } from "@/components/ui/button";
import { SpinningText } from "./magicui/spinning-text";
import { RainbowButton } from "./magicui/rainbow-button";
import { Italianno } from "next/font/google";

const italianno = Italianno({ subsets: ["latin"], weight: "400" });

// 2. Define animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Adds a 0.2s delay between each child animating in
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};


export function HomePage() {
  return (
    <section id="home" className="relative w-full overflow-hidden">
      <div className="absolute inset-0 -z-20 bg-repeat bg-[url('https://tailwindcss.com/_next/static/media/grid.83c34863.svg')] [mask-image:linear-gradient(to_bottom,white_10%,transparent_100%)] dark:[mask-image:linear-gradient(to_bottom,white_5%,transparent_100%)]" />

      <div className="container mx-auto flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-4 py-24 text-center md:min-h-screen">
        {/* 3. Apply animation variants to a motion.div wrapper */}
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible" // Use animate="visible" to trigger on page load
        >
          {/* 4. Wrap each element in a motion.div with itemVariants */}
          <motion.h1
            variants={itemVariants}
            className={`text-7xl font-bold tracking-tight text-foreground sm:text-9xl ${italianno.className}`}
          >
            Atharv Gaur
          </motion.h1>
          
          <motion.div variants={itemVariants} className="my-4">
            <SpinningText>Eat more • code more • sleep more •</SpinningText>
          </motion.div>
          
          <motion.p
            variants={itemVariants}
            className="mx-auto max-w-2xl text-lg leading-8 text-muted-foreground"
          >
            Hey, I specialize in full-stack development. My focus is on creating clean, efficient, and engaging digital products from concept to deployment.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex items-center justify-center gap-x-4"
          >
            <Button variant={'ghost'}>
              Get in Touch
            </Button>
            <RainbowButton href="#" variant={'outline'}>Resume</RainbowButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}