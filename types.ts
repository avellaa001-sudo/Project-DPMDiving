
export interface AuditSection {
  title: string;
  role: string;
  id: string;
  icon: string;
  points: {
    problem: string;
    solution: string;
    action: string;
  }[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  image: string;
}

export interface RoadmapStep {
  number: string;
  title: string;
  description: string;
}
