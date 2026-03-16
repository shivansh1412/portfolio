"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Github, ExternalLink } from "lucide-react";

export interface ProjectItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  github?: string | null;
  live?: string | null;
  status?: "completed" | "in-progress" | "planned";
}

export function ProjectGrid({ projects }: { projects: ProjectItem[] }) {
  // 2-column grid → border logic for 2 cols
  const cols = 2;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 relative z-10 max-w-5xl mx-auto">
      {projects.map((project, index) => (
        <ProjectCard key={project.title} {...project} index={index} cols={cols} total={projects.length} />
      ))}
    </div>
  );
}

function ProjectCard({
  title,
  description,
  icon,
  tags,
  github,
  live,
  status = "completed",
  index,
  cols,
  total,
}: ProjectItem & { index: number; cols: number; total: number }) {
  const isLastRow = index >= total - cols;
  const isFirstCol = index % cols === 0;

  return (
    <div
      className={cn(
        "flex flex-col py-10 relative group/feature border-white/[0.06]",
        // right border on all but last column
        index % cols !== cols - 1 && "md:border-r",
        // bottom border on all but last row
        !isLastRow && "border-b",
        // left border on first column
        isFirstCol && "md:border-l"
      )}
    >
      {/* Hover gradient — top-half rows fade down, bottom-half rows fade up */}
      {!isLastRow ? (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-white/[0.04] to-transparent pointer-events-none" />
      ) : (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />
      )}

      {/* Icon + status badge */}
      <div className="mb-4 relative z-10 px-10 flex items-center justify-between">
        <div className="text-white/30 group-hover/feature:text-white/60 transition-colors duration-200">
          {icon}
        </div>
        <span
          className={cn(
            "text-[10px] uppercase tracking-[0.15em] px-2 py-0.5 rounded-full border font-medium",
            status === "completed" && "border-emerald-500/30 text-emerald-400/60 bg-emerald-500/5",
            status === "in-progress" && "border-amber-500/30 text-amber-400/60 bg-amber-500/5",
            status === "planned" && "border-white/10 text-white/25 bg-white/[0.02]"
          )}
        >
          {status === "completed" ? "Done" : status === "in-progress" ? "In Progress" : "Planned"}
        </span>
      </div>

      {/* Title with animated left bar */}
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-white/10 group-hover/feature:bg-indigo-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-white/35 max-w-xs relative z-10 px-10 leading-relaxed mb-5">
        {description}
      </p>

      {/* Tags */}
      <div className="relative z-10 px-10 flex flex-wrap gap-1.5 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-[11px] font-medium rounded border border-white/[0.07] text-white/25 bg-white/[0.02]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      {(github || live) && (
        <div className="relative z-10 px-10 flex items-center gap-4 mt-auto">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-white/25 hover:text-white transition-colors duration-200"
            >
              <Github size={13} />
              Code
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-white/25 hover:text-white transition-colors duration-200"
            >
              <ExternalLink size={13} />
              Live
            </a>
          )}
        </div>
      )}
    </div>
  );
}
