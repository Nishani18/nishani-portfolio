import { Code, Github } from "lucide-react";
import { motion } from "framer-motion";
import type { FC } from "react";
import React from "../../public/images/reactjs.png";
import Typescript from "../../public/images/typescript.png";
import Redux from "../../public/images/redux.png";
import Tailwind from "../../public/images/tailwind.png";
import Node from "../../public/images/nodejs.webp";
import Vue from "../../public/images/vue.png";

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
  { id: 1, name: "React / Next.js", proficiency: 90, icon: React },
  { id: 2, name: "TypeScript", proficiency: 90, icon: Typescript },
  { id: 3, name: "Redux Toolkit", proficiency: 85, icon: Redux },
  { id: 4, name: "Tailwind CSS", proficiency: 95, icon: Tailwind },
  { id: 5, name: "Node / express.js", proficiency: 75, icon: Node },
  { id: 6, name: "Vue / Nuxt.js", proficiency: 70, icon: Vue },
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILLS_DATA.map((skill, index) => {
          return (
            <GlassContainer
              key={skill.id}
              motionProps={{
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: index * 0.1 },
                viewport: { once: true },
              }}
              className="p-6 space-y-4 hover:shadow-sky-200/50"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-8 h-8 object-contain"
                />
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {skill.name}
                </h3>
              </div>

              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-sky-500 to-blue-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.proficiency}%` }}
                  transition={{ duration: 1.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>

              <p className="text-xs font-medium text-gray-600 text-right">
                {skill.proficiency}% Proficient
              </p>
            </GlassContainer>
          );
        })}
      </div>
    </Section>
  </div>
);

export default ProjectsAndSkillsSection;
