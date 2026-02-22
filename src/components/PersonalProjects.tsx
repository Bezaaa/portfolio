import { Book, ExternalLink, Github } from 'lucide-react';
import { USER_DATA } from '../constants/user-data';

export default function PersonalProjects() {
  return (
    <section id="personal-projects" className="py-8 px-4 max-w-6xl mx-auto border-t border-gh-border mt-8">
      <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
        <Book size={20} className="text-gh-muted" />
        Personal Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {USER_DATA.personalProjects.map((project, idx) => {
          const isTS = project.tech.includes("TypeScript");
          const primaryLanguage = isTS ? "TypeScript" : "JavaScript";
          const langColor = isTS ? "bg-blue-400" : "bg-yellow-400";

          return (
            <div
              key={idx}
              className="group flex flex-col p-4 bg-gh-bg border border-gh-border rounded-md shadow-sm transition-all hover:border-gh-muted hover:shadow-md relative overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center gap-2 mb-3">
                <Book size={16} className="text-gh-muted shrink-0" />
                <span className="font-bold text-gh-blue text-sm truncate">
                  {project.title.replace(/\s+/g, '-').toLowerCase()}
                </span>
                <span className="text-xs border border-gh-border rounded-full px-2 py-0.5 text-gh-muted font-medium shrink-0">
                  Public
                </span>
              </div>

              {/* Short Description */}
              <p className="text-xs text-gh-text mb-3 leading-relaxed">
                {project.shortDesc}
              </p>

              {/* Full Description */}
              <p className="text-xs text-gh-muted mb-5 leading-relaxed flex-1">
                {project.desc}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] font-medium text-gh-muted bg-gh-border/40 px-2 py-0.5 rounded-full border border-gh-border">
                    {t}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-1.5 text-xs text-gh-muted">
                  <span className={`w-3 h-3 rounded-full ${langColor}`}></span>
                  {primaryLanguage}
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-gh-muted hover:text-white transition-colors"
                    title="View source"
                  >
                    <Github size={15} />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 text-[11px] text-gh-blue hover:underline transition-colors"
                    title="Live demo"
                  >
                    Live <ExternalLink size={11} />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
