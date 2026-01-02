interface CelebrateButtonProps {
  onClick: () => void;
}

const CelebrateButton = ({ onClick }: CelebrateButtonProps) => {
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        onClick={onClick}
        className="group relative px-6 py-3 bg-gradient-to-r from-primary to-lavender-400 rounded-full font-semibold text-primary-foreground shadow-glow-pink transition-all duration-300 hover:scale-110 hover:shadow-lg overflow-hidden"
      >
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        
        <span className="relative flex items-center gap-2">
          <span className="text-xl group-hover:animate-bounce">🎉</span>
          <span>Celebrate!</span>
        </span>
      </button>
    </div>
  );
};

export default CelebrateButton;
