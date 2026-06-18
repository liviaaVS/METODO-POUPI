# Especificação: Vitrine POUPI

## Visão Geral
A "Vitrine POUPI" é uma aplicação web didática projetada para expor e demonstrar a metodologia POUPI (Programação Orientada à Performance em Interfaces Usuário). O objetivo é guiar desenvolvedores através do processo de diagnóstico e otimização de performance em aplicações React, utilizando dados e critérios estabelecidos no TCC de Lívia Vitória da Silva.

## Requisitos Funcionais

### 1. Introdução Didática
- Exposição dos conceitos fundamentais da técnica POUPI.
- Explicação das 3 Esferas:
    - **Esfera 1 (Build e Carga):** Foco em ativos, mídias e tamanho do bundle.
    - **Esfera 2 (Renderização):** Foco em eficiência de componentes e uso de CPU.
    - **Esfera 3 (Cache):** Foco em persistência de dados e fluxo assíncrono.

### 2. Formulário de Diagnóstico (Apêndice A)
- Interface interativa para responder às perguntas do Apêndice A do TCC.
- Categorias:
    - **D1:** Carga de Ativos e Mídia.
    - **D2:** Dados e Complexidade de Renderização.
    - **D3:** Navegação e Persistência em Rede.
    - **D4:** Sintomas do Lighthouse.

### 3. Matriz de Direcionamento (Tabela 3.3)
- Processamento automático das respostas do formulário.
- Mapeamento para um dos perfis:
    - **Grupo 1: Content-Centric** (Prioridade: Esfera 1).
    - **Grupo 2: Data-Heavy** (Prioridade: Esfera 2).
    - **Grupo 3: Transacionais** (Prioridade: Esfera 3).
- Exibição de recomendações técnicas, métricas alvo e *trade-offs*.

### 4. Guia Visual e Mapeamento
- Gráfico ou fluxograma que guie a aplicação da técnica.
- Visualização clara do Mapa Conceitual da metodologia.

### 5. Demonstrações Práticas
- Exemplos de código "Antes vs Depois".
- Demonstração interativa básica de renderização eficiente (ex: lista pesada com e sem memoização).

## Stack Técnica
- **Framework:** React + Vite (TypeScript).
- **Estilização:** Tailwind CSS.
- **Componentes UI:** shadcn/ui.
- **Navegação:** React Router.
- **Deployment:** GitHub Pages.

## Cronograma de Execução

1.  **Configuração:** Instalação de Tailwind, shadcn/ui e Router.
2.  **Arquitetura:** Definição de rotas e layout base.
3.  **Formulário:** Implementação do questionário interativo.
4.  **Lógica:** Implementação do motor de decisão da matriz POUPI.
5.  **Interface:** Criação das visualizações de resultado e guias didáticos.
6.  **Conteúdo:** Adição de textos explicativos baseados no TCC.
7.  **Publicação:** Configuração final para GitHub Pages.
