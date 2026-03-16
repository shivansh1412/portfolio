"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  HeadphonesIcon,
  Accessibility,
  Crown,
  Users,
  Award,
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

interface ExperienceItem {
  area: string;
  icon: React.ReactNode;
  role: string;
  org: string;
  period: string;
  type: "Work" | "Leadership" | "Award";
  bullets: string[];
  accent?: string;
}

const experiences: ExperienceItem[] = [
  {
    // Featured card — full width row 1
    area: "md:[grid-area:1/1/2/13] xl:[grid-area:1/1/2/13]",
    icon: <BrainCircuit className="h-5 w-5" />,
    role: "AI/LLM Evaluation Engineer",
    org: "Handshake AI — Project Hilux",
    period: "2025 – Present",
    type: "Work",
    accent: "text-indigo-400",
    bullets: [
      "Develop expert-level golden solutions to complex software engineering problems designed to exceed the capability ceiling of current frontier LLMs.",
      "Engineer adversarial test cases that state-of-the-art models systematically fail — surfacing critical gaps in reasoning, multi-step planning, and code correctness.",
      "Perform capability boundary research: identify categories of engineering tasks (algorithmic, systems, architecture) where AI performance degrades or breaks entirely.",
      "Contribute structured evaluation data used to benchmark and improve next-generation AI model performance across coding and reasoning domains.",
    ],
  },
  {
    // Row 2 left — sits above leadership cards
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:2/1/3/7]",
    icon: <HeadphonesIcon className="h-5 w-5" />,
    role: "24/7 IT Support Specialist",
    org: "UITS, University of Arizona",
    period: "May 2025 – Present",
    type: "Work",
    accent: "text-cyan-400",
    bullets: [
      "Provide round-the-clock technical support via phone, chat, and ticketing — diagnosing Microsoft 365, VPN, Duo 2FA, and hardware/software issues.",
      "Bridge technical and non-technical stakeholders, translating user reports into actionable diagnostics and documenting resolutions in ServiceNow.",
      "Leverage AI-driven tools and scripting to accelerate ticket triage and automate internal support workflows.",
      "Maintain and contribute to the UITS knowledge base, reducing repeat ticket volume and resolution times.",
    ],
  },
  {
    // Row 2 right
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:2/7/3/13]",
    icon: <Accessibility className="h-5 w-5" />,
    role: "Alternate Format Lead",
    org: "Disability Resource Center, U of A",
    period: "Dec 2023 – May 2025",
    type: "Work",
    accent: "text-violet-400",
    bullets: [
      "Produced ADA-compliant accessible materials for students with disabilities across multiple digital formats.",
      "Trained peers and faculty on accessibility best practices using Microsoft and Adobe tools.",
    ],
  },
  {
    // Row 3 left
    area: "md:[grid-area:3/1/4/7] xl:[grid-area:3/1/4/7]",
    icon: <Crown className="h-5 w-5" />,
    role: "President",
    org: "South Asian Student Association, U of A",
    period: "Aug 2024 – May 2025",
    type: "Leadership",
    accent: "text-amber-400",
    bullets: [
      "Lead an 11-member executive board — strategic planning, event management, and org initiatives; grew membership engagement by 20%.",
      "Established partnerships with university officials, elevating SASA as a cornerstone cultural org on campus.",
    ],
  },
  {
    // Row 3 right
    area: "md:[grid-area:3/7/4/13] xl:[grid-area:3/7/4/13]",
    icon: <Users className="h-5 w-5" />,
    role: "DEI Chair",
    org: "South Asian Student Association, U of A",
    period: "Mar 2023 – May 2024",
    type: "Leadership",
    accent: "text-rose-400",
    bullets: [
      "Drove cross-org collaboration with Pan-Asian Council and APASA, increasing event attendance by 15%.",
      "Won Best Student Organization Award, APASA 2023.",
    ],
  },
];

const ExperienceCard = ({
  area,
  icon,
  role,
  org,
  period,
  type,
  bullets,
  accent = "text-white/50",
}: ExperienceItem) => (
  <li className={cn("min-h-[14rem] list-none", area)}>
    <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-white/[0.08] p-2 md:rounded-[1.5rem] md:p-3">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={2}
      />
      <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl border-[0.75px] border-white/[0.05] bg-[#0d0d0d] p-6 shadow-sm">
        {/* Top row: icon + type badge + period */}
        <div className="flex items-start justify-between gap-3">
          <div
            className={cn(
              "w-fit rounded-lg border-[0.75px] border-white/[0.08] bg-white/[0.04] p-2",
              accent
            )}
          >
            {icon}
          </div>
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "text-[10px] uppercase tracking-[0.15em] px-2 py-0.5 rounded-full border font-medium",
                type === "Work" &&
                  "border-indigo-500/25 text-indigo-400/70 bg-indigo-500/5",
                type === "Leadership" &&
                  "border-amber-500/25 text-amber-400/70 bg-amber-500/5",
                type === "Award" &&
                  "border-rose-500/25 text-rose-400/70 bg-rose-500/5"
              )}
            >
              {type}
            </span>
          </div>
        </div>

        {/* Role + org + bullets */}
        <div className="flex flex-col gap-3 flex-1 justify-end">
          <div>
            <p className="text-[11px] text-white/25 mb-1 tabular-nums">
              {period}
            </p>
            <h3 className="text-lg font-semibold leading-tight tracking-tight text-white">
              {role}
            </h3>
            <p className="text-sm text-white/40 mt-0.5">{org}</p>
          </div>

          <ul className="space-y-1.5">
            {bullets.map((b, i) => (
              <li
                key={i}
                className="text-[13px] text-white/30 leading-relaxed pl-3 border-l border-white/[0.07]"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </li>
);

export function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-[#030303]">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-white/30 mb-4 font-medium">
            Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Where I&apos;ve been.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 xl:grid-rows-3 lg:gap-4">
            {experiences.map((exp) => (
              <ExperienceCard key={`${exp.role}-${exp.org}`} {...exp} />
            ))}
          </ul>
        </motion.div>

        {/* Certifications strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 p-5 rounded-2xl border border-white/[0.06] bg-white/[0.01] flex flex-wrap items-center gap-3"
        >
          <div className="flex items-center gap-1.5 mr-2">
            <Award className="h-3.5 w-3.5 text-white/20" />
            <span className="text-xs uppercase tracking-[0.15em] text-white/20 font-medium">
              Certs &amp; Awards
            </span>
          </div>
          {[
            "Honorable Mention for Merit, U of A (2022)",
            "Cambridge Advanced English (2018)",
            "Best Student Org Award, APASA (2023)",
            "SAT Top Percentile, India",
          ].map((cert) => (
            <span
              key={cert}
              className="px-3 py-1 text-xs rounded-full border border-white/[0.07] text-white/30 bg-white/[0.02]"
            >
              {cert}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
