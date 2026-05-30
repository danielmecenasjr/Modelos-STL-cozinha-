import { ShieldAlert } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-[#1A1A1A] text-white/50 py-12 border-t border-white/5 text-center">
      <div className="max-w-4xl mx-auto px-4 space-y-6">
        


        {/* Informative warning text common in low-ticket landing pages */}
        <p className="text-[10px] sm:text-xs leading-relaxed max-w-2xl mx-auto font-medium text-white/30">
          Aviso Legal: Os produtos exibidos são representações digitais para fabricação por impressão 3D em equipamentos próprios do comprador. A velocidade, qualidade e resistência das impressões dependem da experiência do operador, filamento usado e fatiamento. A reprodução ou revenda dos arquivos STL é estritamente proibida por lei. Todos os direitos reservados.
        </p>

        {/* Horizontal Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white/70">
          <a href="#termos" className="hover:text-white transition">Termos de Uso</a>
          <span>•</span>
          <a href="#politica" className="hover:text-white transition">Política de Privacidade</a>
          <span>•</span>
          <a href="#aviso" className="hover:text-white transition">Aviso Legal</a>
        </div>

        {/* Copyright notice */}
        <p className="text-[9px] sm:text-[10px] tracking-wide text-white/30">
          Copyright © {currentYear} Pacote STL Organizadores de Cozinha. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
