'use client';

import { CareerPath, Course, Project, Skill } from '@/types';
import { motion } from 'framer-motion';
import { BookOpen, Briefcase, CheckCircle2, Code2, Layers, Trophy } from 'lucide-react';

interface RoadmapDisplayProps {
    data: CareerPath;
}

export default function RoadmapDisplay({ data }: RoadmapDisplayProps) {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-7xl mx-auto px-6 py-12 space-y-16"
        >
            {/* Summary Section */}
            <motion.div variants={item} className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-4">{data.job_title}</h2>
                <p className="text-slate-400 text-lg">{data.summary}</p>
                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    <Trophy className="w-4 h-4" />
                    <span className="text-sm font-medium">Est. Salary: {data.estimated_salary_range}</span>
                </div>
            </motion.div>

            {/* Skills Grid */}
            <motion.section variants={item}>
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                        <Code2 className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">Required Skills</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {data.required_skills.map((skill, idx) => (
                        <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors group">
                            <div className="flex items-start justify-between mb-2">
                                <span className={`px-2 py-1 rounded text-xs font-medium uppercase tracking-wider ${skill.category === 'technical' ? 'bg-blue-500/20 text-blue-300' :
                                        skill.category === 'soft' ? 'bg-purple-500/20 text-purple-300' :
                                            'bg-emerald-500/20 text-emerald-300'
                                    }`}>
                                    {skill.category}
                                </span>
                            </div>
                            <h4 className="text-lg font-medium text-white mb-1 group-hover:text-blue-400 transition-colors">{skill.name}</h4>
                            <p className="text-sm text-slate-400">{skill.description}</p>
                        </div>
                    ))}
                </div>
            </motion.section>

            {/* Courses Section */}
            <motion.section variants={item}>
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-purple-500/10 rounded-lg">
                        <BookOpen className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">Recommended Courses</h3>
                </div>
                <div className="space-y-4">
                    {data.recommended_courses.map((course, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row md:items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                            <div className="flex-1">
                                <h4 className="text-lg font-medium text-white">{course.title}</h4>
                                <div className="flex items-center gap-4 mt-2 text-sm text-slate-400">
                                    <span>{course.platform}</span>
                                    <span>•</span>
                                    <span>{course.duration}</span>
                                    <span>•</span>
                                    <span className="capitalize text-purple-400">{course.level}</span>
                                </div>
                            </div>
                            <button className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-colors">
                                View Course
                            </button>
                        </div>
                    ))}
                </div>
            </motion.section>

            {/* Projects Section */}
            <motion.section variants={item}>
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-emerald-500/10 rounded-lg">
                        <Layers className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">Portfolio Projects</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {data.portfolio_projects.map((project, idx) => (
                        <div key={idx} className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 text-white">
                            <div className="flex justify-between items-start mb-4">
                                <h4 className="text-xl font-medium">{project.title}</h4>
                                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${project.complexity === 'beginner' ? 'border-green-500/30 text-green-400' :
                                        project.complexity === 'intermediate' ? 'border-yellow-500/30 text-yellow-400' :
                                            'border-red-500/30 text-red-400'
                                    }`}>
                                    {project.complexity}
                                </span>
                            </div>
                            <p className="text-slate-400 mb-6 text-sm leading-relaxed">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.skills_applied.map((skill, sIdx) => (
                                    <span key={sIdx} className="px-2 py-1 rounded bg-white/5 text-xs text-slate-300">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.section>

            {/* Trajectory */}
            <motion.section variants={item}>
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-orange-500/10 rounded-lg">
                        <Briefcase className="w-6 h-6 text-orange-400" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">Career Trajectory</h3>
                </div>
                <div className="relative">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 hidden md:block" />
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
                        {data.career_trajectory.map((step, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center">
                                <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-orange-500 flex items-center justify-center mb-3">
                                    <CheckCircle2 className="w-4 h-4 text-orange-500" />
                                </div>
                                <span className="text-sm font-medium text-slate-300 bg-slate-900 px-2">{step}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>
        </motion.div>
    );
}
