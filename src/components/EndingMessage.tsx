import { useEffect, useState } from 'react';

const EndingMessage = () => {
  const [particles, setParticles] = useState<Array<{ id: number; left: number; top: number; delay: number; size: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 4,
      size: 2 + Math.random() * 4,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle bg-primary"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto fade-in-up">
        <div className="text-6xl mb-8 heartbeat inline-block">🖤</div>
        
        <h2 className="text-4xl md:text-6xl font-handwritten text-primary text-glow mb-6">
          Always Stay Cute, Bilai
        </h2>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
          May your birthday be as sweet as your favorite ice cream,
          as warm as your morning coffee, and as wonderful as you are! ✨
        </p>

        <div className="flex justify-center gap-4 text-3xl">
          <span className="float">🍨</span>
          <span className="float-delayed">☕</span>
          <span className="float-slow">🎂</span>
          <span className="float">💝</span>
          <span className="float-delayed">🌟</span>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/20">
          <p className="font-handwritten text-2xl text-foreground">
            With all my love,
          </p>
          <p className="font-handwritten text-3xl text-primary mt-2">
            Your Best Friend Forever 💕
          </p>
        </div>

        {/* Date badge */}
        <div className="mt-12 inline-block bg-card border border-primary/30 rounded-full px-6 py-3 glow-pulse">
          <span className="font-handwritten text-xl text-primary">
            March 8th 🎀
          </span>
        </div>
      </div>
    </section>
  );
};

export default EndingMessage;
