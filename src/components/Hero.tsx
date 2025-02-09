
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 relative overflow-hidden">
      <div className={`max-w-4xl mx-auto text-center transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        <span className="inline-block animate-slide-in px-3 py-1 mb-6 text-sm tracking-wider uppercase glass rounded-full">
          Welcome to Neutralino
        </span>
        <h1 className="animate-fade-in text-4xl md:text-6xl font-semibold mb-6 tracking-tight">
          Create Beautiful Experiences
        </h1>
        <p className="animate-fade-in text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          A modern and elegant framework for building cross-platform applications
          with web technologies.
        </p>
        <div className="animate-fade-in flex items-center justify-center gap-4">
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg transition-all hover:scale-105">
            Get Started
          </button>
          <button className="px-6 py-3 glass rounded-lg transition-all hover:bg-white/90">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
