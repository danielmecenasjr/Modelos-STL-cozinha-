import { ArrowUp } from "lucide-react";

export default function CtaFinal() {
  const handleScrollToPlans = () => {
    const section = document.getElementById("precos");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="cta-final" className="bg-[#F2E4DE] text-[#000000] py-16 md:py-20 border-b border-[#000000]/10">
      <div className="max-w-3xl mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-[24px] md:text-[24px] font-extrabold uppercase font-display tracking-tight leading-tight max-w-2xl mx-auto mb-4">
          PRONTO PARA TER O SEU CATÁLOGO DE SUCESSO?
        </h2>

        {/* Text */}
        <p className="text-xs md:text-sm text-[#000000]/70 leading-relaxed max-w-xl mx-auto mb-8 font-sans">
          Não perca tempo modelando tudo do zero. Escolha o plano ideal para suas necessidades e comece a vender no nicho mais lucrativo do mercado hoje mesmo.
        </p>

        {/* Anchor Button */}
        <div className="max-w-xs mx-auto">
          <button
            onClick={handleScrollToPlans}
            className="w-full bg-[#E85F50] hover:bg-[#d64e3f] text-white font-black uppercase text-xs sm:text-sm tracking-widest py-4 px-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer premium-shadow-lg flex items-center justify-center gap-2"
          >
            ESCOLHER MEU PLANO
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
