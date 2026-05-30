import { BENEFITS } from "../data";

export default function Benefits() {
  return (
    <section id="beneficios" className="bg-[#F2E4DE] text-[#000000] py-16 md:py-20 border-b border-[#000000]/10">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs uppercase font-extrabold tracking-widest text-[#E85F50] mb-2">Exclusividade & Qualidade</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase font-display tracking-tight leading-tight">
            OS MODELOS DO PACOTE STL POSSUEM:
          </h2>
          <div className="w-16 h-1 bg-[#000000] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 4 Rounded White Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {BENEFITS.map((benefit, index) => {
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-[#000000]/10 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col group"
              >
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="text-[#E85F50] font-black text-sm">✓</span>
                    <h3 className="font-extrabold text-base md:text-lg text-[#000000] leading-tight uppercase font-display">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#000000]/80 leading-relaxed font-normal">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
