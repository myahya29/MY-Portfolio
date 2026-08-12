'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SkillModal } from '@/components/about/skill-modal';
import { CATEGORIZED_SKILLS, SKILL_CATEGORIES, SKILL_MAPPINGS, CERTIFICATIONS } from '@/database/content-registry';
import { Search, X } from 'lucide-react';

const TECH_LOGOS = [
  {
    name: 'HTML5',
    svg: (
      <svg className="h-4 w-4 text-orange-500 transition-colors" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 0h21l-1.91 21.563L12 24l-8.59-2.438L1.5 0zm17 5.75h-13l.36 4.09h12.28l-.37 4.125L12 15.344l-5.77-1.379-.24-2.715H3.9l.47 5.379L12 18.906l7.63-2.277.87-9.879z" />
      </svg>
    )
  },
  {
    name: 'CSS3',
    svg: (
      <svg className="h-4 w-4 text-blue-500 transition-colors" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 0h21l-1.91 21.563L12 24l-8.59-2.438L1.5 0zm17.089 5.75h-13l.36 4.09h12.28l-.37 4.125L12 15.344l-5.77-1.379-.24-2.715H3.9l.47 5.379L12 18.906l7.63-2.277.87-9.879z" />
      </svg>
    )
  },
  {
    name: 'JavaScript',
    svg: (
      <svg className="h-4 w-4 text-yellow-500 transition-colors" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 0h24v24H0V0zm22.034 18.896c-.197-.839-.93-1.478-2.072-1.745-.632-.162-1.365-.258-2.07-.348-.737-.091-1.37-.181-1.37-.62 0-.258.196-.419.645-.419.452 0 .736.194.871.55l1.97-.872c-.413-1.002-1.366-1.583-2.842-1.583-1.873 0-2.85 1.099-2.85 2.455 0 1.744 1.292 2.195 2.68 2.389 1.066.16 2.035.258 2.035.807 0 .29-.26.484-.744.484-.678 0-.968-.291-1.129-.775l-1.97.936c.451 1.259 1.355 1.776 3.034 1.776 1.937 0 3.035-1.002 3.035-2.615zM8.999 17.29a.9.9 0 01-.9-.9V12a1 1 0 00-2 0v4.39a2.9 2.9 0 002.9 2.9h1.1a1 1 0 000-2h-1.1z" />
      </svg>
    )
  },
  {
    name: 'TypeScript',
    svg: (
      <svg className="h-4 w-4 text-blue-600 transition-colors" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 0h24v24H0V0zm22.034 18.896c-.197-.839-.93-1.478-2.072-1.745-.632-.162-1.365-.258-2.07-.348-.737-.091-1.37-.181-1.37-.62 0-.258.196-.419.645-.419.452 0 .736.194.871.55l1.97-.872c-.413-1.002-1.366-1.583-2.842-1.583-1.873 0-2.85 1.099-2.85 2.455 0 1.744 1.292 2.195 2.68 2.389 1.066.16 2.035.258 2.035.807 0 .29-.26.484-.744.484-.678 0-.968-.291-1.129-.775l-1.97.936c.451 1.259 1.355 1.776 3.034 1.776 1.937 0 3.035-1.002 3.035-2.615zm-14.8-1.606h2.8v-5.29h-2.8v5.29zm2.8-6.39a1 1 0 00-1-1h-0.8a1 1 0 00-1 1v0.1a1 1 0 001 1h0.8a1 1 0 001-1v-0.1z" />
      </svg>
    )
  },
  {
    name: 'React',
    svg: (
      <svg className="h-4 w-4 text-cyan-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 10.933a1.597 1.597 0 00-.776-1.391C21.1 8.211 16.746 7.241 12 7.241s-9.1 1.021-11.224 2.3a1.602 1.602 0 00-.776 1.392c0 .546.302 1.037.776 1.391 2.124 1.28 6.478 2.25 11.224 2.25s9.1-1.021 11.224-2.3a1.597 1.597 0 00.776-1.391zm-12-1.954c-.66 0-1.2-.54-1.2-1.2v-6.58a1.2 1.2 0 012.4 0v6.58c0 .66-.54 1.2-1.2 1.2zm0 3.908c-.66 0-1.2-.54-1.2-1.2V5.101a1.2 1.2 0 012.4 0V11.68c0 .66-.54 1.2-1.2 1.2zm0 3.908c-.66 0-1.2-.54-1.2-1.2V12.91a1.2 1.2 0 012.4 0v3.79c0 .66-.54 1.2-1.2 1.2z" />
      </svg>
    )
  },
  {
    name: 'Next.js',
    svg: (
      <svg className="h-4 w-4 text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.82 17.5l-6.8-8.8v8.8H9.3V7.2l1.6-.1 6.8 8.8V7.1h1.72v10.4H17.82z" />
      </svg>
    )
  },
  {
    name: 'Node.js',
    svg: (
      <svg className="h-4 w-4 text-green-500 transition-colors" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1.344L3.188 6.425v10.15L12 21.656l8.813-5.081V6.425L12 1.344zm7.25 14.187l-7.25 4.181-7.25-4.181V7.469l7.25-4.181 7.25 4.181v8.062z" />
      </svg>
    )
  },
  {
    name: 'Express.js',
    svg: (
      <svg className="h-4 w-4 text-gray-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 10.933a1.597 1.597 0 00-.776-1.391C21.1 8.211 16.746 7.241 12 7.241s-9.1 1.021-11.224 2.3a1.602 1.602 0 00-.776 1.392c0 .546.302 1.037.776 1.391 2.124 1.28 6.478 2.25 11.224 2.25s9.1-1.021 11.224-2.3a1.597 1.597 0 00.776-1.391z" />
      </svg>
    )
  },
  {
    name: 'MongoDB',
    svg: (
      <svg className="h-4 w-4 text-green-600 transition-colors" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C7.2 4.4 7.2 9.6 7.2 12c0 4.8 4.8 9.6 4.8 12 0-2.4 4.8-7.2 4.8-12 0-2.4 0-7.6-4.8-12zm-1.2 14.4c-.6-.4-1.2-1.2-1.2-2.4 0-1.8 1.2-3 2.4-3 .6 0 1.2.6 1.2 1.2 0 1.2-.6 2.4-2.4 4.2z" />
      </svg>
    )
  },
  {
    name: 'Tailwind CSS',
    svg: (
      <svg className="h-4 w-4 text-cyan-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 6.5c-2.4 0-4 1.2-4.8 3.6 1.2-1.2 2.4-1.6 3.6-1.2.7.2 1.2.7 1.8 1.3C13.5 11.2 14.7 12 16.5 12c2.4 0 4-1.2 4-3.6-1.2 1.2-2.4 1.6-3.6 1.2-.7-.2-1.2-.7-1.8-1.3-.9-1-2.1-1.8-3.1-1.8zm-8 6c-2.4 0-4 1.2-4.8 3.6 1.2-1.2 2.4-1.6 3.6-1.2.7.2 1.2.7 1.8 1.3.9 1 2.1 1.8 3.1 1.8 2.4 0 4-1.2 4.8-3.6-1.2 1.2-2.4 1.6-3.6 1.2-.7-.2-1.2-.7-1.8-1.3-.9-1-2.1-1.8-3.1-1.8z" />
      </svg>
    )
  },
  {
    name: 'Bootstrap',
    svg: (
      <svg className="h-4 w-4 text-purple-500 transition-colors" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2.5 0h19A2.5 2.5 0 0124 2.5v19A2.5 2.5 0 0121.5 24h-19A2.5 2.5 0 010 21.5v-19A2.5 2.5 0 012.5 0zm10.744 14.767c.725-.262 1.3-.712 1.725-1.35.425-.638.638-1.425.638-2.362 0-.85-.188-1.575-.563-2.175-.375-.6-.925-1.037-1.65-1.312-.725-.275-1.663-.413-2.813-.413h-4.325v11.7h4.7c1.175 0 2.125-.138 2.85-.413.725-.275 1.263-.737 1.613-1.387.35-.65.525-1.437.525-2.363 0-1.075-.25-1.925-.75-2.55-.5-.625-1.188-1.025-2.063-1.2-.338.163-.675.25-1 .25h1.112z" />
      </svg>
    )
  },
  {
    name: 'Git',
    svg: (
      <svg className="h-4 w-4 text-orange-600 transition-colors" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.384 11.61L12.39.616a1.5 1.5 0 00-2.12 0L9.23 1.657l3.6 3.6a1.5 1.5 0 012.12 0l4.38 4.38a1.5 1.5 0 010 2.12L16.29 14.8a1.5 1.5 0 01-2.12 0l-4.38-4.38a1.5 1.5 0 010-2.12l1.64-1.64-3.6-3.6-6.61 6.61a1.5 1.5 0 000 2.12l10.99 10.99a1.5 1.5 0 002.12 0l10.99-10.99a1.5 1.5 0 000-2.12z" />
      </svg>
    )
  },
  {
    name: 'GitHub',
    svg: (
      <svg className="h-4 w-4 text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.22.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    )
  },
  {
    name: 'Figma',
    svg: (
      <svg className="h-4 w-4 text-pink-500 transition-colors" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C8.688 0 6 2.688 6 6v12c0 3.312 2.688 6 6 6s6-2.688 6-6V6c0-3.312-2.688-6-6-6zm-3 6c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm3 15c-1.656 0-3-1.344-3-3s1.344-3 3-3 3 1.344 3 3-1.344 3-3 3z" />
      </svg>
    )
  },
  {
    name: 'Postman',
    svg: (
      <svg className="h-4 w-4 text-orange-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 17.5c-3.038 0-5.5-2.462-5.5-5.5s2.462-5.5 5.5-5.5 5.5 2.462 5.5 5.5-2.462 5.5-5.5 5.5z" />
      </svg>
    )
  },
  {
    name: 'Vercel',
    svg: (
      <svg className="h-4 w-4 text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 22.525H0L12 1.475l12 21.05z" />
      </svg>
    )
  }
];

export function AboutSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('featured');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSkillClick = (skill: string) => {
    const skillMapping = SKILL_MAPPINGS.find((mapping) => mapping.skill === skill);
    if (
      skillMapping &&
      (skillMapping.experienceIds || skillMapping.projectIds || skillMapping.educationIds)
    ) {
      setSelectedSkill(skill);
      setModalOpen(true);
    }
  };

  const hasMapping = (skill: string) => {
    const skillMapping = SKILL_MAPPINGS.find((mapping) => mapping.skill === skill);
    return (
      skillMapping &&
      (skillMapping.experienceIds || skillMapping.projectIds || skillMapping.educationIds)
    );
  };

  const getMappingCount = (skill: string) => {
    const skillMapping = SKILL_MAPPINGS.find((mapping) => mapping.skill === skill);
    if (!skillMapping) return 0;
    const experienceCount = skillMapping.experienceIds?.length || 0;
    const projectCount = skillMapping.projectIds?.length || 0;
    const educationCount = skillMapping.educationIds?.length || 0;
    return experienceCount + projectCount + educationCount;
  };

  const alignGlowClass = (catKey: string) => {
    return catKey === 'featured' ? 'border-blue-500/70 text-[#e5e5e5]' : 'border-[#404040] text-[#c4c4c4]';
  };

  const allSkills = (CATEGORIZED_SKILLS['all'] as string[])
    .slice()
    .sort((a, b) => {
      const countA = getMappingCount(a);
      const countB = getMappingCount(b);
      if (countB !== countA) return countB - countA;
      return a.localeCompare(b);
    });

  const categorySkills = (CATEGORIZED_SKILLS[activeCategory as keyof typeof CATEGORIZED_SKILLS] as string[])
    .slice()
    .sort((a, b) => {
      const countA = getMappingCount(a);
      const countB = getMappingCount(b);
      if (countB !== countA) return countB - countA;
      return a.localeCompare(b);
    });

  const normalizeForSearch = (str: string) =>
    str
      .toLowerCase()
      .replace(/[^\w]/g, '')
      .replace(/\s+/g, '');
  const queryNorm = normalizeForSearch(searchQuery);
  const skills = queryNorm
    ? allSkills.filter((s) => normalizeForSearch(s).includes(queryNorm))
    : categorySkills;

  return (
    <section id="about" className="relative bg-[#141414] pt-10 pb-16 sm:pt-14 sm:pb-20">
      <div className="container mx-auto w-full max-w-7xl px-8 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto"
        >
          <h2 className="mb-14 text-left text-xl font-normal uppercase tracking-[0.2em] text-[#8a8a8a] sm:text-2xl">
            About Me
          </h2>

          {/* Grid: matches Experience & Projects — 7fr 3fr */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[7fr_3fr] lg:gap-16">
            {/* Left column */}
            <div className="flex min-w-0 flex-col gap-8">
              {/* Overview */}
              <div className="border-l-2 border-[#2a2a2a] pl-6">
                <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6b6b6b]">
                  Overview
                </h3>
                <div className="max-w-2xl text-[15px] leading-[1.9] text-[#c4c4c4] sm:text-[16px] sm:leading-[1.85] space-y-4">
                  <p>
                    I&apos;m Muhammad Yahya, a Full Stack MERN Developer and Founder of Zaryonix Tech.
                  </p>
                  <p>
                    I specialize in building modern, scalable, and high-performance web applications using the MERN Stack.
                  </p>
                  <p>
                    Through Zaryonix Tech, we help startups and businesses establish a strong digital presence by providing complete digital solutions including:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Custom Website Development</li>
                    <li>Web Application Development</li>
                    <li>UI/UX Design</li>
                    <li>Graphic Design</li>
                    <li>Branding</li>
                    <li>SEO</li>
                    <li>Digital Marketing</li>
                  </ul>
                  <p>
                    My goal is to create fast, responsive, secure, and user-focused products that help businesses grow and stand out online.
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                  <h3 className="text-left text-sm font-medium uppercase tracking-[0.15em] text-[#6b6b6b]">
                    Skills
                  </h3>
                  <label className="flex w-[180px] items-center gap-2 bg-transparent px-0 py-1.5 transition-colors focus-within:border-[#404040]">
                    <Search className="h-3 w-3 flex-shrink-0 text-[#4a4a4a]" />
                    <input
                      type="search"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="skills-search-input min-w-0 flex-1 bg-transparent text-[11px] text-[#c4c4c4] placeholder:text-[#4a4a4a] focus:outline-none"
                      aria-label="Search skills"
                    />
                    {searchQuery.trim() && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setSearchQuery('');
                        }}
                        className="flex-shrink-0 rounded p-0.5 text-[#6b6b6b] transition-colors hover:bg-[#262626] hover:text-[#c4c4c4] focus:outline-none"
                        aria-label="Clear search"
                      >
                        <X className="h-3 w-3" strokeWidth={2} />
                      </button>
                    )}
                  </label>
                </div>
                <div className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-2.5 border-b border-[#222]/70 pb-4">
                  {SKILL_CATEGORIES.map((cat) => {
                    const isActive = activeCategory === cat.key && !searchQuery.trim();
                    const isFeatured = cat.key === 'featured';
                    return (
                      <button
                        key={cat.key}
                        type="button"
                        className={`cursor-pointer border-b-2 pb-0.5 pt-2 text-[11px] font-medium uppercase tracking-[0.1em] transition-all duration-200 focus:outline-none ${
                          isActive
                            ? alignGlowClass(cat.key)
                            : isFeatured
                              ? 'border-transparent text-[#8a8a8a] hover:border-blue-500/40 hover:text-[#c4c4c4]'
                              : 'border-transparent text-[#6b6b6b] hover:border-[#333] hover:text-[#a3a3a3]'
                        }`}
                        onClick={() => setActiveCategory(cat.key)}
                        aria-pressed={isActive}
                      >
                        {cat.label}
                      </button>
                    );
                  })}
                  {searchQuery.trim() && (
                    <span className="cursor-default border-b-2 border-[#404040] pb-0.5 text-[11px] font-medium uppercase tracking-[0.1em] text-[#c4c4c4]">
                      {searchQuery.trim()}
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-3 pt-0.5">
                  {skills.length === 0 ? (
                    <p className="text-[13px] text-[#5a5a5a]">No results</p>
                  ) : (
                    skills.map((skill) => (
                      <button
                        key={skill}
                        type="button"
                        className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[14px] font-medium tracking-tight transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#404040] focus:ring-offset-2 focus:ring-offset-[#141414] ${
                          hasMapping(skill)
                            ? 'border-[#333]/60 bg-transparent text-[#c4c4c4] hover:border-blue-500/40 hover:bg-[#1f1f1f] hover:shadow-[0_0_12px_rgba(59,130,246,0.1)]'
                            : 'cursor-default border-[#2a2a2a] bg-transparent text-[#5a5a5a]'
                        }`}
                        aria-label={
                          skill + (hasMapping(skill) ? `, ${getMappingCount(skill)} related items` : '')
                        }
                        onClick={() => hasMapping(skill) && handleSkillClick(skill)}
                        tabIndex={0}
                      >
                        <span className="max-w-[160px] truncate">{skill}</span>
                        {hasMapping(skill) && (
                          <span className="flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#2a2a2a] text-[11px] font-medium leading-none text-[#6b6b6b] tabular-nums">
                            {getMappingCount(skill)}
                          </span>
                        )}
                      </button>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="flex min-w-0 flex-col gap-8">
              {/* Tech Logos stack */}
              <div className="flex flex-col items-start gap-4">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6b6b6b]">Tech Stack</span>
                <div className="flex flex-wrap gap-2.5">
                  {TECH_LOGOS.map((tech) => (
                    <div
                      key={tech.name}
                      className="group inline-flex items-center gap-1.5 rounded-full border border-[#2a2a2a] bg-[#161616]/60 px-3.5 py-2 text-xs font-medium text-[#c4c4c4] transition-all duration-200 hover:border-blue-500/40 hover:bg-[#1a1a1a] hover:text-[#f5f5f0] hover:shadow-[0_0_12px_rgba(59,130,246,0.15)]"
                    >
                      {tech.svg}
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              {CERTIFICATIONS.length > 0 && (
                <div className="overflow-hidden rounded-xl border border-[#2a2a2a]/80 bg-[#161616]/95 shadow-[0_1px_0_0_rgba(255,255,255,0.03)] backdrop-blur-sm">
                  <div className="border-b border-[#2a2a2a]/60 px-5 py-3.5">
                    <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#737373]">
                      Certifications
                    </h3>
                  </div>
                  <div className="flex flex-col">
                    {CERTIFICATIONS.map((cert) => (
                      <div
                        key={cert.id}
                        className="group flex items-center gap-3.5 border-b border-[#262626]/40 px-5 py-3.5 text-left transition-colors last:border-b-0 hover:bg-[#1a1a1a]/50"
                      >
                        <div className="min-w-0 flex-1">
                          <div className="truncate text-[13px] font-medium text-[#d4d4d4] transition-colors group-hover:text-[#e5e5e5]">
                            {cert.title}
                          </div>
                          <div className="truncate text-[11px] text-[#737373]">
                            {cert.issuer} · {cert.period}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
      <SkillModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        skillName={selectedSkill}
        skillMappings={SKILL_MAPPINGS}
      />
    </section>
  );
}
