const WishCard = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-lg mx-auto">
        <div className="card-glow bg-card rounded-3xl p-8 md:p-12 text-center border border-primary/20 glow-pulse relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-lavender-400/5" />
          
          {/* Content */}
          <div className="relative z-10">
            <div className="text-6xl mb-6 bounce-soft">🎂</div>
            <h3 className="text-3xl md:text-4xl font-handwritten text-primary mb-6">
              Birthday Wishes
            </h3>
            <div className="space-y-4 text-foreground text-lg">
              <p className="flex items-center justify-center gap-2">
                <span className="text-xl">🌟</span>
                May all your dreams come true
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="text-xl">💫</span>
                May your days be filled with joy
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="text-xl">🍨</span>
                May you never run out of ice cream
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="text-xl">☕</span>
                May your coffee always be perfect
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-primary/20">
              <p className="font-handwritten text-2xl text-muted-foreground">
                Happy Birthday, Beautiful! 🖤
              </p>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 text-4xl opacity-30 rotate-12">🎀</div>
          <div className="absolute -bottom-4 -left-4 text-4xl opacity-30 -rotate-12">🎀</div>
        </div>
      </div>
    </section>
  );
};

export default WishCard;
