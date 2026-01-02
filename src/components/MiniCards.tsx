const miniCardData = [
  { emoji: "🍨", title: "Ice Cream", subtitle: "Your forever love", color: "from-blush-400/20 to-blush-500/20" },
  { emoji: "☕", title: "Coffee", subtitle: "Morning fuel", color: "from-amber-400/20 to-amber-600/20" },
  { emoji: "🫖", title: "Tea", subtitle: "Cozy companion", color: "from-green-400/20 to-green-600/20" },
  { emoji: "🧋", title: "Espresso", subtitle: "Power boost", color: "from-amber-800/20 to-amber-900/20" },
];

const MiniCards = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-handwritten text-primary mb-2">
            Things You Love 💝
          </h3>
          <p className="text-muted-foreground">Tap to show some love!</p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {miniCardData.map((card, index) => (
            <div
              key={index}
              className={`mini-card-pop wiggle bg-gradient-to-br ${card.color} bg-card border border-primary/20 rounded-2xl p-6 text-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-glow-pink group`}
            >
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300 group-hover:animate-bounce">
                {card.emoji}
              </div>
              <h4 className="font-semibold text-foreground text-lg">{card.title}</h4>
              <p className="text-sm text-muted-foreground mt-1">{card.subtitle}</p>
              
              {/* Heart that appears on hover */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-3">
                <span className="text-xl heartbeat inline-block">💖</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MiniCards;
