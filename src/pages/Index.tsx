import { useState, useEffect } from 'react';
import FloatingHearts from '@/components/FloatingHearts';
import Confetti from '@/components/Confetti';
import MusicPlayer from '@/components/MusicPlayer';
import HeroSection from '@/components/HeroSection';
import LoveLetter from '@/components/LoveLetter';
import WishCard from '@/components/WishCard';
import Gallery from '@/components/Gallery';
import MiniCards from '@/components/MiniCards';
import InteractiveCake from '@/components/InteractiveCake';
import EndingMessage from '@/components/EndingMessage';
import CelebrateButton from '@/components/CelebrateButton';

const Index = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [initialConfetti, setInitialConfetti] = useState(false);

  // Trigger confetti on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialConfetti(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 100);
  };

  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Background elements */}
      <FloatingHearts />
      
      {/* Confetti on load and celebrate */}
      <Confetti trigger={initialConfetti || showConfetti} />

      {/* Music player */}
      <MusicPlayer />

      {/* Celebrate button */}
      <CelebrateButton onClick={triggerConfetti} />

      {/* Page sections */}
      <HeroSection />
      
      <div className="relative z-10">
        <LoveLetter />
        <WishCard />
        <InteractiveCake onCelebrate={triggerConfetti} />
        <Gallery />
        <MiniCards />
        <EndingMessage />
      </div>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-primary/10">
        <p className="text-muted-foreground text-sm">
          Made with 💖 for Bilai
        </p>
        <p className="font-handwritten text-primary text-lg mt-2">
          Happy Birthday! 🎂
        </p>
      </footer>
    </main>
  );
};

export default Index;
