// --- DATA DEFINITIONS ---

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
}

export interface Experience {
  id: number;
  period: string;
  title: string;
  company: string;
  description: string;
}

export interface Skill {
  id: number;
  name: string;
  proficiency: number; // 0 to 100
  icon: React.ElementType;
}
