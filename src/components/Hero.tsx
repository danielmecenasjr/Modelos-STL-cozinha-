import { Check, Flame, MessageCircle, Mail, Star } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onCtaClick: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  const formattedDate = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <section id="hero" className="relative bg-[#000000] text-white overflow-hidden pb-16 md:pb-24">
      {/* Top sticky banner */}
      <div id="sticky-top-banner" className="bg-[#E85F50] text-[#FFFFFF] text-center text-xs font-bold py-2 px-4 uppercase tracking-widest sticky top-0 z-50 shadow-md" style={{ paddingBottom: "8px" }}>
        OFERTA ESPECIAL DISPONÍVEL APENAS HOJE {formattedDate}
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center" style={{ backgroundColor: "#000000", paddingTop: "25px" }}>
        {/* Category Pill Tag */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-1.5 bg-white/10 text-bege-claro border border-white/10 rounded-full px-4 py-1.5 text-xs md:text-sm font-semibold tracking-wider uppercase transition"
          style={{ marginBottom: "20px", marginTop: "10px" }}
        >
          <Flame className="w-4 h-4 text-[#E85F50] fill-[#E85F50] animate-bounce" />
          Nicho mais lucrativo do mercado 3D
        </motion.div>

        {/* Big Bold Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-extrabold tracking-tight leading-tight uppercase font-display max-w-4xl mx-auto"
          style={{ fontSize: "25px", marginBottom: "25px" }}
        >
          +100 Modelos STL de <span className="text-white underline decoration-[#E85F50] decoration-2 underline-offset-4">Organizadores e Decorações de Cozinha</span> Prontos para Impressão 3D
        </motion.h1>

        {/* Mockup Image directly below the main headline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="max-w-2xl mx-auto mb-8 px-2"
        >
          <img
            src="https://i.postimg.cc/zGSLQYxs/mockup-novo-(1).webp"
            alt="Mockup do Pacote de Cozinha 3D"
            className="w-full h-auto object-contain rounded-[25px]"
            referrerPolicy="no-referrer"
          />
        </motion.div>



        {/* Medium text description */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-bege-claro font-medium mt-6 max-w-2xl mx-auto"
        >
          Sem precisar modelar do zero. É só abrir, fatiar, imprimir e vender.
        </motion.p>

        {/* Bullet points container with elegant premium style */}
        <div 
          className="max-w-md mx-auto text-left space-y-3.5 bg-white/5 border border-white/10 rounded-2xl p-6 font-sans premium-shadow"
          style={{ paddingTop: "15px", paddingBottom: "15px", marginTop: "40px", marginBottom: "32px" }}
        >
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-verde-cta/10 border border-verde-cta/30 flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-verde-cta stroke-[3]" />
            </div>
            <span className="text-sm md:text-base text-bege-claro/90 font-medium">Arquivos STL prontos para imediata impressão</span>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-verde-cta/10 border border-verde-cta/30 flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-verde-cta stroke-[3]" />
            </div>
            <span className="text-sm md:text-base text-bege-claro/90 font-medium">Designs modernos, utilitários e minimalistas</span>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-verde-cta/10 border border-verde-cta/30 flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-verde-cta stroke-[3]" />
            </div>
            <span className="text-sm md:text-base text-bege-claro/90 font-medium">Compatível com impressoras FDM e Resina</span>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-verde-cta/10 border border-verde-cta/30 flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-verde-cta stroke-[3]" />
            </div>
            <span className="text-sm md:text-base text-bege-claro/90 font-medium">Acompanha Licença de Uso Pessoal e Comercial</span>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-verde-cta/10 border border-verde-cta/30 flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-verde-cta stroke-[3]" />
            </div>
            <span className="text-sm md:text-base text-bege-claro/90 font-medium">Download automático e imediato</span>
          </div>
        </div>

        {/* Huge high-converting verde CTA button */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative inline-block z-10 w-full max-w-md mx-auto"
        >
          <button
            onClick={onCtaClick}
            className="w-full bg-verde-cta hover:bg-[#1ed760] text-black font-extrabold uppercase py-5 px-8 rounded-xl transition-all duration-300 text-lg md:text-xl tracking-wider select-none premium-shadow-lg cursor-pointer transform hover:translate-y-[-2px]"
          >
            QUERO ACESSAR AGORA
          </button>
        </motion.div>

        {/* Trust Indicators */}
        <div 
          className="flex items-center justify-center gap-6 mt-6 text-bege-claro/80" 
          style={{ fontSize: "9px" }}
        >
          <div className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-verde-cta" />
            <span>Envio instantâneo por e-mail</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MessageCircle className="w-3.5 h-3.5 text-verde-cta" />
            <span>Suporte via WhatsApp</span>
          </div>
        </div>

        {/* Custom Social Proof Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex flex-col items-center justify-center gap-1.5 mt-8"
        >
          <div className="flex -space-x-2.5 overflow-hidden">
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-black object-cover"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
              alt="Cliente 1"
              referrerPolicy="no-referrer"
            />
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-black object-cover"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
              alt="Cliente 2"
              referrerPolicy="no-referrer"
            />
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-black object-cover"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80"
              alt="Cliente 3"
              referrerPolicy="no-referrer"
            />
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-black object-cover"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80"
              alt="Cliente 4"
              referrerPolicy="no-referrer"
            />
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-black object-cover"
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=80&q=80"
              alt="Cliente 5"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-[11px] font-extrabold text-[#E8D9C9] tracking-wider uppercase mt-1">
            AVALIAÇÃO 4.9!
          </span>
          <div className="flex gap-0.5">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
