import { BONUS_LIST } from "../data";

export default function Bonus() {
  return (
    <section id="bonus" className="bg-[#F2E4DE] text-[#000000] py-16 md:py-24 border-b border-[#000000]/10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 
            className="text-3xl md:text-4xl font-extrabold uppercase font-display tracking-tight leading-snug mb-4"
            style={{ fontSize: "28px" }}
          >
            E NÃO PARA POR AÍ… TEM MAIS!
          </h2>
          <p className="text-sm md:text-base text-[#000000]/70 font-semibold uppercase tracking-wider mb-4">
            Você também vai receber de graça:
          </p>
          <span className="bg-[#E85F50] text-[#FFFFFF] text-xs font-bold uppercase px-4 py-2 rounded-full inline-block tracking-widest">
            3 BÔNUS EXCLUSIVOS
          </span>
        </div>

        {/* 3 Cards Grid - Fully responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto font-display">
          {BONUS_LIST.map((bonus) => (
            <div
              key={bonus.id}
              className="bg-[#000000] rounded-2xl overflow-hidden p-5 flex flex-col justify-between border border-white/5 transition-all duration-300 transform hover:scale-[1.01] premium-shadow"
            >
              <div>
                {/* Image Placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-[#E8D9C9]/50 to-[#E8D9C9]/35 rounded-xl overflow-hidden flex items-center justify-center border border-white/5 mb-4">
                  {bonus.image ? (
                    <img 
                      src={bonus.image} 
                      alt={bonus.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <span className="text-[#E85F50]/70 uppercase tracking-widest font-black text-xs">{bonus.code}</span>
                  )}
                </div>
 
                {/* Text Block Below */}
                <h3 className="font-bold text-base text-[#E85F50] uppercase tracking-wide leading-tight mb-2">
                  {bonus.title}
                </h3>
                <p className="text-xs text-[#ffffff]/80 leading-relaxed font-sans font-normal mb-4">
                  {bonus.description}
                </p>
              </div>
 
              {/* Bottom pricing indicator (Value -> GRÁTIS) */}
              <div className="mt-4 font-mono">
                <div className="bg-[#1a1a1a] text-white text-center py-2 px-4 rounded-xl font-bold uppercase text-[10px] sm:text-xs flex items-center justify-between shadow-sm border border-white/5">
                  <span className="text-white/50 line-through font-normal">{bonus.value}</span>
                  <span className="text-verde-cta font-black">GRÁTIS</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
