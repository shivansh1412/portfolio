"use client";

import { motion } from "framer-motion";
import { Circle, Github, Linkedin, Mail, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate: rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/shiv1412",
    label: "LinkedIn",
  },
  {
    icon: Github,
    href: "https://github.com/shivansh1412",
    label: "GitHub",
  },
  {
    icon: Mail,
    href: "mailto:shivanshsingh@arizona.edu",
    label: "Email",
  },
];

export function HeroGeometric({
  badge = "SWE · Full-Stack · AI/LLM",
  firstName = "Shivansh",
  lastName = "Singh",
  subtitle = "Full-stack developer and AI/LLM engineer building production web apps with React, Next.js, and TypeScript — and integrating LLMs into real products. Seeking SWE internships and AI/ML engineering roles.",
  ctaText = "View My Work",
  onCtaClick,
}: {
  badge?: string;
  firstName?: string;
  lastName?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      {/* Ambient gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />
        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-500/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />
        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/[0.15]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-10">
        <div className="max-w-4xl">

          {/* Badge */}
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-10"
          >
            <Circle className="h-2 w-2 fill-rose-500/80" />
            <span className="text-sm text-white/60 tracking-wide">{badge}</span>
          </motion.div>

          {/* Name — large, left-aligned, two lines */}
          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-6xl sm:text-8xl md:text-[10rem] font-bold tracking-tight leading-none mb-8">
              <span className="block bg-clip-text text-transparent bg-gradient-to-b from-white to-white/75">
                {firstName}
              </span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
                {lastName}
              </span>
            </h1>
          </motion.div>

          {/* Subtitle — recruiter-optimized */}
          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base sm:text-lg text-white/40 mb-12 leading-relaxed font-light tracking-wide max-w-xl">
              {subtitle}
            </p>
          </motion.div>

          {/* Social icons + Resume button row */}
          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-4 flex-wrap"
          >
            {/* Social circles */}
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-full border border-white/[0.1] bg-white/[0.03] flex items-center justify-center text-white/40 hover:text-white hover:border-white/[0.25] hover:bg-white/[0.07] transition-all duration-200"
              >
                <Icon size={16} />
              </a>
            ))}

            {/* Divider */}
            <div className="w-px h-7 bg-white/[0.1]" />

            {/* View My Work */}
            <button
              onClick={onCtaClick}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/[0.1] bg-white/[0.03] text-white/60 hover:text-white hover:border-white/[0.25] hover:bg-white/[0.07] transition-all duration-200 text-sm font-medium"
            >
              {ctaText}
              <span className="opacity-60 group-hover:translate-x-1 transition-transform duration-200">→</span>
            </button>

            {/* Resume button — indigo accent */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-600/80 hover:bg-indigo-500/90 border border-indigo-500/50 text-white text-sm font-semibold transition-all duration-200 shadow-lg shadow-indigo-900/30"
            >
              <FileText size={14} />
              Resume
            </a>
          </motion.div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  );
}
