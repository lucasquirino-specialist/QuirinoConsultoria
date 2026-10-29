/**
 * Configuração do site — Quirino Consultoria
 * Edite este arquivo para alterar textos, contatos e serviços.
 */

const siteConfig = {
  brand: {
    name: "QUIRINO",
    tagline: "Consultoria Contábil • Gestão • Dados",
    logo: "https://media.base44.com/images/public/6ae342db4b0b2476b6d487f8/2de33c5ef_LogoSemFundo.png",
  },

  accent: "#E3A82B",

  nav: {
    links: [
      { label: "Diferencial", href: "#about" },
      { label: "Soluções", href: "#services" },
      { label: "Reforma Tributária", href: "#reforma" },
      { label: "Metodologia", href: "#metodologia" },
      { label: "Contato", href: "#contact" },
    ],
    cta: { label: "Diagnóstico Gratuito", href: "#contact" },
  },

  hero: {
    headline: "Transforme dados contábeis\nem decisões estratégicas\nde crescimento.",
    subheadline:
      "Apoiamos pequenas e médias empresas na construção de uma gestão financeira sólida, processos eficientes e conformidade fiscal absoluta. Da operação diária à inteligência estratégica.",
    cta: { label: "Agendar Diagnóstico Gratuito", href: "#contact" },
    secondaryCta: { label: "Conheça as Soluções", href: "#services" },
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80",
  },

  about: {
    badge: "Diferencial Multidisciplinar",
    headline: "Rigor contábil com\nvisão estratégica.",
    body:
      "Nossa liderança combina formação acadêmica rigorosa em Administração e Ciências Contábeis. Isso garante uma visão dupla indispensável: o rigor tático das obrigações contábeis somado à visão estratégica do negócio.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&q=80",
    stats: [
      { value: "4", label: "Frentes de solução" },
      { value: "PMEs", label: "Foco no seu porte" },
      { value: "360°", label: "Visão do negócio" },
    ],
  },

  services: {
    badge: "Nossas Soluções",
    headline: "Consultoria e assessoria\npara o seu negócio.",
    items: [
      {
        icon: "Scale",
        title: "1. Assessoria Contábil & Fiscal",
        description: "Garanta total conformidade e eficiência tributária no seu negócio.",
        bullets: [
          "Contabilidade Consultiva: DRE, Balanço e DFC orientados ao gestor.",
          "Gestão Fiscal & Tributária: apuração precisa de obrigações principais e acessórias.",
          "Inadequação e Reforma Tributária: planejamento e adaptação às novas regras fiscais.",
          "Departamento Pessoal: folha, encargos e conformidade trabalhista contínua.",
        ],
        highlight: true,
      },
      {
        icon: "TrendingUp",
        title: "2. Controladoria & Modelagem",
        description: "Estruturação financeira para sustentabilidade e escala.",
        bullets: [
          "Controladoria Estratégica: rotinas de controle e acompanhamento de margens.",
          "Modelagem Financeira: fluxo de caixa, valuation e viabilidade.",
          "Gestão de Capital de Giro: otimização do ciclo financeiro e necessidade de caixa.",
          "Orçamento Empresarial: planejamento anual e controle de desvios.",
        ],
        highlight: false,
      },
      {
        icon: "BarChart2",
        title: "3. Data Analytics & BI",
        description: "Transforme dados brutos em inteligência comercial e operacional.",
        bullets: [
          "Dashboards Executivos: KPIs centralizados em tempo real.",
          "Análise de Mercado & Benchmarking: leitura de cenários setoriais e posicionamento.",
          "Auditoria Operacional de Dados: higienização de bases e padronização de cadastros.",
          "Relatórios de Desempenho: diagnósticos periódicos para sócios e conselho.",
        ],
        highlight: false,
      },
      {
        icon: "Workflow",
        title: "4. Gestão & Processos",
        description: "Eficiência operacional e eliminação de gargalos internos.",
        bullets: [
          "Mapeamento de Processos (BPM): padronização e otimização de fluxos.",
          "Consultoria em Gestão Eficiente: redução de custos e desperdícios.",
          "Governança Operacional: responsabilidades e indicadores de metas.",
          "Manualização de Rotinas: documentação de POPs.",
        ],
        highlight: false,
      },
    ],
  },

  reforma: {
    badge: "Apoio Estratégico",
    headline: "Reforma Tributária\npara PMEs.",
    intro:
      "A transição do sistema tributário exigirá revisão profunda nos processos de precificação, emissão de notas e gestão fiscal das empresas. Nossa consultoria prepara o seu negócio com antecedência.",
    columns: ["Fase de Preparação", "Impacto na sua Empresa", "Atuação Quirino Consultoria"],
    rows: [
      ["1. Diagnóstico de Impacto", "Alteração na alíquota efetiva e na formação do preço de venda.", "Simulação de cenários financeiros sob o novo modelo tributário."],
      ["2. Adequação de Sistemas", "Necessidade de parametrização fiscal do ERP e emissão de NFe.", "Mapeamento de exigências e suporte técnico no alinhamento fiscal."],
      ["3. Transição Operacional", "Convivência temporária entre regimes tributários antigos e novos.", "Assessoria fiscal contínua para evitar pagamento indevido de impostos."],
    ],
  },

  metodologia: {
    badge: "Metodologia",
    headline: "Nossa metodologia\nde atuação.",
    steps: [
      { title: "Diagnóstico", description: "Levantamento minucioso dos processos contábeis, fiscais e operacionais atuais." },
      { title: "Planejamento", description: "Elaboração do plano de ação customizado focado nas metas e dores da PME." },
      { title: "Execução", description: "Implementação de rotinas contábeis, relatórios de BI e melhoria de processos." },
      { title: "Acompanhamento", description: "Reuniões mensais de resultados (DRE) e ajustes contínuos de diretrizes." },
    ],
    why: {
      title: "Por que terceirizar a inteligência contábil e de gestão?",
      body:
        "Pequenas e médias empresas ganham competitividade quando seus executivos focam no core business, deixando a complexidade tributária, a conformidade legal e a inteligência de dados com especialistas com visão holística do mercado.",
    },
  },

  contact: {
    badge: "Fale Conosco",
    headline: "Agende um\nDiagnóstico Gratuito.",
    subtext: "Vamos analisar os indicadores e a estrutura contábil da sua empresa.",
    email: "lucas.quirino@quirinoconsultoria.com.br",
    phone: "(81) 99677-0064",
    whatsapp: "5581996770064",
    location: "Recife - PE",
    services: [
      "Assessoria Contábil & Fiscal",
      "Controladoria & Modelagem",
      "Data Analytics & BI",
      "Gestão & Processos",
      "Reforma Tributária",
      "Outro / Não sei ainda",
    ],
  },

  footer: {
    tagline: "Quirino Consultoria • Inteligência Contábil e de Gestão",
    socials: [
      { platform: "Site", href: "https://www.quirinoconsultoria.com.br" },
      { platform: "E-mail", href: "mailto:lucas.quirino@quirinoconsultoria.com.br" },
      { platform: "WhatsApp", href: "https://wa.me/5581996770064" },
    ],
    copyright: `© ${new Date().getFullYear()} Quirino Consultoria. Todos os direitos reservados.`,
  },
};

export default siteConfig;
