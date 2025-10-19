import { motion } from "framer-motion";

const FooterComponent: React.FC = () => (
  <motion.footer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    className="border-t border-gray-200 bg-gradient-to-b from-gray-50 to-white py-4 text-center text-gray-600"
  >
    <div className="container mx-auto px-6">
      <p className="text-xs md:text-sm font-medium tracking-wide">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-gray-900 font-semibold">Nishani</span>. All rights
        reserved.
      </p>
    </div>
  </motion.footer>
);

export default FooterComponent;
