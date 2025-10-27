import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Section from "./Section";
import type { Variants } from "framer-motion";
import TerminalAnimation from "./TerminalAnimation";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.15,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], // standard "easeOut" cubic-bezier
    },
  }),
};

const ContactSection: React.FC = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
    <Section id="contact" title="Let's Connect">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* --- Contact Info (Apple Style Left Panel) --- */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight">
            Let’s build something amazing.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-md">
            I’m always open to new opportunities, collaborations, or just
            conversations about design and technology. Feel free to drop a
            message or connect with me below.
          </p>

          <div className="space-y-6 text-gray-700 mt-8">
            <div className="flex items-center gap-4">
              <Mail size={24} className="text-gray-800" />
              <a
                href="mailto:nishanir18@gmail.com"
                className="hover:text-sky-600 transition-colors font-medium"
              >
                nishanir18@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <MapPin size={24} className="text-gray-800" />
              <p className="font-medium">Mangalore, KA, India</p>
            </div>
          </div>

          <div className="flex gap-6 pt-4">
            {[
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/nishani-r-18b9a11b0/",
              },
              { icon: Github, href: "https://github.com/Nishani18" },
            ].map(({ icon: Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md hover:border-sky-300 transition-all duration-300"
              >
                <Icon className="text-gray-700 hover:text-sky-600" size={22} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* --- Right side: Terminal Animation --- */}
        {/* Right side: terminal animation */}
        <motion.div>
          <TerminalAnimation />
        </motion.div>
      </div>
    </Section>
  </div>
);

export default ContactSection;
