import { useState, useRef, useEffect } from 'react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Using a royalty-free birthday tune
  const musicUrl = "https://assets.mixkit.co/music/preview/mixkit-happy-birthday-tune-530.mp3";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.loop = true;
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          // Handle autoplay restrictions
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio ref={audioRef} src={musicUrl} />
      <button
        onClick={togglePlay}
        className={`w-14 h-14 rounded-full bg-card border-2 border-primary flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-glow-pink ${isPlaying ? 'music-pulse' : ''}`}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        <span className="text-2xl">
          {isPlaying ? '🎵' : '🔇'}
        </span>
      </button>
      {!isPlaying && (
        <span className="absolute -top-8 right-0 text-xs text-primary whitespace-nowrap animate-pulse">
          Tap for music 🎶
        </span>
      )}
    </div>
  );
};

export default MusicPlayer;
