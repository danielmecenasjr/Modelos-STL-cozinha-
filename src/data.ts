/**
 * Copywriting e Dados Estruturados da Landing Page de Conversão
 * Produto: Pacote com mais de 100 modelos STL de organizadores e decorações de cozinha prontos para impressão 3D
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  rating: number;
  text: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  tag: string;
  image: string;
}

export interface BonusItem {
  id: string;
  code: string;
  title: string;
  description: string;
  value: string;
  badge: string;
  image?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  oldPrice: string;
  badge?: string;
  highlighted: boolean;
  installments: string;
  items: string[];
  image?: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "",
    tag: "",
    image: "https://i.postimg.cc/2yFZrMQr/il-794x-N-7700626464-qd6a.webp"
  },
  {
    id: "g2",
    title: "",
    tag: "",
    image: "https://i.postimg.cc/QCkThwp2/il-794x-N-7700626498-e9vw.webp"
  },
  {
    id: "g3",
    title: "",
    tag: "",
    image: "https://i.postimg.cc/sx9hsqY3/il-794x-N-7700626514-thp9.avif"
  },
  {
    id: "g4",
    title: "",
    tag: "",
    image: "https://i.postimg.cc/BbcK4kTj/il-794x-N-7748566379-aaun.avif"
  },
  {
    id: "g5",
    title: "",
    tag: "",
    image: "https://i.postimg.cc/90t7CKdH/il-794x-N-7748566399-3iyc.avif"
  },
  {
    id: "g6",
    title: "",
    tag: "",
    image: "https://i.postimg.cc/VvBCmpqY/il-794x-N-7748566413-hg9i.avif"
  },
  {
    id: "g7",
    title: "",
    tag: "",
    image: "https://i.postimg.cc/QCkThwQs/il-794x-N-7748566419-nx17.avif"
  },
  {
    id: "g8",
    title: "",
    tag: "",
    image: "https://i.postimg.cc/vTLVbkrT/il-794x-N-7887709848-dihx.avif"
  },
  {
    id: "g9",
    title: "",
    tag: "",
    image: "https://i.postimg.cc/rsCrM31p/il-794x-N-7887709952-smj5.avif"
  },
  {
    id: "g10",
    title: "",
    tag: "",
    image: "https://i.postimg.cc/j2Q7tmH5/il-794x-N-7935667965-67bs.avif"
  },
  {
    id: "g11",
    title: "",
    tag: "",
    image: "https://i.postimg.cc/vTdnRbVy/il-794x-N-7989326178-szck.jpg"
  },
  {
    id: "g12",
    title: "",
    tag: "",
    image: "https://i.postimg.cc/NFwXhBHB/il-794x-N-7989326220-7429.jpg"
  },
  {
    id: "g13",
    title: "",
    tag: "",
    image: "https://i.postimg.cc/nrtm8pDJ/il-794x-N-7989326268-t58m.jpg"
  },
  {
    id: "g14",
    title: "",
    tag: "",
    image: "https://i.postimg.cc/vTdnRbVF/il-794x-N-7989326278-rbsp.jpg"
  },
  {
    id: "g15",
    title: "",
    tag: "",
    image: "https://i.postimg.cc/90t7CKGK/il-794x-N-8037266651-qhto.jpg"
  },
  {
    id: "g16",
    title: "",
    tag: "",
    image: "https://i.postimg.cc/Xq05M4Cn/il-794x-N-8037266697-3q93.jpg"
  },
  {
    id: "g17",
    title: "",
    tag: "",
    image: "https://i.postimg.cc/MHbQqNyh/il-794x-N-8037266699-f91p.jpg"
  }
];

export const BENEFITS = [
  {
    title: "Fácil impressão",
    desc: "Arquivos 100% testados sem necessidade de suportes complexos, prontos para fatiar.",
    icon: "Layers"
  },
  {
    title: "Designs modernos e funcionais",
    desc: "Peças estéticas de alta tendência que decoram e organizam o ambiente de verdade.",
    icon: "Sparkles"
  },
  {
    title: "Alto valor percebido",
    desc: "Clientes compram por valores premium devido ao design sofisticado e utilidade instantânea.",
    icon: "TrendingUp"
  },
  {
    title: "Organização prática para cozinha",
    desc: "Modelos focados no nicho mais vendido: otimização inteligente e decoração doméstica.",
    icon: "LayoutGrid"
  }
];

export const PARA_QUEM = [
  {
    title: "Nicho mais lucrativo do mercado",
    desc: "Domine o nicho de organizadores domésticos, o segmento com maior recorrência e valor.",
    icon: "CheckCircle"
  },
  {
    title: "Criar fonte de renda extra",
    desc: "Comece a imprimir pecas de giro rápido para vender em marketplaces locais ou redes sociais.",
    icon: "CheckCircle"
  },
  {
    title: "Economizar tempo de modelagem",
    desc: "Diga adeus a horas perdidas no Fusion 360 ou Blender. Tenha os STLs perfeitos na hora.",
    icon: "CheckCircle"
  },
  {
    title: "Ter modelos prontos para imprimir",
    desc: "Arquivos mastigados, otimizados para gastar menos filamento com a máxima resistência mecânica.",
    icon: "CheckCircle"
  },
  {
    title: "Itens modernos e úteis",
    desc: "Produtos que resolvem a bagunça real da bancada de qualquer dona de casa.",
    icon: "CheckCircle"
  },
  {
    title: "Escalar produção com impressão 3D",
    desc: "Inicie seu negócio digital com catálogo atrativo.",
    icon: "CheckCircle"
  }
];

export const BONUS_LIST: BonusItem[] = [
  {
    id: "b1",
    code: "BÔNUS 01",
    title: "Guia Anuncio Vendedor",
    description: "É um Guia ensinando como espionar e modelar os tipos de anúncios que mais vendem na internet (100% com ferramentas grátis).",
    value: "R$ 47,00",
    badge: "GRÁTIS",
    image: "https://i.postimg.cc/g03NV0P7/Chat-GPT-Image-29-de-mai-de-2026-16-12-22.webp"
  },
  {
    id: "b2",
    code: "BÔNUS 02",
    title: "Pack de saboneteiras e organizadores de banheiro",
    description: "Modelos de alta utilidade e design moderno para organizar banheiros e lavabos de forma sofisticada.",
    value: "R$ 67,00",
    badge: "GRÁTIS",
    image: "https://i.postimg.cc/LsrFX53f/Chat-GPT-Image-29-de-mai-de-2026-16-08-16.webp"
  },
  {
    id: "b4",
    code: "BÔNUS 03",
    title: "Pack de decoração minimalista",
    description: "Adornos geométricos, vasos geométricos e suportes contemporâneos para compor o catálogo.",
    value: "R$ 49,00",
    badge: "GRÁTIS",
    image: "https://i.postimg.cc/d07Kwrrj/Chat-GPT-Image-29-de-mai-de-2026-16-09-14.webp"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "basico",
    name: "PLANO BÁSICO",
    price: "17,90",
    oldPrice: "67,00",
    highlighted: false,
    installments: "R$ 17,90 à vista",
    image: "https://i.postimg.cc/zGSLQYxs/mockup-novo-(1).webp",
    items: [
      "Acesso imediato",
      "Pacote básico com 25 modelos STL",
      "Suporte via e-mail",
      "Garantia de 7 dias"
    ]
  },
  {
    id: "completo",
    name: "PLANO COMPLETO",
    price: "37,90",
    oldPrice: "197,00",
    badge: "MAIS VENDIDO",
    highlighted: true,
    installments: "R$ 37,90 à vista",
    image: "https://i.postimg.cc/zGSLQYxs/mockup-novo-(1).webp",
    items: [
      "Todos os +100 modelos STL de Cozinha",
      "Bônus 01: Guia Anuncio Vendedor (Espione os anúncios campeões)",
      "Bônus 02: Pack de saboneteiras e organizadores de banheiro",
      "Bônus 03: Pack de decoração minimalista (Vasos e suportes)",
      "Atualizações futuras garantidas",
      "Licença comercial livre de venda física",
      "Suporte prioritário via WhatsApp",
      "Acesso de download vitalício"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Carlos M.",
    role: "Produtor e Empreendedor 3D",
    rating: 5,
    text: "O que mais me ajudou foi parar de perder tempo no design. Antes eu ficava horas tentando criar algo novo. Com os modelos prontos do catálogo, é só abrir, laminar, colocar na mesa e vender. Já faturei muito essa semana no Mercado Livre!"
  },
  {
    name: "Renata A.",
    role: "Fabricante e Vendedora Shopee",
    rating: 5,
    text: "As luminárias e organizadores têm aparência de peça de boutique, super refinada. Isso faz toda a diferença para anunciar, o pessoal bate o olho na foto e quer comprar por um valor justo. Consegui vender muito mais na minha loja online."
  },
  {
    name: "André L.",
    role: "Marcenaria e Serviços Digitais",
    rating: 5,
    text: "Excelente! Os arquivos são bem organizados e não tive surpresa nenhuma com apoios errados. São pensados para economizar material sem perder a firmeza. Todo mundo elogia o resultado final, excelente compra."
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Como recebo os arquivos?",
    answer: "Imediatamente! Assim que o pagamento for confirmado (por PIX é instantâneo), você receberá um e-mail com as instruções e o link exclusivo para as pastas organizadas de download no Google Drive."
  },
  {
    question: "Os arquivos são no formato STL?",
    answer: "Sim, todos os arquivos estão no formato STL oficial de alta definição, 100% universais, limpos e prontos para alimentar fatiadores."
  },
  {
    question: "Funciona em qualquer impressora 3D?",
    answer: "Com certeza! Os modelos foram projetados e testados exaustivamente para alcançar excelentes resultados tanto em impressoras FDM (como as linhas Ender, Creality, Bambu Lab, Artillery, etc.) quanto em impressoras de Resina (SLA/MSLA)."
  },
  {
    question: "Posso vender os produtos impressos?",
    answer: "Sim! Ao adquirir o pacote, você recebe a licença de uso comercial para fabricar e mercantilizar de forma livre os produtos físicos impressos. Você pode vender na Shopee, Mercado Livre, marketplaces locais ou redes sociais. Apenas a revenda dos arquivos STL digitais é proibida."
  },
  {
    question: "Precisa pagar mensalidade?",
    answer: "Não! O pagamento é único e dá direito à cópia vitalícia dos arquivos e bônus. Não há nenhuma mensalidade, taxa de manutenção ou pegadinha."
  },
  {
    question: "O acesso aos arquivos é vitalício?",
    answer: "Sim, o acesso à sua pasta na nuvem é seu para sempre. Você pode fazer o download hoje ou daqui a um ano, as peças estarão sempre lá prontas para você."
  },
  {
    question: "Funciona no Cura e Bambu Studio?",
    answer: "Sim! Os modelos funcionam perfeitamente em todos os fatiadores populares do mercado, incluindo Cura, PrusaSlicer, Bambu Studio, OrcaSlicer, Lychee, Chitubox, etc."
  },
  {
    question: "Posso usar PLA e PETG para imprimir?",
    answer: "Com certeza. Recomendamos PLA para fins estéticos e organizadores de secos, e PETG ou ABS para itens que entram em contato direto com água ou calor moderado, garantindo versatilidade na produção."
  }
];
