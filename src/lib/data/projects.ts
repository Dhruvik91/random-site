export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  category: "Web" | "Mobile" | "Design" | "AI/ML" | string;
  status: "Completed" | "Ongoing" | "Planning" | string;
  technologies: string[];
  createdAt: string; // ISO date string
  timeline: string;
  featured?: boolean;
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [];
