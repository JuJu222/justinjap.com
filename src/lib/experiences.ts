export interface ExperienceProject {
  title: string;
  description: string;
}

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  contract: string;
  dateRange: string;
  duration: string;
  location: string;
  summary: string;
  overview?: string;
  highlights: string[];
  skills: string[];
  projects?: ExperienceProject[];
}

export const experiences: ExperienceEntry[] = [
  {
    id: 'unit-network',
    role: 'Full Stack Developer',
    company: 'Unit Network',
    contract: 'Contract',
    dateRange: 'Aug 2024 — Present',
    duration: '1 yr 4 mos',
    location: 'London Area, United Kingdom · Remote',
    summary:
      'Maintaining a large blockchain web app, marketing sites, and internal tools that dozens of teams rely on every day.',
    overview:
      'Unit Network is a decentralized platform that brings tokenization to real-world businesses and communities. It empowers users to build, trade, and govern within a fair and transparent economy.',
    highlights: [
      'Developed and maintained a blockchain web app used by thousands of registered users, along with several interactive marketing websites and internal dashboards using Next.js, TypeScript, Tailwind, and Motion.',
      'Built an Express.js REST API to connect the web experiences with blockchain infrastructure and provide predictable data flows for the frontends.',
      'Collaborated closely with designers and engineers to translate new product goals into intuitive and polished user journeys.',
    ],
    skills: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Motion', 'Express.js', 'PostgreSQL'],
    projects: [
      {
        title: 'Crypto Ski Week',
        description:
          'A fully interactive landing page for a gathering of founders, investors, and thought leaders that blends alpine adventures with blockchain conversations.',
      },
      {
        title: 'UnitPudgy Antarctica',
        description:
          'An expedition-focused landing page that highlights the Unit Network and Pudgy Penguins collaboration, including tokenization benefits and the 60+ community events tied to the trip.',
      },
    ],
  },
  {
    id: 'sinar-mitra',
    role: 'Full Stack Developer',
    company: 'PT. Sinar Mitra Bangunan',
    contract: 'Freelance',
    dateRange: 'Mar 2024 — Aug 2024',
    duration: '6 mos',
    location: 'Surabaya, East Java, Indonesia · Hybrid',
    summary:
      'Designed and shipped an internal attendance and payroll platform that keeps operations running for the construction team.',
    highlights: [
      'Built and maintained the web application for managing attendances and payroll generation of over 50 employees using Next.js, TypeScript, Tailwind CSS, Prisma, PostgreSQL, and Docker.',
      'Improved performance and usability through rigorous user testing and client-focused usability evaluations.',
    ],
    skills: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Docker'],
    projects: [
      {
        title: 'Dashboard Page',
        description: 'Centralized operational metrics for site supervisors.',
      },
      {
        title: 'Attendances Page',
        description: 'Track team presence and auto-sync with payroll.',
      },
      {
        title: 'Summary Page',
        description: 'Monthly reports and payroll-ready summaries.',
      },
    ],
  },
  {
    id: 'apple-academy',
    role: 'iOS Developer Intern',
    company: 'Apple Developer Academy | UC',
    contract: 'Internship',
    dateRange: 'Mar 2023 — Dec 2023',
    duration: '10 mos',
    location: 'Surabaya, East Java, Indonesia · On-site',
    summary:
      'Developed and shipped polished iOS apps, then iterated through user testing and collaboration to keep performance high.',
    overview: 'Focus areas included machine learning, SwiftUI, and rapid prototyping for real-world problems.',
    highlights: [
      'Published iOS apps on the App Store that earned 5-star ratings and crossed 400 total downloads.',
      'Partnered with designers and developers using Scrum to keep our releases predictable and focused.',
      'Ensured each release met performance and usability expectations through structured testing sessions.',
    ],
    skills: ['Machine Learning', 'Swift', 'SwiftUI', 'iOS Development', 'Project Management'],
    projects: [
      {
        title: 'Certificate of Completion',
        description: 'Graduated from the academy program after delivering a capstone project.',
      },
      {
        title: 'Macro Challenge Showcase',
        description: 'Demonstrated team work and product craft during the academy-wide showcase.',
      },
      {
        title: 'Macro Challenge Team (Careific)',
        description: 'Contributed to the Careific team that blended healthcare with AI assistance.',
      },
    ],
  },
  {
    id: 'orta-indonesia',
    role: 'Full Stack Developer',
    company: 'ORTA Indonesia',
    contract: 'Freelance',
    dateRange: 'Nov 2022 — Aug 2023',
    duration: '10 mos',
    location: 'Surabaya, East Java, Indonesia · Hybrid',
    summary:
      'Built a platform that helps donors connect with orphanages and keeps both donations and transactions easy to manage.',
    highlights: [
      'Developed the web application that links donors with orphanages, enabling staff to handle donations and transactions from a single dashboard.',
      'Used React, Laravel, Inertia, PHP, and MySQL to keep the experience responsive, secure, and scalable.',
    ],
    skills: ['React.js', 'Laravel', 'Inertia.js', 'PHP', 'MySQL'],
    projects: [
      {
        title: 'Landing Page',
        description: 'Introduced ORTA Indonesia to new supporters.',
      },
      {
        title: 'Login Page',
        description: 'Secure access for orphanage and administration staff.',
      },
      {
        title: 'Donation Page',
        description: 'Streamlined giving flow with clear impact tracking.',
      },
    ],
  },
  {
    id: 'ciputra-university',
    role: 'Teaching Assistant',
    company: 'Universitas Ciputra Surabaya',
    contract: 'Part-time',
    dateRange: 'Feb 2022 — Aug 2023',
    duration: '1 yr 7 mos',
    location: 'Surabaya, East Java, Indonesia · Hybrid',
    summary:
      'Guided students through applied mobile and visual programming classes while designing labs and problem sets.',
    highlights: [
      'Served as the TA for Mobile Application Development, Visual Programming, and Programming Techniques courses.',
      'Led lab sessions on iOS development with SwiftUI and Android development with Kotlin, plus drafted Object-Oriented Programming problem sets.',
    ],
    skills: ['iOS Development', 'SwiftUI', 'Swift', 'Xcode', 'Android Development', 'Kotlin', 'Java', 'OOP'],
  },
  {
    id: 'citra-berkat',
    role: 'Full Stack Developer',
    company: 'Sekolah Citra Berkat Bukit Palma Citraland',
    contract: 'Freelance',
    dateRange: 'Oct 2021 — Mar 2022',
    duration: '6 mos',
    location: 'Surabaya, East Java, Indonesia · Remote',
    summary:
      'Built an internal maintenance dashboard that became the go-to tool for the facilities team.',
    highlights: [
      'Developed the website to optimize maintenance tracking for the school building, regularly used by 20+ personnel.',
      'Focused on Laravel, PHP, and MySQL to deliver CRUD-first workflows.',
    ],
    skills: ['Laravel', 'PHP', 'MySQL'],
  },
];
