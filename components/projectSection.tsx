"use client";

import { motion } from "framer-motion";
import CustomCard from "./custom-card"; // The updated card component
import { AnimatedGradientText } from "./magicui/animated-gradient-text";

// --- YOUR PROJECT DATA ---
const projects = [
  {
    title: "Startup Idea Validator",
    subtitle: "April 2025 - May 2025",
    description: "Startup Idea Validator is a full-stack web application that helps entrepreneurs validate their startup ideas using AI. It analyzes your idea based on key startup parameters like pitch, market, revenue model, and more — returning a detailed analysis, AI-powered score, and key improvements to enhance your pitch.",
    image: "/port3.png",
    imageAlt: "Startup Idea Preview",
    tags: ["Next.js", "TypeScript", "Prisma", "TailwindCSS", "Gemini"],
    buttonText: "View Project",
    buttonHref: "https://ai-startup-validator.vercel.app/",
  },
  {
    title: "PathAI",
    subtitle: "November 2024 - December 2024",
    description: "PathAI is a an, AI-powered career coach that help users generate cover letter, resumes and help them to prepare for quizzes.",
    image: "/project.png",
    imageAlt: "Analytics Dashboard preview",
    tags: ["Next.js", "Postgres", "Clerk", "Node.js", "Prisma", "Docker"],
    buttonText: "View Project",
    buttonHref: "https://path-ai-brown.vercel.app/",
  },
  {
    title: "RandomEcho",
    subtitle: "October 2024 - November 2024",
    description: "Anonymously Connect, Speak Freely with Random Echoes, A safe, private platform where your identity remains yours alone.",
    image: "/port4.png",
    imageAlt: "Anonymous Messaging Platform",
    tags: ["Next.js", "Zod", "TypeScript", "MongoDB", "Resend", "NextAuth"],
    buttonText: "View Project",
    buttonHref: "https://randomecho.onrender.com/",
  },
];

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
} as const;

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16 text-center">
          <AnimatedGradientText className={
                    // Base (light mode) styles
                    "text-sm font-medium mb-8 rounded-full  p-1 px-3 " +
                    // Dark mode overrides
                    "dark:border-neutral-700"
                  }>
                    🚀 Things I&apos;ve Built
                  </AnimatedGradientText>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            My Recent Work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Here are a few projects I&apos;ve worked on recently.
          </p>
        </div>

        <motion.div
          className="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={itemVariants}>
              <CustomCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}