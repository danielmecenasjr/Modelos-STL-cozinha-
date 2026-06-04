import { Check, ShieldCheck, CreditCard, Sparkles, X, Percent, Flame } from "lucide-react";
import { PRICING_PLANS } from "../data";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Precos() {
  const [showUpsell, setShowUpsell] = useState(false);

  const handlePayment = (planId: string) => {
    if (planId === "completo") {
      window.location.href = "https://pay.celetus.com/NYJWIQYM";
    } else {
      setShowUpsell(true);
    }
  };

  const handleAcceptUpgrade = () => {
    // Redireciona para o checkout do upgrade com o desconto de R$ 10,00 (Plano Completo por R$ 29,90)
    // O usuário pode facilmente configurar seu link de checkout exclusivo aqui
    window.location.href = "https://pay.celetus.com/B60L52TJ";
  };

  const handleDeclineUpgrade = () => {
    // Redireciona para o checkout padrão do Plano Básico (R$ 19,90) como solicitado
    window.location.href = "https://pay.celetus.com/986UFNUM";
  };

  const completoPlan = PRICING_PLANS.find((p) => p.id === "completo");

  return (
    <section id="precos" className="bg-[#F2E4DE] text-[#000000] py-16 md:py-24 border-b border-[#000000]/10">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase font-display tracking-tight leading-snug">
            ESCOLHA A OPÇÃO IDEAL PARA VOCÊ
          </h2>
          <p className="text-xs md:text-sm text-[#000000]/70 font-semibold uppercase tracking-wider mt-2">
            Pagamento único e acesso imediato!
          </p>
        </div>

        {/* Pricing Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch font-display">
          {PRICING_PLANS.map((plan) => {
            const isCompleto = plan.id === "completo";
            return (
              <div
                key={plan.id}
                className={`rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-150 transform hover:scale-[1.01] border border-[#000000]/5 ${
                  isCompleto
                    ? "bg-[#000000] text-white premium-shadow-lg relative"
                    : "bg-white text-[#000000] premium-shadow"
                }`}
              >
                {/* Visual Header Ribbon if highlighted */}
                {isCompleto && (
                  <div className="bg-[#1DB954] text-black text-center py-2.5 px-4 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-1.5 shadow-sm">
                    <span className="text-sm">🔥</span>
                    {plan.badge}
                  </div>
                )}

                {/* Main Plan Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Título do Plano */}
                    <h3 className={`font-black text-xl sm:text-2xl uppercase tracking-wider text-center mb-4 ${isCompleto ? "text-white" : "text-[#000000]"}`}>
                      {plan.name}
                    </h3>

                    {/* Espaço para Imagem Mockup */}
                    {plan.image ? (
                      <div className={`aspect-[16/10] bg-black/5 rounded-2xl overflow-hidden flex items-center justify-center p-0 mb-5 border ${isCompleto ? "border-white/10" : "border-[#000000]/5"}`}>
                        <img 
                          src={plan.image} 
                          alt={plan.name} 
                          className={`w-full h-full object-cover ${isCompleto ? "" : "grayscale"}`}
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ) : isCompleto ? (
                      <div className="aspect-[16/10] bg-[#1a1a1a] rounded-2xl flex items-center justify-center text-center p-4 mb-5 border border-white/5">
                        <span className="text-[#1DB954] uppercase tracking-widest font-black text-xs">
                          [MOCKUP +100 MODELOS STL + 3 BÔNUS]
                        </span>
                      </div>
                    ) : (
                      <div className="aspect-[16/10] bg-[#E8D9C9]/40 rounded-2xl flex items-center justify-center text-center p-4 mb-5 border border-[#000000]/5">
                        <span className="text-[#E85F50] uppercase tracking-widest font-black text-xs">
                          [MOCKUP 25 MODELOS STL]
                        </span>
                      </div>
                    )}

                    {/* Bulletpoints do que recebe */}
                    <div className="space-y-3 mb-6">
                      {plan.items.map((item, idx) => (
                        <div key={idx} className="flex gap-2.5 items-start font-sans">
                          <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isCompleto ? "text-[#1DB954]" : "text-[#E85F50]"}`} />
                          <span className={`text-xs sm:text-sm font-medium leading-normal ${isCompleto ? "text-white/90" : "text-[#000000]/90"}`}>
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Preço de R$ por R$ */}
                    <div className={`mt-6 border-t border-dashed py-4 text-center ${isCompleto ? "border-white/10" : "border-[#000000]/10"}`}>
                      <span className={`block text-xs font-semibold uppercase tracking-tight ${isCompleto ? "text-white/40" : "text-[#000000]/40"}`}>
                        De <span className="line-through">R$ {plan.oldPrice}</span> por apenas:
                      </span>
                      <div className="flex items-baseline justify-center gap-1.5 mt-1">
                        <span className="text-xs font-bold uppercase">R$</span>
                        <span 
                          className={`text-4xl font-extrabold font-mono tracking-tighter ${isCompleto ? "text-[#1DB954]" : "text-[#E85F50]"}`}
                          style={isCompleto ? { fontSize: "44px" } : undefined}
                        >
                          {plan.price}
                        </span>
                        <span className={`text-xs font-semibold ${isCompleto ? "text-white/70" : "text-[#000000]/70"}`}>
                          à vista no PIX
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Botão de Compra */}
                  <div className="mt-4 text-center">
                    <button
                      onClick={() => handlePayment(plan.id)}
                      className={`w-full font-extrabold uppercase tracking-wider py-4 px-6 rounded-xl transition-all duration-300 hover:scale-[1.01] cursor-pointer premium-shadow-sm ${
                        isCompleto
                          ? "bg-[#1DB954] hover:bg-[#1ed760] text-black text-sm sm:text-base"
                          : "bg-[#E8D9C9] hover:bg-[#DBCABA] text-[#000000]"
                      }`}
                      style={!isCompleto ? { fontSize: "12px" } : undefined}
                    >
                      {isCompleto ? "QUERO O PLANO COMPLETO AGORA" : "QUERO O PLANO BÁSICO"}
                    </button>
                    <span 
                      className={`uppercase tracking-wider font-bold mt-3 block ${isCompleto ? "text-[#1DB954]" : "text-[#E85F50] animate-pulse"}`}
                      style={{ fontSize: isCompleto ? "9px" : "13px" }}
                    >
                      {isCompleto ? "O melhor custo-benefício para o seu negócio." : "⚠️ ESPERE... ABAIXO TEMOS UMA OFERTA MELHOR PARA VOCÊ ↓"}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Small reassurance block below cards similar to model page */}
        <div className="bg-[#000000] rounded-2xl border border-[#000000]/10 p-5 max-w-lg mx-auto text-left mt-12 premium-shadow">
          <p 
            className="font-bold uppercase tracking-wide flex items-center gap-1.5"
            style={{ fontSize: "13px", textAlign: "left", color: "#1db954" }}
          >
            <ShieldCheck className="w-4 h-4 text-[#1DB954] shrink-0" />
            Um único modelo pode pagar o custo do catálogo inteiro
          </p>
          <span 
            className="block mt-1 leading-relaxed"
            style={{ textAlign: "left", color: "#ffffff", fontWeight: "normal", fontSize: "11px" }}
          >
            Com apenas 2 vendas físicas de organizadores de cozinha na sua cidade ou Mercado Livre, você já recupera todo o seu investimento inicial!
          </span>
        </div>
      </div>

      {/* MODAL DE UPSELL */}
      <AnimatePresence>
        {showUpsell && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowUpsell(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-lg bg-white text-black rounded-3xl overflow-hidden shadow-2xl border-4 border-[#1DB954] flex flex-col max-h-[92vh] z-10 font-sans"
            >
              {/* Botão para Fechar */}
              <button
                onClick={() => setShowUpsell(false)}
                className="absolute top-3.5 right-4 text-black/40 hover:text-black hover:bg-neutral-100 p-1.5 rounded-full z-10 transition-colors"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Conteúdo com Scroll */}
              <div className="p-6 sm:p-8 overflow-y-auto no-scrollbar flex-1 flex flex-col justify-between">
                <div>
                  {/* Header */}
                  <div className="text-center mb-6">
                    <h4 className="text-2xl sm:text-3xl font-black tracking-tight leading-none uppercase font-display text-black">
                      LEVE O PLANO COMPLETO POR APENAS <span className="text-[#1DB954]">R$ 29,90</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-600 mt-2 font-medium leading-relaxed">
                      Adquira o catálogo completo com desconto especial de R$ 10,00 reais.
                    </p>
                  </div>

                  {/* Pricing Comparison */}
                  <div className="text-center mb-6 py-2.5 bg-neutral-50 rounded-2xl border border-neutral-100/60">
                    <span className="text-sm font-semibold text-[#7d0000] line-through mr-2.5">De R$ 39,90</span>
                    <span className="text-[16px] font-black text-[#1DB954] font-mono">Por R$ 29,90 à vista</span>
                  </div>

                  {/* Bullet Points */}
                  <div className="mb-6">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-3">
                      Tudo isso incluso no seu acesso:
                    </p>
                    <div className="space-y-2.5">
                      {completoPlan?.items.map((item, idx) => (
                        <div key={idx} className="flex gap-2.5 items-start">
                          <Check className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#1DB954]" />
                          <span className="text-[11px] font-semibold text-neutral-800 leading-normal font-sans">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Ações */}
                <div className="mt-4 space-y-4">
                  <button
                    onClick={handleAcceptUpgrade}
                    className="w-full font-extrabold uppercase tracking-wider py-4 px-6 rounded-xl bg-[#1DB954] hover:bg-[#1ed760] text-black text-xs sm:text-sm border border-transparent shadow-lg active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2 font-display animate-pulse hover:animate-none"
                  >
                    <Sparkles className="w-4 h-4 text-black shrink-0" />
                    SIM, QUERO O PLANO COMPLETO COM DESCONTO
                  </button>

                  <button
                    onClick={handleDeclineUpgrade}
                    className="w-full text-center text-[10px] sm:text-xs text-neutral-500 font-bold hover:text-black transition-colors py-1 cursor-pointer underline hover:no-underline underline-offset-4"
                  >
                    Não, obrigado. Quero continuar com o Plano Básico de R$ 19,90 mesmo.
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
