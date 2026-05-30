import { ArrowRight, ShoppingCart, Download, Hammer, TrendingUp } from "lucide-react";

export default function ComoAcessar() {
  const steps = [
    {
      num: "01",
      title: "Escolha seu plano e finalize a compra",
      desc: "Pagamento seguro via cartão de crédito ou PIX, protegidos por sistemas integrados.",
      icon: ShoppingCart,
      badge: "SEGURO"
    },
    {
      num: "02",
      title: "Acesse o link de download imediato",
      desc: "Você recebe o seu link de acesso por e-mail e em segundos após a confirmação do pagamento.",
      icon: Download,
      badge: "AUTOMÁTICO"
    },
    {
      num: "03",
      title: "Abra no seu slicer favorito e imprima",
      desc: "Compatível nativamente com Cura, PrusaSlicer, Bambu Studio, Lychee e Chitubox.",
      icon: Hammer,
      badge: "SEM SEGREDO"
    },
    {
      num: "04",
      title: "Venda no nicho mais lucrativo do mercado",
      desc: "Anuncie com as estratégias certas nas redes sociais ou marketplaces e veja o lucro retornar.",
      icon: TrendingUp,
      badge: "FUTURO"
    }
  ];

  return (
    <section id="como-acessar" className="bg-[#FFFFFF] text-[#000000] py-16 md:py-24 border-b border-[#000000]/10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase font-bold tracking-widest text-[#E85F50] mb-2 bg-[#E85F50]/15 inline-block px-3.5 py-1 rounded-full">Processo Passo a Passo</p>
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase font-display tracking-tight leading-snug">
            COMO É O ACESSO
          </h2>
          <div className="w-16 h-1.5 bg-[#000000] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 4 Steps Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto relative font-display">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-3xl border border-[#000000]/5 p-5 md:p-6 relative flex flex-col justify-between transition-all duration-300 group premium-shadow elegant-hover"
              >
                {/* Visual Connector Arrow on desktop */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-5 transform -translate-y-1/2 z-20 text-[#000000]/30 group-hover:text-[#E85F50] transition-all">
                    <ArrowRight className="w-5 h-5 stroke-[2]" />
                  </div>
                )}

                {/* Big Step Number on Top Right */}
                <span className="absolute top-4 right-6 text-4xl font-black font-mono text-[#000000]/10 select-none">
                  {step.num}
                </span>

                <div>
                  <div className="w-12 h-12 bg-[#E8D9C9]/30 text-[#E85F50] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#E85F50] group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>

                  <h3 className="font-bold text-sm md:text-base text-[#000000] uppercase tracking-wide leading-tight mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#000000]/70 leading-relaxed font-sans font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#000000]/5 flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#000000]/40">
                    Etapa recomendada
                  </span>
                  <span className="bg-[#E85F50]/10 text-[#E85F50] text-[10px] font-bold uppercase px-3 py-1 rounded-full tracking-wide">
                    {step.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
