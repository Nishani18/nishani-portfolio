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
    className={`hidden lg:block absolute p-4 bg-white rounded-3xl shadow-xl border border-gray-100 ${className}`}
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
          <button className="w-full py-1.5 bg-indigo-500 text-white rounded-xl text-xs font-bold mt-2">
            Support
          </button>
        </div>
      </FloatingCard>

      <FloatingCard
        top={300}
        left={-20}
        rotate={10}
        delay={0.6}
        className="w-56"
      >
        <div className="flex flex-col items-start space-y-2">
          <div className="flex items-center space-x-2">
            <div className="bg-pink-500 rounded-lg p-1">
              <span className="text-white text-xs font-bold">YT</span>
            </div>
            <span className="text-xs font-medium text-gray-700">
              Gadget Reviews
            </span>
          </div>
          <p className="text-lg font-bold">New PC Setup 🖥️</p>
          <button className="w-full py-2 bg-red-600 text-white rounded-xl text-sm font-bold mt-2">
            Subscribe 304K
          </button>
        </div>
      </FloatingCard>

      {/* ===== Floating Cards - Right Edge ===== */}
      <FloatingCard
        top={100}
        right={-20}
        rotate={10}
        delay={0.5}
        className="w-56"
      >
        <div className="flex flex-col items-start space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-orange-500 text-xl">📘</span>
            <span className="text-xs font-medium text-gray-700">Blog Post</span>
          </div>
          <p className="text-lg font-bold">How to Paint Like Hayao Miyazaki</p>
          <span className="text-xs text-gray-400">November 1, 2021</span>
        </div>
      </FloatingCard>

      <FloatingCard
        top={300}
        right={-20}
        rotate={-10}
        delay={0.7}
        className="w-48"
      >
        <div className="flex flex-col items-start space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-blue-400 text-xl">🐦</span>
            <span className="text-xs font-medium text-gray-700">My Tweets</span>
          </div>
          <p className="text-base font-medium">@chloez</p>
          <button className="w-full py-1.5 bg-blue-400 text-white rounded-xl text-sm font-bold mt-2">
            Follow 12K
          </button>
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
            Jane Doe
          </h1>

          <p className="text-lg md:text-2xl text-gray-700 font-light">
            Senior Front-End Architect specializing in high-performance UIs,
            blending
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
