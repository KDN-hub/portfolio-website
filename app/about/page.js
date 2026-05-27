"use client";

import { useEffect, useRef } from "react";
import {
  FaGraduationCap,
  FaCode,
  FaBriefcase,
  FaGithub,
  FaGitAlt,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaAws,
  FaMobile,
  FaProjectDiagram,
  FaTools,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiAngular,
  SiBootstrap,
  SiMysql,
  SiPhp,
  SiFastapi,
  SiFirebase,
  SiSupabase,
  SiGitlab,
  SiNotion,
  SiTrello,
  SiPostman,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";
import AnimatedSection from "@/components/AnimatedSection";




const techCategories = [
  {
    name: "Frontend",
    techs: [
      { label: "JavaScript", icon: SiJavascript },
      { label: "TypeScript", icon: SiTypescript },
      { label: "HTML5", icon: FaHtml5 },
      { label: "CSS3", icon: FaCss3Alt },
      { label: "React", icon: FaReact },
      { label: "Angular", icon: SiAngular },
      { label: "Next.js", icon: SiNextdotjs },
      { label: "Tailwind CSS", icon: SiTailwindcss },
      { label: "Bootstrap", icon: SiBootstrap },
    ],
  },
  {
    name: "Backend",
    techs: [
      { label: "Node.js", icon: FaNodeJs },
      { label: "PHP", icon: SiPhp },
      { label: "FastAPI", icon: SiFastapi },
      { label: "REST APIs", icon: TbApi },
    ],
  },
  {
    name: "Databases",
    techs: [
      { label: "MySQL", icon: SiMysql },
      { label: "Firebase", icon: SiFirebase },
      { label: "Supabase", icon: SiSupabase },
    ],
  },
  {
    name: "Cloud & DevOps",
    techs: [
      { label: "Git", icon: FaGitAlt },
      { label: "GitHub", icon: FaGithub },
      { label: "GitLab", icon: SiGitlab },
      { label: "AWS", icon: FaAws },
      { label: "Azure", icon: VscAzure },
    ],
  },
  {
    name: "Tools",
    techs: [
      { label: "VS Code", icon: FaCode },
      { label: "Trello", icon: SiTrello },
      { label: "Notion", icon: SiNotion },
    ],
  },
  {
    name: "Practices",
    techs: [
      { label: "Agile methodologies", icon: FaTools },
      { label: "Responsive Design", icon: FaMobile },
      { label: "Version Control", icon: FaProjectDiagram },
      { label: "Testing", icon: FaTools },
    ],
  },
];

const experiences = [
  {
    role: "Frontend Developer",
    company: "SIDID (Solutions for Inclusive Development and Innovative Design)",
    period: "April 2025 - Present",
    description: [
      "Got hands-on experience building both frontend and backend parts of web applications.",
      "Used Firebase to handle databases and user authentication for the projects I worked on.",
      "Worked closely with my team throughout different phases of our projects.",
      "Used GitHub for version control and learned how to handle merge conflicts effectively.",
      "Helped improve existing web applications by adding new features and fixing performance issues.",
      "Participated at several hackathons representing the company with my team.",
    ],
    type: "work",
  },
  {
    role: "Software Developer intern",
    company: "HiiT Plc (Hybrid)",
    period: "Jan 2025 - June 2025",
    description: [
      "Built web applications using Angular, TypeScript, Tailwind and Bootstrap making sure to follow good coding practices.",
      "Connected different APIs to fetch data and make sure the frontend and backend communicate properly.",
      "Tested applications thoroughly to find and fix bugs before users encountered them.",
      "Used GitLab for code management, handled merge requests, and participated in code reviews.",
      "I also had the opportunity to teach web design to incoming or prospective interns on several occasions.",
    ],
    type: "work",
  },
  {
    role: "B.Sc. Software Engineering",
    company: "Babcock University",
    period: "2022 - 2026",
    description:
      "Graduated with Second-Class Honours (Upper Division) or simply 2:1. Participated in some hackathons and worked with my departments software development unit on some projects.",
    type: "edu",
  },
];

// ─── Tech Card ────────────────────────────────────────────────────────────────

function TechCard({ label, icon: Icon, delay }) {
  return (
    <AnimatedSection delay={delay} direction="up" className="h-full">
      <div className="flex flex-col items-center justify-center p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/40 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer group h-full">
        <div className="text-4xl mb-3 text-white/60 group-hover:text-white transition-colors duration-300 ease-in-out">
          <Icon />
        </div>
        <p className="text-sm font-medium text-white/70 group-hover:text-white transition-colors duration-300 ease-in-out text-center">
          {label}
        </p>
      </div>
    </AnimatedSection>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function About() {
  return (
    <div>
      {/* ── Section 1: About Me ──────────────────────────────────────────────── */}
      <section className="py-20 text-text-light">
        <div className="container mx-auto px-6 max-w-6xl">

          {/* Heading */}
          <AnimatedSection className="text-center mb-16" direction="up">
            <p className="text-base font-semibold tracking-widest uppercase text-white/50 mb-2">
              Get To Know More
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-text-light">
              About <span className="text-white drop-shadow-md">Me</span>
            </h1>
          </AnimatedSection>

          <div className="flex flex-col lg:flex-row lg:space-x-12 items-start">

            {/* Left: Info Cards */}
            <AnimatedSection className="w-full lg:w-1/2 mb-10 lg:mb-0 flex flex-col space-y-6" direction="left" delay={100}>

              {/* Education Card */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 flex items-start space-x-5 hover:border-white/30 hover:bg-white/10 transition-all duration-300 ease-in-out">
                <div className="text-white/80 text-3xl p-3 rounded-xl bg-white/10 border border-white/20 flex-shrink-0 flex items-center justify-center">
                  <FaGraduationCap />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Education</h3>
                  <p className="text-text-muted">B.Sc. Software Engineering</p>
                  <p className="text-text-muted">Babcock University (Expected Graduation in 2026)</p>
                </div>
              </div>

              {/* Experience Card */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 flex items-start space-x-5 hover:border-white/30 hover:bg-white/10 transition-all duration-300 ease-in-out">
                <div className="text-white/80 text-3xl p-3 rounded-xl bg-white/10 border border-white/20 flex-shrink-0 flex items-center justify-center">
                  <FaCode />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Experience</h3>
                  <p className="text-text-muted">Frontend &amp; Backend Development</p>
                  <p className="text-text-muted">API Integration &amp; Testing</p>
                  <p className="text-text-muted">Version Control (GitLab, GitHub)</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Bio */}
            <AnimatedSection className="w-full lg:w-1/2 flex flex-col justify-center space-y-5" direction="right" delay={200}>
              <p className="text-lg leading-relaxed text-justify text-text-muted">
                I&apos;m{" "}
                <strong className="text-white font-semibold">Nwakwuribe Kamsi</strong>, a highly motivated Software
                Engineering student passionate about building impactful web solutions. With hands-on experience in both{" "}
                <strong className="text-white/90">frontend and backend development</strong>, I excel at crafting
                intuitive user interfaces and seamlessly integrating robust backend systems. My expertise spans across
                Next.js, React, Angular, Python, and modern databases.
              </p>
              <p className="text-lg leading-relaxed text-justify text-text-muted">
                Beyond coding, I bring a strong foundation in{" "}
                <strong className="text-white/90">project management</strong>, demonstrated by overseeing projects and
                coordinating cross-functional teams to ensure successful, on-time deliveries. My proactive approach to
                problem-solving, coupled with a dedication to continuous learning and agile methodologies, drives me to
                deliver comprehensive and effective software solutions that meet user needs.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Section 2: Technologies & Tools ────────────────────────────────────── */}
      <section className="py-20 bg-black/20 backdrop-blur-sm border-t border-b border-white/10 text-text-light">
        <div className="container mx-auto px-6 max-w-6xl">

          <AnimatedSection className="text-center mb-14" direction="up">
            <p className="text-base font-semibold tracking-widest uppercase text-white/50 mb-2">
              What I Work With
            </p>
            <h2 className="text-4xl font-bold text-text-light">
              Technologies &amp; <span className="text-white drop-shadow-md">Tools</span>
            </h2>
          </AnimatedSection>

          <div className="space-y-14">
            {techCategories.map((category, catIdx) => (
              <div key={category.name}>
                <AnimatedSection direction="up" delay={catIdx * 50}>
                  <h3 className="text-2xl font-bold text-white mb-6 text-center sm:text-left border-b border-white/10 pb-3">
                    {category.name}
                  </h3>
                </AnimatedSection>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                  {category.techs.map((tech, techIdx) => (
                    <TechCard
                      key={tech.label}
                      label={tech.label}
                      icon={tech.icon}
                      delay={catIdx * 50 + techIdx * 60}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Experience & Education Timeline ──────────────────────────── */}
      <section className="py-20 text-text-light">
        <div className="container mx-auto px-6 max-w-4xl">

          <AnimatedSection className="text-center mb-16" direction="up">
            <p className="text-base font-semibold tracking-widest uppercase text-white/50 mb-2">
              My Journey
            </p>
            <h2 className="text-4xl font-bold text-text-light">
              Experience &amp; <span className="text-white drop-shadow-md">Education</span>
            </h2>
          </AnimatedSection>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10" />

            <div className="space-y-10 pl-16">
              {experiences.map((item, idx) => (
                <AnimatedSection key={idx} direction="left" delay={idx * 120}>
                  <div className="relative">
                    {/* Dot */}
                    <span className="absolute left-[-2.75rem] top-1.5 w-4 h-4 rounded-full bg-white/20 border-2 border-white/60 shadow-[0_0_12px_rgba(255,255,255,0.4)]" />

                    {/* Card */}
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 hover:border-white/30 hover:bg-white/10 transition-all duration-300 ease-in-out">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                        <div>
                          <h3 className="text-xl font-bold text-white">{item.role}</h3>
                          <h4 className="text-white/70 font-medium">{item.company}</h4>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 text-xs text-white/60 rounded-full border border-white/20 whitespace-nowrap">
                            {item.type === "edu" ? (
                              <FaGraduationCap className="text-white/60" />
                            ) : (
                              <FaBriefcase className="text-white/60" />
                            )}
                            {item.period}
                          </span>
                        </div>
                      </div>
                      {Array.isArray(item.description) ? (
                        <ul className="list-disc pl-5 space-y-1 text-text-muted leading-relaxed">
                          {item.description.map((desc, i) => (
                            <li key={i}>{desc}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-text-muted leading-relaxed">{item.description}</p>
                      )}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
