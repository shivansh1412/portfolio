"use client";

import { cn } from "@/lib/utils";

export interface BentoItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  status?: string;
  tags?: string[];
  meta?: string;
  cta?: string;
  colSpan?: number;
  hasPersistentHover?: boolean;
}

interface BentoGridProps {
  items: BentoItem[];
}

function BentoGrid({ items }: BentoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-5xl mx-auto">
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            "group relative p-5 rounded-2xl overflow-hidden transition-all duration-300",
            "border border-white/[0.07] bg-[#0d0d0d]",
            "hover:border-white/[0.14] hover:-translate-y-0.5 will-change-transform",
            item.colSpan === 2 ? "md:col-span-2" : "col-span-1",
            item.hasPersistentHover && "-translate-y-0.5 border-white/[0.12]"
          )}
        >
          {/* Dot grid pattern on hover */}
          <div
            className={cn(
              "absolute inset-0 transition-opacity duration-300",
              item.hasPersistentHover
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
            )}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[length:4px_4px]" />
          </div>

          {/* Gradient border glow on hover */}
          <div
            className={cn(
              "absolute inset-0 -z-10 rounded-2xl p-px bg-gradient-to-br from-transparent via-white/[0.06] to-transparent transition-opacity duration-300",
              item.hasPersistentHover
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
            )}
          />

          <div className="relative flex flex-col space-y-4 h-full">
            {/* Icon + status */}
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/[0.05] group-hover:bg-white/[0.08] transition-colors duration-300">
                {item.icon}
              </div>
              {item.status && (
                <span className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white/[0.05] text-white/40 group-hover:bg-white/[0.08] group-hover:text-white/60 transition-all duration-300">
                  {item.status}
                </span>
              )}
            </div>

            {/* Title + meta + description */}
            <div className="space-y-1.5 flex-1">
              <h3 className="font-semibold text-white tracking-tight text-[15px]">
                {item.title}
                {item.meta && (
                  <span className="ml-2 text-xs text-white/25 font-normal">
                    {item.meta}
                  </span>
                )}
              </h3>
              <p className="text-sm text-white/35 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Tags + cta */}
            <div className="flex items-end justify-between gap-2 flex-wrap">
              <div className="flex flex-wrap gap-1.5">
                {item.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded-md text-[11px] bg-white/[0.05] text-white/30 hover:bg-white/[0.09] hover:text-white/50 transition-all duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {item.cta && (
                <span className="text-xs text-white/20 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                  {item.cta}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export { BentoGrid };
