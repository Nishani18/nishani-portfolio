import { motion } from "framer-motion";
import React from "react";
import { Box } from "lucide-react";

interface CardProps {
  top: number; // Distance from top
  left?: number; // Distance from left
  right?: number; // Distance from right
  rotate: number;
  delay: number;
  className?: string;
  children: React.ReactNode;
}

const FloatingCard: React.FC<CardProps> = ({
  top,
  left,
  right,
  rotate,
  delay,
  children,
  className,
}) => (
  <motion.div
    className={`hidden lg:block absolute p-4 bg-white rounded-3xl shadow-xl border border-gray-100 z-40 cursor-pointer ${className}`}
    style={{ top, left, right }}
    initial={{ opacity: 0, rotate: rotate - 5 }}
    animate={{ opacity: 1, rotate: rotate }}
    transition={{ duration: 0.8, delay: delay, type: "spring", stiffness: 100 }}
  >
    {children}
  </motion.div>
);

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-[90vh] overflow-hidden bg-white md:mt-16"
    >
      {/* ===== Floating Cards - Left Edge ===== */}
      <FloatingCard
        top={100}
        left={-20}
        rotate={-10}
        delay={0.4}
        className="w-48"
      >
        <div className="flex flex-col items-center space-y-2">
          <Box className="text-yellow-500 w-8 h-8" />
          <span className="text-sm font-semibold">Support my art</span>

          {/* Link Wrapper for Button */}
          <a
            href="https://www.instagram.com/monochromegrave?igsh=MXc2Zm10c2VyOG1kcg=="
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <button className="w-full cursor-pointer py-1.5 bg-indigo-500 text-white rounded-xl text-xs font-bold mt-2 hover:bg-indigo-600 transition-all duration-300">
              Support
            </button>
          </a>
        </div>
      </FloatingCard>

      <FloatingCard
        top={350}
        left={-20}
        rotate={-5}
        delay={0.7}
        className="w-56"
      >
        <div className="flex flex-col items-start space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-gray-800 text-xl">💻</span>
            <span className="text-xs font-medium text-gray-700">GitHub</span>
          </div>
          <p className="text-lg font-bold">Check out my projects</p>

          {/* Link Wrapper for Button */}
          <a
            href="https://github.com/Nishani18"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <button className="w-full cursor-pointer py-1.5 bg-gray-800 text-white rounded-xl text-xs font-bold mt-2 hover:bg-gray-600 transition-all duration-300">
              View Repos
            </button>
          </a>
        </div>
      </FloatingCard>

      {/* ===== Floating Cards - Right Edge ===== */}

      <FloatingCard
        top={150}
        right={-20} // moved to right edge
        rotate={10} // optional: rotate similar to other right cards
        delay={0.6}
        className="w-56"
      >
        <div className="flex flex-col items-start space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-blue-700 text-xl">🔗</span>
            <span className="text-xs font-medium text-gray-700">LinkedIn</span>
          </div>
          <p className="text-lg font-bold">Connect with me</p>

          {/* Link Wrapper for Button */}
          <a
            href="https://www.linkedin.com/in/nishani-r-18b9a11b0/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <button className="w-full cursor-pointer py-1.5 bg-blue-700 text-white rounded-xl text-xs font-bold mt-2 hover:bg-blue-600 transition-all duration-300">
              Connect
            </button>
          </a>
        </div>
      </FloatingCard>

      <FloatingCard
        top={400}
        right={-20}
        rotate={-10}
        delay={0.8}
        className="w-48"
      >
        <div className="flex flex-col items-start space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-green-500 text-xl">⚡</span>
            <span className="text-xs font-medium text-gray-700">Skills</span>
          </div>
          <p className="text-base font-medium">
            JavaScript, React, TailwindCSS
          </p>
        </div>
      </FloatingCard>

      {/* ===== Centered Content ===== */}
      <div className="absolute inset-0 flex items-center justify-center z-30 px-4 md:px-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-6 text-center max-w-xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
            <span className="block text-2xl md:text-3xl font-light text-gray-500 mb-2">
              Hello, I'm
            </span>
            Nishani
          </h1>

          <p className="text-lg md:text-2xl text-gray-700 font-light">
            Software Engineer specializing in high-performance UIs, blending
            <span className="text-sky-500 font-medium">
              {" "}
              React & TypeScript{" "}
            </span>
            with
            <span className="text-sky-400 font-medium">
              {" "}
              pixel-perfect design.
            </span>
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex justify-center space-x-4 pt-8"
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-sky-500 text-white font-semibold rounded-full shadow-md hover:bg-sky-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>

            <motion.a
              href="#contact"
              className="px-8 py-3 bg-white/60 text-gray-900 font-semibold rounded-full border border-gray-200 backdrop-blur-xl shadow-sm hover:bg-white/70 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
