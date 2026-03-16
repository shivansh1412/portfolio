"use client";

import { motion } from "framer-motion";
import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";
import {
  Globe,
  BrainCircuit,
  Server,
  Code2,
  Wrench,
  MonitorCheck,
} from "lucide-react";

const skillItems: BentoItem[] = [
  {
    title: "Frontend & Web",
    meta: "React · Next.js · TypeScript",
    description:
      "Building responsive, production-grade web apps with modern frameworks, clean component architecture, and smooth animations.",
    icon: <Globe className="w-4 h-4 text-indigo-400" />,
    status: "Core Stack",
    tags: ["React 18", "Next.js 15", "TypeScript", "Tailwind CSS", "JavaScript", "HTML", "CSS", "Framer Motion"],
    colSpan: 2,
    hasPersistentHover: true,
    cta: "View projects →",
  },
  {
    title: "AI & LLM Engineering",
    meta: "Claude API",
    description:
      "Integrating frontier models into real products and evaluating capability boundaries through adversarial test case design.",
    icon: <BrainCircuit className="w-4 h-4 text-violet-400" />,
    status: "Active",
    tags: ["Claude API", "Prompt Engineering", "LLM Evaluation", "RLHF", "Adversarial Testing", "n8n", "Automation"],
    colSpan: 1,
    cta: "See how →",
  },
  {
    title: "Backend & Systems",
    meta: "Node · Spring Boot",
    description:
      "REST API design, server-side logic, and database integration across JavaScript and Java ecosystems.",
    icon: <Server className="w-4 h-4 text-cyan-400" />,
    status: "Full-Stack",
    tags: ["Node.js", "Spring Boot 3", "Java 17", "JPA/Hibernate", "MySQL", "SQLite", "REST APIs", "Maven"],
    colSpan: 1,
    cta: "Explore →",
  },
  {
    title: "Languages",
    meta: "14+ languages",
    description:
      "Comfortable across paradigms — scripting, systems, hardware, and web. Pick the right tool, write clean code.",
    icon: <Code2 className="w-4 h-4 text-amber-400" />,
    status: "Polyglot",
    tags: ["Python", "Java", "C", "C++", "TypeScript", "JavaScript", "Bash", "SQL", "HTML", "CSS", "HDL / Verilog", "R", "Swift", "Assembly"],
    colSpan: 2,
    cta: "Check repos →",
  },
  {
    title: "Dev Tools & Platforms",
    meta: "Git · Vercel · Linux",
    description:
      "Full development lifecycle tooling — version control, CI/CD, deployment, ticketing, and documentation.",
    icon: <Wrench className="w-4 h-4 text-rose-400" />,
    status: "Daily Use",
    tags: ["Git / GitHub", "Vercel", "Linux / Ubuntu", "n8n", "JIRA", "JAMA", "VS Code", "Postman"],
    colSpan: 1,
    cta: "Explore →",
  },
  {
    title: "IT & Support",
    meta: "ServiceNow · Microsoft 365",
    description:
      "Enterprise IT support across Microsoft 365, Active Directory, VPN/Duo 2FA, and hardware/software troubleshooting.",
    icon: <MonitorCheck className="w-4 h-4 text-emerald-400" />,
    status: "Professional",
    tags: ["ServiceNow", "Microsoft 365", "Active Directory", "VPN", "Duo 2FA", "Adobe Suite", "ADA Compliance"],
    colSpan: 1,
    hasPersistentHover: false,
    cta: "Experience →",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-white/30 mb-4 font-medium">
            Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Technical skills.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <BentoGrid items={skillItems} />
        </motion.div>
      </div>
    </section>
  );
}
