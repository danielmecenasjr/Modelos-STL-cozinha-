import { Star, MessageSquareQuote } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="bg-[#FFFFFF] text-[#000000] py-16 md:py-24 border-b border-[#000000]/10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase font-extrabold tracking-widest text-[#E85F50] mb-2">Comprovado por Clientes</p>
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase font-display tracking-tight leading-tight">
            VEJA O QUE NOSSOS CLIENTES ESTÃO DIZENDO
          </h2>
          <p className="text-xs md:text-sm text-[#000000]/70 font-semibold uppercase mt-2">
            Leia os depoimentos de quem já tomou a decisão certa.
          </p>
          <div className="w-16 h-1 bg-[#000000] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 3 Columns Depoimentos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.map((test, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl border border-[#000000]/5 p-6 md:p-8 flex flex-col justify-between premium-shadow relative group hover:bg-[#F2E4DE]/20 transition-all duration-300"
            >
              {/* Giant elegant decorative quote icon behind */}
              <div className="absolute top-4 right-4 text-[#000000]/5 group-hover:text-[#000000]/10 transition-colors duration-300">
                <MessageSquareQuote className="w-12 h-12" />
              </div>

              <div>
                {/* 5 Yellow Stars Row */}
                <div className="flex items-center gap-1 mb-4 select-none">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-xs sm:text-sm text-[#000000]/80 italic leading-relaxed font-normal">
                  "{test.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-4 border-t border-[#000000]/5 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-[#000000] uppercase tracking-wide">
                    {test.name}
                  </h4>
                  <p className="text-[10px] text-[#000000]/60 font-normal">
                    {test.role}
                  </p>
                </div>
                <div className="text-[10px] bg-verde-cta/15 text-verde-cta font-bold uppercase px-2.5 py-1 rounded-full tracking-wide">
                  ✓ APROVADO
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
