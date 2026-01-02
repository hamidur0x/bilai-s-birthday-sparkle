import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [sparkles, setSparkles] = useState<Array<{ id: number; top: number; left: number; delay: number }>>([]);

  useEffect(() => {
    const newSparkles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 3,
    }));
    setSparkles(newSparkles);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute text-primary opacity-60 sparkle"
          style={{
            top: `${sparkle.top}%`,
            left: `${sparkle.left}%`,
            animationDelay: `${sparkle.delay}s`,
          }}
        >
          ✦
        </div>
      ))}

      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-lavender-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Main content */}
      <div className="text-center z-10 fade-in-up">
        <div className="mb-6 text-6xl animate-bounce">🖤</div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-glow mb-6 font-handwritten text-primary">
          Happy Birthday
        </h1>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 font-handwritten">
          Bilai 💖
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto fade-in-up-delayed">
          March 8th is extra special because you were born! 🎂
        </p>
        
        {/* Floating emojis */}
        <div className="mt-12 flex justify-center gap-8 text-3xl">
          <span className="float">🍨</span>
          <span className="float-delayed">☕</span>
          <span className="float-slow">🎂</span>
          <span className="float">💝</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
