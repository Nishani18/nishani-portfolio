import { motion } from "framer-motion";

const Section: React.FC<{
  id: string;
  children: React.ReactNode;
  title: string;
}> = ({ id, children, title }) => (
  <motion.section
    id={id}
    className="md:py-28 min-h-screen"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.8 }}
  >
    <motion.h2
      className="text-3xl md:text-4xl font-semibold mb-12 text-gray-900 bg-clip-text bg-gradient-to-r from-sky-500 to-teal-400"
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      {title}
    </motion.h2>
    {children}
  </motion.section>
);

export default Section;
