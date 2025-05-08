
export interface User {
  id: string;
  name: string;
  email: string;
  profileImage?: string;
  title?: string;
  location?: string;
  skills?: string[];
  experience?: WorkExperience[];
  education?: Education[];
  careerPreferences?: CareerPreferences;
  readinessScore?: number;
}

export interface WorkExperience {
  id: string;
  company: string;
  title: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
  current: boolean;
}

export interface CareerPreferences {
  workStyle: 'remote' | 'hybrid' | 'in-person';
  salaryExpectation?: {
    min: number;
    max: number;
    currency: string;
  };
  locations?: string[];
  roles?: string[];
  industries?: string[];
}

export interface Job {
  id: string;
  title: string;
  company: string;
  companyLogo?: string;
  location: string;
  workStyle: 'remote' | 'hybrid' | 'in-person';
  description: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];
  salary?: {
    min: number;
    max: number;
    currency: string;
  };
  postedDate: string;
  matchScore?: number;
}

export interface SkillGap {
  skill: string;
  proficiency: number;
  required: number;
  courses: {
    id: string;
    title: string;
    provider: string;
    duration: string;
    level: string;
    url: string;
  }[];
}
