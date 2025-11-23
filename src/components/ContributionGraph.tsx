

export default function ContributionGraph() {

  const weeks = 80;
  const days = 7;
  
  return (
    <div className="w-full overflow-hidden border border-gh-border rounded-md p-4 bg-gh-bg mt-6 shadow-sm">
      <div className="flex items-center justify-between mb-2 text-xs text-gh-text font-mono">
        <span className="font-semibold">2,847 contributions in the last year</span>
        <div className="flex items-center gap-1 text-gh-muted">
          <span>Less</span>
          <span className="inline-block w-2.5 h-2.5 rounded-sm bg-[#161b22] border border-[#161b22]/50"></span>
          <span className="inline-block w-2.5 h-2.5 rounded-sm bg-[#0e4429] border border-[#0e4429]/50"></span>
          <span className="inline-block w-2.5 h-2.5 rounded-sm bg-[#006d32] border border-[#006d32]/50"></span>
          <span className="inline-block w-2.5 h-2.5 rounded-sm bg-[#26a641] border border-[#26a641]/50"></span>
          <span className="inline-block w-2.5 h-2.5 rounded-sm bg-[#39d353] border border-[#39d353]/50"></span>
          <span>More</span>
        </div>
      </div>
      
    
      <div className="flex gap-[3px] justify-center md:justify-start overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gh-border scrollbar-track-transparent">
        {Array.from({ length: weeks }).map((_, wIndex) => (
          <div key={wIndex} className="flex flex-col gap-[3px]">
            {Array.from({ length: days }).map((_, dIndex) => {
              
           
              const intensity = Math.random();
              let color = "bg-[#161b22]"; 

            
              if (intensity < 0.2) color = "bg-[#161b22]";       
              else if (intensity < 0.4) color = "bg-[#0e4429]";  
              else if (intensity < 0.6) color = "bg-[#006d32]";  
              else if (intensity < 0.85) color = "bg-[#26a641]";
              else color = "bg-[#39d353]";                      

              return (
                <div 
                  key={dIndex} 
                  className={`w-[10px] h-[10px] rounded-[2px] ${color} hover:ring-1 hover:ring-white/50 transition-all cursor-pointer`} 
                  title={`Contribution level: ${intensity.toFixed(2)}`}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}