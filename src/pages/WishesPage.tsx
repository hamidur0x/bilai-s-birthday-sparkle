import { Link } from 'react-router-dom';
import { useState } from 'react';
import Confetti from '@/components/Confetti';

const wishes = [
  { emoji: '🎂', text: 'Endless birthday cake slices!' },
  { emoji: '☕', text: 'Perfect espressos every morning' },
  { emoji: '🍨', text: 'Unlimited ice cream adventures' },
  { emoji: '💖', text: 'Love and happiness always' },
  { emoji: '✨', text: 'Dreams that come true' },
  { emoji: '🌸', text: 'Beautiful moments every day' },
  { emoji: '🖤', text: 'A bestie who adores you (me!)' },
  { emoji: '🎀', text: 'Pookie vibes forever' },
];

const WishesPage = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [revealedWishes, setRevealedWishes] = useState<number[]>([]);

  const revealWish = (index: number) => {
    if (!revealedWishes.includes(index)) {
      setRevealedWishes([...revealedWishes, index]);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 100);
    }
  };

  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <Confetti trigger={showConfetti} />

      {/* Back button */}
      <Link 
        to="/" 
        className="fixed top-4 left-4 z-50 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-full p-3 text-foreground active:scale-95 transition-transform"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </Link>

      {/* Header */}
      <header className="pt-20 pb-6 px-6 text-center">
        <h1 className="font-handwritten text-4xl text-primary text-glow mb-2">
          ✨ Birthday Wishes ✨
        </h1>
        <p className="text-muted-foreground text-sm">
          Tap each card to reveal a wish for you! 💖
        </p>
      </header>

      {/* Wishes Grid */}
      <section className="px-4 pb-24">
        <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
          {wishes.map((wish, index) => (
            <button
              key={index}
              onClick={() => revealWish(index)}
              className={`
                relative bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-4 min-h-[120px]
                flex flex-col items-center justify-center text-center
                transition-all duration-500 active:scale-95
                ${revealedWishes.includes(index) 
                  ? 'bg-gradient-to-br from-primary/20 to-accent/20 border-primary/40' 
                  : 'hover:border-primary/40'
                }
              `}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
                animation: `fadeInUp 0.5s ease-out forwards ${0.2 + index * 0.08}s`
              }}
            >
              {revealedWishes.includes(index) ? (
                <>
                  <span className="text-3xl mb-2 float">{wish.emoji}</span>
                  <span className="text-sm text-foreground font-medium">
                    {wish.text}
                  </span>
                </>
              ) : (
                <>
                  <span className="text-4xl mb-2">🎁</span>
                  <span className="text-xs text-muted-foreground">
                    Tap to reveal
                  </span>
                </>
              )}
            </button>
          ))}
        </div>

        {/* Progress indicator */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-sm mb-2">
            Wishes revealed: {revealedWishes.length}/{wishes.length}
          </p>
          <div className="w-48 h-2 bg-card rounded-full mx-auto overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
              style={{ width: `${(revealedWishes.length / wishes.length) * 100}%` }}
            />
          </div>
        </div>

        {/* All revealed message */}
        {revealedWishes.length === wishes.length && (
          <div className="mt-8 text-center fade-in-up">
            <div className="inline-block bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-3xl px-6 py-4">
              <p className="font-handwritten text-2xl text-primary mb-2">
                All wishes revealed! 🎉
              </p>
              <p className="text-foreground text-sm">
                May all these wishes come true for you, Bilai! 💖
              </p>
            </div>
          </div>
        )}
      </section>

      {/* Floating decorations */}
      <div className="fixed bottom-20 left-4 text-2xl float opacity-40">🌟</div>
      <div className="fixed bottom-28 right-6 text-2xl float-delayed opacity-40">💫</div>
    </main>
  );
};

export default WishesPage;
