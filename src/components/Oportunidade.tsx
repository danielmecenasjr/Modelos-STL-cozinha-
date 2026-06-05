export default function Oportunidade() {
  const handleScrollToCta = () => {
    const target = document.getElementById("precos");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="oportunidade" className="bg-[#E85F50] text-white py-16 md:py-24 border-b border-[#000000]/10 text-center">
      <div className="max-w-4xl mx-auto px-4">
        {/* White bold heading */}
        <h2 
          className="font-black uppercase font-display tracking-tight leading-tight max-w-3xl mx-auto"
          style={{ fontSize: "18px" }}
        >
          QUANTAS VENDAS VOCÊ DEIXA DE FAZER POR NÃO TER MODELOS PRONTOS?
        </h2>

        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest mt-4 text-[#F2E4DE]">
          Aproveite a oferta por tempo limitado
        </p>

        {/* Anchor Button to Offers */}
        <div className="mt-8">
          <button
            onClick={handleScrollToCta}
            className="w-full max-w-xs text-white font-extrabold uppercase py-4 px-6 rounded-xl transition-all duration-300 tracking-widest cursor-pointer shadow-lg transform hover:translate-y-[-2px] inline-block"
            style={{ fontSize: "12px", backgroundColor: "#1db954", color: "#ffffff" }}
          >
            QUERO ACESSAR AGORA E USAR HOJE
          </button>
        </div>
      </div>
    </section>
  );
}
