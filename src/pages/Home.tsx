import { Link } from 'react-router-dom';
import FloatingHearts from '@/components/FloatingHearts';
import Confetti from '@/components/Confetti';
import { useState, useEffect } from 'react';

const Home = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { to: '/cake', emoji: '🎂', label: 'View Cake', desc: 'AR Camera Magic' },
    { to: '/memories', emoji: '📸', label: 'Memories', desc: 'Our Gallery' },
    { to: '/letter', emoji: '💌', label: 'Letter', desc: 'From Me to You' },
    { to: '/wishes', emoji: '✨', label: 'Wishes', desc: 'Birthday Vibes' },
  ];

  return (
    <main className="relative min-h-screen bg-background overflow-hidden flex flex-col">
      <FloatingHearts />
      <Confetti trigger={showConfetti} />

      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 safe-area-inset">
        {/* Sparkles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute sparkle text-primary"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${8 + Math.random() * 16}px`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              ✦
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center mb-8">
          <div className="inline-block mb-4">
            <span className="text-6xl animate-bounce inline-block">🎀</span>
          </div>
          
          <h1 className="font-handwritten text-5xl md:text-7xl text-primary text-glow mb-3 fade-in-up">
            Happy Birthday
          </h1>
          
          <h2 className="font-handwritten text-4xl md:text-6xl text-secondary fade-in-up-delayed">
            Bilai 🖤
          </h2>
          
          <p className="text-muted-foreground mt-4 text-lg max-w-xs mx-auto fade-in-up" style={{ animationDelay: '0.5s' }}>
            A special pookie celebration just for you ✨
          </p>
        </div>

        {/* Navigation Grid */}
        <nav className="w-full max-w-sm px-4 relative z-10">
          <div className="grid grid-cols-2 gap-4">
            {navItems.map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                className="group relative bg-card/80 backdrop-blur-sm border border-primary/20 rounded-3xl p-5 flex flex-col items-center justify-center text-center card-glow transition-all duration-300 active:scale-95"
                style={{ 
                  animationDelay: `${0.6 + index * 0.1}s`,
                  opacity: 0,
                  animation: `fadeInUp 0.6s ease-out forwards ${0.6 + index * 0.1}s`
                }}
              >
                <span className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {item.emoji}
                </span>
                <span className="font-semibold text-foreground text-sm">{item.label}</span>
                <span className="text-xs text-muted-foreground mt-1">{item.desc}</span>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            ))}
          </div>
        </nav>

        {/* Bottom decoration */}
        <div className="mt-8 flex gap-3 text-2xl opacity-60">
          <span className="float">🍨</span>
          <span className="float-delayed">☕</span>
          <span className="float-slow">🖤</span>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 text-center border-t border-primary/10 safe-area-bottom">
        <p className="text-muted-foreground text-xs">Made with 💖 for my pookie</p>
      </footer>
    </main>
  );
};

export default Home;
