import { Link } from 'react-router-dom';
import { useState } from 'react';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import cakeMain from '@/assets/cake-main.jpg';

const memories = [
  { id: 1, image: gallery1, caption: 'Our favorite moments 🖤', rotation: -3 },
  { id: 2, image: gallery2, caption: 'Coffee dates ☕', rotation: 2 },
  { id: 3, image: gallery3, caption: 'Ice cream adventures 🍨', rotation: -2 },
  { id: 4, image: gallery4, caption: 'Pookie vibes only ✨', rotation: 3 },
  { id: 5, image: gallery5, caption: 'Best friends forever 💕', rotation: -1 },
  { id: 6, image: cakeMain, caption: 'Birthday celebration 🎂', rotation: 2 },
];

const MemoriesPage = () => {
  const [selectedImage, setSelectedImage] = useState<typeof memories[0] | null>(null);

  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
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
      <header className="pt-20 pb-8 px-6 text-center">
        <h1 className="font-handwritten text-4xl text-primary text-glow mb-2">
          📸 Our Memories 📸
        </h1>
        <p className="text-muted-foreground">
          Moments that made us smile ✨
        </p>
      </header>

      {/* Gallery Grid */}
      <section className="px-4 pb-24">
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          {memories.map((memory, index) => (
            <div
              key={memory.id}
              className="gallery-item"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(memory)}
            >
              <div
                className="polaroid cursor-pointer"
                style={{ '--rotation': `${memory.rotation}deg` } as React.CSSProperties}
              >
                <div className="aspect-square overflow-hidden rounded-sm mb-3">
                  <img
                    src={memory.image}
                    alt={memory.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-handwritten text-foreground text-center text-sm px-1 truncate">
                  {memory.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div className="w-full max-w-sm fade-in-up">
            <div className="bg-secondary p-4 pb-16 rounded-lg shadow-2xl">
              <img
                src={selectedImage.image}
                alt={selectedImage.caption}
                className="w-full aspect-square object-cover rounded"
              />
              <p className="font-handwritten text-foreground text-center text-xl mt-4">
                {selectedImage.caption}
              </p>
            </div>
            
            <button 
              className="mt-6 w-full bg-primary text-primary-foreground py-3 rounded-2xl font-semibold active:scale-95 transition-transform"
              onClick={() => setSelectedImage(null)}
            >
              Close 🖤
            </button>
          </div>
        </div>
      )}

      {/* Floating decorations */}
      <div className="fixed bottom-20 left-4 text-2xl float opacity-50">💖</div>
      <div className="fixed bottom-32 right-6 text-2xl float-delayed opacity-50">✨</div>
    </main>
  );
};

export default MemoriesPage;
