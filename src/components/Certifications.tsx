import { Award, CheckCircle2, ExternalLink } from 'lucide-react';
import { USER_DATA } from '../constants/user-data';


export default function Certifications() {
  return (
    <section id="certifications" className="py-4 px-4 max-w-6xl mx-auto">
      <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
         <Award className="text-gh-muted" /> Certifications & Training
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {USER_DATA.certifications.map((cert, idx) => (
          <div 
            key={idx} 
            className="group relative p-4 bg-gh-card/50 border border-gh-border rounded-md overflow-hidden hover:bg-gh-card transition-colors"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <Award size={60} />
            </div>

            <div className="relative z-10">
               <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 size={16} className="text-gh-green" />
                  <span className="text-xs text-gh-muted uppercase tracking-wider font-semibold">Verified</span>
               </div>
               
               <h3 className="font-bold text-white text-lg mb-1 group-hover:text-gh-blue transition-colors">
             
                 {cert.link ? (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 hover:underline"
                    >
                      {cert.name} 
                      <ExternalLink size={14} className="opacity-50 group-hover:opacity-100" />
                    </a>
                 ) : (
                    cert.name
                 )}
               </h3>
               
               <p className="text-sm text-gh-text font-medium mb-3">
                 Issued by <span className="text-white">{cert.issuer}</span>
               </p>
               
               <p className="text-xs text-gh-muted leading-relaxed">
                 {cert.desc}
               </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}