"use client"
import Image from "next/image";
import { MagicCard } from "./magicui/magic-card";
import { useTheme } from "next-themes";
import { AnimatedGradientText } from "./magicui/animated-gradient-text";

interface ExperienceProps {
  company: string,
  role: string,
  duration: string,
  logoSrc: string
}

// Reusable component for each job entry
function ExperienceItem({ company, role, duration, logoSrc }: ExperienceProps) {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-4">
        <Image 
          src={logoSrc} 
          height={40} 
          width={40} 
          className="rounded-md" 
          alt={`${company} logo`}
        />
        <div>
          <h3 className="text-lg font-bold text-foreground">{company}</h3>
          <p className="text-muted-foreground">{role}</p>
        </div>
      </div>
      <div className="text-right text-muted-foreground">
        <p>{duration}</p>
      </div>
    </div>
  );
}


export function ExperienceSection() {
  const {theme} = useTheme()
  return (
    <section id="experience" className="w-full">
      <div className="mx-auto max-w-4xl text-center">
        <AnimatedGradientText className={
          // Base (light mode) styles
          "text-sm font-medium mb-8 rounded-full  p-1 px-3 " +
          // Dark mode overrides
          "dark:border-neutral-700"
        }>
          💼 Professional Journey
        </AnimatedGradientText>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Experience
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          My professional journey and key roles.
        </p>
      </div>
      
      <div className="mx-auto flex flex-col mt-16 max-w-4xl space-y-6 rounded-2xl p-6">
      <MagicCard
              gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
              className="p-4"
            >
        <ExperienceItem 
          company="Imperial IT solution" 
          role="IT Intern" 
          duration="June 2025 - Aug 2025"
          logoSrc="/intern.jpeg" // Make sure this path is correct
        />
        </MagicCard>
        <MagicCard
              gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
              className="p-4"
            >
        <ExperienceItem 
          company="NICSI" 
          role="FullStack Developer Intern" 
          duration="July 2025 - Aug 2025"
          logoSrc="/image.webp" // Make sure this path is correct
        />
        </MagicCard>
        {/* You can add more ExperienceItem components here for other jobs */}
        {/* <ExperienceItem 
          company="Another Company" 
          role="Frontend Developer" 
          duration="Jan 2024 - June 2025"
          logoSrc="/another-logo.png"
        />
        */}
        
      </div>
      <p className="flex justify-center items-center mt-16 text-gray-400 mb-20">And many more to come..</p>
    </section>
  );
}