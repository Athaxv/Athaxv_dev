"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { AnimatedGradientText } from "./magicui/animated-gradient-text";

// The data now focuses on the institution
const educationData = [
  {
    institution: "Maharaja Surajmal Institute of Technology",
    degree: "B.Tech. in Electronics and Communication Engineering",
    years: "2023 - 2027",
  },
  {
    institution: "A.S.N Senior Secondary School",
    degree: "High School",
    years: "2023",
  },
];

// Reusable component for each entry
function EducationItem({ institution, degree, years }) {
  return (
    <div className="relative flex pl-8">
      {/* Timeline node - themed */}
      <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-800">
        <GraduationCap className="h-3 w-3 text-neutral-600 dark:text-neutral-400" />
      </div>
      {/* Content */}
      <div className="flex w-full items-start justify-between">
        <div>
          {/* Text colors now adapt to the theme */}
          <h3 className="font-bold text-neutral-900 dark:text-white">{institution}</h3>
          <p className="text-neutral-600 dark:text-neutral-400">{degree}</p>
        </div>
        <p className="text-right text-sm text-neutral-500 dark:text-neutral-500">{years}</p>
      </div>
    </div>
  );
}

export function EducationSection() {
  return (
    <section id="education" className="w-full mb-40">
      {/* Section Header - themed */}
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-2">
          <AnimatedGradientText className={
  // Base (light mode) styles
  "text-sm font-medium mb-6 rounded-full  p-1 px-3 " +
  // Dark mode overrides
  "dark:border-neutral-700"
}>
  🎓 Academics & Qualifications
</AnimatedGradientText>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
          Education
        </h2>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
          My academic background and qualifications.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative mx-auto mt-12 max-w-3xl">
        {/* The vertical timeline line - themed */}
        <div className="absolute left-3 top-2 h-full w-0.5 bg-neutral-200 dark:bg-neutral-800" />
        
        <div className="space-y-10">
          {educationData.map((edu, index) => (
            <EducationItem
              key={index}
              institution={edu.institution}
              degree={edu.degree}
              years={edu.years}
            />
          ))}
        </div>
      </div>
    </section>
  );
}