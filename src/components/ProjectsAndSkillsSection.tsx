import {
  Code,
  Github,
  CheckCircle,
  Award,
  Briefcase,
  Mail,
  Home,
} from "lucide-react";
import { motion } from "framer-motion";
import type { FC } from "react";

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
  icon: FC<{ size: number; className: string }>;
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
    title: "E-Commerce Platform Redesign",
    description:
      "Revamped a large-scale e-commerce platform using React and TypeScript, improving load time by 40% and boosting conversions by 15%.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "GraphQL"],
    githubUrl: "#",
  },
  {
    id: 2,
    title: "AI Chatbot Integration",
    description:
      "Integrated an AI chatbot powered by Gemini API for automated customer support, reducing response times and ticket volume by 25%.",
    technologies: ["Next.js", "Gemini API", "Zustand", "Framer Motion"],
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Financial Dashboard (SaaS)",
    description:
      "Developed an analytics dashboard with interactive data visualizations and real-time sync using d3.js and MongoDB.",
    technologies: ["Angular", "RxJS", "Node.js", "MongoDB"],
    githubUrl: "#",
  },
];

const SKILLS_DATA: Skill[] = [
  { id: 1, name: "React / Next.js", proficiency: 95, icon: Code },
  { id: 2, name: "TypeScript", proficiency: 90, icon: CheckCircle },
  { id: 3, name: "Framer Motion", proficiency: 85, icon: Award },
  { id: 4, name: "Tailwind CSS", proficiency: 98, icon: Briefcase },
  { id: 5, name: "APIs (REST/GraphQL)", proficiency: 80, icon: Mail },
  { id: 6, name: "Cloud (Firebase/GCP)", proficiency: 75, icon: Home },
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
          const Icon = skill.icon;
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
                <Icon size={32} className="text-sky-600" />
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
