import teamSilhouette from "@/assets/team-silhouette.svg";
import teamShadow from "@/assets/team-shadow.svg";

const AboutTeam = () => {
  return (
    <section 
      id="team" 
      className="py-20 px-4 relative"
      style={{
        backgroundColor: '#FDD0C1',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
      }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="relative">
          {/* Sticky Note - Top Left */}
          <div className="absolute left-0 top-0 sticky-note p-6 max-w-xs z-10">
            <p className="text-navy text-sm leading-relaxed">
              Some craft films. Some build brands. Some curate art. We bring it all together - a 
              collective of storytellers driven by one belief: every project deserves to become more 
              than just a message; it should become a masterpiece.
            </p>
            <p className="text-navy text-sm mt-3 leading-relaxed">
              From first spark to final frame, from raw ideas to timeless visuals - we shape stories 
              that stay with you.
            </p>
          </div>

          {/* Building Illustration - Bottom Left */}
          <div className="absolute left-8 bottom-32">
            <div className="relative w-40 h-36 bg-gradient-to-br from-[#FFB8A0]/40 to-[#FFA07A]/30 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-end justify-center pb-3">
                <div className="w-24 h-24 bg-primary/30 rounded-t-full" />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-20 bg-primary/40 rounded-t-lg" />
            </div>
            <p className="text-center italic text-navy font-script text-lg mt-3">
              Branding Experts
            </p>
            {/* Arrow from building to team */}
            <svg className="absolute -right-20 top-12 w-32 h-20" viewBox="0 0 120 80" fill="none">
              <path d="M 5 40 Q 40 20, 85 50" stroke="#103255" strokeWidth="1.5" fill="none" />
              <path d="M 75 45 Q 85 50, 80 55" stroke="#103255" strokeWidth="1.5" fill="none" />
            </svg>
          </div>

          {/* Center - Team Silhouettes */}
          <div className="flex flex-col items-center justify-center py-12">
            <div className="relative">
              {/* Film Makers Label - Top Left */}
              <div className="absolute -left-32 top-8">
                <p className="font-script text-xl text-navy italic">Film Makers</p>
                <svg className="w-24 h-16 ml-12 mt-1" viewBox="0 0 100 60" fill="none">
                  <path d="M 5 10 Q 50 30, 85 50" stroke="#103255" strokeWidth="1.5" fill="none" />
                  <path d="M 75 45 Q 85 50, 82 56" stroke="#103255" strokeWidth="1.5" fill="none" />
                </svg>
              </div>

              {/* Art Curators Label - Top Right */}
              <div className="absolute -right-32 top-16">
                <p className="font-script text-xl text-navy italic">Art Curators</p>
                <svg className="w-24 h-16 -ml-4 mt-1" viewBox="0 0 100 60" fill="none">
                  <path d="M 95 10 Q 50 30, 15 50" stroke="#103255" strokeWidth="1.5" fill="none" />
                  <path d="M 25 45 Q 15 50, 18 56" stroke="#103255" strokeWidth="1.5" fill="none" />
                </svg>
              </div>

              {/* Team Silhouettes */}
              <div className="relative flex justify-center items-end">
                <img 
                  src={teamShadow} 
                  alt="" 
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-full max-w-lg"
                />
                <img 
                  src={teamSilhouette} 
                  alt="Team silhouettes" 
                  className="relative w-full max-w-md mx-auto"
                />
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-12">
              <p className="text-navy text-lg font-medium mb-6">
                Take a closer look at the stories V bring to life.
              </p>
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full transition-colors shadow-lg">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Lace Border */}
      <div className="absolute bottom-0 left-0 right-0 h-12 lace-border" />
    </section>
  );
};

export default AboutTeam;
