'use client';

import Hero from '@/components/Hero';
import RoadmapDisplay from '@/components/RoadmapDisplay';
import { CareerPath } from '@/types';
import { useState } from 'react';

export default function Home() {
  const [data, setData] = useState<CareerPath | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (jobTitle: string) => {
    setLoading(true);
    setError('');
    setData(null);

    try {
      const response = await fetch('/api/generate-path', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ jobTitle }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch career path');
      }

      const result: CareerPath = await response.json();
      setData(result);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30">
      <Hero onSearch={handleSearch} loading={loading} />

      {error && (
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-red-400 bg-red-500/10 rounded-lg mx-6 mt-6 border border-red-500/20">
          {error}
        </div>
      )}

      {data && <RoadmapDisplay data={data} />}

      {/* Footer */}
      <footer className="py-12 text-center text-slate-600 text-sm">
        <p>© {new Date().getFullYear()} CareerPath AI. All rights reserved.</p>
        <p className="mt-2">Built with Next.js, Tailwind CSS, & Framer Motion</p>
      </footer>
    </main>
  );
}
