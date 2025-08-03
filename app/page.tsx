"use client";

import { motion } from "framer-motion";
import { ContactSection } from "@/components/contactSection";
import { HomePage } from "@/components/Home";
import { ProjectsSection } from "@/components/projectSection";
import { ExperienceSection } from "@/components/experienceSection";
import { Footer } from "@/components/Footer";
import { EducationSection } from "@/components/educationSection";
import ClientOnly from "@/components/clientOnly";

// Animation variants for the sections
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
} as const;

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-white p-4 dark:bg-black">
      <div className="flex w-full max-w-6xl flex-col gap-24">
        
        {/* HomePage is no longer wrapped in motion.div, so it has no animation */}
        <HomePage />

        {/* All other sections are wrapped and will animate on scroll */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <ProjectsSection />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        > 
          <ClientOnly>
          <EducationSection />
          </ClientOnly>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        > 
          <ClientOnly>
          <ExperienceSection />
          </ClientOnly>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <ContactSection />
        </motion.div>
        
      </div>
      <Footer />
    </main>
  );
}