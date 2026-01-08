export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: "ml" | "fullstack" | "frontend" | "backend";
  github?: string;
  demo?: string;
  featured: boolean;
  metrics?: string[];
}

export const projects: Project[] = [
  {
    id: "ml-pipeline",
    title: "End-to-End ML Pipeline",
    description:
      "Production-grade machine learning pipeline with automated training, deployment, and monitoring.",
    longDescription:
      "Built a comprehensive MLOps pipeline that handles data ingestion, preprocessing, model training, evaluation, and deployment. Features automated retraining triggers based on data drift detection, A/B testing infrastructure, and real-time performance monitoring.",
    image: "/projects/ml-pipeline.png",
    tags: ["Python", "PyTorch", "MLflow", "Docker", "Kubernetes", "AWS"],
    category: "ml",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
    metrics: [
      "40% reduction in model deployment time",
      "99.9% uptime in production",
      "Processes 1M+ predictions daily",
    ],
  },
  {
    id: "llm-assistant",
    title: "Domain-Specific LLM Assistant",
    description:
      "Fine-tuned large language model for enterprise knowledge management with RAG integration.",
    longDescription:
      "Developed a custom LLM solution that combines fine-tuned language models with retrieval-augmented generation (RAG) to provide accurate, context-aware responses for enterprise documentation. Includes vector database integration and streaming inference.",
    image: "/projects/llm-assistant.png",
    tags: ["LLMs", "RAG", "LangChain", "Pinecone", "FastAPI", "React"],
    category: "ml",
    github: "https://github.com",
    featured: true,
    metrics: [
      "85% reduction in support tickets",
      "Sub-second response times",
      "98% accuracy on domain queries",
    ],
  },
  {
    id: "saas-platform",
    title: "SaaS Analytics Platform",
    description:
      "Full-stack analytics dashboard with real-time data visualization and collaborative features.",
    longDescription:
      "Built a modern SaaS platform for business analytics featuring real-time dashboards, collaborative workspaces, and advanced data visualization. Includes role-based access control, API integrations, and automated reporting.",
    image: "/projects/saas-platform.png",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "WebSockets"],
    category: "fullstack",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
    metrics: [
      "10K+ active users",
      "50ms average response time",
      "99.99% uptime SLA",
    ],
  },
  {
    id: "recommendation-engine",
    title: "Real-Time Recommendation Engine",
    description:
      "Scalable recommendation system serving personalized content to millions of users.",
    longDescription:
      "Designed and implemented a high-throughput recommendation engine using collaborative filtering and deep learning. Features real-time user behavior tracking, A/B testing, and dynamic model updates.",
    image: "/projects/recommendation.png",
    tags: ["Python", "TensorFlow", "Redis", "Kafka", "React"],
    category: "ml",
    github: "https://github.com",
    featured: false,
    metrics: [
      "35% improvement in engagement",
      "100K recommendations/second",
      "Dynamic personalization",
    ],
  },
  {
    id: "design-system",
    title: "Component Design System",
    description:
      "Comprehensive React component library with accessibility-first design and Storybook documentation.",
    longDescription:
      "Created a reusable component library with 50+ components, comprehensive theming support, and WCAG 2.1 AA compliance. Includes automated visual regression testing and detailed Storybook documentation.",
    image: "/projects/design-system.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Storybook", "Jest"],
    category: "frontend",
    github: "https://github.com",
    demo: "https://storybook.demo.com",
    featured: false,
    metrics: [
      "50+ reusable components",
      "WCAG 2.1 AA compliant",
      "Used by 5 product teams",
    ],
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud Infrastructure Platform",
    description:
      "Terraform-based infrastructure as code for multi-cloud deployments with GitOps workflows.",
    longDescription:
      "Architected a comprehensive IaC solution supporting AWS, GCP, and Azure deployments. Features automated security scanning, cost optimization, and self-service infrastructure provisioning for development teams.",
    image: "/projects/cloud-infra.png",
    tags: ["Terraform", "Kubernetes", "AWS", "GCP", "GitHub Actions"],
    category: "backend",
    github: "https://github.com",
    featured: false,
    metrics: [
      "60% reduction in deployment time",
      "30% cost savings",
      "Zero-downtime deployments",
    ],
  },
];

export const categories = {
  ml: { name: "Machine Learning", color: "blue" },
  fullstack: { name: "Full Stack", color: "purple" },
  frontend: { name: "Frontend", color: "green" },
  backend: { name: "Backend", color: "orange" },
};
