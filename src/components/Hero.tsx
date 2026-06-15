'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface HeroProps {
    onSearch: (jobTitle: string) => void;
    loading: boolean;
}

export default function Hero({ onSearch, loading }: HeroProps) {
    const [input, setInput] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            onSearch(input);
        }
    };

    return (
        <div className="relative overflow-hidden bg-slate-900 py-24 sm:py-32">
            {/* Background gradients */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            <div className="absolute -top-24 left-1/2 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[100px]" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-2xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-amber-400/10 px-4 py-1.5 text-xs font-medium text-amber-300 ring-1 ring-inset ring-amber-400/30">
                            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                            Demo — results use bundled sample data (no live AI key)
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-white to-indigo-200">
                            Discover Your Career Path
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-slate-300">
                            Enter your dream job below and get a comprehensive, AI-generated roadmap to success.
                            Skills, courses, and projects tailored just for you.
                        </p>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        onSubmit={handleSubmit}
                        className="mt-10 flex max-w-md mx-auto gap-x-4 relative"
                    >
                        <div className="relative flex-auto">
                            <input
                                type="text"
                                required
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="e.g. Data Scientist, UX Designer..."
                                className="min-w-0 flex-auto w-full rounded-full border-0 bg-white/10 px-6 py-4 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 backdrop-blur-sm transition-all hover:bg-white/15"
                            />
                            <Sparkles className="absolute right-4 top-1/2 -translate-y-1/2 text-indigo-400 w-5 h-5 pointer-events-none" />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="flex-none rounded-full bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                        >
                            {loading ? (
                                <div className="animate-spin h-5 w-5 border-2 border-white/30 border-t-white rounded-full" />
                            ) : (
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            )}
                        </button>
                    </motion.form>
                </div>
            </div>
        </div>
    );
}
