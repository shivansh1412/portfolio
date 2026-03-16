"use client";

import { useRef } from "react";
import { HeroGeometric } from "@/components/ui/hero-geometric";
import { Projects } from "@/components/sections/projects";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { Nav } from "@/components/nav";

export default function Home() {
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="bg-[#030303] min-h-screen">
      <Nav />

      {/* Hero */}
      <HeroGeometric
        badge="SWE · Full-Stack · AI/LLM"
        firstName="Shivansh"
        lastName="Singh"
        subtitle="Full-stack developer and AI/LLM engineer building production web apps with React, Next.js, and TypeScript — and integrating LLMs into real products. Seeking SWE internships and AI/ML engineering roles."
        ctaText="View My Work"
        onCtaClick={scrollToProjects}
      />

      {/* About */}
      <About />

      {/* Skills */}
      <Skills />

      {/* Experience */}
      <Experience />

      {/* Projects */}
      <div ref={projectsRef}>
        <Projects />
      </div>

      {/* Contact */}
      <Contact />
    </main>
  );
}
