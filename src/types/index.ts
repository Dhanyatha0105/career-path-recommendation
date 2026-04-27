export interface Skill {
    name: string;
    category: 'technical' | 'soft' | 'tool';
    description: string;
}

export interface Course {
    title: string;
    platform: string;
    duration: string;
    level: 'beginner' | 'intermediate' | 'advanced';
    url?: string; // Optional URL for the course
}

export interface Project {
    title: string;
    description: string;
    skills_applied: string[];
    complexity: 'beginner' | 'intermediate' | 'advanced';
}

export interface CareerPath {
    job_title: string;
    summary: string;
    required_skills: Skill[];
    recommended_courses: Course[];
    portfolio_projects: Project[];
    estimated_salary_range: string;
    career_trajectory: string[];
}
