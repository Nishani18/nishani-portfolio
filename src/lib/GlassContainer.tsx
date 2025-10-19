import { motion } from "framer-motion";

const GlassContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
  motionProps?: any;
}> = ({ children, className, motionProps }) => (
  <motion.div
    className={`
      bg-white/5 border border-white/10 backdrop-blur-3xl shadow-2xl
      p-6 rounded-3xl transition-all duration-500
      hover:bg-white/10 hover:border-white/20
      ${className || ""}
    `}
    {...motionProps}
  >
    {children}
  </motion.div>
);

export default GlassContainer;
