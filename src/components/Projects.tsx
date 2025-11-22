
import { USER_DATA } from '../constants/user-data';
import SectionWrapper from './SectionWrapper';
import { Code2 } from 'lucide-react';

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Technical Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {USER_DATA.projects.map((project, index) => (
          <div 
            key={index}
            className="group bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <div className="mb-4 w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
              <Code2 size={24} />
            </div>
            
            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-1">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((t) => (
                <span 
                  key={t} 
                  className="px-2.5 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md border border-slate-200 dark:border-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}