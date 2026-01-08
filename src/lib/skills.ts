export interface Skill {
  name: string;
  icon?: string;
  level: "expert" | "advanced" | "intermediate";
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: Skill[];
  color: string;
}

export const skillCategories: SkillCategory[] = [
  {
    name: "AI & Machine Learning",
    description: "Building and deploying intelligent systems at scale",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Python", level: "expert" },
      { name: "PyTorch", level: "expert" },
      { name: "TensorFlow", level: "advanced" },
      { name: "LLMs & RAG", level: "expert" },
      { name: "MLOps", level: "advanced" },
      { name: "Hugging Face", level: "advanced" },
      { name: "Computer Vision", level: "advanced" },
      { name: "NLP", level: "expert" },
    ],
  },
  {
    name: "Frontend Development",
    description: "Creating beautiful, responsive user interfaces",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "React", level: "expert" },
      { name: "Next.js", level: "expert" },
      { name: "TypeScript", level: "expert" },
      { name: "Tailwind CSS", level: "expert" },
      { name: "Framer Motion", level: "advanced" },
      { name: "Redux", level: "advanced" },
      { name: "GraphQL", level: "advanced" },
      { name: "Testing (Jest, Cypress)", level: "advanced" },
    ],
  },
  {
    name: "Backend & APIs",
    description: "Designing robust, scalable backend systems",
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", level: "expert" },
      { name: "FastAPI", level: "expert" },
      { name: "PostgreSQL", level: "advanced" },
      { name: "Redis", level: "advanced" },
      { name: "MongoDB", level: "advanced" },
      { name: "REST APIs", level: "expert" },
      { name: "WebSockets", level: "advanced" },
      { name: "Message Queues", level: "advanced" },
    ],
  },
  {
    name: "Infrastructure & DevOps",
    description: "Deploying and managing cloud-native applications",
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Docker", level: "expert" },
      { name: "Kubernetes", level: "advanced" },
      { name: "AWS", level: "advanced" },
      { name: "GCP", level: "intermediate" },
      { name: "Terraform", level: "advanced" },
      { name: "CI/CD", level: "expert" },
      { name: "GitHub Actions", level: "expert" },
      { name: "Monitoring & Logging", level: "advanced" },
    ],
  },
];

export const experienceYears = 6;
export const projectsCompleted = 50;
export const technologiesUsed = 40;
