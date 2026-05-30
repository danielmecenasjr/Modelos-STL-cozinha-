export default function Promise() {
  return (
    <section id="promessa" className="bg-black text-white py-16 md:py-24 border-b border-white/10">
      <div className="max-w-4xl mx-auto px-4">
        {/* Image above the card, outside the box */}
        <div className="flex justify-center mb-10">
          <img 
            src="https://i.postimg.cc/C178zsSW/Chat-GPT-Image-27-de-mai-de-2026-17-04-24.webp" 
            alt="Modelos 3D de Organizadores de Cozinha" 
            className="w-full max-w-2xl rounded-2xl shadow-2xl object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Central Card with sleek dark background */}
        <div 
          className="bg-[#111111] rounded-3xl border border-white/10 p-8 md:p-14 text-center shadow-md relative overflow-hidden"
          style={{ paddingTop: "30px", marginLeft: "0px", marginTop: "-55px" }}
        >

          <span 
            className="font-black tracking-widest uppercase block mb-4"
            style={{ fontSize: "16px", color: "#ffffff" }}
          >
            É para você que deseja:
          </span>

          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 text-sm font-semibold text-[#ffffff]/90"
            style={{ fontSize: "12px", textAlign: "left" }}
          >
            <div className="flex items-center gap-2">
              <span className="text-[#E85F50] text-lg">✓</span>
              <span>Parar de perder tempo criando design</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#E85F50] text-lg">✓</span>
              <span>Produtos com alto valor de margem</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#E85F50] text-lg">✓</span>
              <span>Evitar erro, retrabalho e desperdício</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
