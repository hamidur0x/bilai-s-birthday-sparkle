import { useState } from 'react';
import cakeMain from '@/assets/cake-main.jpg';

interface InteractiveCakeProps {
  onCelebrate: () => void;
}

const InteractiveCake = ({ onCelebrate }: InteractiveCakeProps) => {
  const [candlesLit, setCandlesLit] = useState(true);
  const [showWish, setShowWish] = useState(false);

  const blowCandles = () => {
    if (candlesLit) {
      setCandlesLit(false);
      setShowWish(true);
      onCelebrate();
      
      // Reset after some time
      setTimeout(() => {
        setCandlesLit(true);
        setShowWish(false);
      }, 5000);
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-lg mx-auto text-center">
        {/* Section header */}
        <div className="mb-8">
          <h3 className="text-3xl md:text-4xl font-handwritten text-primary mb-2">
            Make a Wish! 🌟
          </h3>
          <p className="text-muted-foreground">Tap the cake to blow out the candles</p>
        </div>

        {/* Cake container */}
        <div 
          className="relative inline-block cursor-pointer group"
          onClick={blowCandles}
        >
          {/* Cake image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 group-hover:scale-105">
            <img 
              src={cakeMain} 
              alt="Birthday cake" 
              className="w-80 h-96 object-cover"
            />
            
            {/* Overlay glow effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>

          {/* Animated candles */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex flex-col items-center">
                {/* Flame */}
                {candlesLit && (
                  <div 
                    className="flame w-4 h-6 rounded-full mb-1"
                    style={{
                      background: 'radial-gradient(ellipse at center, #fff 0%, #ff6b35 40%, #f7931e 100%)',
                      boxShadow: '0 0 20px #f7931e, 0 0 40px #ff6b35',
                      animationDelay: `${i * 0.1}s`,
                    }}
                  />
                )}
                {/* Candle */}
                <div 
                  className="w-2 h-8 rounded-sm"
                  style={{
                    background: 'linear-gradient(to right, hsl(340, 70%, 75%), hsl(340, 70%, 65%))',
                  }}
                />
              </div>
            ))}
          </div>

          {/* Wish message */}
          {showWish && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/80 rounded-3xl animate-fade-in">
              <div className="text-center p-6">
                <span className="text-5xl mb-4 block">🎉</span>
                <p className="text-2xl font-handwritten text-primary">
                  Happy Birthday, Bilai!
                </p>
                <p className="text-muted-foreground mt-2">
                  May your wish come true! ✨
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Instruction */}
        <p className="mt-6 text-sm text-muted-foreground animate-pulse">
          {candlesLit ? "✨ Tap to blow the candles ✨" : "🎉 Candles blown! 🎉"}
        </p>
      </div>
    </section>
  );
};

export default InteractiveCake;
