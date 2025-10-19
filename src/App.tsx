import { useCallback, useEffect, useState } from "react";
import "./App.css";
import ExperienceTimeline from "./components/ExperienceTimeline";
import HeaderComponent from "./components/Header";
import HeroSection from "./components/Hero";
import ContactSection from "./components/Contact";
import FooterComponent from "./components/Footer";
import AboutMe from "./components/AboutMe";
import ProjectsAndSkillsSection from "./components/ProjectsAndSkillsSection";

const sectionIds = [
  "home",
  "about",
  "experience",
  "projects & skills",
  "contact",
];

function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Observer to track visible section for navigation highlighting
  const useIntersectionObserver = (selectors: string[]) => {
    const observerCallback = useCallback(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      []
    );

    useEffect(() => {
      const options = {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      };

      const observer = new IntersectionObserver(observerCallback, options);

      selectors.forEach((selector) => {
        const element = document.getElementById(selector);
        if (element) {
          observer.observe(element);
        }
      });

      return () => observer.disconnect();
    }, [selectors, observerCallback]);
  };

  useIntersectionObserver(sectionIds);

  // Apply Apple-inspired light theme globally
  useEffect(() => {
    document.body.className =
      "bg-white text-gray-900 font-['Inter',_sans-serif] min-h-screen";
  }, []);

  return (
    <>
      <HeaderComponent activeSection={activeSection} />

      <main>
        <HeroSection />
        <AboutMe />
        <ProjectsAndSkillsSection />
        <ExperienceTimeline />
        <ContactSection />
      </main>

      <FooterComponent />
    </>
  );
}

export default App;
