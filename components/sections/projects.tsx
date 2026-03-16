"use client";

import { motion } from "framer-motion";
import { Pill, Bot, Spade } from "lucide-react";
import { ProjectGrid, type ProjectItem } from "@/components/ui/project-grid";

const projects: ProjectItem[] = [
  {
    title: "Pharmacy Management System",
    description:
      "Full-stack pharmacy platform with AI-powered drug interaction checking and inventory optimization. Spring Boot backend, React frontend, deployed on Railway + Vercel.",
    icon: <Pill size={28} />,
    tags: ["Java 17", "Spring Boot 3", "React 18", "Tailwind CSS", "Claude API", "MySQL", "JPA"],
    github: "https://github.com/shivansh1412",
    live: null,
    status: "in-progress",
  },
  {
    title: "IT Support Ticket Analyzer",
    description:
      "AI-powered web app that analyzes IT tickets in real time — automated categorization, priority assessment, and step-by-step solution generation with streaming animations.",
    icon: <Bot size={28} />,
    tags: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Claude API", "Vercel"],
    github: "https://github.com/shivansh1412",
    live: null,
    status: "completed",
  },
  {
    title: "DOS Card Game",
    description:
      "Terminal-based card game in C with dynamic deck management, Fisher-Yates shuffle, file-based deck loading, card-matching logic, and a value-based scoring system.",
    icon: <Spade size={28} />,
    tags: ["C", "Data Structures", "Linked Lists", "File I/O", "Algorithms"],
    github: "https://github.com/shivansh1412",
    live: null,
    status: "completed",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-white/30 mb-4 font-medium">
            Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Things I&apos;ve built.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="rounded-2xl border border-white/[0.06] overflow-hidden"
        >
          <ProjectGrid projects={projects} />
        </motion.div>
      </div>
    </section>
  );
}
