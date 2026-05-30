import { useState, useEffect, useRef } from "react";
import { GALLERY_ITEMS } from "../data";

export default function ModelGallery() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Automatic slow sliding effect for the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        const maxScroll = scrollWidth - clientWidth;
        if (scrollLeft >= maxScroll - 5) {
          // Reset to start
          scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Slide forward
          scrollContainerRef.current.scrollBy({ left: 240, behavior: "smooth" });
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const emojis = [
    { text: "Porta-temperos", emoji: "🏺" },
    { text: "Organizadores de gaveta", emoji: "🗳️" },
    { text: "Porta-talheres", emoji: "🍴" },
    { text: "Suportes para utensílios", emoji: "🛠️" },
    { text: "Suportes para canecas", emoji: "☕" },
    { text: "Bandejas organizadoras", emoji: "📥" },
    { text: "Decoração minimalista", emoji: "🪴" }
  ];

  return (
    <section id="galeria" className="bg-[#E8D9C9] text-[#000000] py-16 md:py-24 border-b border-[#000000]/10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase font-display tracking-tight leading-snug">
            VEJA OS MODELOS QUE VOCÊ PODE IMPRIMIR E VENDER
          </h2>
          <div className="w-16 h-1.5 bg-[#E85F50] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Emoji Tags Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-w-2xl md:max-w-4xl mx-auto mb-12">
          {emojis.map((item, idx) => (
            <span
              key={idx}
              className={`bg-white/80 backdrop-blur-sm border border-[#000000]/10 rounded-full px-3 py-2.5 font-semibold text-xs md:text-sm flex items-center justify-center gap-2 hover:bg-white transition-all cursor-default premium-shadow-sm text-center ${
                idx === 6 ? "col-span-2 sm:col-span-1" : ""
              }`}
            >
              <span className="text-base">{item.emoji}</span>
              <span className="uppercase tracking-tight text-[#000000]/80 font-medium">{item.text}</span>
            </span>
          ))}
        </div>

        {/* Automatic Horizontal Carousel */}
        <div className="relative">
          {/* Subtle side indicators / shadows to show scrolling direction */}
          <div className="absolute left-0 inset-y-0 w-8 bg-gradient-to-r from-[#E8D9C9] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 inset-y-0 w-8 bg-gradient-to-l from-[#E8D9C9] to-transparent z-10 pointer-events-none"></div>

          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto no-scrollbar py-4 px-2 select-none scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: "none" }}
          >
            {/* Render items twice to ensure full continuous fill */}
            {[...GALLERY_ITEMS, ...GALLERY_ITEMS].map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="w-60 md:w-72 shrink-0 snap-start transform hover:scale-[1.01] transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt="Modelo STL"
                  className="w-full aspect-square object-cover rounded-[25px]"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}
