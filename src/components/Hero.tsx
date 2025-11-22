import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, FileText, Smile, Phone } from 'lucide-react';
import { USER_DATA } from '../constants/user-data';


export default function Hero() {
  return (
    <section id="overview" className="pt-24 pb-8 px-4 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
        
       
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full md:w-1/4 flex flex-col gap-6"
        >
         <div className="relative w-full aspect-square group">
    
    <div className="w-full h-full rounded-full border border-gh-border overflow-hidden bg-gh-card shadow-xl">
     
         <div className="w-full h-full bg-gradient-to-br from-gh-purple/20 to-blue-600/20" />
         <span className="absolute inset-0 flex items-center justify-center text-6xl">👩‍💻</span>
    </div>


    <div className="absolute bottom-[5%] right-[5%] bg-gh-card border border-gh-border rounded-full p-2 shadow-sm text-lg z-20">
        <Smile size={20} className="text-yellow-500" />
    </div>
    
</div>
          
          <div>
            <h1 className="text-3xl font-bold text-white mb-1">{USER_DATA.name}</h1>
            <p className="text-gh-muted text-lg font-light">{USER_DATA.role}</p>
          </div>

          <div className="flex flex-col gap-3">
             <a href={`mailto:${USER_DATA.social.email}`} className="w-full text-center py-2 bg-gh-card border border-gh-border text-gh-text rounded-md font-medium text-sm hover:bg-gh-border hover:text-white transition-colors">
              Contact Me
            </a>
            <a href={USER_DATA.resumeUrl} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 py-2 bg-gh-green hover:bg-green-600 text-white border border-green-800 rounded-md font-medium text-sm transition-colors">
              <FileText size={16} /> Download Resume
            </a>
          </div>

          <div className="flex flex-col gap-3 text-sm text-gh-text mt-2">
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-gh-muted" /> {USER_DATA.location}
            </div>
            <div className="flex items-center gap-3">
              <Github size={16} className="text-gh-muted" /> <a href={USER_DATA.social.github} target="_blank" className="hover:text-gh-blue">github.com/bezawit</a>
            </div>
            <div className="flex items-center gap-3">
              <Linkedin size={16} className="text-gh-muted" /> <a href={USER_DATA.social.linkedin} target="_blank" className="hover:text-gh-blue">linkedin.com/in/bezawit</a>
            </div>
          <div className="flex items-center gap-3">
              <Mail size={16} className="text-gh-muted" /> <a href={`mailto:${USER_DATA.social.email}`} target="_blank" className="hover:text-gh-blue">{USER_DATA.social.email}</a>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-gh-muted" /> <a href={`tel:${USER_DATA.social.phone.replace(/\s/g, "")}`} target="_blank" className="hover:text-gh-blue">{USER_DATA.social.phone}</a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Readme */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
           className="w-full md:w-3/4"
        >
          {/* Status Box */}
          <div className="mb-6 p-3 text-sm text-gh-text border border-gh-border rounded-md bg-gh-bg shadow-sm flex items-center gap-2">
            <span>{USER_DATA.status}</span>
          </div>

          <div className="border border-gh-border rounded-md bg-gh-bg overflow-hidden shadow-sm">
            <div className="bg-gh-card border-b border-gh-border px-4 py-3 text-xs font-mono text-gh-text flex items-center gap-2">
              <span className="font-semibold">bezawit</span> / <span className="font-semibold">README.md</span>
            </div>
            <div className="p-6 md:p-8 font-sans">
              <h2 className="text-2xl font-semibold text-white mb-6 border-b border-gh-border pb-2">Hi there, I'm Bezawit 👋</h2>
              <p className="text-gh-text leading-7 mb-8 text-base">
                {USER_DATA.about}
              </p>
              
              <h3 className="text-lg font-semibold text-white mb-4">Tech Stack & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {USER_DATA.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-medium rounded-full border border-blue-500/20 hover:bg-blue-500/20 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}