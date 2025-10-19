import GlassContainer from "@/lib/GlassContainer";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, Code, Home, Mail, Menu, User, X } from "lucide-react";
import { useMemo, useState } from "react";
import MyPhoto from "../../public/images/my-photo.jpg";

const HeaderComponent: React.FC<{ activeSection: string }> = ({
  activeSection,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "projects & skills", label: "Project & Skills", icon: Code },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const NavLink: React.FC<{
    id: string;
    label: string;
    icon: React.ElementType;
  }> = ({ id, label, icon: Icon }) => {
    const isActive = activeSection === id;
    const commonClasses =
      "flex items-center space-x-2 py-2 px-4 rounded-full text-sm font-medium transition-all duration-300";

    return (
      <a
        href={`#${id}`}
        onClick={() => setIsOpen(false)}
        className={`${commonClasses} ${
          isActive
            ? "text-sky-600 bg-white shadow-md border border-gray-200"
            : "text-gray-700 hover:text-sky-600 hover:bg-gray-100/60"
        }`}
      >
        <Icon size={16} />
        <span className="inline">{label}</span>
      </a>
    );
  };

  const MobileMenu = useMemo(
    () => (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full z-40 md:hidden p-4"
          >
            <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-lg p-4 space-y-2">
              {navItems.map((item) => (
                <NavLink key={item.id} {...item} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    ),
    [isOpen, activeSection]
  );

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="fixed top-0 left-0 w-full z-[1000] bg-transparent"
    >
      <div className="p-3 md:p-4">
        <GlassContainer className="flex justify-between items-center max-w-7xl mx-auto !p-3 rounded-2xl transition-all duration-300 glass-card">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <img
              src={MyPhoto}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-900">
                Nishani
              </span>
              <span className="text-xs text-gray-500">Software Engineer</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <NavLink key={item.id} {...item} />
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full text-gray-700 hover:bg-gray-200 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </GlassContainer>

        {MobileMenu}
      </div>
    </motion.header>
  );
};

export default HeaderComponent;
