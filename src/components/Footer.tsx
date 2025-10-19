import { motion } from "framer-motion";

const FooterComponent: React.FC = () => (
  <motion.footer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    className="border-t border-gray-200 bg-gradient-to-b from-gray-50 to-white py-10 text-center text-gray-600"
  >
    <div className="container mx-auto px-6">
      <p className="text-sm md:text-base font-medium tracking-wide">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-gray-900 font-semibold">Jane Doe</span>. All
        rights reserved.
      </p>

      <p className="text-xs md:text-sm mt-2 text-gray-500">
        Built with <span className="text-sky-600 font-medium">React</span>,{" "}
        <span className="text-sky-600 font-medium">TypeScript</span>,{" "}
        <span className="text-sky-600 font-medium">Framer Motion.</span>
      </p>
    </div>
  </motion.footer>
);

export default FooterComponent;
