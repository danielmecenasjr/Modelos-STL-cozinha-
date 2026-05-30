import { ShieldCheck, HelpCircle, Check } from "lucide-react";

export default function Garantia() {
  const safetyList = [
    "Acesso 100% imediato e desimpedido",
    "Arquivos perfeitamente catalogados e organizados",
    "Suporte humanizado via WhatsApp e e-mail",
    "Acesso seguro e vitalício à pasta na nuvem",
    "Atualizações futuras incluídas gratuitamente"
  ];

  return (
    <section id="garantia" className="bg-[#F3F4F6] text-[#000000] py-16 md:py-24 border-b border-[#000000]/10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Protection Banner Tag */}
        <div className="inline-flex items-center gap-1.5 bg-[#E85F50] text-white text-xs font-bold py-1.5 px-4 rounded-full uppercase tracking-widest mb-6">
          <ShieldCheck className="w-4 h-4 animate-pulse text-white" />
          Risco Zero Para Você
        </div>

        {/* Big Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase font-display tracking-tight leading-tight max-w-3xl mx-auto">
          VOCÊ TEM GARANTIA TOTAL NO PACOTE STL DO NICHO MAIS LUCRATIVO DO MERCADO
        </h2>
        <div className="w-16 h-1 bg-[#000000] mx-auto mt-4 rounded-full"></div>

        {/* Outer card box */}
        <div className="bg-white rounded-3xl border border-[#000000]/10 p-6 md:p-12 max-w-3xl mx-auto mt-10 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
          {/* Guarantee Badge Artwork (Left col: 4 cols) */}
          <div className="md:col-span-4 flex justify-center">
            {/* Visual Gold Seal Emblem */}
            <div className="w-36 h-36 rounded-full border-8 border-dashed border-[#000000]/10 bg-[#E8D9C9]/20 flex flex-col items-center justify-center p-3 relative shadow-inner">
              <span className="text-[#E85F50] text-4xl font-black font-display leading-none">7</span>
              <span className="text-[#000000] text-[9px] uppercase font-black tracking-widest mt-1">DIAS DE</span>
              <span className="text-[#000000] text-[9px] uppercase font-bold tracking-widest text-[#E85F50]">GARANTIA</span>
              <div className="absolute -bottom-2 bg-[#000000] text-white text-[8px] font-black uppercase px-2 py-0.5 rounded shadow">
                RISCO TOTAL ZERO
              </div>
            </div>
          </div>

          {/* Guarantee copy description (Right col: 8 cols) */}
          <div className="md:col-span-8 space-y-4">
            <h3 className="font-extrabold text-base md:text-lg text-[#000000] uppercase tracking-wide">
              SATISFAÇÃO COMPLETA OU 100% DO DINHEIRO DE VOLTA
            </h3>
            <p className="text-xs sm:text-sm text-[#000000]/85 leading-relaxed font-semibold">
              Se por qualquer motivo você não ficar satisfeito com o pacote, basta solicitar reembolso em até 7 dias após a compra e devolvemos seu dinheiro integralmente. Sem perguntas, sem burocracia, tudo automático.
            </p>

            {/* Checklist items */}
            <div className="pt-4 border-t border-[#000000]/5 space-y-2">
              {safetyList.map((item, idx) => (
                <div key={idx} className="flex gap-2 items-start text-xs font-bold text-[#000000]/80">
                  <span className="text-[#E85F50] text-sm shrink-0">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
