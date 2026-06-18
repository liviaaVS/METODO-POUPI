export interface POUPIFormData {
  d1_1: boolean; // Mídias pesadas
  d1_2: boolean; // Bundle inflado
  d2_1: boolean; // Dados massivos
  d2_2: boolean; // Acoplamento de estado
  d3_1: boolean; // Rotas repetitivas
  d3_2: boolean; // Resiliência/Offline
  metrics: string[]; // Lighthouse metrics
}

export interface POUPIResult {
  group: string;
  description: string;
  targetSphere: string;
  techniques: string[];
  tradeoffs: string;
  criticalMetrics: string[];
}

export function calculatePOUPIMapping(data: POUPIFormData): POUPIResult {
  const sphere1Points = (data.d1_1 ? 1 : 0) + (data.d1_2 ? 1 : 0);
  const sphere2Points = (data.d2_1 ? 1 : 0) + (data.d2_2 ? 1 : 0);
  const sphere3Points = (data.d3_1 ? 1 : 0) + (data.d3_2 ? 1 : 0);

  if (sphere1Points >= sphere2Points && sphere1Points >= sphere3Points) {
    return {
      group: "Grupo 1: Content-Centric",
      description: "Sistemas focados em conteúdo, landing pages, e-commerces e MVPs.",
      targetSphere: "Esfera 1 – Build e Carga",
      techniques: [
        "Compressão de imagens (WebP/AVIF)",
        "Extração de CSS crítico",
        "Code Splitting",
        "Importações dinâmicas",
        "Lazy Loading de componentes e rotas"
      ],
      tradeoffs: "Maior complexidade no processo de build e possibilidade de introdução de deslocamentos visuais (CLS) e dependências assíncronas.",
      criticalMetrics: ["LCP", "FCP", "TBT", "CLS"]
    };
  }

  if (sphere2Points >= sphere3Points) {
    return {
      group: "Grupo 2: Data-Heavy",
      description: "Sistemas de Gestão, Dashboards e ERPs com processamento intensivo.",
      targetSphere: "Esfera 2 – Renderização",
      techniques: [
        "Renderização sob demanda (Deferred Rendering)",
        "Virtualização de listas",
        "Memorização (useMemo, memo, useCallback)",
        "Descentralização e segmentação de estados"
      ],
      tradeoffs: "Maior complexidade de implementação, necessidade de controle das dependências de memoização e aumento da dificuldade de manutenção.",
      criticalMetrics: ["TBT", "LCP", "Speed Index", "CLS"]
    };
  }

  return {
    group: "Grupo 3: Transacionais",
    description: "Aplicações SaaS e APIs Complexas com foco em fluxo de dados.",
    targetSphere: "Esfera 3 – Cache",
    techniques: [
      "Estratégia Stale-While-Revalidate",
      "Cache local (TanStack Query / LocalStorage)",
      "Service Workers para aplicações PWA"
    ],
    tradeoffs: "Maior complexidade no gerenciamento da invalidação de cache e risco de exibição temporária de dados desatualizados.",
    criticalMetrics: ["Performance Score", "FCP", "LCP", "Latência de rede"]
  };
}
