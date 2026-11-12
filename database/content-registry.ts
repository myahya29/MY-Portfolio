import { GraduationCap, Award } from 'lucide-react';
import { Project } from '../lib/types';

export const LINKS = {
  linkedin: 'https://www.linkedin.com/in/muhammad-yahyadev-/',
  github: 'https://github.com/myahya29',
  x: 'https://x.com/muhammadyahya',
  email: 'myahyaali220@gmail.com',
  cal: 'https://cal.com/muhammad-yahya/quick-chat',
};

export const SKILLS = {
  languages: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'C++'],
  platforms: ['Vercel', 'Firebase', 'Supabase'],
  frameworks: ['React', 'Next.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Bootstrap', 'Redux Toolkit'],
  database: ['MongoDB'],
  devops: ['Git', 'GitHub'],
  apis: ['REST API', 'JWT Authentication', 'Postman'],
  aimal: ['SEO', 'Digital Marketing', 'Graphic Design', 'Figma', 'Responsive Design'],
  featured: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Git', 'GitHub', 'Figma', 'Postman', 'Vercel']
};

export const SKILL_MAPPINGS = [
  { skill: 'HTML5', experienceIds: ['zaryonix-tech'], projectIds: ['iris-project', 'boosted-project', 'any-project', 'umlazy-project', 'graf-project'], educationIds: ['uob-bachelors'] },
  { skill: 'CSS3', experienceIds: ['zaryonix-tech'], projectIds: ['iris-project', 'boosted-project', 'any-project', 'umlazy-project', 'graf-project'], educationIds: ['uob-bachelors'] },
  { skill: 'JavaScript', experienceIds: ['zaryonix-tech'], projectIds: ['iris-project', 'boosted-project', 'any-project', 'umlazy-project', 'graf-project'], educationIds: ['uob-bachelors'] },
  { skill: 'TypeScript', experienceIds: ['zaryonix-tech'], projectIds: ['iris-project', 'boosted-project', 'any-project', 'umlazy-project', 'graf-project'] },
  { skill: 'React', experienceIds: ['zaryonix-tech'], projectIds: ['iris-project', 'boosted-project', 'any-project', 'umlazy-project', 'graf-project', 'cmp-project'] },
  { skill: 'Next.js', experienceIds: ['zaryonix-tech'], projectIds: ['umlazy-project'] },
  { skill: 'Node.js', experienceIds: ['zaryonix-tech'], projectIds: ['iris-project', 'boosted-project', 'any-project', 'cmp-project'] },
  { skill: 'Express.js', experienceIds: ['zaryonix-tech'], projectIds: ['iris-project', 'boosted-project', 'any-project', 'cmp-project'] },
  { skill: 'MongoDB', experienceIds: ['zaryonix-tech'], projectIds: ['iris-project', 'boosted-project', 'any-project', 'cmp-project'] },
  { skill: 'Tailwind CSS', experienceIds: ['zaryonix-tech'], projectIds: ['iris-project', 'boosted-project', 'any-project', 'umlazy-project', 'graf-project', 'cmp-project'] },
  { skill: 'Git', experienceIds: ['zaryonix-tech'], projectIds: ['iris-project', 'boosted-project', 'any-project', 'umlazy-project', 'graf-project'], educationIds: ['uob-bachelors'] },
  { skill: 'GitHub', experienceIds: ['zaryonix-tech'], projectIds: ['iris-project', 'boosted-project', 'any-project', 'umlazy-project', 'graf-project'], educationIds: ['uob-bachelors'] },
  { skill: 'REST API', experienceIds: ['zaryonix-tech'], projectIds: ['iris-project', 'boosted-project', 'any-project'] },
  { skill: 'JWT Authentication', experienceIds: ['zaryonix-tech'], projectIds: ['iris-project', 'boosted-project'] },
  { skill: 'Firebase', experienceIds: ['zaryonix-tech'], projectIds: [] },
  { skill: 'Supabase', experienceIds: ['zaryonix-tech'], projectIds: ['iris-project', 'boosted-project', 'any-project', 'graf-project'] },
  { skill: 'Redux Toolkit', experienceIds: ['zaryonix-tech'], projectIds: ['iris-project', 'boosted-project'] },
  { skill: 'Vercel', experienceIds: ['zaryonix-tech'], projectIds: ['iris-project', 'boosted-project', 'any-project', 'umlazy-project', 'graf-project'] },
  { skill: 'Figma', experienceIds: ['zaryonix-tech'], projectIds: [] },
  { skill: 'Postman', experienceIds: ['zaryonix-tech'], projectIds: [] },
  { skill: 'Responsive Design', experienceIds: ['zaryonix-tech'], projectIds: ['iris-project', 'boosted-project', 'any-project', 'umlazy-project', 'graf-project'] },
  { skill: 'SEO', experienceIds: ['zaryonix-tech'], projectIds: [] },
  { skill: 'Digital Marketing', experienceIds: ['zaryonix-tech'], projectIds: [] },
  { skill: 'Graphic Design', experienceIds: ['zaryonix-tech'], projectIds: [] }
];

export const SKILL_CATEGORIES = [
  { key: 'featured', label: 'Featured' },
  { key: 'all', label: 'All' },
  { key: 'languages', label: 'Languages' },
  { key: 'frameworks', label: 'Frameworks' },
  { key: 'database', label: 'Database' },
  { key: 'devops', label: 'DevOps' },
  { key: 'apis', label: 'API' },
  { key: 'platforms', label: 'Platforms' },
  { key: 'aimal', label: 'Design & Marketing' },
];

export const CATEGORIZED_SKILLS = Object.fromEntries(
  Object.entries(SKILLS).map(([category, skills]) => [category, skills])
);

CATEGORIZED_SKILLS['all'] = Array.from(new Set(Object.values(SKILLS).flat()));

export const EXPERIENCES = [
  {
    id: 'zaryonix-tech',
    title: 'Founder & CEO',
    company: 'Zaryonix Tech',
    location: 'Remote',
    period: '01/2026 – Present',
    description:
      'Founded Zaryonix Tech with the vision of helping businesses establish and grow their digital presence through innovative technology solutions.',
    achievements: [
      'Lead the development of modern, responsive, and high-performance websites.',
      'Build scalable full-stack web applications using the MERN Stack (MongoDB, Express.js, React.js, Node.js).',
      'Design intuitive user interfaces using React, Next.js, and Tailwind CSS.',
      'Deliver complete digital solutions including Website Development, Web Applications, UI/UX Design, Graphic Design, Branding, SEO, and Digital Marketing.',
      'Collaborate with clients from consultation and planning to deployment and ongoing support.',
      'Ensure clean code, responsive design, performance optimization, security, and excellent user experience.',
    ],
    featured: true,
    gradient: 'from-blue-600 to-indigo-600',
    link: 'https://zaryonix.com',
    current_work: true,
    summary: 'Website Development, Web Applications, UI/UX Design, Graphic Design, Branding, SEO, and Digital Marketing.'
  },
];

export type Experience = (typeof EXPERIENCES)[number] & { companyLogo?: string };

export type OrgGroup = {
  company: string;
  companyLogo?: string;
  location: string;
  link: string;
  gradient?: string;
  duration: string;
  positions: Experience[];
};

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function parsePeriod(period: string): { startY: number; startM: number; endY: number; endM: number } | null {
  const dates = period.match(/(\d{2})\/(\d{4})/g);
  if (!dates || dates.length === 0) return null;
  const startMatch = dates[0].match(/(\d{2})\/(\d{4})/);
  if (!startMatch?.[1] || !startMatch?.[2]) return null;
  const startM = parseInt(startMatch[1], 10);
  const startY = parseInt(startMatch[2], 10);
  let endM: number;
  let endY: number;
  if (period.includes('Present')) {
    const now = new Date();
    endM = now.getMonth() + 1;
    endY = now.getFullYear();
  } else if (dates.length >= 2) {
    const endMatch = dates[dates.length - 1]!.match(/(\d{2})\/(\d{4})/);
    if (!endMatch?.[1] || !endMatch?.[2]) return null;
    endM = parseInt(endMatch[1], 10);
    endY = parseInt(endMatch[2], 10);
  } else {
    endM = startM;
    endY = startY;
  }
  return { startM, startY, endM, endY };
}

export function formatPeriodDisplay(period: string): string {
  const p = parsePeriod(period);
  if (!p) return period;
  const startStr = `${MONTHS[p.startM - 1]} ${p.startY}`;
  const endStr = period.includes('Present') ? 'Present' : `${MONTHS[p.endM - 1]} ${p.endY}`;
  return `${startStr} – ${endStr}`;
}

export function formatPeriodStart(period: string): string {
  const p = parsePeriod(period);
  if (!p) return period;
  return `${MONTHS[p.startM - 1]} ${p.startY}`;
}

export function formatPeriodEnd(period: string): string {
  const p = parsePeriod(period);
  if (!p) return period;
  return period.includes('Present') ? 'Present' : `${MONTHS[p.endM - 1]} ${p.endY}`;
}

function periodMonths(period: string): number | null {
  const p = parsePeriod(period);
  if (!p) return null;
  return (p.endY - p.startY) * 12 + (p.endM - p.startM) + 1;
}

export function formatDuration(period: string): string {
  const months = periodMonths(period);
  if (months == null || months < 1) return '';
  if (months < 12) return `${months} mo`;
  const yrs = Math.floor(months / 12);
  const mo = months % 12;
  if (mo === 0) return yrs === 1 ? '1 yr' : `${yrs} yrs`;
  return `${yrs} yr${yrs > 1 ? 's' : ''} ${mo} mo`;
}

export function getEndDate(period: string): number {
  if (period.includes('Present')) return 999999;
  const dates = period.match(/(\d{2})\/(\d{4})/g);
  if (dates && dates.length >= 2) {
    const lastDate = dates[dates.length - 1];
    if (lastDate) {
      const m = lastDate.match(/(\d{2})\/(\d{4})/);
      if (m?.[1] && m?.[2]) return parseInt(m[2] + m[1]);
    }
  }
  if (dates && dates.length === 1) {
    const m = dates[0].match(/(\d{2})\/(\d{4})/);
    if (m?.[1] && m?.[2]) return parseInt(m[2] + m[1]);
  }
  return 0;
}

function getOrgDuration(positions: Experience[]): string {
  const ranges: { start: number; end: number }[] = [];
  for (const pos of positions) {
    const p = parsePeriod(pos.period);
    if (!p) continue;
    const start = p.startY * 12 + p.startM;
    const end = p.endY * 12 + p.endM;
    if (start > end) continue;
    ranges.push({ start, end });
  }
  if (ranges.length === 0) return '';
  ranges.sort((a, b) => a.start - b.start);
  const merged: { start: number; end: number }[] = [ranges[0]!];
  for (let i = 1; i < ranges.length; i++) {
    const curr = ranges[i]!;
    const last = merged[merged.length - 1]!;
    if (curr.start <= last.end + 1) {
      last.end = Math.max(last.end, curr.end);
    } else {
      merged.push(curr);
    }
  }
  let totalMonths = 0;
  for (const { start, end } of merged) {
    totalMonths += end - start + 1;
  }
  if (totalMonths < 1) return '';
  if (totalMonths < 12) return `${totalMonths} mo`;
  const yrs = Math.floor(totalMonths / 12);
  const mo = totalMonths % 12;
  if (mo === 0) return yrs === 1 ? '1 yr' : `${yrs} yrs`;
  return `${yrs} yr${yrs > 1 ? 's' : ''} ${mo} mo`;
}

export function getTotalExperienceYears(): string {
  const ranges: { start: number; end: number }[] = [];
  for (const exp of EXPERIENCES) {
    const p = parsePeriod(exp.period);
    if (!p) continue;
    const start = p.startY * 12 + p.startM;
    const end = p.endY * 12 + p.endM;
    if (start > end) continue;
    ranges.push({ start, end });
  }
  if (ranges.length === 0) return '0+ years';
  ranges.sort((a, b) => a.start - b.start);
  const merged: { start: number; end: number }[] = [ranges[0]!];
  for (let i = 1; i < ranges.length; i++) {
    const curr = ranges[i]!;
    const last = merged[merged.length - 1]!;
    if (curr.start <= last.end + 1) {
      last.end = Math.max(last.end, curr.end);
    } else {
      merged.push(curr);
    }
  }
  let totalMonths = 0;
  for (const { start, end } of merged) {
    totalMonths += end - start + 1;
  }
  if (totalMonths < 1) return '0+ years';
  const yrs = Math.floor(totalMonths / 12);
  return `${yrs}+ years`;
}

export function getHighestDegree(): { id: string; degreeAndMajor: string; institution: string } | null {
  const edu = EDUCATION as Array<{ id: string; degree: string; institution: string; period: string; isActive?: boolean }>;
  if (edu.length === 0) return null;
  const withEnd = edu.map((e) => ({
    ...e,
    endSort: e.period.includes('Present') ? 999999 : getEndDate(e.period),
  }));
  withEnd.sort((a, b) => b.endSort - a.endSort);
  const top = withEnd[0]!;
  const degreeAndMajor = top.degree.replace(/\s+in\s+/i, ' ').trim();
  return { id: top.id, degreeAndMajor, institution: top.institution };
}

export function groupExperiencesByOrg(): OrgGroup[] {
  const byCompany = new Map<string, Experience[]>();
  for (const exp of EXPERIENCES) {
    const key = exp.company;
    if (!byCompany.has(key)) byCompany.set(key, []);
    byCompany.get(key)!.push(exp);
  }
  return Array.from(byCompany.entries()).map(([company, positions]) => {
    const first = positions[0]!;
    const sorted = [...positions].sort((a, b) => getEndDate(b.period) - getEndDate(a.period));
    return {
      company,
      ...(('companyLogo' in first) && (first as any).companyLogo !== undefined && { companyLogo: (first as any).companyLogo }),
      location: first.location,
      link: first.link,
      ...(first.gradient !== undefined && { gradient: first.gradient }),
      duration: getOrgDuration(sorted),
      positions: sorted,
    };
  }).sort((a, b) => {
    const endDiff = getEndDate(b.positions[0]!.period) - getEndDate(a.positions[0]!.period);
    if (endDiff !== 0) return endDiff;
    const aStart = parsePeriod(a.positions[0]!.period);
    const bStart = parsePeriod(b.positions[0]!.period);
    if (!aStart || !bStart) return 0;
    return (bStart.startY * 12 + bStart.startM) - (aStart.startY * 12 + aStart.startM);
  });
}

export function getTopOrgGroups(): OrgGroup[] {
  const all = groupExperiencesByOrg();
  return all.filter(org => org.positions.some(p => (p as Experience & { featured?: boolean }).featured)).slice(0, 3);
}

export function getOtherOrgGroups(): OrgGroup[] {
  const all = groupExperiencesByOrg();
  const top = getTopOrgGroups();
  const topCompanies = new Set(top.map(o => o.company));
  return all.filter(org => !topCompanies.has(org.company));
}

export function getTimelineTicks(stepMonths: number = 3): { label: string; sortKey: number }[] {
  let minStartY = Infinity;
  let minStartM = Infinity;
  for (const exp of EXPERIENCES) {
    const p = parsePeriod(exp.period);
    if (!p) continue;
    if (p.startY < minStartY || (p.startY === minStartY && p.startM < minStartM)) {
      minStartY = p.startY;
      minStartM = p.startM;
    }
  }
  if (minStartY === Infinity) return [];
  const now = new Date();
  const ticks: { label: string; sortKey: number }[] = [];
  let y = minStartY;
  let m = minStartM;
  while (y < now.getFullYear() || (y === now.getFullYear() && m <= now.getMonth() + 1)) {
    ticks.push({ label: `${MONTHS[m - 1]} ${y}`, sortKey: y * 100 + m });
    m += stepMonths;
    while (m > 12) {
      m -= 12;
      y += 1;
    }
  }
  return ticks.reverse();
}

export function getTimelineYearTicks(): { label: string; sortKey: number }[] {
  let minStartY = Infinity;
  for (const exp of EXPERIENCES) {
    const p = parsePeriod(exp.period);
    if (!p) continue;
    if (p.startY < minStartY) minStartY = p.startY;
  }
  if (minStartY === Infinity) return [];
  const now = new Date();
  const ticks: { label: string; sortKey: number }[] = [];
  for (let y = now.getFullYear(); y >= minStartY; y--) {
    ticks.push({ label: String(y), sortKey: y * 100 + 12 });
  }
  return ticks;
}

export const PROJECT_CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'featured', label: 'Featured' },
  { key: 'products', label: 'Products' },
  { key: 'apps', label: 'Apps & Tools' },
  { key: 'theory', label: 'Theory' },
];

export const PROJECTS: Project[] = [
  {
    id: 'iris-project',
    sortDate: '2026-01',
    title: 'Iris',
    subtitle: 'AI Planner',
    period: '01/2026 – Present',
    description:
      'AI-powered daily assistant that sits on top of your conversations and workflows to organize what matters',
    technologies: ['TypeScript', 'React', 'Node.js', 'Supabase'],
    entry_point: 'live',
    link: 'https://www.iris-plan.com',
    status: 'In Progress',
    readMe: false,
    categories: ['products'],
    current_work: false,
    summary: 'AI daily planner for your conversations and workflows',
    related_experiences: ['voyagers'],
    accessible_at: ['hosted'],
    access_points: [
      { type: 'hosted', url: 'https://www.iris-plan.com', label: 'Live Site' }
    ]
  },
  {
    id: 'zaryonix-project',
    title: 'Zaryonix Tech',
    subtitle: 'Digital Solutions Agency',
    period: '01/2026 – Present',
    sortDate: '2026-01',
    description:
      'A full-service digital agency building websites, web applications, branding, SEO, and marketing solutions for businesses.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'jQuery'],
    entry_point: 'live',
    link: 'https://www.zaryonix.com/',
    status: 'Live',
    readMe: false,
    categories: ['apps'],
    summary: 'Digital agency building modern websites and applications.',
    accessible_at: ['hosted', 'github'],
    access_points: [
      { type: 'hosted', url: 'https://www.zaryonix.com/', label: 'Live Site' },
      { type: 'github', url: 'https://github.com/myahya29', label: 'GitHub' },
    ],
    related_experiences: ['zaryonix-tech'],
    image: '/zaryonix.png',
    imageAlt: 'Zaryonix Tech preview',
  },
  {
    id: 'boosted-project',
    title: 'Boosted',
    subtitle: 'AI Marketing Agent',
    period: '03/2026 – Present',
    sortDate: '2026-03',
    description:
      'A marketing agent that drafts content grounded in your product and voice — SEO-tuned and ready to ship across channels.',
    technologies: ['TypeScript', 'React', 'Node.js', 'Supabase'],
    entry_point: 'live',
    link: 'https://boosted.onrender.com',
    status: 'Live',
    readMe: false,
    categories: ['products'],
    summary: 'AI marketing agent for on-brand, SEO-tuned content',
    related_experiences: ['voyagers'],
    accessible_at: ['hosted'],
    access_points: [
      { type: 'hosted', url: 'https://boosted.onrender.com', label: 'Live Site' },
    ],
  },
  {
    id: 'any-project',
    title: 'Any',
    subtitle: 'Prompt-to-Tool Builder',
    period: '06/2026 – Present',
    sortDate: '2026-06',
    description:
      'A no-code platform that turns a single prompt into a fully built, tested, and deployed web tool — designed and live in minutes.',
    technologies: ['TypeScript', 'React', 'Node.js', 'Supabase'],
    entry_point: 'live',
    link: 'https://any-uf96.onrender.com',
    status: 'Live',
    readMe: false,
    categories: ['products'],
    summary: 'Turns a single prompt into a deployed web tool',
    related_experiences: ['voyagers'],
    accessible_at: ['hosted'],
    access_points: [
      { type: 'hosted', url: 'https://any-uf96.onrender.com', label: 'Live Site' },
    ],
  },
  {
    id: 'umlazy-project',
    title: 'UMLazy',
    subtitle: 'UML Diagram Editor',
    period: '06/2026 – Present',
    sortDate: '2026-06',
    description:
      'The quickest way to create UML diagrams — a fast, lightweight canvas for sketching software designs.',
    technologies: ['TypeScript', 'Next.js', 'React'],
    entry_point: 'live',
    link: 'https://umlazy.vercel.app',
    status: 'Live',
    readMe: false,
    categories: ['apps'],
    summary: 'Fast, lightweight UML diagram editor',
    related_experiences: ['voyagers'],
    accessible_at: ['hosted'],
    access_points: [
      { type: 'hosted', url: 'https://umlazy.vercel.app', label: 'Live Site' },
    ],
  },
  {
    id: 'graf-project',
    title: 'Graf',
    subtitle: 'Nonlinear Messaging',
    period: '07/2026 – Present',
    sortDate: '2026-07',
    description:
      'A messaging platform where any message becomes its own thread — the structure of email with the speed of chat.',
    technologies: ['TypeScript', 'React', 'Supabase'],
    entry_point: 'live',
    link: 'https://graf-fawn.vercel.app',
    status: 'Live',
    readMe: false,
    categories: ['apps'],
    summary: 'Graph-based messaging: any message becomes a thread',
    related_experiences: ['voyagers'],
    accessible_at: ['hosted'],
    access_points: [
      { type: 'hosted', url: 'https://graf-fawn.vercel.app', label: 'Live Site' },
    ],
  },
  {
    id: 'molecule-mutation-prediction',
    title: 'Molecule Mutation Prediction',
    subtitle: 'BRAF V600E Mutation Inhibitor Classifier',
    period: '08/2022 – 12/2022',
    sortDate: '2023-06',
    related_experiences: ['sjsu-bachelors'],
    description:
      'Support vector machine to identify compounds that inhibit BRAF V600E mutation using PubChem chemical data.',
    technologies: ['JavaScript'],
    entry_point: 'github',
    link: 'https://github.com/muhammad-yahya/small-molecule-mutation-prediction',
    status: 'Completed',
    readMe: true,
    categories: ['theory'],
    accessible_at: ['github'],
    access_points: [
      { type: 'github', url: 'https://github.com/muhammad-yahya/small-molecule-mutation-prediction', label: 'Code' },
    ]
  },
  {
    id: 'drone-build-project',
    title: 'Drone Path Planning',
    subtitle: 'High-Quality Image Capture System to Support Drone Path Planning',
    period: '09/2025 – 10/2025',
    sortDate: '2025-09',
    description:
      'A comprehensive drone flight planning system that generates optimal flight paths for efficient aerial data capture.',
    technologies: ['JavaScript', 'TypeScript', 'React', 'Next.js'],
    entry_point: 'live',
    link: 'https://drone-path-planner.vercel.app/',
    status: 'Completed',
    readMe: false,
    categories: ['apps'],
    accessible_at: ['github', 'hosted'],
    access_points: [
      { type: 'hosted', url: 'https://drone-path-planner.vercel.app/', label: 'Live Demo' },
      { type: 'github', url: 'https://github.com/muhammad-yahya/drone-trajectory-planner', label: 'Github' },
    ],
    related_experiences: ['sjsu-bachelors'],
  },
  {
    id: 'image-retrieval-project',
    title: 'Image Retrieval',
    subtitle: 'Embedding-Based Similarity Search',
    period: '02/2026 – 03/2026',
    sortDate: '2026-02',
    description:
      'Embedding-based retrieval that trains a ResNet backbone for L2-normalized embeddings.',
    technologies: ['JavaScript'],
    entry_point: 'github',
    link: 'https://github.com/muhammad-yahya/image-retrieval',
    status: 'Completed',
    readMe: true,
    categories: ['theory'],
    summary: 'Deep-embedding image retrieval similarity search',
    related_experiences: [],
    accessible_at: ['github'],
    access_points: [
      { type: 'github', url: 'https://github.com/muhammad-yahya/image-retrieval', label: 'Code' },
    ],
  },
  {
    id: 'task-scheduling-project',
    title: 'CPU Scheduling Simulator',
    subtitle: 'Task Scheduling System',
    period: '09/2026 – 12/2026',
    sortDate: '2026-12',
    description:
      'Research on CPU and GPU scheduling algorithms, with a focus on AI workloads and hybrid CPU-GPU scheduling strategies.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'TypeScript'],
    entry_point: 'live',
    link: 'https://cpu-scheduling-app-ten.vercel.app/',
    status: 'Live',
    categories: ['theory'],
    accessible_at: ['hosted', 'github'],
    access_points: [
      { type: 'hosted', url: 'https://cpu-scheduling-app-ten.vercel.app/', label: 'Live Demo' },
      { type: 'github', url: 'https://github.com/muhammad-yahya/task-scheduling', label: 'Code' },
    ],
    related_experiences: ['sjsu-bachelors'],
    image: '/cpu%20simulator.png',
    imageAlt: 'CPU Scheduling Simulator preview',
  },
  {
    id: 'breaking-dijkstra-project',
    title: 'Breaking Dijkstra',
    subtitle: 'Breaking Dijkstra\'s Algorithm',
    period: '09/2025 – 12/2025',
    sortDate: '2025-12',
    description:
      `A project that breaks Dijkstra's algorithm, a shortest path algorithm for graphs.`,
    technologies: ['TypeScript', 'React'],
    entry_point: 'github',
    link: 'https://github.com/muhammad-yahya/breaking-dijkstra',
    status: 'Completed',
    categories: ['theory'],
    accessible_at: ['github'],
    access_points: [
      { type: 'github', url: 'https://github.com/muhammad-yahya/breaking-dijkstra', label: 'Code' },
      { type: 'hosted', url: 'https://breaking-dijkstra.vercel.app/', label: 'Live Demo' },
    ],
    related_experiences: ['sjsu-bachelors'],
  },
  {
    id: 'brix-filling-project',
    title: 'Brix Filling',
    subtitle: 'Brick Laying & Filling Simulator',
    period: '07/2026 – Present',
    sortDate: '2026-07',
    description:
      'A visual simulator for brick laying and filling patterns — plan, preview, and optimize layouts in real time.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    entry_point: 'live',
    link: 'https://brixfilling-llc-formation-company.vercel.app/',
    status: 'Live',
    readMe: false,
    categories: ['apps'],
    summary: 'Brick laying and filling pattern simulator',
    related_experiences: ['zaryonix-tech'],
    accessible_at: ['hosted', 'github'],
    access_points: [
      { type: 'hosted', url: 'https://brixfilling-llc-formation-company.vercel.app/', label: 'Live Site' },
      { type: 'github', url: 'https://github.com/myahya29', label: 'GitHub' },
    ],
    image: '/brix filling.png',
    imageAlt: 'Brix Filling preview',
  },
  {
    id: 'habitflow-project',
    title: 'HabitFlow',
    subtitle: 'Habit Tracking App',
    period: '06/2026 – Present',
    sortDate: '2026-06',
    description:
      'A habit tracking application that helps users build and maintain daily routines with streaks, reminders, and progress analytics.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    entry_point: 'live',
    link: 'https://habit-flow-app-rho.vercel.app/',
    status: 'Live',
    readMe: false,
    categories: ['apps'],
    summary: 'Daily habit tracker with streaks and analytics',
    related_experiences: ['zaryonix-tech'],
    accessible_at: ['hosted', 'github'],
    access_points: [
      { type: 'hosted', url: 'https://habit-flow-app-rho.vercel.app/', label: 'Live Site' },
      { type: 'github', url: 'https://github.com/myahya29', label: 'GitHub' },
    ],
    image: '/habit app.png',
    imageAlt: 'HabitFlow App preview',
  },
  {
    id: 'cmp-project',
    title: 'Citizen Complaint Portal',
    subtitle: 'Municipal Grievance Management System',
    period: '2026',
    sortDate: '2026-05',
    description:
      'A civic tech platform for filing and tracking municipal complaints across Roads, Sanitation, Water Supply, and Power Grid — with real-time duplicate prevention, community upvoting, and officer feedback.',
    fullDescription:
      'The Citizen Complaint Portal is an official municipal grievance management system built for a hackathon. Citizens can register accounts, file complaints across four departments (Roads, Sanitation, Water Supply, Power Grid), and track resolution status in real time. The platform features intelligent duplicate detection that scans active complaints while filing, a community upvoting system that elevates high-priority issues for faster dispatch, and an officer feedback loop with ratings and remarks. Designed to bridge the gap between citizens and local government.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS'],
    entry_point: 'live',
    link: 'https://hackathon-project-sknr.vercel.app/',
    status: 'Live',
    readMe: false,
    categories: ['apps'],
    summary: 'Municipal complaint portal with real-time tracking and community upvoting',
    accessible_at: ['hosted'],
    access_points: [
      { type: 'hosted', url: 'https://hackathon-project-sknr.vercel.app/', label: 'Live Demo' },
    ],
    image: '/CMP.png',
    imageAlt: 'Citizen Complaint Portal preview',
    highlights: [
      'Real-time duplicate complaint detection',
      'Community priority upvoting system',
      'Officer remarks and satisfaction ratings',
      'Multi-department complaint routing',
    ],
  },
];

export const EDUCATION = [
  {
    id: 'uob-bachelors',
    degree: 'Bachelor of Science in Information Technology (BSIT)',
    institution: 'University of Balochistan',
    period: '2024 – Present',
    status: 'Current',
    location: 'Quetta, Pakistan',
    coursework: [
      'Programming Fundamentals',
      'Object-Oriented Programming',
      'Data Structures',
      'Database Systems',
      'Operating Systems',
      'Computer Networks',
      'Software Engineering',
      'Web Engineering',
    ],
    gradient: 'from-blue-600 to-indigo-600',
    icon: GraduationCap,
    isActive: true,
  },
];

export type Education = (typeof EDUCATION)[number] & { logo?: string };

export const CERTIFICATIONS = [
  {
    id: 'cisco-modern-ai',
    title: 'Introduction to Modern AI',
    issuer: 'Cisco',
    period: '2026',
    status: 'Active',
    gradient: 'from-blue-600 to-indigo-600',
    icon: Award,
    verificationUrl: 'https://www.netacad.com',
  },
  {
    id: 'smit-modern-web-app-development',
    title: 'Modern Web Application Development',
    issuer: 'Saylani Mass IT Training (SMIT)',
    period: '2025 – 2026',
    status: 'Active',
    gradient: 'from-blue-600 to-indigo-600',
    icon: Award,
  },
];

export type Organization = {
  id: string;
  name: string;
  role: string;
  period: string;
  description: string;
  institution: string;
  logo?: string;
  link?: string;
  related?: { type: 'experience' | 'education'; id: string };
};

export const ORGANIZATIONS: Organization[] = [
  {
    id: 'zaryonix-org',
    name: 'Zaryonix Tech',
    role: 'Founder & CEO',
    period: 'Jan 2026 – Present',
    description:
      'Helping startups and businesses grow through Website Development, Web Applications, UI/UX Design, Graphic Design, Branding, SEO, and Digital Marketing.',
    institution: 'Zaryonix Tech',
    link: 'https://zaryonix.com',
  },
];

export function getExperienceById(id: string): Experience | undefined {
  return EXPERIENCES.find(exp => exp.id === id);
}

/** Returns skill names mapped to the given experience id (from SKILL_MAPPINGS). */
export function getSkillsForExperienceId(experienceId: string): string[] {
  const skills: string[] = [];
  SKILL_MAPPINGS.forEach(m => {
    if (m.experienceIds?.includes(experienceId)) skills.push(m.skill);
  });
  return skills.sort((a, b) => a.localeCompare(b));
}

export function getProjectById(id: string) {
  return PROJECTS.find(proj => proj.id === id);
}

export function getEducationById(id: string): Education | undefined {
  return EDUCATION.find(edu => edu.id === id);
}

export function getOrganizationById(id: string) {
  return ORGANIZATIONS.find(org => org.id === id);
}

/** Sort key from an org period like "Jan 2026 – Present" → year*12 + monthIndex. */
function orgStartKey(period: string): number {
  const m = period.match(/([A-Za-z]{3,})\s+(\d{4})/);
  if (!m || !m[1] || !m[2]) return 0;
  const monthIdx = MONTHS.findIndex(mo => mo.toLowerCase() === m![1]!.slice(0, 3).toLowerCase());
  return parseInt(m[2], 10) * 12 + (monthIdx >= 0 ? monthIdx : 0);
}

/** Organizations ordered by start date, earliest first. */
export function getOrganizations(): Organization[] {
  return [...ORGANIZATIONS].sort((a, b) => orgStartKey(a.period) - orgStartKey(b.period));
}

export type CurrentWorkItem =
  | { type: 'project'; id: string; title: string; summary?: string; description?: string; sortDate: string; related?: { type: 'experience' | 'education'; id: string }[] }
  | { type: 'experience'; id: string; title: string; company: string; summary?: string; description?: string; sortDate: string }
  | { type: 'education'; id: string; degree: string; institution: string; summary?: string; description?: string; sortDate: string };

/** Returns all items tagged current_work from projects, experiences, and education. */
export function getCurrentWorkItems(): CurrentWorkItem[] {
  const items: CurrentWorkItem[] = [];
  const getSortDate = (p: string) => {
    const m = p.match(/(\d{4})-(\d{2})/);
    if (m) return m[0];
    if (p.includes('Present')) return new Date().toISOString().slice(0, 7);
    return p;
  };
  for (const p of PROJECTS) {
    if (p.current_work) {
      const related = (p.related_experiences || []).map((id) => {
        if (getExperienceById(id)) return { type: 'experience' as const, id };
        if (getEducationById(id)) return { type: 'education' as const, id };
        return null;
      }).filter(Boolean) as { type: 'experience' | 'education'; id: string }[];
      items.push({
        type: 'project',
        id: p.id,
        title: p.title,
        sortDate: p.sortDate || getSortDate(p.period),
        ...(p.summary != null && { summary: p.summary }),
        ...(p.description != null && { description: p.description }),
        ...(related.length > 0 && { related }),
      });
    }
  }
  for (const e of EXPERIENCES) {
    if ((e as Experience & { current_work?: boolean }).current_work) {
      const exp = e as Experience & { current_work?: boolean; summary?: string; description?: string };
      items.push({
        type: 'experience',
        id: exp.id,
        title: exp.title,
        company: exp.company,
        sortDate: getSortDate(exp.period),
        ...(exp.summary != null && { summary: exp.summary }),
        ...(exp.description != null && { description: exp.description }),
      });
    }
  }
  for (const edu of EDUCATION) {
    const ed = edu as { id: string; degree: string; institution: string; period: string; current_work?: boolean; summary?: string; description?: string };
    if (ed.current_work) {
      items.push({
        type: 'education',
        id: ed.id,
        degree: ed.degree,
        institution: ed.institution,
        sortDate: getSortDate(ed.period),
        ...(ed.summary != null && { summary: ed.summary }),
        ...(ed.description != null && { description: ed.description }),
      });
    }
  }
  return items.sort((a, b) => (b.sortDate || '').localeCompare(a.sortDate || '')).slice(0, 8);
}

// Helper function to expand skill mapping from IDs to full objects (for backwards compatibility)
export function expandSkillMapping(mapping: typeof SKILL_MAPPINGS[0]) {
  return {
    skill: mapping.skill,
    experiences: mapping.experienceIds?.map(getExperienceById).filter(Boolean) || [],
    projects: mapping.projectIds?.map(getProjectById).filter(Boolean) || [],
    education: mapping.educationIds?.map(getEducationById).filter(Boolean) || [],
  };
}

export function getProjectSkillsFromMapping(projectId: string) {
  const skills: string[] = [];
  SKILL_MAPPINGS.forEach(skillMapping => {
    if (skillMapping.projectIds?.includes(projectId)) {
      skills.push(skillMapping.skill);
    }
  });
  return skills;
}
