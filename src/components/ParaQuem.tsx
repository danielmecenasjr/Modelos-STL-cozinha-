import { PARA_QUEM } from "../data";

export default function ParaQuem() {
  return (
    <section id="para-quem" className="bg-[#FFFFFF] text-[#000000] py-16 md:py-24 border-b border-[#000000]/10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase font-display tracking-tight leading-snug">
            ESTE PACOTE É IDEAL PARA VOCÊ QUE DESEJA:
          </h2>
          <div className="w-16 h-1.5 bg-[#E85F50] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Simplified Bullet Points */}
        <div 
          className="max-w-3xl mx-auto space-y-6 font-display mt-8"
          style={{ marginLeft: "15px", marginRight: "15px" }}
        >
          {PARA_QUEM.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 text-left border-b border-[#000000]/5 pb-4 last:border-0 last:pb-0">
              <span className="text-[#E85F50] text-xl font-bold shrink-0 mt-0.5">✓</span>
              <div>
                <strong className="text-base sm:text-lg font-black text-[#000000] uppercase tracking-wide block">
                  {item.title}
                </strong>
                <p className="text-sm text-[#000000]/75 font-sans font-normal mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
