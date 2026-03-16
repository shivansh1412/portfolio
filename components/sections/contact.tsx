"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { TextHoverEffect, FooterBackgroundGradient } from "@/components/ui/hover-footer";

const contactLinks = [
  {
    icon: Mail,
    label: "shivanshsingh@arizona.edu",
    href: "mailto:shivanshsingh@arizona.edu",
  },
  {
    icon: Github,
    label: "github.com/shivansh1412",
    href: "https://github.com/shivansh1412",
  },
  {
    icon: Linkedin,
    label: "linkedin.com/in/shiv1412",
    href: "https://linkedin.com/in/shiv1412",
  },
];

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export function Contact() {
  return (
    <footer
      id="contact"
      className="relative bg-[#030303] overflow-hidden rounded-t-3xl border-t border-white/[0.06]"
    >
      {/* Top contact CTA */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-white/30 mb-4 font-medium">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Let&apos;s work together.
          </h2>
          <p className="text-white/40 mb-10 max-w-md mx-auto leading-relaxed">
            I&apos;m open to internships and collaborative projects. Whether you
            have an opportunity or just want to connect — reach out.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {contactLinks.map(({ icon: Icon, label, href }) => (
              <motion.a
                key={href}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl border border-white/[0.08] bg-white/[0.03] text-white/50 hover:border-indigo-500/40 hover:text-white transition-all duration-200 text-sm font-medium"
              >
                <Icon size={16} />
                {label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-white/[0.06] pt-12 pb-4">
          {/* Brand */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-indigo-400 text-2xl font-extrabold">
                &lt;/&gt;
              </span>
              <span className="text-white text-xl font-bold tracking-tight">
                Shivansh Singh
              </span>
            </div>
            <p className="text-sm text-white/35 leading-relaxed max-w-[220px]">
              Full-stack developer &amp; AI/LLM engineer based at the University
              of Arizona.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-white/25">
              <MapPin size={12} />
              Tucson, AZ
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5 uppercase tracking-widest">
              Navigate
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/35 hover:text-indigo-400 transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5 uppercase tracking-widest">
              Reach Out
            </h4>
            <ul className="space-y-4">
              {contactLinks.map(({ icon: Icon, label, href }) => (
                <li key={label} className="flex items-center gap-3">
                  <Icon size={15} className="text-indigo-400 shrink-0" />
                  <a
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="text-sm text-white/35 hover:text-white transition-colors duration-150 truncate"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/20">
          <p>
            &copy; {new Date().getFullYear()} Shivansh Singh. All rights
            reserved.
          </p>
          <p>Built with Next.js &middot; Deployed on Vercel</p>
        </div>
      </div>

      {/* TextHoverEffect big name */}
      <div className="lg:flex hidden h-[28rem] -mt-40 -mb-28 relative z-10 pointer-events-auto">
        <TextHoverEffect text="Shivansh" className="z-10" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
