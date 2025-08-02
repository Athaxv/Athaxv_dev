"use client"; // Required for Framer Motion and client-side interactions

import { motion } from "framer-motion";
import CustomCard from "./custom-card"; // Assuming CustomCard is in the same folder

// --- YOUR PROJECT DATA ---
// Organized into a clean, maintainable array
const projects = [
  {
    title: "Chat Collect",
    subtitle: "Jan 2024 - Feb 2024",
    description: "With the release of the OpenAI GPT Store, I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    image: "/port2.png",
    imageAlt: "Chat Collect application preview",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "TailwindCSS", "Stripe", "Shadcn UI", "Magic UI"],
    buttonText: "Website",
    buttonHref: "https://example.com",
  },
  {
    title: "Portfolio Platform", // Changed title for variety
    subtitle: "Mar 2024 - Apr 2024",
    description: "A dynamic and animated portfolio template designed for developers and designers to showcase their work with elegance and a modern user experience.",
    image: "/port1.png",
    imageAlt: "Portfolio Platform preview",
    tags: ["Next.js", "Framer Motion", "Shadcn UI", "TailwindCSS"],
    buttonText: "Website",
    buttonHref: "https://example.com",
  },
  {
    title: "Analytics Dashboard", // Changed title for variety
    subtitle: "May 2024 - June 2024",
    description: "An analytics dashboard that provides deep insights into user behavior and product performance, built with a focus on data visualization and clarity.",
    image: "/images/chat-collect-preview.png", // Using existing image as placeholder
    imageAlt: "Analytics Dashboard preview",
    tags: ["React", "Vite", "Chart.js", "Node.js"],
    buttonText: "Website",
    buttonHref: "https://example.com",
  },
];

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // Delay between each child animation
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            My Recent Work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Here are a few projects I've worked on recently.
          </p>
        </div>

        {/* Animated container for the grid */}
        <motion.div
          className="mx-auto grid max-w-screen-lg grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Loop over the projects array and render CustomCard for each */}
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