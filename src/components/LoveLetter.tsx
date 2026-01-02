const LoveLetter = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Envelope decoration */}
        <div className="text-center mb-8 fade-in-up">
          <span className="text-5xl">💌</span>
          <h3 className="text-2xl font-handwritten text-primary mt-4">A Letter For You</h3>
        </div>

        {/* Letter card */}
        <div className="letter-unfold paper-texture rounded-2xl p-8 md:p-12 relative transform perspective-1000">
          {/* Decorative corners */}
          <div className="absolute top-4 left-4 text-2xl opacity-30">✿</div>
          <div className="absolute top-4 right-4 text-2xl opacity-30">✿</div>
          <div className="absolute bottom-4 left-4 text-2xl opacity-30">✿</div>
          <div className="absolute bottom-4 right-4 text-2xl opacity-30">✿</div>

          <div className="font-handwritten text-secondary-foreground space-y-4 text-xl md:text-2xl leading-relaxed">
            <p className="letter-line">Dearest Bilai,</p>
            <p className="letter-line">
              Happy Birthday to the most amazing pookie ever! 🎀
            </p>
            <p className="letter-line">
              On this special day, March 8th, I want you to know how much you mean to me. 
              Your love for ice cream 🍨 is as sweet as your soul!
            </p>
            <p className="letter-line">
              Whether it's coffee in the morning ☕, tea in the afternoon, 
              or espresso whenever you need that extra boost...
            </p>
            <p className="letter-line">
              You always bring warmth and joy to everyone around you! ✨
            </p>
            <p className="letter-line">
              May this year bring you endless scoops of happiness,
              and all the caffeinated beverages your heart desires!
            </p>
            <p className="letter-line mt-8">
              With all my love,
            </p>
            <p className="letter-line text-primary">
              Your Bestie Forever 💝
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveLetter;
