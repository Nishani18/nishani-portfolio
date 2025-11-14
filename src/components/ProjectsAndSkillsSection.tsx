import { Code, Github } from "lucide-react";
import { motion } from "framer-motion";
import type { FC } from "react";
import React from "../../public/images/reactjs.png";
import NextJs from "../../public/images/Next.js.png";
import Typescript from "../../public/images/typescript.png";
import Redux from "../../public/images/redux.png";
import Tailwind from "../../public/images/tailwind.png";
import Css from "../../public/images/CSS3.png";
import Sass from "../../public/images/Sass.png";
import Node from "../../public/images/Node.js.png";
import ExpressJs from "../../public/images/Express.png";
import Vue from "../../public/images/vue.png";
import NuxtJs from "../../public/images/Nuxt JS.png";
import MongoDB from "../../public/images/MongoDB.png";
import Figma from "../../public/images/Figma.png";

// Types
type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
};

type Skill = {
  id: number;
  name: string;
  proficiency: number;
  icon: string;
};

// Reusable Section Wrapper
const Section: FC<{ id: string; title: string; children: React.ReactNode }> = ({
  id,
  title,
  children,
}) => (
  <section id={id} className="py-20">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-black">
      {title}
    </h2>
    {children}
  </section>
);

// Glass Container Wrapper
const GlassContainer: FC<{
  className?: string;
  children: React.ReactNode;
  motionProps?: any;
}> = ({ className = "", children, motionProps }) => (
  <motion.div
    {...motionProps}
    className={`relative bg-white/70 backdrop-blur-xl border border-gray-200 shadow-lg rounded-2xl transition-all hover:shadow-xl hover:border-sky-300 ${className}`}
  >
    {children}
  </motion.div>
);

// --- Data ---
const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "Krishi Nidhi",
    description:
      "Developed a Farmer Management App called Krishi Nidhi featuring finance and receipt management, data visualization with charts, and real-time soil moisture readings integrated from IoT sensors. Built using React Native, Node.js, Express, and MongoDB for a seamless full-stack experience.",
    technologies: [
      "React Native Expo",
      "Redux",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    githubUrl: "https://github.com/Nishani18/farmerapp",
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    description:
      "Designed and developed a fully responsive developer portfolio to showcase projects, skills, and experience. Focused on performance, accessibility, and clean UI animations for a modern user experience.",
    technologies: ["React.js", "Sass", "animate.css"],
    githubUrl: "https://github.com/Nishani18/Portfolio",
  },
];

const SKILLS_DATA: Skill[] = [
  { id: 1, name: "React.js / React Native", proficiency: 90, icon: React },
  { id: 2, name: "Next.js", proficiency: 90, icon: NextJs },
  { id: 3, name: "TypeScript", proficiency: 90, icon: Typescript },
  { id: 4, name: "Redux Toolkit", proficiency: 85, icon: Redux },
  { id: 6, name: "CSS3", proficiency: 85, icon: Css },
  { id: 7, name: "Sass (SCSS)", proficiency: 95, icon: Sass },
  { id: 8, name: "Tailwind CSS", proficiency: 95, icon: Tailwind },
  { id: 9, name: "Node.js", proficiency: 75, icon: Node },
  { id: 10, name: "Express.js", proficiency: 75, icon: ExpressJs },
  { id: 11, name: "MongoDB", proficiency: 75, icon: MongoDB },
  { id: 12, name: "Vue.js", proficiency: 75, icon: Vue },
  { id: 13, name: "Nuxt.js", proficiency: 70, icon: NuxtJs },
  { id: 14, name: "Figma", proficiency: 70, icon: Figma },
];

// --- Component ---
const ProjectsAndSkillsSection: React.FC = () => (
  <div
    id="projects & skills"
    className="container mx-auto px-4 md:px-6 lg:px-12 max-w-8xl"
  >
    {/* --- Projects Section --- */}
    <Section id="projects" title="Featured Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {PROJECTS_DATA.map((project, index) => (
          <GlassContainer
            key={project.id}
            motionProps={{
              initial: { opacity: 0, y: 40 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: index * 0.15 },
              viewport: { once: true },
            }}
            className="group p-7 flex flex-col justify-between overflow-hidden"
          >
            {/* Gradient Overlay for hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-sky-100/60 to-transparent rounded-2xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="flex items-start space-x-3 text-sky-600">
                <Code size={24} className="flex-shrink-0 mt-0.5" />
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  {project.title}
                </h3>
              </div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-200 relative z-10">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium text-sky-700 bg-sky-100 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sky-500 hover:text-sky-700 transition-colors font-semibold text-sm group"
              >
                <Github
                  size={16}
                  className="mr-2 group-hover:scale-110 transition-transform"
                />
                View Code
              </a>
            </div>
          </GlassContainer>
        ))}
      </div>
    </Section>

    {/* --- Skills Section --- */}
    <Section id="skills" title="Core Skills & Expertise">
      <div className="relative flex flex-wrap justify-center gap-10 sm:gap-14 py-4 md:py-10 xl:px-10">
        {SKILLS_DATA.map((skill, index) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
            viewport={{ once: true }}
            className="
          relative group flex flex-col items-center justify-center text-center select-none
          transition-all duration-500 ease-out
          hover:-translate-y-2
        "
          >
            {/* Soft gradient ring (more subtle) */}
            <div
              className="
            relative w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center
            bg-white shadow-[0_4px_15px_rgba(0,0,0,0.05)]
            before:content-[''] before:absolute before:inset-0 before:rounded-full
            before:p-[2px] before:bg-gradient-to-tr before:from-sky-400/20 before:to-cyan-300/10
            before:-z-10 before:blur-[0.5px]
            transition-transform duration-500 group-hover:scale-105
          "
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="
              w-10 h-10 sm:w-12 sm:h-12 object-contain transition-transform duration-700
              group-hover:scale-110
            "
              />
            </div>

            {/* Name */}
            <div
              className="
            mt-4 text-base font-medium text-slate-800
            tracking-wide transition-colors duration-300 group-hover:text-sky-600
          "
            >
              {skill.name}
            </div>

            {/* Subtle floating animation */}
            <div className="absolute inset-0 -z-10 animate-[float_6s_ease-in-out_infinite]" />
          </motion.div>
        ))}

        {/* Soft ambient background gradient */}
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.04),transparent_70%)]" />

        {/* Floating keyframes */}
        <style>{`
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-6px); }
      }
    `}</style>
      </div>
    </Section>
  </div>
);

export default ProjectsAndSkillsSection;
