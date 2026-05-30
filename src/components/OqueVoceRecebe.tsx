import { Check } from "lucide-react";

export default function OqueVoceRecebe() {
  const items = [
    "+100 arquivos STL organizados e testados",
    "Modelos de Organizadores de cozinha modernos",
    "Porta-temperos estéticos e suportes de fixação",
    "Divisórias modulares e bandejas ajustáveis",
    "Acessórios contemporâneos e decorações minimalistas",
    "Compatível de forma nativa com Cura, PrusaSlicer, Bambu Studio, Lychee e Chitubox",
    "Download imediato automático após confirmação"
  ];

  return (
    <section id="oque-voce-recebe" className="bg-[#F2E4DE] text-[#000000] py-16 md:py-24 border-b border-[#000000]/10">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase font-display tracking-tight leading-tight">
            TUDO O QUE VOCÊ VAI RECEBER:
          </h2>
          <div className="w-16 h-1 bg-[#000000] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Centered List Breakdown */}
        <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-[#000000]/5 p-6 md:p-8 premium-shadow">
          <ul className="space-y-3">
            {items.map((item, idx) => (
              <li key={idx} className="flex gap-2.5 items-start">
                <div className="w-5 h-5 rounded-full bg-verde-cta/15 flex items-center justify-center shrink-0 mt-0.5 text-verde-cta">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-xs md:text-sm text-[#000000] font-semibold leading-snug">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
