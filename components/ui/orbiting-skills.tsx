"use client"
import React, { useEffect, useState, memo } from 'react';

// --- Type Definitions ---
type IconType =
  | 'html'
  | 'css'
  | 'javascript'
  | 'typescript'
  | 'react'
  | 'nextjs'
  | 'node'
  | 'tailwind'
  | 'python'
  | 'java'
  | 'git'
  | 'postgresql';

type GlowColor = 'cyan' | 'purple' | 'amber';

interface SkillIconProps {
  type: IconType;
}

interface SkillConfig {
  id: string;
  orbitRadius: number;
  size: number;
  speed: number;
  iconType: IconType;
  phaseShift: number;
  glowColor: GlowColor;
  label: string;
}

interface OrbitingSkillProps {
  config: SkillConfig;
  angle: number;
}

interface GlowingOrbitPathProps {
  radius: number;
  glowColor?: GlowColor;
  animationDelay?: number;
}

// --- SVG Icon Components ---
const iconComponents: Record<
  IconType,
  { component: () => React.JSX.Element; color: string }
> = {
  html: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path
          d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
          fill="#E34F26"
        />
      </svg>
    ),
    color: '#E34F26',
  },
  css: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path
          d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.751L12 19.351l5.379-1.443.744-8.157z"
          fill="#1572B6"
        />
      </svg>
    ),
    color: '#1572B6',
  },
  javascript: {
    component: () => (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <rect width="24" height="24" fill="#F7DF1E" />
        <path
          d="M22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
          fill="#323330"
        />
      </svg>
    ),
    color: '#F7DF1E',
  },
  typescript: {
    component: () => (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <rect width="24" height="24" rx="2" fill="#3178C6" />
        <path
          d="M13.2 11.85h2.4v-1.5H9v1.5h2.4V18h1.8v-6.15zM16.8 13.2c0-1.15.86-2.04 2.25-2.04 1.36 0 2.25.76 2.25 2.04v.3h-1.62v-.36c0-.48-.26-.72-.63-.72-.38 0-.63.24-.63.66 0 1.2 2.9 1.44 2.9 3.6 0 1.2-.9 2.1-2.3 2.1-1.43 0-2.32-.84-2.32-2.1v-.48h1.62v.54c0 .48.3.78.72.78.42 0 .7-.3.7-.72 0-1.32-2.94-1.5-2.94-3.6z"
          fill="white"
        />
      </svg>
    ),
    color: '#3178C6',
  },
  react: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <circle cx="12" cy="12" r="2.05" fill="#61DAFB" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" />
          <ellipse
            cx="12"
            cy="12"
            rx="11"
            ry="4.2"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="11"
            ry="4.2"
            transform="rotate(120 12 12)"
          />
        </g>
      </svg>
    ),
    color: '#61DAFB',
  },
  nextjs: {
    component: () => (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <circle cx="12" cy="12" r="12" fill="#000000" />
        <path
          d="M19.59 13.18L9.12 3.34a.5.5 0 0 0-.74.04L4.8 7.53a.5.5 0 0 0 .06.7l9.25 7.98-4.07 4.7a.5.5 0 0 0 .37.83h.07a.5.5 0 0 0 .37-.16l8.74-9.67a.5.5 0 0 0-.0025-.73z"
          fill="white"
        />
        <path
          d="M8.99 20.22l-.77-13.3a.5.5 0 0 1 .87-.35l9.12 10.03-9.22 3.62z"
          fill="white"
          opacity="0.5"
        />
      </svg>
    ),
    color: '#FFFFFF',
  },
  node: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path
          d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.602.065-.037.151-.023.218.017l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.135-.141.135-.241V6.921c0-.103-.055-.198-.137-.246l-8.791-5.072c-.081-.047-.189-.047-.273 0L2.075 6.675c-.084.048-.139.144-.139.246v10.146c0 .1.055.194.139.241l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L1.352 18.675C.533 18.215 0 17.352 0 16.43V6.284c0-.922.533-1.786 1.352-2.245L10.147-.963c.8-.452 1.866-.452 2.657 0l8.796 5.002c.819.459 1.352 1.323 1.352 2.245v10.146c0 .922-.533 1.783-1.352 2.245l-8.796 5.078c-.28.163-.601.247-.926.247zm2.717-6.993c-3.849 0-4.654-1.766-4.654-3.246 0-.14.114-.253.256-.253h1.136c.127 0 .232.091.252.215.173 1.164.686 1.752 3.01 1.752 1.852 0 2.639-.419 2.639-1.401 0-.566-.224-1.03-3.099-1.249-2.404-.184-3.89-.768-3.89-2.689 0-1.771 1.491-2.825 3.991-2.825 2.808 0 4.199.975 4.377 3.068.007.072-.019.141-.065.193-.047.049-.111.077-.178.077h-1.14c-.119 0-.225-.083-.248-.196-.276-1.224-.944-1.616-2.746-1.616-2.023 0-2.259.705-2.259 1.234 0 .641.278.827 3.006 1.19 2.7.359 3.982.866 3.982 2.771 0 1.922-1.603 3.024-4.399 3.024z"
          fill="#339933"
        />
      </svg>
    ),
    color: '#339933',
  },
  tailwind: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path
          d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
          fill="#06B6D4"
        />
      </svg>
    ),
    color: '#06B6D4',
  },
  python: {
    component: () => (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <defs>
          <linearGradient id="pyGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#387EB8" />
            <stop offset="100%" stopColor="#366994" />
          </linearGradient>
          <linearGradient id="pyGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFE052" />
            <stop offset="100%" stopColor="#FFC331" />
          </linearGradient>
        </defs>
        <path
          d="M11.914.006C5.92.006 6.3 2.656 6.3 2.656l.007 2.74h5.712v.823H3.953S0 5.757 0 11.82c0 6.063 3.353 5.849 3.353 5.849h2.003v-2.813s-.108-3.353 3.3-3.353h5.676s3.194.052 3.194-3.087V3.087S17.948.006 11.914.006zm-3.16 1.828a1.023 1.023 0 1 1 0 2.046 1.022 1.022 0 1 1 0-2.046z"
          fill="url(#pyGrad1)"
        />
        <path
          d="M12.086 23.994c5.994 0 5.614-2.65 5.614-2.65l-.007-2.74H11.98v-.823h8.066S24 18.243 24 12.18c0-6.063-3.353-5.849-3.353-5.849h-2.003v2.813s.108 3.353-3.3 3.353H9.668s-3.194-.052-3.194 3.087v5.329s-.484 3.081 5.612 3.081zm3.16-1.828a1.023 1.023 0 1 1 0-2.046 1.022 1.022 0 1 1 0 2.046z"
          fill="url(#pyGrad2)"
        />
      </svg>
    ),
    color: '#FFE052',
  },
  java: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path
          d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0 .001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.543 1.644-2.469 6.197-3.665 5.19-7.623M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"
          fill="#E76F00"
        />
      </svg>
    ),
    color: '#E76F00',
  },
  git: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path
          d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"
          fill="#F05032"
        />
      </svg>
    ),
    color: '#F05032',
  },
  postgresql: {
    component: () => (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path
          d="M17.128 0a10.134 10.134 0 0 0-2.755.403 5.834 5.834 0 0 0-.009-.028C13.supporting 0 12 0 12 0s.003 0 0 0C10.327 0 9.376.468 8.888.953c-.024.02-.043.041-.066.063A10.395 10.395 0 0 0 6.607.4C4.37.4 2.65 1.18 1.764 2.655.756 4.338.682 6.76 1.565 9.45c.017.05.033.1.05.151.328 1.005.782 1.873 1.384 2.419.18.164.37.303.569.419-.02.049-.038.099-.054.15-.116.378-.16.758-.13 1.108.1 1.14.946 1.888 2.103 1.888.52 0 1.04-.113 1.567-.297.043.061.087.12.134.179l.034.04c.573.65 1.255 1.047 1.988 1.139.06.009.12.013.18.015v1.183a.748.748 0 0 0 .392.658l1.403.787a.748.748 0 0 0 .756 0l1.403-.787a.748.748 0 0 0 .392-.658v-1.176c.072-.012.144-.026.215-.044.676-.166 1.298-.567 1.812-1.168.032-.037.063-.075.093-.114.523.181 1.038.292 1.556.292 1.157 0 2.002-.748 2.103-1.888.03-.35-.015-.73-.13-1.108-.015-.05-.034-.1-.053-.15.198-.115.39-.254.568-.42.601-.545 1.056-1.413 1.384-2.418l.05-.15c.883-2.69.81-5.113-.197-6.795C21.35 1.18 19.63.4 17.393.4c-.089 0-.177.002-.265.006z"
          fill="#336791"
        />
        <path
          d="M12 2.156c1.17 0 2.096.272 2.618.618-1.088.38-2.117 1.022-2.944 1.928A7.415 7.415 0 0 0 8.69 2.618 5.164 5.164 0 0 1 12 2.156zm-3.87.817c.568.247 1.102.572 1.569.986A7.032 7.032 0 0 0 7.832 5.9a8.03 8.03 0 0 1-.684-1.455c.327-.54.707-.987 .982-1.472zM12 5.406c1.047 0 1.978.417 2.667 1.088a4.65 4.65 0 0 1 1.374 3.294 4.648 4.648 0 0 1-1.374 3.293A3.774 3.774 0 0 1 12 14.17a3.774 3.774 0 0 1-2.667-1.088 4.648 4.648 0 0 1-1.374-3.293 4.65 4.65 0 0 1 1.374-3.294A3.773 3.773 0 0 1 12 5.406z"
          fill="white"
          opacity="0.4"
        />
      </svg>
    ),
    color: '#336791',
  },
};

// --- Memoized Icon Component ---
const SkillIcon = memo(({ type }: SkillIconProps) => {
  const IconComponent = iconComponents[type]?.component;
  return IconComponent ? <IconComponent /> : null;
});
SkillIcon.displayName = 'SkillIcon';

// --- Configuration: 3 Orbits, 4 skills each ---
const skillsConfig: SkillConfig[] = [
  // ── Inner Orbit (cyan, radius 100) ──
  {
    id: 'html',
    orbitRadius: 105,
    size: 38,
    speed: 0.9,
    iconType: 'html',
    phaseShift: 0,
    glowColor: 'cyan',
    label: 'HTML5',
  },
  {
    id: 'css',
    orbitRadius: 105,
    size: 38,
    speed: 0.9,
    iconType: 'css',
    phaseShift: Math.PI / 2,
    glowColor: 'cyan',
    label: 'CSS3',
  },
  {
    id: 'javascript',
    orbitRadius: 105,
    size: 38,
    speed: 0.9,
    iconType: 'javascript',
    phaseShift: Math.PI,
    glowColor: 'cyan',
    label: 'JavaScript',
  },
  {
    id: 'typescript',
    orbitRadius: 105,
    size: 38,
    speed: 0.9,
    iconType: 'typescript',
    phaseShift: (3 * Math.PI) / 2,
    glowColor: 'cyan',
    label: 'TypeScript',
  },

  // ── Middle Orbit (purple, radius 180) ──
  {
    id: 'react',
    orbitRadius: 182,
    size: 44,
    speed: -0.55,
    iconType: 'react',
    phaseShift: 0,
    glowColor: 'purple',
    label: 'React',
  },
  {
    id: 'nextjs',
    orbitRadius: 182,
    size: 42,
    speed: -0.55,
    iconType: 'nextjs',
    phaseShift: Math.PI / 2,
    glowColor: 'purple',
    label: 'Next.js',
  },
  {
    id: 'node',
    orbitRadius: 182,
    size: 42,
    speed: -0.55,
    iconType: 'node',
    phaseShift: Math.PI,
    glowColor: 'purple',
    label: 'Node.js',
  },
  {
    id: 'tailwind',
    orbitRadius: 182,
    size: 40,
    speed: -0.55,
    iconType: 'tailwind',
    phaseShift: (3 * Math.PI) / 2,
    glowColor: 'purple',
    label: 'Tailwind CSS',
  },

  // ── Outer Orbit (amber, radius 262) ──
  {
    id: 'python',
    orbitRadius: 262,
    size: 46,
    speed: 0.35,
    iconType: 'python',
    phaseShift: Math.PI / 4,
    glowColor: 'amber',
    label: 'Python',
  },
  {
    id: 'java',
    orbitRadius: 262,
    size: 44,
    speed: 0.35,
    iconType: 'java',
    phaseShift: Math.PI / 4 + Math.PI / 2,
    glowColor: 'amber',
    label: 'Java',
  },
  {
    id: 'git',
    orbitRadius: 262,
    size: 44,
    speed: 0.35,
    iconType: 'git',
    phaseShift: Math.PI / 4 + Math.PI,
    glowColor: 'amber',
    label: 'Git',
  },
  {
    id: 'postgresql',
    orbitRadius: 262,
    size: 44,
    speed: 0.35,
    iconType: 'postgresql',
    phaseShift: Math.PI / 4 + (3 * Math.PI) / 2,
    glowColor: 'amber',
    label: 'PostgreSQL',
  },
];

// --- Memoized Orbiting Skill Component ---
const OrbitingSkill = memo(({ config, angle }: OrbitingSkillProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { orbitRadius, size, iconType, label } = config;

  const x = Math.cos(angle) * orbitRadius;
  const y = Math.sin(angle) * orbitRadius;

  return (
    <div
      className="absolute top-1/2 left-1/2 transition-all duration-300 ease-out"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        zIndex: isHovered ? 20 : 10,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          relative w-full h-full p-2 bg-gray-800/90 backdrop-blur-sm
          rounded-full flex items-center justify-center
          transition-all duration-300 cursor-pointer
          ${isHovered ? 'scale-125 shadow-2xl' : 'shadow-lg hover:shadow-xl'}
        `}
        style={{
          boxShadow: isHovered
            ? `0 0 30px ${iconComponents[iconType]?.color}50, 0 0 60px ${iconComponents[iconType]?.color}25`
            : undefined,
        }}
      >
        <SkillIcon type={iconType} />
        {isHovered && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900/95 backdrop-blur-sm rounded text-xs text-white whitespace-nowrap pointer-events-none border border-white/10">
            {label}
          </div>
        )}
      </div>
    </div>
  );
});
OrbitingSkill.displayName = 'OrbitingSkill';

// --- Optimized Orbit Path Component ---
const GlowingOrbitPath = memo(
  ({
    radius,
    glowColor = 'cyan',
    animationDelay = 0,
  }: GlowingOrbitPathProps) => {
    const glowColors: Record<GlowColor, { primary: string; secondary: string; border: string }> = {
      cyan: {
        primary: 'rgba(6, 182, 212, 0.35)',
        secondary: 'rgba(6, 182, 212, 0.15)',
        border: 'rgba(6, 182, 212, 0.25)',
      },
      purple: {
        primary: 'rgba(147, 51, 234, 0.35)',
        secondary: 'rgba(147, 51, 234, 0.15)',
        border: 'rgba(147, 51, 234, 0.25)',
      },
      amber: {
        primary: 'rgba(245, 158, 11, 0.35)',
        secondary: 'rgba(245, 158, 11, 0.15)',
        border: 'rgba(245, 158, 11, 0.25)',
      },
    };

    const colors = glowColors[glowColor];

    return (
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
        }}
      >
        {/* Glowing background */}
        <div
          className="absolute inset-0 rounded-full animate-pulse"
          style={{
            background: `radial-gradient(circle, transparent 30%, ${colors.secondary} 70%, ${colors.primary} 100%)`,
            boxShadow: `0 0 50px ${colors.primary}, inset 0 0 50px ${colors.secondary}`,
            animationDelay: `${animationDelay}s`,
            animationDuration: '4s',
          }}
        />
        {/* Static ring */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: `1px solid ${colors.border}`,
            boxShadow: `inset 0 0 20px ${colors.secondary}`,
          }}
        />
      </div>
    );
  }
);
GlowingOrbitPath.displayName = 'GlowingOrbitPath';

// --- Main Component ---
export default function OrbitingSkills() {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;
      setTime((prev) => prev + deltaTime);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const orbitConfigs: Array<{
    radius: number;
    glowColor: GlowColor;
    delay: number;
  }> = [
    { radius: 105, glowColor: 'cyan', delay: 0 },
    { radius: 182, glowColor: 'purple', delay: 1.5 },
    { radius: 262, glowColor: 'amber', delay: 3 },
  ];

  return (
    <main className="w-full flex items-center justify-center overflow-hidden">
      {/* Subtle background depth */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #374151 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, #4B5563 0%, transparent 50%)`,
          }}
        />
      </div>

      <div
        className="relative w-[calc(100vw-40px)] h-[calc(100vw-40px)] md:w-[580px] md:h-[580px] flex items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Central Code Icon */}
        <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center z-10 relative shadow-2xl">
          <div className="absolute inset-0 rounded-full bg-cyan-500/30 blur-xl animate-pulse" />
          <div
            className="absolute inset-0 rounded-full bg-purple-500/20 blur-2xl animate-pulse"
            style={{ animationDelay: '1s' }}
          />
          <div className="absolute inset-0 rounded-full bg-amber-500/10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="relative z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#06B6D4" />
                  <stop offset="50%" stopColor="#9333EA" />
                  <stop offset="100%" stopColor="#F59E0B" />
                </linearGradient>
              </defs>
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
        </div>

        {/* Orbit paths */}
        {orbitConfigs.map((cfg) => (
          <GlowingOrbitPath
            key={`path-${cfg.radius}`}
            radius={cfg.radius}
            glowColor={cfg.glowColor}
            animationDelay={cfg.delay}
          />
        ))}

        {/* Orbiting icons */}
        {skillsConfig.map((config) => {
          const angle = time * config.speed + (config.phaseShift || 0);
          return (
            <OrbitingSkill key={config.id} config={config} angle={angle} />
          );
        })}
      </div>
    </main>
  );
}
