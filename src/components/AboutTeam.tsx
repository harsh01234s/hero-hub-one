const AboutTeam = () => {
  return (
    <section id="team" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Sticky Note */}
            <div className="sticky-note p-6 max-w-md">
              <p className="text-navy leading-relaxed">
                Some craft films. Some build brands. Some curate art. We bring it all together - a 
                collective of storytellers driven by one belief: every project deserves to become more 
                than just a message; it should become a masterpiece.
              </p>
              <p className="text-navy mt-4 leading-relaxed">
                From first spark to final frame, from raw ideas to timeless visuals - we shape stories 
                that stay with you.
              </p>
            </div>

            {/* Building Illustration Placeholder */}
            <div className="relative w-64 h-48 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-end justify-center pb-4">
                <div className="w-32 h-32 bg-primary/30 rounded-t-full" />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-24 bg-primary/40 rounded-t-lg" />
            </div>

            <div className="text-center italic text-navy">
              <p className="font-script text-xl">Branding Experts</p>
            </div>
          </div>

          {/* Right Side - Team Silhouettes */}
          <div className="space-y-8">
            <div className="flex justify-center gap-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-16 h-32 bg-navy rounded-full opacity-80"
                  style={{
                    clipPath: i % 2 === 0 
                      ? "polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)"
                      : "polygon(25% 0%, 75% 0%, 90% 100%, 10% 100%)"
                  }}
                />
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex justify-around items-center">
                <div className="text-center">
                  <p className="font-script text-xl text-navy">Film Makers</p>
                  <div className="w-32 h-1 bg-navy/20 mt-2 mx-auto rounded-full" />
                </div>
                <div className="text-center">
                  <p className="font-script text-xl text-navy">Art Curators</p>
                  <div className="w-32 h-1 bg-navy/20 mt-2 mx-auto rounded-full" />
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-navy text-lg font-medium mb-4">
                  Take a closer look at the stories V bring to life.
                </p>
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full transition-colors">
                  View Portfolio
                </button>
              </div>
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
