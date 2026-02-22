/* eslint-disable react-hooks/purity */
import { useState } from 'react';
import { Book, Star, X, ShieldAlert, Cpu, TrendingUp, Database, ArrowUpRight } from 'lucide-react';
import { USER_DATA } from '../constants/user-data';
import { motion, AnimatePresence } from 'framer-motion';

export default function PinnedRepos() {
  const [selectedProject, setSelectedProject] = useState<typeof USER_DATA.projects[0] | null>(null);

  return (
    <section id="projects" className="py-4 px-4 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-white">Pinned Repositories</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {USER_DATA.projects.map((project, idx) => {
          
           const isTS = project.tech.includes("TypeScript");
           const primaryLanguage = isTS ? "TypeScript" : "JavaScript";
           const langColor = isTS ? "bg-blue-400" : "bg-yellow-400";
           
           const hasCaseStudy = (project).isCaseStudy;

           return (
            <div 
                key={idx}
                onClick={() => setSelectedProject(project)}
                className="group flex flex-col p-4 bg-gh-bg border border-gh-border rounded-md shadow-sm cursor-pointer transition-all hover:border-gh-muted hover:shadow-md relative overflow-hidden"
            >
                {/* Header */}
                <div className="flex items-center gap-2 mb-3 z-10">
                  <Book size={16} className="text-gh-muted" />
                  <span className="font-bold text-gh-blue text-sm group-hover:underline decoration-gh-blue underline-offset-2">
                    {project.title.replace(/\s+/g, '-').toLowerCase()}
                  </span>
                  
                  <span className="text-xs border border-gh-border rounded-full px-2 py-0.5 text-gh-muted font-medium">
                    Public
                  </span>

                  {/* Architecture Badge */}
                  {hasCaseStudy && (
                    <span className="ml-auto text-[10px] text-green-400 border border-green-400/30 bg-green-400/10 px-1.5 rounded-full font-medium flex items-center gap-1">
                      Arch <ArrowUpRight size={8} />
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs text-gh-text mb-6 flex-1 leading-relaxed">
                  {(project).shortDesc}
                </p>

                {/* Footer (Lang + Stats) */}
                <div className="flex items-center gap-6 text-xs text-gh-muted mt-auto">
                    <div className="flex items-center gap-1.5">
                        <span className={`w-3 h-3 rounded-full ${langColor}`}></span>
                        {primaryLanguage}
                    </div>
                    <div className="flex items-center gap-1">
                        <Star size={14} className="group-hover:text-yellow-400 transition-colors" /> 
                        {Math.floor(Math.random() * 20) + 5}
                    </div>
                </div>
            </div>
        )})}
      </div>

      {/* --- ARCHITECTURE MODAL --- */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-[2px]"
            />

            <motion.div 
              initial={{ scale: 0.98, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.98, opacity: 0, y: 10 }}
              className="bg-[#0d1117] border border-gh-border rounded-xl w-full max-w-2xl max-h-[85vh] overflow-y-auto relative z-10 shadow-2xl custom-scrollbar"
            >
              <div className="sticky top-0 bg-[#0d1117]/95 backdrop-blur border-b border-gh-border p-5 flex justify-between items-center z-20">
                <div className="flex items-center gap-2">
                  <Book size={18} className="text-gh-muted" />
                  <h3 className="text-lg font-bold text-gh-blue">
                    {selectedProject.title.replace(/\s+/g, '-').toLowerCase()}
                  </h3>
                  <span className="text-xs border border-gh-border rounded-full px-2 py-0.5 text-gh-muted">
                    Architecture Review
                  </span>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-1 hover:bg-gh-border rounded-md transition-colors text-gh-muted hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 space-y-8">
                {!(selectedProject).details ? (
                   <p className="text-gh-text text-sm leading-relaxed">{selectedProject.shortDesc}</p>
                ) : (
                  <>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-red-400 font-semibold text-sm">
                        <ShieldAlert size={16} />
                        <h4>The Challenge</h4>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed bg-red-900/10 p-3 rounded-md border border-red-900/30">
                        {(selectedProject).details.problem}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm">
                        <Cpu size={16} />
                        <h4>Technical Architecture</h4>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed bg-blue-900/10 p-3 rounded-md border border-blue-900/30">
                        {(selectedProject ).details.solution}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-green-400 font-semibold text-sm">
                        <TrendingUp size={16} />
                        <h4>Business Impact</h4>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed bg-green-900/10 p-3 rounded-md border border-green-900/30">
                        {(selectedProject).details.outcome}
                      </p>
                    </div>
                  </>
                )}

                <div className="pt-6 border-t border-gh-border">
                  <h4 className="text-xs font-semibold text-gh-muted mb-3 uppercase tracking-wider">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span key={t} className="text-xs font-medium text-gh-text bg-gh-border/50 px-2 py-1 rounded-md border border-gh-border">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-[10px] text-gh-muted mt-6 italic flex items-center justify-center gap-1.5 opacity-60">
                    <Database size={10} />
                    Internal Project • Case Study Mode
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}