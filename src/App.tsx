/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import Hero from "./components/Hero";
import ModelGallery from "./components/ModelGallery";
import Benefits from "./components/Benefits";
import PromiseSection from "./components/Promise";
import Oportunidade from "./components/Oportunidade";
import ParaQuem from "./components/ParaQuem";
import OqueVoceRecebe from "./components/OqueVoceRecebe";
import Bonus from "./components/Bonus";
import Precos from "./components/Precos";
import Depoimentos from "./components/Depoimentos";
import Garantia from "./components/Garantia";
import ComoAcessar from "./components/ComoAcessar";
import FAQ from "./components/FAQ";
import CtaFinal from "./components/CtaFinal";
import Footer from "./components/Footer";

export default function App() {
  const handleScrollToCta = () => {
    const target = document.getElementById("precos");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full min-h-screen bg-white select-none selection:bg-verde-cta selection:text-black">
      {/* SEÇÃO 1 — HERO */}
      <Hero onCtaClick={handleScrollToCta} />

      {/* SEÇÃO 2 — GALERIA DOS MODELOS */}
      <ModelGallery />

      {/* SEÇÃO 3 — BENEFÍCIOS */}
      <Benefits />

      {/* SEÇÃO 4 — PROMESSA */}
      <PromiseSection />

      {/* SEÇÃO 6 — OPORTUNIDADE */}
      <Oportunidade />

      {/* SEÇÃO 7 — PARA QUEM É */}
      <ParaQuem />

      {/* SEÇÃO 8 — O QUE VOCÊ RECEBE */}
      <OqueVoceRecebe />

      {/* SEÇÃO 9 — BÔNUS */}
      <Bonus />

      {/* SEÇÃO 10 — PREÇOS */}
      <Precos />

      {/* SEÇÃO 11 — DEPOIMENTOS */}
      <Depoimentos />

      {/* SEÇÃO 12 — GARANTIA */}
      <Garantia />

      {/* SEÇÃO 13 — COMO É O ACESSO */}
      <ComoAcessar />

      {/* SEÇÃO 14 — FAQ */}
      <FAQ />

      {/* SEÇÃO 15 — CTA FINAL COMPLETA */}
      <CtaFinal />

      {/* RODAPÉ */}
      <Footer />
    </div>
  );
}
