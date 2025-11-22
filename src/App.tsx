import { Database, Github, Layout,  Linkedin, Mail, MapPin, Server } from "lucide-react";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import GitHubExperience from "./components/GithubExperience";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import PinnedRepos from "./components/PinnedRepos";
import  { USER_DATA } from "./constants/user-data";



function App() {
  const theme = 'dark';
  const toggleTheme = () => {}; 

  return (
    <div className="min-h-screen font-sans bg-gh-bg text-gh-text selection:bg-gh-blue/30">
      
      <div className="relative z-10">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        
        <main>
          <Hero />
          <PinnedRepos />
          <GitHubExperience />
          
       
          <Education />
          <Certifications />
        </main>



<footer className="mt-20 border-t border-gh-border bg-[#161b22]/50 pt-16 pb-8">
  <div className="max-w-6xl mx-auto px-4">
    
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
      
   
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gh-blue to-purple-600 flex items-center justify-center text-white shadow-lg shadow-blue-900/20">
            <span className="font-mono font-bold text-xl">B</span>
          </div>
          <span className="font-bold text-white text-xl tracking-tight">Bezawit T. Workie</span>
        </div>
        <p className="text-gh-muted leading-relaxed mb-6 max-w-sm">
          Engineering scalable distributed systems and immersive frontend experiences. 
          Currently building accessible tech for the fintech and education sectors.
        </p>
        <div className="flex items-center gap-2 text-xs font-mono text-gh-green bg-gh-green/10 border border-gh-green/20 px-3 py-1.5 rounded-full w-fit">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Available for new opportunities
        </div>
      </div>

      {/* Column 2: Areas of Focus (REPLACED NAVIGATION) */}
      <div>
        <h4 className="font-semibold text-white mb-6">Areas of Focus</h4>
        <ul className="space-y-4 text-sm text-gh-muted">
          <li className="flex items-center gap-3 group">
            <div className="p-1.5 rounded-md bg-gh-blue/10 text-gh-blue group-hover:bg-gh-blue group-hover:text-white transition-colors">
              <Layout size={16} />
            </div>
            <span className="group-hover:text-white transition-colors">Frontend Architecture</span>
          </li>
          <li className="flex items-center gap-3 group">
            <div className="p-1.5 rounded-md bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
              <Server size={16} />
            </div>
            <span className="group-hover:text-white transition-colors">Distributed Systems</span>
          </li>
          <li className="flex items-center gap-3 group">
            <div className="p-1.5 rounded-md bg-gh-green/10 text-gh-green group-hover:bg-gh-green group-hover:text-white transition-colors">
              <Database size={16} />
            </div>
            <span className="group-hover:text-white transition-colors">System Design</span>
          </li>
        </ul>
      </div>

      {/* Column 3: Connect */}
      <div>
        <h4 className="font-semibold text-white mb-6">Connect</h4>
        <ul className="space-y-4 text-sm text-gh-muted">
          <li>
            <a href={USER_DATA.social.github} target="_blank" className="hover:text-gh-blue transition-colors flex items-center gap-2 group">
              <Github size={16} className="group-hover:text-white transition-colors" /> GitHub
            </a>
          </li>
          <li>
            <a href={USER_DATA.social.linkedin} target="_blank" className="hover:text-gh-blue transition-colors flex items-center gap-2 group">
              <Linkedin size={16} className="group-hover:text-white transition-colors" /> LinkedIn
            </a>
          </li>
          <li>
            <a href={`mailto:${USER_DATA.social.email}`} className="hover:text-gh-blue transition-colors flex items-center gap-2 group">
              <Mail size={16} className="group-hover:text-white transition-colors" /> Email
            </a>
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-gh-border pt-8 flex flex-col md:flex-row items-center justify-center gap-4 text-xs text-gh-muted">
      <div className="flex items-center gap-2">
        <span>© {new Date().getFullYear()} Bezawit Teshome Workie.</span>
        <span className="hidden md:inline text-gh-border">|</span>
        <span className="flex items-center gap-1">
          <MapPin size={12} /> Addis Ababa, Ethiopia
        </span>
      </div>
      
     
    </div>

  </div>
</footer>

      </div>
    </div>
  );
}

export default App;