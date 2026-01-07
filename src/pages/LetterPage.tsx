import { Link } from 'react-router-dom';
import FloatingHearts from '@/components/FloatingHearts';

const LetterPage = () => {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <FloatingHearts />

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
          💌 A Letter For You 💌
        </h1>
      </header>

      {/* Letter Content */}
      <section className="px-4 pb-24">
        <div className="max-w-sm mx-auto">
          {/* Envelope decoration */}
          <div className="text-center mb-4">
            <span className="text-5xl">💌</span>
          </div>

          {/* Letter paper */}
          <div className="paper-texture rounded-2xl p-6 relative letter-unfold">
            {/* Decorative corner */}
            <div className="absolute top-3 right-3 text-xl">🎀</div>
            
            <div className="font-handwritten text-foreground space-y-4 text-lg leading-relaxed">
              <p className="letter-line text-2xl text-primary font-semibold">
                Dear Bilai,
              </p>
              
              <p className="letter-line">
                Happy Birthday to the most amazing pookie in the whole universe! 🎂✨
              </p>
              
              <p className="letter-line">
                On this special day, I want you to know how incredibly grateful I am to have you in my life. You're not just my best friend – you're my partner in crime, my coffee buddy ☕, and my ice cream companion 🍨!
              </p>
              
              <p className="letter-line">
                Your laughter lights up every room, and your kindness touches everyone around you. You deserve all the happiness and love in the world.
              </p>
              
              <p className="letter-line">
                May this year bring you endless joy, countless cups of espresso, infinite scoops of your favorite ice cream, and all the beautiful moments you deserve!
              </p>
              
              <p className="letter-line">
                Thank you for being YOU – my beautiful, talented, amazing Bilai. Here's to another year of adventures together! 🖤
              </p>
              
              <div className="letter-line pt-4 text-right">
                <p className="text-xl">With all my love,</p>
                <p className="text-2xl text-primary">Your Bestie 💖</p>
              </div>
            </div>

            {/* Decorative stamp */}
            <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-primary/40 rounded flex items-center justify-center text-2xl rotate-12 opacity-60">
              🖤
            </div>
          </div>

          {/* Additional love note */}
          <div className="mt-6 text-center">
            <div className="inline-block bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl px-6 py-4 fade-in-up-delayed">
              <p className="font-handwritten text-xl text-primary">
                Always stay cute, pookie! ✨
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating emojis */}
      <div className="fixed bottom-24 left-4 text-2xl float opacity-40">💕</div>
      <div className="fixed bottom-16 right-4 text-2xl float-delayed opacity-40">🌸</div>
      <div className="fixed top-32 right-8 text-xl float-slow opacity-30">✨</div>
    </main>
  );
};

export default LetterPage;
