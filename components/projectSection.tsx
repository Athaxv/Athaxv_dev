"use client";

import { motion } from "framer-motion";
import CustomCard from "./custom-card"; // The updated card component

// --- YOUR PROJECT DATA ---
const projects = [
  {
    title: "Chat Collect",
    subtitle: "Jan 2024 - Feb 2024",
    description: "A SaaS that allows OpenAI GPT creators to collect user email addresses, building an audience and monetizing API usage.",
    image: "/port2.png",
    imageAlt: "Chat Collect application preview",
    tags: ["Next.js", "TypeScript", "Prisma", "TailwindCSS", "Stripe"],
    buttonText: "View Project",
    buttonHref: "https://example.com",
  },
  {
    title: "Portfolio Platform",
    subtitle: "Mar 2024 - Apr 2024",
    description: "A dynamic portfolio template designed for developers to showcase their work with elegance and a modern user experience. This description is a bit longer to demonstrate how the card height remains consistent.",
    image: "/port1.png",
    imageAlt: "Portfolio Platform preview",
    tags: ["Next.js", "Framer Motion", "Shadcn UI"],
    buttonText: "View Project",
    buttonHref: "https://example.com",
  },
  {
    title: "PathAI",
    subtitle: "November 2024 - December 2024",
    description: "PathAI is a an, AI-powered career coach that help users generate cover letter, resumes and help them to prepare for quizzes.",
    image: "/project.png",
    imageAlt: "Analytics Dashboard preview",
    tags: ["Next.js", "Postgres", "Clerk", "Node.js", "Prisma", "Docker"],
    buttonText: "View Project",
    buttonHref: "https://example.com",
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
};

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            My Recent Work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Here are a few projects I've worked on recently.
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