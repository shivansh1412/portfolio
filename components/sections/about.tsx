"use client";

import { motion } from "framer-motion";
import OrbitingSkills from "@/components/ui/orbiting-skills";

export function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 bg-[#0a0a0a] overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-400 mb-4 font-medium">
            About
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-12">
            Engineering software that ships —{" "}
            <span className="text-white/30">
              full-stack to production AI.
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Bio */}
            <div className="space-y-4 text-white/50 leading-relaxed">
              <p>
                I&apos;m a{" "}
                <span className="text-white font-medium">
                  Computer Science student at the University of Arizona
                </span>
                , originally from Noida, India — currently working as an{" "}
                <span className="text-white font-medium">
                  AI/LLM Evaluation Engineer at Handshake AI
                </span>{" "}
                on Project Helix, and as a 24/7 IT Support Specialist at UITS.
              </p>
              <p>
                I specialize in{" "}
                <span className="text-white font-medium">
                  full-stack web development and AI/LLM engineering
                </span>{" "}
                — building production-grade applications that are fast,
                maintainable, and built to scale. I care about clean
                architecture, thoughtful UX, and writing code that holds up
                under real-world conditions.
              </p>
              <p>
                Outside of engineering, I stay active at the gym and on the
                volleyball court — and I bring that same drive for consistency
                and improvement to everything I build.
              </p>

              <div className="pt-6 space-y-1">
                <p className="text-xs uppercase tracking-[0.2em] text-white/30 font-medium">
                  B.S. Computer Science · Minor Software Engineering
                </p>
                <p className="text-xs text-white/25">
                  University of Arizona · Highest Merit Scholarship
                </p>
              </div>

              <div className="pt-2">
                <p className="text-xs uppercase tracking-[0.2em] text-white/30 mb-2 font-medium">
                  Tech I work with
                </p>
                <p className="text-sm text-white/25 italic">
                  Hover an icon to see the skill · Hover the orbit to pause
                </p>
              </div>
            </div>

            {/* Orbiting Skills */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex items-center justify-center"
            >
              <div className="w-full aspect-square max-w-[580px] relative">
                <OrbitingSkills />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
