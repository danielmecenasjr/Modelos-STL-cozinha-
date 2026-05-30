import { useState } from "react";
import { FAQ_ITEMS } from "../data";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="bg-[#FFFFFF] text-[#000000] py-16 md:py-24 border-b border-[#000000]/10">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase font-extrabold tracking-widest text-[#E85F50] mb-2">Dúvidas Comuns</p>
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase font-display tracking-tight leading-tight">
            PERGUNTAS FREQUENTES
          </h2>
          <p className="text-xs md:text-sm text-[#000000]/70 font-semibold uppercase mt-2">
            Esclareça suas principais dúvidas sobre o pacote de arquivos STL.
          </p>
          <div className="w-16 h-1 bg-[#000000] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Accordion Questions List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-[#F2E4DE]/20 rounded-2xl border border-[#000000]/5 overflow-hidden transition-all duration-300"
              >
                {/* Header click bar */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left py-5 px-6 flex items-center justify-between gap-4 font-bold text-sm md:text-base text-[#000000] select-none uppercase tracking-wide cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#E85F50] shrink-0" />
                    <span>{item.question}</span>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#000000]/60 transition-transform duration-300 shrink-0 ${
                      isOpen ? "transform rotate-180 text-[#E85F50]" : ""
                    }`}
                  />
                </button>

                {/* Animated dropdown reveal */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 pt-1 text-xs md:text-sm text-[#000000]/85 leading-relaxed font-semibold border-t border-[#000000]/5 bg-white/40">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
