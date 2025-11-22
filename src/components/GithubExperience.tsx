import {  GitPullRequest } from 'lucide-react';

import ContributionGraph from './ContributionGraph'; // Import the new component
import { USER_DATA } from '../constants/user-data';

export default function GitHubExperience() {
  return (
    <section id="experience" className="py-8 px-4 max-w-6xl mx-auto">
      <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
         Contribution Activity
      </h2>

      <div className="mb-10">
         <ContributionGraph />
      </div>
      
      <div className="ml-2 md:ml-8 border-l-2 border-gh-border space-y-10 pl-6 relative">
        {USER_DATA.experience.map((exp, idx) => (
          <div key={idx} className="relative group">
         
            <div className="absolute -left-[35px] top-1.5 w-4 h-4 rounded-full bg-gh-border border-[3px] border-gh-bg group-hover:bg-gh-blue transition-colors"></div>

            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className="text-gh-text text-sm">Committed to</span>
                <span className="font-bold text-white text-sm">{exp.company}</span>
                <span className="text-xs text-gh-muted border border-gh-border rounded-full px-2 py-0.5 bg-gh-card">{exp.date}</span>
              </div>
              
              <div className="p-5 mt-1 bg-gh-card border border-gh-border rounded-md shadow-sm hover:border-gh-muted transition-colors relative">
               
                 <div className="absolute top-4 -left-[7px] w-3 h-3 bg-gh-card border-l border-t border-gh-border rotate-[-45deg]"></div>

                 <div className="flex items-center gap-2 mb-3 text-white font-semibold text-sm">
                    <GitPullRequest size={14} className="text-gh-green" />
                    {exp.role}
                 </div>
                 
                 <ul className="space-y-2">
                    {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="text-sm text-gh-text flex items-start gap-2 leading-relaxed">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gh-muted shrink-0"></span>
                            {bullet}
                        </li>
                    ))}
                 </ul>
              </div>
            </div>
          </div>
        ))}
        
      
        <div className="relative pt-4">
             <div className="absolute -left-[35px] top-5 w-4 h-4 rounded-full bg-gh-border border-[3px] border-gh-bg"></div>
             <span className="text-xs text-gh-muted ml-1">Joined the industry</span>
        </div>
      </div>
    </section>
  );
}