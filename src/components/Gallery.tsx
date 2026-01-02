import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import cakeMain from '@/assets/cake-main.jpg';

const galleryItems = [
  { src: gallery1, caption: "Ice cream lover 🍨", rotation: "-3deg" },
  { src: gallery2, caption: "Coffee addict ☕", rotation: "2deg" },
  { src: gallery3, caption: "Sweet moments 🧁", rotation: "-2deg" },
  { src: gallery4, caption: "Party time! 🎉", rotation: "3deg" },
  { src: cakeMain, caption: "Birthday vibes 🎂", rotation: "-1deg" },
  { src: gallery5, caption: "Tea time 🫖", rotation: "2deg" },
];

const Gallery = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 fade-in-up">
          <span className="text-5xl mb-4 block">📸</span>
          <h3 className="text-3xl md:text-4xl font-handwritten text-primary">
            Sweet Memories
          </h3>
          <p className="text-muted-foreground mt-2">Things that remind me of you 💕</p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="gallery-item polaroid cursor-pointer"
              style={{ '--rotation': item.rotation } as React.CSSProperties}
            >
              <div className="aspect-[3/4] overflow-hidden rounded-sm">
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
              <p className="text-center font-handwritten text-secondary-foreground text-lg mt-4">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
