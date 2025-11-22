import { GraduationCap} from 'lucide-react';
import { USER_DATA } from '../constants/user-data';


export default function Education() {
  return (
    <section id="education" className="py-8 px-4 max-w-6xl mx-auto border-t border-gh-border mt-8">
      <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
         <GraduationCap className="text-gh-muted" /> Education
      </h2>

      <div className="grid md:grid-cols-1 gap-4">
        {USER_DATA.education.map((edu, idx) => (
          <div 
            key={idx} 
            className="flex flex-col md:flex-row gap-4 p-4 bg-gh-bg border border-gh-border rounded-md hover:border-gh-muted transition-colors"
          >
            <div className="w-12 h-12 bg-gh-card border border-gh-border rounded-md flex items-center justify-center shrink-0">
               <edu.logo size={24} className="text-gh-blue" />
            </div>
            
            <div className="flex-1">
               <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-1">
                  <h3 className="font-bold text-white text-lg">{edu.school}</h3>
                  <span className="text-xs font-mono text-gh-muted border border-gh-border rounded-full px-2 py-0.5 w-fit">
                    {edu.date}
                  </span>
               </div>
               <p className="text-gh-blue font-medium text-sm mb-2">{edu.degree}</p>
               <p className="text-sm text-gh-text leading-relaxed">
                 {edu.desc}
               </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}