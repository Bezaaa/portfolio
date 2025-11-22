/* eslint-disable react-hooks/purity */
import { Book, Star } from 'lucide-react';
import { USER_DATA } from '../constants/user-data';


export default function PinnedRepos() {
  return (
    <section id="projects" className="py-4 px-4 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-white">Pinned Repositories</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {USER_DATA.projects.map((project, idx) => {
           // Color coding logic for languages
           const langColor = project.language === "TypeScript" ? "bg-blue-400" : "bg-yellow-400";
           
           return (
            <div 
                key={idx}
                className="flex flex-col p-4 bg-gh-bg border border-gh-border rounded-md shadow-sm"
            >
                <div className="flex items-center gap-2 mb-3">
                <Book size={16} className="text-gh-muted" />
                <span className="font-bold text-gh-blue text-sm">{project.title.replace(/\s+/g, '-').toLowerCase()}</span>
                <span className="text-xs border border-gh-border rounded-full px-2 py-0.5 text-gh-muted font-medium">Public</span>
                </div>

                <p className="text-xs text-gh-text mb-6 flex-1 leading-relaxed">
                {project.desc}
                </p>

                <div className="flex items-center gap-6 text-xs text-gh-muted mt-auto">
                    <div className="flex items-center gap-1.5">
                        <span className={`w-3 h-3 rounded-full ${langColor}`}></span>
                        {project.language}
                    </div>
                    {/* Fake stars for effect */}
                    <div className="flex items-center gap-1">
                        <Star size={14} className="hover:text-gh-text" /> {Math.floor(Math.random() * 20) + 5}
                    </div>
                </div>
            </div>
        )})}
      </div>
    </section>
  );
}