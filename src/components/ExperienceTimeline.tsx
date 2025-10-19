import { motion } from "framer-motion";
import React, { type FC } from "react";

// --- Data & Types ---
type Experience = {
  id: number;
  period: string;
  title: string;
  company: string;
  description: string;
};

const EXPERIENCE_DATA: Experience[] = [
  {
    id: 1,
    period: " Sept 2023 – Present",
    title: "Software Engineer",
    company: "CDQP Design Webtech Pvt Ltd",
    description:
      "Led frontend development using React, Next.js, Redux, and Tailwind, turning Figma designs into responsive, user-friendly interfaces. Delivered e-commerce and business card platforms with real-time API integration and optimized performance.",
  },
  {
    id: 2,
    period: " Apr 2023 – Jun 2023",
    title: "Software Developer Intern",
    company: "CDQP Design Webtech Pvt Ltd",
    description:
      "Developed and maintained backend features with Laravel 7, including migrations, routing, and middleware, while building responsive, user-friendly web interfaces using Bootstrap, CSS, and modern frontend best practices.",
  },
];

// --- Reusable Components (Dependencies of ExperienceTimeline) ---

// Reusable Section Wrapper
const Section: FC<{ id: string; title: string; children: React.ReactNode }> = ({
  id,
  title,
  children,
}) => (
  <section id={id} className="py-24 md:py-32">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-extrabold tracking-tight text-center text-gray-900 mb-16"
    >
      {title}
    </motion.h2>
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
    className={`
      relative bg-white/75 backdrop-blur-3xl border border-gray-100 
      shadow-2xl shadow-gray-200/50 rounded-[2rem] transition-all duration-300
      hover:shadow-sky-300/60 hover:border-sky-300/50 
      ${className}
    `}
  >
    {children}
  </motion.div>
);

// --- Experience Timeline Component ---
const ExperienceTimeline: React.FC = () => (
  <Section id="experience" title="Work Experience">
    <div className="relative max-w-5xl mx-auto">
      {/* Subtle vertical line */}
      <motion.div
        className="absolute left-3 md:left-1/2 md:-ml-0.5 w-0.5 bg-gradient-to-b from-transparent via-sky-300 to-transparent h-full rounded-full"
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      {EXPERIENCE_DATA.map((exp, index) => {
        const isLeft = index % 2 === 0;

        // Mobile layout is always stacked (left), Desktop alternates (left/right)
        const timelineClass = isLeft ? "md:flex-row-reverse" : "md:flex-row";
        const cardMarginClass = isLeft
          ? "md:mr-auto md:pr-12"
          : "md:ml-auto md:pl-12";
        const textAlignment = isLeft ? "md:text-right" : "md:text-left";

        return (
          <motion.div
            key={exp.id}
            className={`relative flex justify-start md:justify-center items-start w-full mb-16 ${timelineClass}`}
            initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            {/* Empty space for alternating layout on desktop */}
            <div className="hidden md:block w-1/2"></div>

            {/* Timeline Dot (Enhanced) */}
            <div className="absolute left-0 top-0 md:left-1/2 md:-translate-x-1/2 z-20 flex items-center justify-center h-full">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                  delay: 0.5,
                }}
                viewport={{ once: true }}
                className="relative w-4 h-4 rounded-full bg-sky-500 shadow-md shadow-sky-400/50 border-2 border-white"
              >
                {/* Subtle pulsing outer ring for visual engagement */}
                <motion.div
                  animate={{ opacity: [0, 1, 0], scale: [1, 2.5, 1.5] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute inset-0 w-full h-full rounded-full bg-sky-500/30"
                />
              </motion.div>
            </div>

            {/* Glassy Experience Card */}
            <GlassContainer
              className={`w-11/12 md:w-5/12 !p-6 md:!p-8 space-y-2 ${cardMarginClass} ${textAlignment}`}
            >
              <p className="text-sm font-semibold text-sky-600 mb-1">
                {exp.period}
              </p>
              <h3 className="text-xl font-bold text-gray-900 leading-tight">
                {exp.title}
              </h3>
              <p className="text-gray-600 font-medium mb-3">{exp.company}</p>
              <p className="text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-3">
                {exp.description}
              </p>
            </GlassContainer>
          </motion.div>
        );
      })}
    </div>
  </Section>
);

export default ExperienceTimeline;
