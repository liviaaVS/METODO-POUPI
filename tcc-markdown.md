# INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DO RIO GRANDE DO NORTE

## ARQUITETANDO FRONT-ENDS PARA PERFORMANCE E ESCALABILIDADE COM REACT

**LIVIA VITÓRIA DA SILVA**

**Natal - RN**
**2026**

---

### ARQUITETANDO FRONT-ENDS PARA PERFORMANCE E ESCALABILIDADE COM REACT

Trabalho de Conclusão de Curso apresentado ao Curso Tecnologia em Análise e Desenvolvimento de Sistemas do Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte, em cumprimento às exigências legais como requisito parcial à obtenção do título de Tecnólogo em Análise e Desenvolvimento de Sistemas.

**Orientador:** Prof. Dr. André Gustavo Duarte de Almeida.
**Coorientador:** Profa. Dra. Luana Talita Mateus de Souza.

**Natal - RN**
**2026**

---

*TODO: dedicatória*

# AGRADECIMENTOS

### TODO

> “A mulher do fim do mundo é aquela que busca, é aquela que grita, que reivindica, que sempre fica de pé. No fim, eu sou essa mulher”
>
> — **Elza Soares**, Álbum - Mulher do Fim do Mundo

---

# RESUMO

O desenvolvimento de interfaces web modernas exige alta escalabilidade e desempenho para garantir a retenção do usuário, visto que atrasos no carregamento aumentam drasticamente a probabilidade de abandono (Souza Alves, 2025). No ecossistema React, embora o Virtual DOM ofereça otimizações nativas, aplicações complexas frequentemente enfrentam gargalos de performance e instabilidade visual devido a renderizações excessivas e gerenciamento ineficiente de recursos. Diante desse cenário, este trabalho propõe e valida a metodologia **POUPI** (Programação Orientada à Performance em Interfaces Usuário), uma abordagem estruturada em três esferas — Renderização, Build e Cache — que visa reduzir o processamento desnecessário na interface. A metodologia orienta a aplicação de recursos como *useMemo*, *useCallback* e *lazy loading*, integrando-os a estratégias de gerenciamento de dados para reduzir o *Total Blocking Time* (TBT). A pesquisa adota uma abordagem aplicada e experimental, utilizando o Google Lighthouse para auditar métricas como *Largest Contentful Paint* (LCP) e *Cumulative Layout Shift* (CLS) em dois objetos de estudo: a aplicação Kitintrega (pequeno porte) e a Plataforma Nilo Peçanha (grande porte). Os resultados demonstram que a aplicação das diretrizes POUPI promove um equilíbrio entre alta performance e manutenibilidade, mitigando *trade-offs* comuns entre legibilidade de código e eficiência de execução.

**Palavras-chave:** React; Performance; Metodologia POUPI; Otimização; Frontend.

---

# ABSTRACT

Modern web interface development requires high scalability and performance to ensure user retention, as loading delays drastically increase abandonment probability (Souza Alves, 2025). In the React ecosystem, although the Virtual DOM provides native optimizations, complex applications often face performance bottlenecks and visual instability due to excessive rendering and inefficient resource management. Given this scenario, this study proposes and validates the **POUPI** methodology (User Interface Performance-Oriented Programming), a structured approach across three spheres — Rendering, Build, and Cache — aiming to reduce unnecessary interface processing. The methodology guides the application of features such as *useMemo*, *useCallback*, and *lazy loading*, integrating them into data management strategies to reduce Total Blocking Time (TBT). The research adopts an applied and experimental approach, using Google Lighthouse to audit metrics such as Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS) in two study objects: the Kitintrega application (small-scale) and the Nilo Peçanha Platform (large-scale). Results demonstrate that applying POUPI guidelines promotes a balance between high performance and maintainability, mitigating common trade-offs between code readability and execution efficiency.

**Keywords:** React; Performance; POUPI Methodology; Optimization; Frontend.

---

# LISTA DE FIGURAS

Figura 2.1 – Exemplo de código HTML e sua representação na DOM......... 24
Figura 2.2 – Ciclo de vida de um componente React.................. 25
Figura 2.3 – Ciclo de atualização de estado com o Hook useState........... 26
Figura 2.4 – Fluxo de execução de efeitos colaterais com o Hook useEffect..... 27
Figura 3.1 – Fluxo de decisão para utilização do useMemo e useCallback....... 40
Figura 3.2 – Representação visual do ciclo de funcionamento do useMemo....... 40
Figura 3.3 – Representação visual do ciclo de funcionamento do useCallback.... 41
Figura 4.1 – Pontuação obtida no formulário de diagnóstico do Kitintrega...... 46
Figura 4.2 –Resultado da auditoria Lighthouse após otimizações de Cache e PWA.
(Modo Dev)................................. 48
Figura 4.3 –Análise Lighthouse em ambiente de produção após as intervenções da
Esfera 3.................................... 49
Figura 4.4 –Resultado da auditoria Lighthouse após as intervenções da Esfera 1 em
ambiente de desenvolvimento........................ 52
Figura 4.5 –Análise Lighthouse em ambiente de produção após as intervenções da
Esfera 1.................................... 53
Figura 4.6 –Resultado da auditoria Lighthouse após as intervenções da Esfera 2 em
ambiente de desenvolvimento........................ 56
Figura 4.7 –Análise Lighthouse em ambiente de produção após as intervenções da
Esfera 2.................................... 57
Figura 4.8 – Pontuação obtida no formulário de diagnóstico da PNP-CCV...... 59
Figura 4.9 –Comparação dos indicadores Lighthouse antes e após a aplicação de
_Lazy Loading_ nas rotas da aplicação.................... 62
Figura 4.10–Comparação dos indicadores Lighthouse antes e após as otimizações de
Build e Carga................................ 63
Figura 4.11–Análise Lighthouse da aplicação antes das otimizações em ambiente de
produção................................... 64
Figura 4.12–Análise Lighthouse da aplicação após as otimizações em ambiente de
produção................................... 64
Figura B.1 – Representação visual: Mapa Conceitual da Metodologia POUPI.... 80

# LISTA DE TABELAS

Tabela 3.1 –Mapeamento entre trabalhos relacionados e esferas da metodologia
POUPI.................................... 36
Tabela 3.2 – Fundamentação teórica das dimensões do instrumento POUPI...... 37
Tabela 3.3 –Matriz de Agrupamento, Diagnóstico e Direcionamento Metodológico
POUPI................................... 43
Tabela 4.1 – Comparação de métricas (Lighthouse) pré-otimização.......... 46
Tabela 4.2 – Comparação das métricas Lighthouse: Pós-intervenções da Esfera 3.. 48
Tabela 4.3 –Comparação das métricas Lighthouse em produção antes e após as
intervenções da Esfera 3. (KITINTREGA)................ 49
Tabela 4.4 –Comparação das métricas Lighthouse em ambiente de desenvolvimento
após as intervenções da Esfera 1...................... 52
Tabela 4.5 –Comparação das métricas Lighthouse em produção antes e após as
intervenções da Esfera 1........................... 54
Tabela 4.6 –Comparação das métricas Lighthouse em ambiente de desenvolvimento
após as intervenções da Esfera 2...................... 56
Tabela 4.7 –Comparação das métricas Lighthouse em produção antes e após as
intervenções da Esfera 2........................... 57
Tabela 4.8 – Comparação de métricas (Lighthouse) pré-otimização da PNP-CCV.. 59
Tabela 4.9 –Comparação das métricas Lighthouse ao longo das otimizações da Esfera

1........................................ 62
Tabela 4.10–Comparação das métricas Lighthouse em produção antes e após as
intervenções da Esfera 1........................... 65
Tabela 4.11–Comparação das métricas Lighthouse em ambiente de desenvolvimento
após as intervenções da Esfera 2...................... 67
Tabela 4.12–Comparação das métricas Lighthouse em produção antes e após as
intervenções da Esfera 2........................... 68
Tabela 4.13–Comparação das métricas Lighthouse em ambiente de desenvolvimento
após as intervenções da Esfera 3...................... 70
Tabela 4.14–Comparação das métricas Lighthouse em produção antes e após as
intervenções da Esfera 3. (PNP-CCV).................. 71
Tabela 4.15–Comparação geral dos resultados obtidos após aplicação da POUPI em
produção................................... 72

# LISTA DE ABREVIATURAS E SIGLAS

AJAX _Asynchronous JavaScript and XML_

API _Application Programming Interface_

CI/CD _Continuous Integration / Continuous Deployment_

CLS _Cumulative Layout Shift_

CSR _Client Side Rendering_

DOM _Document Object Model_

FCP _First Contentful Paint_

HMR _Hot Module Replacement_

LCP _Largest Contentful Paint_

MVP _Minimum Viable Product_

PNP-CCV Plataforma Nilo Peçanha - Ciclos de Coleta e Validação

POUPI Programação Orientada à Performance em Interfaces Usuário

PWA _Progressive Web App_

RUM _Real User Monitoring_

SEO _Search Engine Optimization_

SI _Speed Index_

SPA _Single Page Application_

SSR _Server Side Rendering_

TBT _Total Blocking Time_

TCC Trabalho de Conclusão de Curso

UX _User Experience_

## SUMÁRIO

- 1 INTRODUÇÃO
- 1.1 ESTRUTURA
- 1.2 OBJETIVOS
- 1.3 METODOLOGIA
- 1.3.1 Análises das pesquisas e concepção da metodologia POUPI
- 1.3.2 Objetos de Estudo
- 1.3.3 Aplicação das Intervenções e Avaliação dos Resultados
- 2 REFERENCIAL TEÓRICO
- 2.1 ReactJS
- 2.1.1 Como a componentização do React funciona
- 2.1.1.1 React Hooks
- 2.1.2 Build de aplicações frontend
- 2.2 Vite
- 2.2.1 Vite e React
- 2.3 Persistência de dados no frontend
- 2.4 Desempenho Front-end
- 2.4.1 Desempenho Front-end x Experiência de Usuários
- 2.5 Noções de SO no Desenvolvimento Front-end
- 2.6 Lighthouse e Avaliação de Desempenho Front-end
- 2.6.1 Funcionamento e Guia de Medição com Lighthouse
- 2.6.2 Detalhamento das Métricas de Performance
- 2.7 Principais Técnicas de Otimização de Front-end
- 2.7.1 Categorias de Otimização Front-end
- 3 DESENVOLVIMENTO
- 3.1 Análise dos Trabalhos Relacionados e Síntese das Técnicas
- 3.2 Concepção do Instrumento de Diagnóstico POUPI
- 3.3 Pilares da Metodologia POUPI e Métricas Associadas
- 3.4 Técnicas e Ferramentas de Intervenção
- 3.4.1 Esfera 1: Build e Carregamento
- 3.4.2 Esfera 2: Renderização Eficiente
- 3.4.3 Esfera 3: Gerenciamento de Cache e Dados
- 3.5 Instrumento de Caracterização Técnica e Árvore de Decisão
- 3.6 Matriz de Agrupamento e Definição de Tradeoffs
- 4 RESULTADOS
- 4.1 Análise da Aplicação de Pequeno Porte (Kitintrega)
- 4.1.1 Aplicação do Instrumento de Mapeamento e Diagnóstico
- 4.1.1.1 Diagnóstico Qualitativo: Mapeamento POUPI
- 4.1.1.2 Diagnóstico Técnico: Análise com Lighthouse
- 4.1.1.3 Direcionamento Metodológico
- 4.1.2 Impacto no Gerenciamento de Cache (Esfera 3)
- 4.1.2.1 Ambiente de desenvolvimento
- 4.1.2.2 Ambiente de Simulação de Produção
- 4.1.2.3 Conclusão geral da Esfera
- 4.1.3 Impacto na Otimização do Build e Carregamento (Esfera 1)
- 4.1.3.1 Ambiente de Desenvolvimento
- 4.1.3.2 Ambiente de Simulação Produção
- 4.1.3.3 Conclusão geral da Esfera
- 4.1.4 Impacto na Renderização Eficiente (Esfera 2)
- 4.1.4.1 Ambiente de Desenvolvimento
- 4.1.4.2 Ambiente de Simulação Produção
- 4.1.4.3 Conclusão geral da Esfera
- nha - Ciclos de Coleta e Validação - PNP-CCV) 4.2 Análise da Aplicação de Grande Porte (Plataforma Nilo Peça-
- 4.2.1 Aplicação do Instrumentos de Mapeamento e Diagnóstico
- 4.2.1.1 Diagnóstico Qualitativo: Mapeamento POUPI
- 4.2.1.2 Diagnóstico Técnico: Análise com Lighthouse
- 4.2.1.3 Direcionamento Metodológico
- 4.2.2 Impacto na Otimização do Build e Carregamento (Esfera 1)
- 4.2.2.1 Ambiente de Desenvolvimento
- 4.2.2.2 Ambiente de Simulação Produção
- 4.2.2.3 Conclusão geral da Esfera
- 4.2.3 Impacto na Renderização Eficiente (Esfera 2)
- 4.2.3.1 Ambiente de Desenvolvimento
- 4.2.3.2 Ambiente de Simulação de Produção
- 4.2.3.3 Conclusão geral da Esfera
- 4.2.4 Impacto no Gerenciamento de Cache (Esfera 3)
- 4.2.4.1 Ambiente de Desenvolvimento
- 4.2.4.2 Ambiente de Simulação de Produção
- 4.2.4.3 Conclusão geral da Esfera
- 4.3 Discussão Comparativa e Eficácia da Metodologia POUPI
- 4.4 Considerações Finais
- 4.5 Trabalhos Futuros
- APÊNDICES
- POUPI APÊNDICE A –INSTRUMENTO DE CARACTERIZAÇÃO TÉCNICA
- APÊNDICE B – MAPA CONCEITUAL DA METODOLOGIA POUPI
- Referências

## 1 INTRODUÇÃO

```
O desenvolvimento de interfaces web tem evoluído significativamente nas últimas
décadas, impulsionado pela crescente demanda por aplicações cada vez mais interativas,
dinâmicas e responsivas. Essa quebra de paradigma ganhou força no início dos anos 2000,
quando abordagens focadas em interações assíncronas transformaram a internet de um meio
de leitura estática para um ambiente de aplicações complexas (Garrett, 2005). Segundo
Garrett (2005), o uso do Ajax ( Asynchronous JavaScript + XML ) permitiu eliminar a
natureza "para-e-anda"^1 das interações tradicionais, fechando a lacuna de responsividade
que existia entre aplicações web e softwares de desktop.
```

```
Ao introduzir um "motor Ajax"como intermediário entre o usuário e o servidor,
as requisições passaram a ocorrer de forma independente da interface, permitindo que o
usuário continuasse interagindo com a aplicação sem as interrupções causadas pelo recar-
regamento total das páginas (Garrett, 2005). Essa mudança fundamental de arquitetura é
o que sustenta as modernas Single Page Applications (SPAs), que são sites que carregam
um único arquivo e sobrescrevem a página existente com novos dados de um servidor
web, em vez de recarregar as páginas individualmente (Adobe Experience Cloud, 2023).
Consequentemente, também fundamenta necessidade de metodologias que buscam otimizar
esse fluxo de dados e renderização assíncrona para garantir a melhor experiência possível.
Nesse contexto, bibliotecas como o React consolidaram-se como uma das principais ferra-
mentas no desenvolvimento frontend, por possibilitarem a criação de interfaces modulares,
reutilizáveis e escaláveis (Veeri, 2024). Segundo Fedosejev (2015 apud (Lopes; Bavaresco,
2023)), a biblioteca surgiu justamente da necessidade de uma solução que fosse modular e
escalável para o desenvolvimento de interfaces.
```

```
Apesar dessas vantagens, a arquitetura baseada em componentes e no uso de um
DOM Virtual apresenta desafios relacionados à performance e à estabilidade visual das
aplicações (Rocha, 2023). Renderizações excessivas, gerenciamento inadequado de estado
e carregamento ineficiente de recursos podem impactar negativamente a experiência do
usuário, afetando diretamente métricas como tempo de carregamento, responsividade e
estabilidade da interface (Lopes; Bavaresco, 2023; Souza Alves, 2025).
```

```
Diante desse cenário, torna-se relevante investigar estratégias que não apenas
garantam a organização e manutenibilidade do código — dado que o código de aplicações
frontend cresceu significativamente — mas que também promovam a eficiência no uso de
```

(^1) Tradução livre do termo original em inglês _start-stop-start-stop_ utilizado pelo autor para descrever a
interrupção da interação durante o carregamento de páginas tradicionais.

```
recursos computacionais (Veeri, 2024). A escolha deste tema justifica-se pela crescente
exigência do mercado por aplicações performáticas, bem como pela necessidade de formação
de profissionais capazes de desenvolver soluções que considerem a experiência do usuário
como fator essencial para o sucesso de negócios digitais (Souza Alves, 2025).
```

```
Diversos trabalhos e práticas da indústria abordam a otimização de aplicações
frontend, destacando o uso de técnicas como memoização, que consiste no armazenamento
de resultados previamente computados para evitar cálculos repetitivos; carregamento sob
demanda ( lazy loading ), que adia o carregamento de recursos até que eles sejam necessários;
e gerenciamento eficiente de dados, que busca reduzir requisições redundantes e minimizar
atualizações desnecessárias da interface. Além disso, ferramentas como o Google Lighthouse
permitem a análise de métricas de desempenho, possibilitando a avaliação do impacto
dessas estratégias na qualidade das aplicações.
```

```
Sendo assim, este trabalho tem como objetivo geral propor e validar a eficácia a
metodologia POUPI – Programação Orientada à Performance em Interfaces Usuário, como
uma abordagem que visa reduzir o trabalho desnecessário na interface por meio da aplicação
estruturada de técnicas de otimização. Diante desse cenário, este trabalho tem como
questão de pesquisa compreender de que maneira a aplicação estruturada da metodologia
POUPI, contribui para a mitigação de gargalos de desempenho em aplicações baseadas
em React. Ante o exposto, a metodologia contempla tanto a camada de renderização,
com o uso de recursos como useMemo , useCallback e componentização eficiente, quanto
a camada de gerenciamento de dados, com o uso de bibliotecas como TanStack Query ,
além de estratégias voltadas à otimização de carregamento de recursos, como lazy loading ,
compressão de imagens e uso eficiente de cache. Com isso, buscou-se validar a eficácia
da técnica desenvolvida para além das métricas quantitativas, mas também a nível de
governança, com um mapeamento de problemas e soluções que auxiliam na análise e
detecção de gargalos.
```

## 1.1 ESTRUTURA

```
Este trabalho está organizado da seguinte forma: a seção 1 apresenta a introdução,
contemplando os objetivos da pesquisa, a metodologia adotada e a estrutura do trabalho.
A seção 2 apresenta o desenvolvimento do estudo, abordando os conceitos teóricos, a
metodologia POUPI, seus pilares, técnicas de intervenção, instrumento de diagnóstico e
processo de aplicação. A seçãop 3 apresenta os resultados obtidos a partir da aplicação da
metodologia nos estudos de caso, incluindo a análise das diferentes esferas de otimização e
a discussão dos resultados. Por fim, a seção 4 apresenta as considerações finais, destacando
as principais contribuições do trabalho, suas limitações e sugestões para trabalhos futuros.
```

## 1.2 OBJETIVOS

```
O objetivo geral deste trabalho é propor e avaliar uma abordagem de desenvolvi-
mento frontend que equilibre manutenibilidade e performance em aplicações web. Como
objetivos específicos, destacam-se:
```

- Analisar os principais problemas de performance em aplicações React;
- Aplicar técnicas de otimização relacionadas à renderização, carregamento e gerencia-
  mento de cache;
- Estruturar a metodologia POUPI e avaliar seu impacto por meio da comparação de
  métricas de desempenho antes e após sua aplicação.

## 1.3 METODOLOGIA

```
Foi utilizado o método de pesquisa exploratória com a finalidade de analisar as
principais técnicas de otimização de desempenho no módulo frontend de aplicações web.
O estudo possui caráter aplicado e exploratório, sendo conduzido por meio de estudos de
caso em aplicações reais, nas quais intervenções de otimização foram implementadas e
avaliadas por meio de métricas objetivas de desempenho. A pesquisa baseia-se em uma
revisão bibliográfica composta pelos principais artigos e pesquisas da área, com enfoque
em trabalhos que apresentem análises comparativas e validações das técnicas estudadas,
incluindo a elaboração de rankings de desempenho. As fontes de informação utilizadas na
pesquisa incluíram, principalmente, a IEEE Xplore, o Google Scholar e repositórios de
trabalhos acadêmicos de universidades. Os estudos selecionados nessas plataformas foram
identificados por meio dos termos de busca: performance, ReactJS, frontend, Técnicas,
Métodos, estudo, análise e desempenho, incluindo a tradução, via Google Tradutor, dessas
mesmas palavras em inglês.
```

## 1.3.1 Análises das pesquisas e concepção da metodologia POUPI

```
Em posse dos resultados da etapa de revisão bibliográfica, foram analisados 10 tra-
balhos que investigavam, propunham ou validavam técnicas de otimização de desempenho
em interfaces frontend. O objetivo dessa análise foi identificar estratégias recorrentes e com
evidências de efetividade na literatura. Em seguida, as técnicas identificadas foram catalo-
gadas e organizadas em uma listagem única, visando consolidar o conhecimento obtido nos
diferentes estudos. Posteriormente, essas técnicas foram avaliadas e agrupadas de acordo
com os problemas de desempenho que buscavam solucionar. O objetivo dessa classificação
foi identificar padrões de atuação entre as estratégias e compreender quais aspectos do
desempenho frontend eram abordados por cada conjunto de técnicas. Por fim, a análise
```

dos agrupamentos permitiu a definição dos principais pilares de desempenho frontend, que
serviram como base para a construção da metodologia proposta neste trabalho.

Com os pilares de desempenho definidos, foi realizada uma nova etapa de pesquisa
com o objetivo de identificar os principais sintomas e padrões de implementação associados
aos problemas presentes em cada um desses pilares. A partir dessa análise, foi elaborado
um formulário como ferramenta de diagnóstico, capaz de posicionar aplicações em grupos
de enfrentamento mais específicos e alinhados ao seu escopo. Essa ferramenta tem como
finalidade orientar a seleção e a aplicação das técnicas mais adequadas para cada perfil de
aplicação, tornando o processo de otimização mais direcionado e sistemático.

Por conseguinte, após a elaboração da ferramenta de diagnóstico, foi produzida
uma matriz de agrupamento para direcionamento metodológico. Essa matriz define perfis
com base nas respostas obtidas no formulário diagnóstico, estabelecendo: o grupo ou
perfil correspondente às respostas; os gatilhos do formulário, ou seja, as respostas que
caracterizam determinado perfil; e as métricas do Lighthouse mais suscetíveis à degradação
em cada grupo.

Nas duas últimas colunas da matriz, são apresentados, respectivamente, a esfera
que deve ser priorizada durante o processo de otimização e as técnicas correspondentes
às ações de melhoria para cada dimensão analisada. Por fim, a última coluna apresenta
os trade-offs associados à resolução dos problemas de cada esfera por meio das técnicas
propostas.

Por fim, considerando que a metodologia POUPI foi estruturada a partir de dois
artefatos principais — o formulário diagnóstico e a matriz de agrupamento e direcionamento
metodológico —, tornou-se necessário estabelecer um fluxo operacional que orientasse
sua aplicação prática. Dessa forma, foi elaborado um processo mínimo de utilização da
metodologia, contemplando desde a identificação dos problemas de desempenho até a
implementação das otimizações recomendadas.

A definição desse fluxo teve como objetivo sistematizar a aplicação da POUPI e
fornecer um procedimento reproduzível para sua utilização em diferentes contextos. Além
disso, o fluxo serviu como base para a etapa de validação da metodologia, permitindo veri-
ficar sua capacidade de diagnosticar gargalos, direcionar intervenções e produzir melhorias
mensuráveis no desempenho das aplicações analisadas. A validação da metodologia foi
conduzida considerando não apenas a identificação de gargalos e a aplicação das técnicas
recomendadas, mas também a capacidade da POUPI de produzir melhorias mensuráveis
em aplicações com diferentes níveis de complexidade arquitetural.

## 1.3.2 Objetos de Estudo

```
O experimento para validação da metodologia POUPI foi conduzido em dois
sistemas distintos, desenvolvidos com a stack React + Vite , permitindo avaliar a eficácia
das diretrizes em diferentes níveis de complexidade arquitetural:
```

- **Aplicação de Pequeno Porte (Kitintrega:)** Trata-se de um sistema de gerenci-
  amento de entrega de kits de corrida, caracterizado por um fluxo linear de dados,
  poucas rotas e um volume controlado de componentes. Este objeto busca validar a
  POUPI em cenários de baixo esforço computacional, como MVPs ou ferramentas
  internas simplificadas. O software foi desenvolvido e mantido de forma colaborativa
  por estudantes dos cursos de Tecnologia em Análise e Desenvolvimento de Sistemas
  e Técnico Integrado em Manutenção e Suporte em Informática do IFRN/CNAT. O
  programa possui escopo restrito e funcionalidades centradas no processo de solicitação
  e entrega de kits de corrida, sendo adequado para a validação inicial da metodologia.
- **Aplicação de Grande Porte (Plataforma Nilo Peçanha - Ciclos de Coleta**
  **e Validação (PNP-CCV):** Ambiente de alta complexidade voltado à coleta e
  validação de dados da Rede Federal de Educação. O módulo é responsável pela conso-
  lidação de informações acadêmicas, administrativas e financeiras das instituições da
  Rede Federal, servindo de base para o cálculo de indicadores de gestão acompanhados
  pela SETEC/MEC. Atualmente, o CCV possui 96 épicos, 158 regras de negócio
  mapeadas, mais de 200 telas ativas e sete perfis de usuários com atribuições distintas.
  Além disso, possui uma árvore de componentes densa, múltiplos fluxos de usuário e
  processamento intensivo de dados dinâmicos, configurando um cenário ideal para
  identificar e analisar gargalos de desempenho.

```
Os dois objetos de estudo foram selecionados de forma intencional por representa-
rem cenários contrastantes de desenvolvimento frontend. Enquanto o Kitintrega caracteriza
um sistema de pequeno porte com baixa complexidade arquitetural, a PNP-CCV repre-
senta um ambiente corporativo de grande escala, permitindo avaliar a aplicabilidade da
metodologia em diferentes contextos de uso.
```

## 1.3.3 Aplicação das Intervenções e Avaliação dos Resultados

```
O procedimento experimental seguiu uma abordagem incremental fundamentada
no ciclo diagnosticar, aplicar e medir .Inicialmente, cada aplicação foi submetida ao for-
mulário diagnóstico da metodologia POUPI e a uma auditoria de desempenho utilizando
a ferramenta Google Lighthouse, estabelecendo uma linha de base para comparação dos
resultados. As intervenções foram aplicadas de forma cumulativa, de modo que cada esfera
```

```
do método fosse implementada sobre o estado resultante da esfera anterior, permitindo
observar tanto os efeitos isolados quanto os impactos acumulados das otimizações propostas
pela POUPI.
```

Em seguida, as respostas obtidas no instrumento foram analisadas com o auxílio
da matriz de agrupamento e direcionamento metodológico, permitindo identificar as esferas
prioritárias de intervenção. Com base nessa análise, as otimizações foram implementadas
gradualmente, respeitando a ordem de prioridade definida pelo método e considerando os
_trade-offs_ inerentes a cada técnica adotada. Por conseguinte, para garantir o isolamento e
a rastreabilidade das intervenções realizadas, foi criada, em cada repositório remoto do
_github_ , uma _branch_ específica denominada "metodo-poupi", derivada da _branch_ principal
( _main_ ). Após a implementação de cada conjunto de otimizações, era realizado um _commit_
identificado pelas tags _fix_ , _feat_ ou _refactor_ , acompanhado de uma descrição das intervenções
efetuadas e das métricas de desempenho efetivamente impactadas por aquele conjunto de
alterações.

```
Ao término de cada etapa de otimização, uma nova auditoria era executada
utilizando o Lighthouse, possibilitando mensurar o impacto individual das modificações
sobre as métricas de desempenho. Esse processo foi repetido iterativamente até a conclusão
de todas as otimizações previstas para cada aplicação.
```

```
As auditorias foram realizadas em dois ambientes distintos: desenvolvimento e
simulação de produção. O ambiente de desenvolvimento permitiu observar o comportamento
da aplicação durante a implementação das intervenções, enquanto o ambiente de produção
buscou reproduzir condições mais próximas do uso real, utilizando versões geradas por
meio do processo de build.
```

```
Em suma, após a conclusão de todas as intervenções previstas, foi gerada uma
versão de produção ( build ) de cada sistema — uma correspondente à versão anterior às
intervenções e outra à versão otimizada — e realizada uma avaliação final em um ambiente
de execução semelhante ao cenário real de uso.
```

Os resultados obtidos antes e após a aplicação das diretrizes da POUPI foram
comparados por meio das métricas _Performance Score_ , _First Contentful Paint_ (FCP),
_Largest Contentful Paint_ (LCP), _Total Blocking Time_ (TBT), _Speed Index_ (SI) e _Cumulative
Layout Shift_ (CLS). Essas métricas permitiram avaliar a eficácia da metodologia na
identificação de gargalos e na melhoria do desempenho das aplicações analisadas.

```
Por fim, realizou-se uma análise comparativa entre os objetos de estudo, buscando
identificar padrões de comportamento da metodologia POUPI em aplicações de diferentes
```

portes e níveis de complexidade arquitetural.

## 2 REFERENCIAL TEÓRICO

```
Esta seção tenciona abordar os principais conceitos que fundamentam este trabalho,
bem como apresentar os principais produções relacionadas ao tema. Para a obtenção das
informações aqui presentes, trabalhou-se inicialmente na exposição de conceitos base.
Em seguida, foram apresentados conceitos mais específicos sobre o que se entende por
desempenho no frontend, bem como a forma como os autores teorizam sobre seus pilares.
Os textos pesquisados concentraram-se nos últimos cinco anos, buscando-se manter a
confiabilidade das fontes por meio do uso de artigos, teses, periódicos, documentações
oficiais e sites consolidados. Assim, obtém-se um panorama amplo e atual sobre a temática.
```

## 2.1 ReactJS

React é uma biblioteca JavaScript utilizada para o desenvolvimento de interfaces
de usuário. Seu principal objetivo é facilitar a criação de aplicações web por meio da divisão
da interface em componentes reutilizáveis, tornando o desenvolvimento e a manutenção
do código mais simples (Lopes; Bavaresco, 2023). A biblioteca foi criada por Jordan
Walke, engenheiro do Facebook, em 2011, sendo inicialmente utilizada internamente pela
empresa. Em 2013, foi disponibilizada como projeto de código aberto, permitindo sua
adoção por desenvolvedores e empresas ao redor do mundo (Rocha, 2023). Além disso, um
dos principais conceitos utilizados pelo React é a **Virtual DOM** (Lopes; Bavaresco, 2023).
Para compreender seu funcionamento, é necessário entender primeiro o que é a **DOM
(Document Object Model)**.

```
Segundo Rocha 2023, A DOM é uma representação do documento HTML criada
pelo navegador em forma de árvore de objetos. Quando uma página é carregada, o
navegador interpreta o código HTML e cria essa estrutura em memória. Isso permite que
linguagens como JavaScript acessem e modifiquem os elementos da página dinamicamente.
Para ilustrar melhor, na figura 2.1a temos um código html simples, e em seguida, na figura
2.1b uma representação de como seria sua respectiva árvore.
```

```
(a) Código HTML simples. (b) Árvore de objetos na DOM.
Figura 2.1 – Exemplo de código HTML e sua representação na DOM.
```

Ante o exposto, após essa contextualização, é necessário pontuar que, modificar a
DOM diretamente pode ser custoso em termos de desempenho, pois cada alteração pode
exigir que o navegador recalcule o layout da página e redesenhe os elementos na tela,
processos conhecidos como _reflow_ e _repaint_ (Sundaram, 2025; Mojeed, 2025).

Para reduzir esse custo, o React utiliza a **Virtual DOM** , uma representação
simplificada da DOM real mantida em memória. Quando ocorre uma alteração no estado
de um componente, o React atualiza primeiro a Virtual DOM e compara a nova versão com
a anterior por meio de um processo denominado _diffing_ ou reconciliação. Após identificar
as diferenças, apenas os elementos efetivamente modificados são atualizados na DOM
real, reduzindo a quantidade de manipulações diretas e contribuindo para interfaces mais
rápidas e responsivas (Sundaram, 2025; Mojeed, 2025).

Entretanto, a Virtual DOM também apresenta limitações. Embora reduza o custo
das manipulações diretas da interface, sua utilização introduz uma camada adicional
de processamento ( _overhead_ ), uma vez que o processo de comparação consome recursos
computacionais antes da aplicação das atualizações. Em aplicações complexas, alterações
frequentes de estado podem provocar re-renderizações desnecessárias e aumento no consumo
de memória. Por esse motivo, técnicas de otimização, como memoização e divisão de
componentes, são frequentemente empregadas para minimizar trabalho redundante no
mecanismo de renderização do React (Harris, 2018; Mojeed, 2025).

## 2.1.1 Como a componentização do React funciona

Uma das principais características do React é a componentização. Nesse modelo,
a interface é dividida em componentes independentes e reutilizáveis, cada um responsável
por uma parte específica da aplicação. Componentes encapsulam sua estrutura, lógica
e comportamento, permitindo que sejam reutilizados em diferentes partes do sistema e

facilitando a manutenção do código (Meta Platforms, Inc., 2026a). Essa abordagem modular
permite desenvolver aplicações complexas a partir da composição de componentes menores,
promovendo maior organização, reutilização de código e separação de responsabilidades
(Meta Platforms, Inc., 2026a).

```
Outrossim, segundo a documentação oficial do React (2026), os seus componentes
possuem um ciclo de vida, isto é, passam por diferentes etapas desde sua criação até sua
remoção da interface. Essas etapas incluem a montagem ( mounting ), quando o componente
é inserido na página; a atualização ( updating ), quando ocorre alteração em estados ou
propriedades; e a desmontagem ( unmounting ), quando o componente é removido da
interface (Meta Platforms, Inc., 2026a). A figura 2.2 exibe um resumo visual dos detalhes
expostos acerca desse conceito.
```

```
Figura 2.2 – Ciclo de vida de um componente React
```

## 2.1.1.1 React Hooks

Introduzidos na versão 16.8 do React, os _Hooks_ são funções especiais que permitem
utilizar recursos do React, como estado e efeitos colaterais, em componentes funcionais
(Meta Platforms, Inc., 2026b). Antes de sua introdução, essas funcionalidades estavam
disponíveis principalmente em componentes baseados em classes. Conceitualmente, os
componentes de software podem ser vistos como o estágio seguinte de abstração após
funções, módulos e classes (Spagnoli; Becker, 2003). Nessa perspectiva, um componente
é frequentemente relacionado a objetos, sendo implementado através de classes que en-
capsulam estado e comportamento para realizar funcionalidades específicas (Spagnoli;
Becker, 2003). Tais unidades atuam como abstrações arquiteturais que impõem padrões

de coordenação e regras de projeto sobre os dados internos do elemento (Spagnoli; Becker,
2003).

Entre os _Hooks_ mais utilizados destacam-se ouseState, responsável pelo gerenci-
amento de estado local, cujo ciclo de atualização e renderização pode ser observado na
Figura 2.3, e ouseEffect, utilizado para executar efeitos colaterais — como chamadas
a APIs, manipulação do DOM e gerenciamento de assinaturas — conforme ilustrado na
Figura 2.4.

O uso dessas funções simplifica o desenvolvimento ao reduzir a complexidade do
código e incentivar a reutilização de lógica entre componentes (Lopes; Bavaresco, 2023;
Veeri, 2024). Essa abordagem corrobora a premissa de Spagnoli e Becker (2003), que
estabelece que o uso de componentes identificáveis e autocontidos é um fator essencial
para aumentar a produtividade e a qualidade final do software (Spagnoli; Becker, 2003).

```
Figura 2.3 – Ciclo de atualização de estado com o Hook useState.
```

**Figura 2.4 – Fluxo de execução de efeitos colaterais com o Hook useEffect.**

## 2.1.2 Build de aplicações frontend

O processo de _build_ corresponde à transformação do código-fonte desenvolvido
pelo programador em arquivos otimizados para execução no navegador (Pavić; Brkić,
2021). Durante esse processo, o código escrito em extensões como JSX é transpilado para
JavaScript puro para garantir a compatibilidade com os navegadores (Lopes; Bavaresco,
2023). Complementarmente, conforme karka (2025) e Pavic (2021) abordam, ferramentas
de construção realizam o agrupamento de múltiplos arquivos em pacotes ( _bundles_ ) e a
remoção de código morto ( _tree shaking_ ), garantindo que apenas os módulos essenciais sejam
enviados ao cliente. Essas otimizações reduzem o tempo de carregamento da aplicação e
melhoram seu desempenho em ambiente de produção. Ferramentas de build automatizam
esse processo, permitindo o desenvolvimento de aplicações modernas de maneira mais
eficiente (Pavić; Brkić, 2021; Lopes; Bavaresco, 2023).

## 2.2 Vite

O Vite é uma ferramenta de desenvolvimento e build para aplicações web modernas.
Seu principal objetivo é oferecer um ambiente de desenvolvimento mais rápido e eficiente,
reduzindo o tempo de inicialização do servidor e acelerando a atualização da interface
durante o desenvolvimento. O Vite foi criado por Evan You, também criador do framework
Vue.js, e teve sua primeira versão pública lançada em 2020. A ferramenta surgiu como uma
alternativa aos empacotadores tradicionais, que apresentavam lentidão no desenvolvimento
de aplicações cada vez maiores e mais complexas.

O funcionamento do Vite baseia-se no uso de módulos ECMAScript (ES Modules)
nativos do navegador durante o desenvolvimento. Em vez de empacotar toda a aplicação
antes de executá-la, o Vite carrega apenas os módulos necessários sob demanda. Isso reduz
significativamente o tempo de inicialização do servidor de desenvolvimento.

Além disso, o Vite utiliza o mecanismo de _Hot Module Replacement_ (HMR),
permitindo que alterações no código sejam refletidas na aplicação instantaneamente, sem
a necessidade de recarregar toda a página. Durante o processo de build para produção, o
Vite utiliza ferramentas de empacotamento e otimização para gerar arquivos finais menores
e mais eficientes.

## 2.2.1 Vite e React

A integração entre Vite e React tornou-se amplamente adotada pela comunidade
de desenvolvimento web devido ao ganho de produtividade proporcionado pela combinação
das duas tecnologias. Enquanto o React é responsável pela construção da interface da
aplicação, o Vite atua como ferramenta de desenvolvimento e build.

Em aplicações React, o Vite realiza a compilação de arquivos JSX e TypeScript,
gerencia dependências visando fornecer um ambiente de desenvolvimento rápido com
atualização instantânea da interface. Essa integração, busca, reduzir o tempo de espera
durante o desenvolvimento e melhora a experiência do desenvolvedor.

A popularidade dessa combinação cresceu rapidamente devido ao desempenho
superior do Vite em relação a ferramentas tradicionais de build, tornando-se uma das
configurações mais utilizadas no desenvolvimento de aplicações React modernas.

## 2.3 Persistência de dados no frontend

A persistência de dados no frontend consiste no armazenamento de informações
no navegador para reutilização posterior, reduzindo a latência e a dependência de novas
requisições ao servidor. Essa técnica é fundamental para a experiência do usuário, pois
permite que a aplicação responda de forma ágil mesmo em cenários de conectividade
limitada (Souza Alves, 2025).

A persistência pode ser classificada como temporária, mantendo os dados apenas
durante a sessão ativa, ou permanente, onde as informações permanecem armazenadas
até serem removidas manualmente ou expirarem (Karka, 2025). Entre as técnicas mais
utilizadas, destacam-se:

- **Cookies:** Pequenos volumes de dados frequentemente usados para autenticação e
  gerenciamento de sessões.
- **Web Storage (Local e Session Storage):** APIs que permitem armazenar pares
  chave-valor. Enquanto o _Local Storage_ é persistente entre fechamentos do navegador,
  o _Session Storage_ limpa os dados ao encerrar a aba.
- **IndexedDB:** Banco de dados NoSQL orientado a objetos, ideal para grandes volumes
  de dados estruturados e aplicações offline complexas.
- **Cache do Navegador:** Responsável por armazenar recursos estáticos (scripts,
  imagens, CSS) para acelerar carregamentos recorrentes.

No âmbito da metodologia **POUPI** , esses conceitos são operacionalizados na
**Esfera 3 (Cache)** através da biblioteca **TanStack Query** (Lopes; Bavaresco, 2023).
Ela utiliza o _LocalStorage_ para preservar o estado assíncrono entre sessões e implementa
o modelo _Stale-While-Revalidate_ , garantindo que o usuário visualize dados em cache
instantaneamente enquanto a atualização ocorre em segundo plano (Veeri, 2024). Além

```
disso, a persistência é reforçada pela configuração de Service Workers via PWA, aumentando
a resiliência da interface contra instabilidades de rede (Developers, 2025).
```

## 2.4 Desempenho Front-end

O desempenho front-end refere-se à eficiência com que uma aplicação web é
carregada, renderizada e responde às interações do usuário no navegador (Pavić; Brkić,
2021; Souza Alves, 2025). Em arquiteturas modernas como as _Single Page Applications_
(SPAs), a maior parte do processamento acontece diretamente no computador ou celular
do usuário, o que exige um código JavaScript bem organizado para não sobrecarregar o
aparelho (Pavić; Brkić, 2021; Veeri, 2024).

## 2.4.1 Desempenho Front-end x Experiência de Usuários

```
A performance técnica impacta diretamente a retenção e satisfação do usuário;
estudos indicam que atrasos de carregamento entre um e sete segundos elevam a probabili-
dade de abandono em 113% (Souza Alves, 2025). Reforçando essa visão, Alves (Souza Alves,
2025) afirma que “a performance de aplicações web não é apenas um fator técnico, mas
um diferencial estratégico que impacta diretamente a experiência do usuário (UX) e o
posicionamento nos mecanismos de busca (SEO)”. Sobre a percepção do usuário quanto à
fluidez da interface, Pavić e Brkić detalham:
```

```
"Web application performance is vital for its users to have a good
experience. It refers to how quickly an application loads and renders
in a web browser, and how well it responds to user requests. Good
performance may not be obvious to most web application users, but
they will immediately recognize a sluggish web application"(Pavić;
Brkić, 2021, p. 1)
```

```
Dessa forma, evidencia-se que o desempenho técnico transcende a escrita de um
código eficiente, atuando como o alicerce para a percepção de confiabilidade e qualidade
do software (Souza Alves, 2025). Enquanto interfaces fluidas elevam os índices de retenção
e garantem uma navegação satisfatória, o comportamento sluggish (lento) atua como
um impeditivo direto à usabilidade, justificando a adoção de estratégias de otimização
rigorosas para manter a competitividade no ecossistema digital.
```

## 2.5 Noções de SO no Desenvolvimento Front-end

```
O navegador funciona como um intermediário que solicita recursos ao Sistema
Operacional (SO) para dar vida às páginas web (Learn, 2026). O processamento de textos,
estilos e scripts ocorre em uma "fila de tarefas"chamada linha de execução principal ( main
```

_thread_ ), que atua como o cérebro da aplicação no navegador (Veeri, 2024). Se o programador
envia uma tarefa muito pesada de uma só vez, esse "cérebro"fica sobrecarregado e para
de responder a outros comandos, como cliques ou rolagens, criando travamentos visuais
conhecidos como _jank_ (Learn, 2026). Para evitar que a interface "congele", é necessário
adotar o processamento assíncrono, permitindo que o navegador realize cálculos em segundo
plano sem travar a interação do usuário (Veeri, 2024).

## 2.6 Lighthouse e Avaliação de Desempenho Front-end

```
O Google Lighthouse é uma ferramenta automatizada de código aberto projetada
para elevar a qualidade técnica de páginas web através de auditorias de performance,
acessibilidade e SEO. Ele funciona como um "diagnóstico médico"que simula o carregamento
da página para identificar gargalos que prejudicam a navegação do usuário (Developers,
2025).
```

## 2.6.1 Funcionamento e Guia de Medição com Lighthouse

```
A ferramenta estabelece uma linha de base técnica ao realizar testes em ambientes
controlados, permitindo que desenvolvedores comparem o impacto de cada melhoria
realizada no código. Para garantir resultados que incluam o "pior cenário", o Lighthouse
simula dispositivos móveis de entrada e conexões de rede limitadas (Learn, 2026). Além
das auditorias padrão, a ferramenta possibilita a análise de fluxos de usuário ( user flows ),
permitindo medir o desempenho não apenas no carregamento inicial, mas durante interações
reais como rolagens e cliques em menus. É vital diferenciar que esses testes geram dados de
laboratório , que servem para identificar erros de forma consistente, enquanto os dados de
campo refletem a experiência variada de usuários reais ao redor do mundo (Kenny, 2021).
```

## 2.6.2 Detalhamento das Métricas de Performance

```
A pontuação de desempenho do Lighthouse é uma média ponderada de métricas
que traduzem a percepção humana de velocidade e estabilidade (Developers, 2019). No
Lighthouse 10, as principais métricas avaliadas são:
```

- **Largest Contentful Paint (LCP):** Mede quanto tempo leva para que o maior
  elemento visual (como uma foto de destaque ou um título principal) apareça na tela
  (Developers, 2019). O ideal é que ocorra em até 2,5 segundos para que o usuário
  sinta que o site carregou rapidamente (Developers, 2019).
- **First Contentful Paint (FCP):** Marca o exato momento em que o primeiro pedaço
  de conteúdo (texto ou imagem) é desenhado, sinalizando ao usuário que o site está
  respondendo (Learn, 2026).

- **Total Blocking Time (TBT):** Quantifica o tempo em que a página fica "congelada"e
  incapaz de responder a cliques ou comandos durante o carregamento (Developers,
  2019). Com peso de 30% na nota final, um TBT baixo é essencial para uma interface
  que parece leve e fluida (Developers, 2019).
- **Cumulative Layout Shift (CLS):** Avalia a estabilidade visual, medindo o quanto
  os elementos "pulam"de lugar inesperadamente enquanto a página carrega (Learn,
  2026). Um valor abaixo de 0,1 garante que o usuário não clique em algo errado por
  acidente (Learn, 2026).
- **Speed Index (SI):** Indica quão rápido o conteúdo visual é preenchido durante o
  carregamento total, focando na progressão visual da tela (Developers, 2019).

O Lighthouse organiza esses resultados em uma escala de cores: o vermelho (0-49)
indica problemas críticos, o laranja (50-89), apesar de ser uma boa pontuação,aponta
necessidade de melhorias e o verde (90-100) representa uma aplicação saudável e otimizada
(Developers, 2019).

## 2.7 Principais Técnicas de Otimização de Front-end

A literatura técnica estabelece que a otimização de interfaces não deve ser vista
como uma tarefa isolada, mas como um processo de múltiplas camadas que opera sobre
rede, processamento e renderização (Karka, 2025; Pavić; Brkić, 2021). Com base nessa visão
e nos experimentos práticos analisados, as principais técnicas identificadas nos trabalhos
de Pavić e Brkić (2021), Karka (2025), Rocha (2023), Lopes e Bavaresco (2023) e Veeri
(2024) são:

- **Otimização de Build e Pacotes (Payload):**
  **- Bundling e Minificação:** Agrupamento de arquivos e remoção de caracteres
  desnecessários para reduzir requisições e o tamanho dos arquivos (Rocha, 2023;
  Karka, 2025).
  **- Tree Shaking:** Eliminação de códigos que foram escritos, mas não são efetiva-
  mente usados no sistema final (Pavić; Brkić, 2021; Lopes; Bavaresco, 2023).
  **- Compressão de Texto:** Uso de tecnologias (como Gzip) para encolher os
  arquivos durante o transporte pela rede (Lopes; Bavaresco, 2023; Karka, 2025).
- **Otimização de Imagens e Mídia:**

**- Formatos de Próxima Geração:** Uso de WebP ou AVIF, que mantêm a
qualidade da foto sendo muito mais leves que o antigo JPEG (Pavić; Brkić,
2021; Karka, 2025).
**- Imagens Responsivas e Lazy Loading:** Entrega de imagens no tamanho
certo para cada tela e carregamento apenas quando aparecem na visão do
usuário (Lopes; Bavaresco, 2023; Rocha, 2023).

- \*\*Eficiência de Renderização no React:
- Memoização:** Uso de ferramentas comouseMemoeuseCallbackpara o compu-
  tador evitar refazer cálculos que já foram feitos (Veeri, 2024; Lopes; Bavaresco,
  2023).
  **- Uso de Chaves Estáveis:** Identificadores únicos ( _keys_ ) em listas para que o
  React atualize apenas o item que mudou, economizando processamento (Rocha,
  2023; Veeri, 2024).
  **- Virtualização de Listas:\*\* Técnica para processar apenas os itens que o usuário
  está vendo no momento, essencial para listas muito grandes (Veeri, 2024; Rocha,
  2023).
- \*\*Estratégias de Entrega e Rede:
- Cache e Service Workers:** Armazenamento de dados no aparelho do usuário
  para que o site abra instantaneamente em visitas futuras (Karka, 2025; Lopes;
  Bavaresco, 2023).
  **- Code-Splitting:\*\* Divisão do sistema em pedaços menores, baixando apenas a
  parte que o usuário precisa usar naquele instante (Pavić; Brkić, 2021; Rocha,
  2023).

Como resume Alves (2025), “a performance de aplicações web não é apenas um
fator técnico, mas um diferencial estratégico que impacta diretamente a experiência do
usuário”. Portanto, a aplicação conjunta dessas técnicas é o que garante resultados de alta
performance e satisfação do usuário final.

## 2.7.1 Categorias de Otimização Front-end

A organização das técnicas de otimização em categorias técnicas é fundamental
para uma governança de performance eficiente. Karka (2025) propõe que a otimização
deve ser tratada de forma holística, operando em camadas interconectadas (Karka, 2025):

- **Otimização de Rede:** Focada na redução do número e tamanho das requisições
  HTTP via _bundling_ , minificação, compressão e uso de CDNs (Karka, 2025).

- **Otimização de Renderização:** Visa eliminar recursos que bloqueiam a renderiza-
  ção, priorizando o caminho crítico ( _critical path_ ) e adiando scripts não essenciais
  (Karka, 2025).
- **Gerenciamento de Recursos e Cache:** Envolve a priorização de ativos críticos
  e a implementação de estratégias de persistência para evitar downloads repetidos
  (Karka, 2025).

Por outro lado, Pavić e Brkić (2021) focam na modularização do desenvolvimento,
agrupando as intervenções em quatro pilares práticos (Pavić; Brkić, 2021):

- **Processamento de Código:** Abrange o empacotamento ( _bundling_ ), a divisão de
  código ( _code splitting_ ) e a eliminação de código morto ( _tree shaking_ ) (Pavić; Brkić,
  2021).
- **Otimização de Imagens:** Focada no uso de formatos modernos (WebP, AVIF),
  dimensionamento correto e carregamento tardio ( _lazy loading_ ) (Pavić; Brkić, 2021).
- **Métodos de Renderização:** Debate o uso de renderização no lado do servidor
  (SSR), estática ou no cliente (CSR) conforme a necessidade de SEO e performance
  (Pavić; Brkić, 2021).
- **Uso de Frameworks:** Avalia como ferramentas como Next.js e Gatsby automatizam
  técnicas de otimização de forma nativa (Pavić; Brkić, 2021).

A análise dessas categorias evidencia que, embora os autores utilizem nomencla-
turas distintas, os objetivos convergem para a eficiência de CPU, rede e entrega. Essa
base teórica fundamenta a estruturação das esferas operacionais que serão detalhadas no
desenvolvimento deste trabalho.

## 3 DESENVOLVIMENTO

```
Tencionando alcançar os objetivos propostos, foi realizada uma pesquisa aplicada
e experimental, baseada na implementação de um estudo de caso no qual são comparados
diferentes cenários de uma aplicação, com e sem as diretrizes da POUPI. A análise dos
resultados será realizada por meio de métricas obtidas com ferramentas para auditoria de
performance, como o Lighthouse, permitindo validar a efetividade das estratégias adotadas.
```

## 3.1 Análise dos Trabalhos Relacionados e Síntese das Técnicas

```
A análise dos trabalhos selecionados durante a revisão bibliográfica permitiu
identificar padrões recorrentes nas estratégias de otimização de desempenho frontend.
Embora os autores utilizem nomenclaturas distintas e enfoquem diferentes contextos de
aplicação, observou-se convergência em três grandes áreas de atuação: otimização do
carregamento inicial, eficiência de renderização e gerenciamento de dados em rede.
```

Os estudos de Pavić e Brkić (2021) enfatizam técnicas voltadas ao empacotamento
de código, divisão de pacotes ( _code splitting_ ) e otimização de imagens, evidenciando o
impacto dessas estratégias sobre métricas como FCP e LCP. De forma semelhante, Karka
(2025) organiza as otimizações em camadas relacionadas à rede, renderização e cache,
reforçando a necessidade de uma abordagem multidimensional para desempenho frontend.

```
No contexto do React, Lopes e Bavaresco (2023), Veeri (2024) e Rocha (2023)
destacam técnicas voltadas à redução de re-renderizações desnecessárias, incluindo me-
moização, virtualização de listas e segmentação de estados. Esses trabalhos apontam que
aplicações orientadas a dados frequentemente apresentam gargalos relacionados ao uso
excessivo da CPU e ao bloqueio da main thread.
```

```
Por fim, diversos autores ressaltam a importância de mecanismos de persistência
e cache, tais como Local Storage , Service Workers e estratégias de revalidação de dados,
reduzindo a latência percebida e a dependência da rede.
```

```
A partir dessa síntese, as técnicas identificadas foram agrupadas segundo o tipo de
problema de desempenho que buscam resolver, originando as três esferas da metodologia
POUPI: Build e Carga (Esfera 1), Renderização (Esfera 2) e Cache (Esfera 3). De forma
resumida, a Tabela 3.1 sinteteza a origem dos conceitos usados para a criação das esferas
do trabalho, o que demonstra que muitos autores contribuiram em sumultâneo com cada
parte dela.
```

```
Tabela 3.1 – Mapeamento entre trabalhos relacionados e esferas da metodologia POUPI.
Autor Técnicas abordadas Esfera POUPI
Pavić e Brkić
(2021)
```

```
Code splitting, otimização de
imagens e build
```

```
Esfera 1
```

```
Karka (2025) Cache, rede e renderização Esferas 1, 2 e 3
Rocha (2023) React, Virtual DOM e otimi-
zações
```

```
Esfera 2
Veeri (2024) Memoização e virtualização Esfera 2
Lopes e Bavaresco
(2023)
```

```
Build e React Esferas 1 e 2
```

## 3.2 Concepção do Instrumento de Diagnóstico POUPI

A construção do instrumento de diagnóstico da metodologia POUPI foi realizada
a partir da síntese dos trabalhos analisados durante a revisão bibliográfica. Inicialmente,
foram identificados os principais gargalos de desempenho reportados na literatura, bem
como as técnicas de otimização mais frequentemente empregadas para sua mitigação.

A análise revelou que os problemas descritos pelos autores concentram-se, predo-
minantemente, em três grandes grupos: carregamento excessivo de recursos, processamento
excessivo da interface e ineficiências relacionadas ao fluxo de dados e à rede. Esses gru-
pos deram origem às dimensões D1 (Build e Carga), D2 (Renderização) e D3 (Cache),
respectivamente.

As questões presentes em cada dimensão foram formuladas a partir da recorrência
desses problemas nos estudos analisados. Trabalhos como os de Pavić e Brkić (2021) e
Karka (2025) destacam o impacto do tamanho do _bundle_ , da otimização de mídias e da
divisão de código sobre métricas como FCP e LCP, motivando a criação das questões D1.1
e D1.2. De forma semelhante, estudos sobre React e desempenho frontend apontam que
listas extensas, estados compartilhados e re-renderizações desnecessárias estão associados
ao aumento do uso de CPU e do _Total Blocking Time_ , fundamentando as questões D2.1 e
D2.2.

Por fim, trabalhos relacionados à persistência de dados e otimização de rede eviden-
ciam os benefícios do uso de cache local, revalidação de dados e mecanismos de resiliência
offline, servindo de base para a elaboração das questões D3.1 e D3.2. Complementarmente,
a dimensão D4 foi incorporada para associar os sintomas arquiteturais observados pelo
desenvolvedor às métricas objetivas produzidas pelo Google Lighthouse.

Por conseguinte, observa-se que cada dimensão do instrumento foi construída a
partir de problemas recorrentes reportados na literatura especializada em desempenho
frontend. Dessa forma, o instrumento não foi elaborado de maneira arbitrária, mas fun-

damentado em evidências previamente discutidas por diferentes autores. A Tabela 3.2
apresenta uma síntese da relação entre cada dimensão da POUPI, o problema investigado
e sua respectiva base teórica.

```
Tabela 3.2 – Fundamentação teórica das dimensões do instrumento POUPI.
Dimensão Problema investigado Base teórica
D1.1 Uso intensivo de mídias e ativos estáti-
cos
```

```
Pavić e Brkić (2021); Karka (2025)
D1.2 Bundles excessivamente grandes Rocha (2023); Pavić e Brkić (2021)
D2.1 Renderização de grandes volumes de
dados
```

```
Veeri (2024); Rocha (2023)
```

```
D2.2 Acoplamento de estados e re-
renderizações
```

```
Lopes e Bavaresco (2023); Veeri (2024)
D3.1 Requisições repetitivas e cache Karka (2025); Lopes e Bavaresco
(2023)
D3.2 Resiliência offline e persistência Karka (2025); Documentação PWA
D4 Métricas de desempenho observáveis Google Lighthouse
```

Conforme sintetizado na Tabela 3.2, as dimensões da POUPI abrangem desde
aspectos arquiteturais da aplicação até indicadores empíricos de desempenho. Essa inte-
gração entre características estruturais do sistema e métricas observáveis permite que o
método direcione intervenções de forma mais objetiva e alinhada aos gargalos identificados.

Dessa forma, o instrumento POUPI foi concebido como um mecanismo híbrido,
combinando características arquiteturais da aplicação com indicadores empíricos de desem-
penho, permitindo direcionar a seleção das técnicas de otimização mais adequadas para
cada contexto.

## 3.3 Pilares da Metodologia POUPI e Métricas Associadas

Em primeiro lugar, faz-se necessário caracterizar o método de tomada de decisão
que foi desenvolvido. Diante disso, A metodologia POUPI é baseada em otimizações
que seguem três esferas principais de atuação no frontend. Cada uma dessas esferas visa
otimizar um aspecto do ciclo de vida da interface e é monitorada por métricas específicas
do Google Lighthouse:

1. **Gerenciamento de Recursos no Carregamento (Esfera 1 – Build e Carga):**
   Focada em reduzir o volume de recursos transferidos e acelerar o carregamento inicial
   da aplicação.
   - **_Métricas do Lighthouse:_** _First Contentful Paint_ (FCP), _Largest Contentful_
     _Paint_ (LCP) e _Speed Index_ (SI).

2. **Renderização Eficiente (Esfera 2):** Focada em reduzir re-renderizações desneces-
   sárias e o processamento executado na _main thread_ do navegador.
   - **_Métricas do Lighthouse:_** _Total Blocking Time_ (TBT), _Cumulative Layout_
     _Shift_ (CLS) e, indiretamente, _Largest Contentful Paint_ (LCP).
3. **Uso e Gerenciamento de Cache (Esfera 3):** Focada em reduzir requisições
   redundantes à rede e aumentar o reaproveitamento de dados e recursos.
   - **_Métricas do Lighthouse:_** _Performance Score_ , além de impactos indiretos
     em métricas como FCP, LCP e Speed Index.

## 3.4 Técnicas e Ferramentas de Intervenção

Para garantir a viabilidade da pesquisa e delimitar o escopo do trabalho, foram
selecionadas técnicas específicas para cada uma das três esferas da metodologia POUPI.
As técnicas descritas nesta seção correspondem às intervenções efetivamente aplicadas
durante os estudos de caso, permitindo analisar seus impactos individuais e cumulativos
sobre as métricas de desempenho.

## 3.4.1 Esfera 1: Build e Carregamento

1. Implementação de _Code Splitting_ por meio deReact.lazyeSuspense, permitindo
   o carregamento sob demanda das rotas da aplicação.
   **Código 3.1 – Exemplo de Code Splitting com React.lazy**
   1 **const** Dashboard = lazy(() => **import** ("./Dashboard"));
   2
   3 <Suspense fallback={<Loading />}> <Dashboard /> </Suspense>
2. Aplicação de _Lazy Loading_ em componentes e páginas, evitando o carregamento
   antecipado de recursos não utilizados no primeiro acesso.
   **Código 3.2 – Lazy loading nativo de imagens**
   1 loading="lazy"
   2 alt="Banner" />
3. Remoção de _barrel exports_ , reduzindo importações indiretas e melhorando o processo
   de empacotamento.
4. Uso de importações dinâmicas para serviços e componentes de maior custo computa-
   cional.

```
Código 3.3 – Importação dinâmica
1 const module = await import ("./service");
```

5. Extração de CSS crítico utilizando ferramentas integradas ao _Vite_ , reduzindo blo-
   queios de renderização durante o carregamento inicial.

## 3.4.2 Esfera 2: Renderização Eficiente

1. Utilização deuseMemopara memorização de cálculos computacionalmente custosos.
   **Código 3.4 – Exemplo de uso do useMemo**
   1 **const** filteredData = useMemo(
   2 () => filterData(data),
   3 [data]
   4 );
2. Emprego deuseCallbackpara evitar a recriação desnecessária de funções repassadas
   como propriedades.
   **Código 3.5 – Exemplo de uso do useCallback**
   1 **const** handleClick = useCallback(() => {
   2 saveData();
   3 }, []);
3. Aplicação deReact.memoem componentes suscetíveis a re-renderizações frequentes.
   **Código 3.6 – Componente memoizado**
   1 **export** default React.memo(Table);
4. Virtualização de listas extensas, renderizando apenas os elementos visíveis na área
   de visualização.
   **Código 3.7 – Virtualização com react-window**
   3 itemCount={1000}
   4 itemSize={35}
   5 height={300}
   6 />
5. Segmentação e descentralização de estados compartilhados, reduzindo atualizações
   em cascata e isolando responsabilidades entre componentes.

6. Implementação de renderização sob demanda ( _Deferred Rendering_ ) para componentes
   secundários.

A Figura 3.1 apresenta um fluxo de decisão simplificado para auxiliar na escolha
entre osHooks useMemoeuseCallback, enquanto a Figura 3.2 ilustra o ciclo de funcio-
namento do processo de memoização realizado pelo React e a Figura 3.3 mostra como
funcioon o usecallbback.

```
Figura 3.1 – Fluxo de decisão para utilização do useMemo e useCallback.
```

```
Figura 3.2 – Representação visual do ciclo de funcionamento do useMemo.
```

```
Figura 3.3 – Representação visual do ciclo de funcionamento do useCallback.
```

## 3.4.3 Esfera 3: Gerenciamento de Cache e Dados

1. Implementação da biblioteca _TanStack Query_ para gerenciamento do estado assín-
   crono e cache de requisições.
   **Código 3.8 – Consulta utilizando TanStack Query**
   1 **const** { data } = useQuery({
   2 queryKey: [’users’],
   3 queryFn: fetchUsers
   4 });
2. Persistência do cache local por meio do _localStorage_ , permitindo a reutilização de
   dados entre sessões.
   **Código 3.9 – Persistência no localStorage**
   1 localStorage.setItem(
   2 "user",
   3 JSON.stringify(data)
   4 );
3. Emprego de estratégias inspiradas no modelo _Stale-While-Revalidate_ , exibindo dados
   armazenados enquanto novas informações são obtidas em segundo plano.
4. Configuração de _Service Workers_ utilizando _vite-plugin-pwa_ , adicionando suporte
   offline e maior resiliência a falhas de rede.
   **Código 3.10 – Registro do plugin PWA no Vite**

```
1 VitePWA({
2 registerType: "autoUpdate"
3 })
```

5. Armazenamento local de recursos estáticos e ativos críticos, reduzindo a dependência
   de novas requisições ao servidor.

Por fim, com o objetivo de consolidar visualmente os elementos que compõem
a metodologia proposta, foi elaborado um mapa conceitual da POUPI, apresentado no
Apêndice B. O artefato sintetiza as relações entre esferas de atuação, técnicas de otimização,
métricas de desempenho e estudos de caso empregados na validação do método.

## 3.5 Instrumento de Caracterização Técnica e Árvore de Decisão

Como etapa antecedente à aplicação prática das diretrizes da metodologia POUPI,
faz-se necessária a modelagem de um instrumento de diagnóstico. Este instrumento visa
mapear a natureza arquitetural da aplicação sob análise e correlacioná-la aos sintomas de
degradação de performance identificados pelas ferramentas de auditoria.

O preenchimento deste formulário deve ser feito pelo desenvolvedor responsável
por incrementar as mudanças. O instrumento permite agrupar o sistema em perfis de
sensibilidade técnica, direcionando os esforços de otimização de forma mais específica.
O instrumento divide-se em quatro dimensões operacionais, estruturadas por meio de
perguntas objetivas mepeadas no Apendice Apêndice A.

## 3.6 Matriz de Agrupamento e Definição de Tradeoffs

A partir das respostas coletadas, a aplicação é categorizada em perfis de sensibili-
dade dominantes. A Tabela 3.3 estabelece a correlação entre os grupos de classificação,
seus respectivos sintomas no Lighthouse e os _tradeoffs_ de engenharia de software envolvidos
na priorização de cada esfera da POUPI.

A aplicação prática desta árvore de decisão permite que o desenvolvedor isole
as variáveis do experimento, aplicando as diretrizes da metodologia POUPI de forma
direcionada ao gargalo real da aplicação detectado no Cenário A. Além de identificar os
problemas de desempenho, o instrumento POUPI também auxilia na definição da ordem
de priorização das otimizações. Recomenda-se que as intervenções sejam iniciadas pela
esfera que apresentar a maior pontuação no diagnóstico, uma vez que ela representa a área
com maior potencial de impacto no desempenho da aplicação. Em situações de empate,

**Tabela 3.3 –Matriz de Agrupamento, Diagnóstico e Direcionamento Metodológico POUPI
Grupo /
Perfil**

```
Gatilhos do
Formulário
```

```
Métricas do
Lighthouse
(D4)
```

```
Esfera Alvo e Técnicas
POUPI
```

```
Trade-off
```

```
Grupo 1:
Content-
Centric
(Landing
Pages, E-
commerces e
MVPs)
```

```
Respostas “Sim”
em D1.1 (mí-
dias pesadas)
e/ou D1.2 (bun-
dle inflado).
```

```
LCP (Maior
Elemento
Renderizado),
FCP (Pri-
meira Pintura
de Conteúdo),
TBT (Blo-
queio da Main
Thread ) e CLS
(Mudança de
layout acumu-
lada).
```

```
Esfera 1 – Build e Carga
Foco: Minimizar o volume
de recursos enviados no car-
regamento inicial.
Técnicas:
D1.1: Compressão de ima-
gens (WebP/AVIF) / D1.1:
Extração de CSS crítico
/ D1.2: Code Splitting /
D1.2: Importações dinâmi-
cas / D1.2: Lazy Loading de
componentes e rotas.
```

```
Maior complexi-
dade no processo
de build e pos-
sibilidade de
introdução de
deslocamentos
visuais ( CLS )
e dependências
assíncronas.
```

```
Grupo
2: Data-
Heavy
(Sistemas
de Gestão,
Dashboards e
ERPs)
```

```
Respostas “Sim”
em D2.1 (da-
dos massivos)
e/ou D2.2
(acoplamento de
estado).
```

```
TBT (Blo-
queio da
Main Thread ),
LCP (Maior
Elemento
Renderizado),
Speed In-
dex e CLS
(Mudança de
layout acumu-
lada).
```

```
Esfera 2 – Renderização
Foco: Reduzir o uso
excessivo de CPU e
re-renderizações desnecessá-
rias.
Técnicas:
D2.1: Renderização sob de-
manda ( Deferred Rende-
ring ) / D2.1: Virtualização
de listas / D2.1: Memoriza-
ção com useMemo , memo e
useCallback / D2.2: Descen-
tralização e segmentação de
estados.
```

```
Maior complexi-
dade de implemen-
tação, necessidade
de controle das
dependências
de memoização
e aumento da
dificuldade de
manutenção.
```

```
Grupo 3:
Transacio-
nais
(Aplicações
SaaS e APIs
Complexas)
```

```
Respostas “Sim”
em D3.1 (rotas
repetitivas) e/ou
D3.2 (resiliênci-
a/offline).
```

```
Performance
Score, FCP,
LCP e latên-
cia de rede
percebida.
```

```
Esfera 3 – Cache
Foco: Otimizar o fluxo de
dados e aumentar a resiliên-
cia da aplicação.
Técnicas:
D3.1: Estratégia Stale-
While-Revalidate / D3.1:
Cache local com TanStack
Query ou LocalStorage /
D3.2: Service Workers para
aplicações PWA.
```

```
Maior com-
plexidade no
gerenciamento
da invalidação de
cache e risco de
exibição tempo-
rária de dados
desatualizados.
```

utiliza-se a hierarquia de priorização definida pelo método: **Esfera 1 (Build e Carga)**
possui maior prioridade, seguida pela **Esfera 2 (Renderização)** e, por fim, pela **Esfera
3 (Cache)**. Essa ordem foi estabelecida considerando que otimizações relacionadas ao
carregamento inicial tendem a produzir benefícios perceptíveis para todos os usuários da
aplicação, enquanto otimizações de renderização dependem mais do fluxo de interação e
estratégias de cache geralmente apresentam ganhos mais específicos ou complementares.

## 4 RESULTADOS

## 4.1 Análise da Aplicação de Pequeno Porte (Kitintrega)

```
O sistema Kitintrega, destinado ao gerenciamento de solicitações e entrega de kits
de corrida, foi escolhido como primeiro objeto de estudo para verificar preliminarmente
a eficácia da POUPI. Trata-se de uma aplicação de pequeno porte, caracterizada por
um fluxo linear de dados, um número reduzido de rotas e um volume controlado de
componentes, sendo adequada para a validação inicial da metodologia em cenários de
baixo esforço computacional.
```

```
Cabe destacar que o sistema entrou em produção em dezembro de 2025 e foi desen-
volvido, desde sua concepção, seguindo boas práticas de otimização frontend. Entretanto,
ao longo do processo de desenvolvimento e manutenção, sua pontuação de desempenho
sofreu degradação em decorrência da ausência de mecanismos de governança e controle
contínuo desse requisito não funcional.
```

```
Esse cenário pode ser explicado pelo fato de o software ter sido desenvolvido e
mantido por uma equipe multidisciplinar e independente. Assim, aquilo que inicialmente
era conduzido de forma coordenada e controlada acabou perdendo padronização ao longo
do tempo. Tal situação reforça a importância da governança em aplicações frontend,
especialmente em ambientes colaborativos, nos quais múltiplos desenvolvedores realizam
alterações contínuas no sistema. Os resultados da análise inicial indicam que a aplicação
apresenta, de modo geral, uma boa pontuação de desempenho. No entanto, ainda existem
oportunidades de melhoria. Dessa forma, busca-se verificar se a POUPI é capaz não apenas
de recuperar aplicações com problemas críticos de desempenho, mas também de aprimorar
sistemas que já apresentam métricas satisfatórias, conduzindo-os a níveis de excelência em
experiência do usuário.
```

## 4.1.1 Aplicação do Instrumento de Mapeamento e Diagnóstico

```
O diagnóstico inicial do Kitintrega foi dividido em duas etapas complementares: a
aplicação do instrumento de mapeamento do método POUPI (Apêndice A) e uma análise
técnica de desempenho utilizando a ferramenta Lighthouse.
```

## 4.1.1.1 Diagnóstico Qualitativo: Mapeamento POUPI

```
A aplicação do formulário de diagnóstico permitiu identificar os principais gargalos
sob a ótica do desenvolvimento. Como ilustrado na Figura 4.1, a dimensão D3 (Cache)
obteve a pontuação mais alta (2 pontos), indicando que o gerenciamento e a reutilização de
```

dados são os pontos críticos. As dimensões **D1 (Build e Carga)** e **D2 (Renderização)**
pontuaram um ponto cada, sinalizando também necessidades de melhoria no carregamento
inicial e na renderização da interface.

```
Figura 4.1 – Pontuação obtida no formulário de diagnóstico do Kitintrega.
```

## 4.1.1.2 Diagnóstico Técnico: Análise com Lighthouse

Para quantificar os impactos desses gargalos, analisamos a página inicial em dois
ambientes: desenvolvimento e produção. A Tabela 4.1 resume os resultados coletados antes
da aplicação das otimizações.

```
Tabela 4.1 – Comparação de métricas (Lighthouse) pré-otimização.
Métrica Desenvolvimento Produção
Performance 63 59
FCP (First Contentful Paint) 3,4 s 6,4 s
LCP (Largest Contentful Paint) 4,8 s 27,6 s
TBT (Total Blocking Time) 480 ms 20 ms
CLS (Cumulative Layout Shift) 0 0,003
```

A análise técnica revela um desempenho moderado em ambos os ambientes,
mas com disparidades preocupantes em produção. Embora a estabilidade visual (CLS)
seja excelente, os tempos de carregamento (FCP e LCP) estão muito acima dos limites
recomendados pelo Google (2,5 s para LCP). O valor de 27,6 s no LCP de produção
destaca um gargalo crítico na entrega dos recursos principais. Em contraste, o ambiente de
desenvolvimento apresenta um TBT elevado (480 ms), o que sugere tarefas que bloqueiam
a interface durante o processo de build ou execução local.

## 4.1.1.3 Direcionamento Metodológico

Com base na matriz do POUPI, priorizamos as intervenções conforme a criticidade
identificada:

- **Prioridade 1: Dimensão D3 (Cache):** Foco em persistência e reutilização de
  dados para reduzir requisições redundantes ao servidor, utilizando estratégias de
  cache local e gerenciamento de estado assíncrono.
- **Prioridade 2: Dimensão D1 (Build e Carga):** Mitigação dos altos tempos de
  FCP e LCP via compressão de imagens, css e outros arquivos, _lazy loading_ e _code_
  _splitting_ para reduzir o peso inicial do pacote.
- **Prioridade 3: Dimensão D2 (Renderização):** Otimização da responsividade
  através da memoização de componentes e revisão do fluxo de renderização, visando
  reduzir o processamento excessivo no cliente.

O Kitintrega serve, portanto, como um estudo de caso ideal para validar o
POUPI. Ele demonstra como, mesmo em aplicações menores, a ausência de governança de
performance leva à degradação gradual da experiência do usuário, reforçando a importância
de um processo de otimização contínua.

## 4.1.2 Impacto no Gerenciamento de Cache (Esfera 3)

Conforme o diagnóstico do método POUPI, a dimensão D3 (Navegação e Persis-
tência em Rede) indicou a necessidade de otimizar o fluxo de dados e fortalecer a resiliência
da aplicação em cenários de instabilidade de rede. Alinhado à matriz de direcionamento,
as intervenções focaram em reduzir a latência percebida e evitar requisições redundantes
ao servidor:

1. **Persistência de Cache (D3.1):** Implementou-se a sincronização do estado assín-
   crono com o armazenamento local utilizando@tanstack/query-persist-client-
   core(pois a aplicação já contava com armazenamento em cache das requisições).
   A configuração dolocalStoragePersisterno _QueryClient_ permite que os dados
   sejam preservados entre sessões, eliminando o tempo de espera em carregamentos
   recorrentes.
2. **Resiliência Offline e PWA (D3.2):** Adotou-se ovite-plugin-pwapara a con-
   figuração de um _Service Worker_ , permitindo o funcionamento da aplicação sem
   conectividade ativa. O ajuste do limite de cache para 5MB garantiu que ativos

```
críticos e arquivos de mídia pesados fossem servidos localmente, mitigando falhas de
carregamento em redes instáveis.
```

```
Essas otimizações não apenas buscaram diminuir o tráfego de rede, mas transformar
a performance em um diferencial ao garantir que a interface permaneça funcional e
responsiva mesmo offline.
```

## 4.1.2.1 Ambiente de desenvolvimento

```
Após a implementação dessas mudanças anteriormente citadas, os ganhos na
pontuação geral foram graduais, conforme ilustrado na Figura 4.2.
```

```
Figura 4.2 –Resultado da auditoria Lighthouse após otimizações de Cache e PWA. (Modo
Dev)
```

As métricas de _Largest Contentful Paint_ (LCP) e _First Contentful Paint_ (FCP)
mantiveram-se dentro da estabilidade prevista, uma vez que o foco desta esfera recai sobre
a persistência e o fluxo de dados recorrentes. No entanto, o _Total Blocking Time_ (TBT)
apresentou uma melhora significativa, reduzindo de 480 ms para 320 ms — uma otimização
de aproximadamente 33,3%. A análise também evidenciou uma rápida melhoria no _Speed
Index_ (SI), que caiu de 3,7 segundos para 3,5 segundos, evidenciando uma percepção visual
de carregamento ágil não se alterou muito para o usuário. Apesar das mudanças sutis,
elas juntas foram responsáveis por obter 6 pontos a mais em relação a análise premilinar.
Visualização completa e resumida na tabela 4.2.
**Tabela 4.2 – Comparação das métricas Lighthouse: Pós-intervenções da Esfera 3
Métrica Estado Anterior (inicial) Resultado Atual (Esfera 3)**
Performance 63 **69**
FCP 3,4 s **2,3 s**
LCP 4,8 s **4,8 s**
TBT 480 ms **320 ms**
Speed Index 3,7 s **3,5 s**
CLS 0 **0**

Em síntese, as intervenções da Esfera 3 produziram ganhos moderados em ambiente
de desenvolvimento, com destaque para a redução do TBT e o aumento da pontuação geral
de desempenho. Como esperado, as melhorias em cache e persistência apresentaram impacto
limitado sobre métricas de carregamento inicial, uma vez que seu principal benefício está
associado à reutilização de dados e navegações recorrentes.

## 4.1.2.2 Ambiente de Simulação de Produção

Nesta etapa, seguinte as intervenções, foi conduzida uma nova auditoria de de-
sempenho em ambiente de produção após a implementação das otimizações da Esfera 3.
Assim, validando o impacto das estratégias de persistência de cache e suporte offline em
um cenário próximo ao uso real da aplicação.

**Figura 4.3 –Análise Lighthouse em ambiente de produção após as intervenções da Esfera 3.**

Os resultados obtidos evidenciam ganhos expressivos no desempenho percebido
pelo usuário. A Tabela 4.3 apresenta uma comparação entre as métricas coletadas em
ambiente de produção antes e após a implementação das otimizações propostas pela Esfera 3.

```
Tabela 4.3 – Comparação das métricas Lighthouse em produção antes e após as
intervenções da Esfera 3. (KITINTREGA)
Métrica Produção Inicial Produção após Esfera 3
FCP 6,4 s 0,2 s
LCP 27,6 s 0,2 s
TBT 20 ms 740 ms
Speed Index 6,4 s 1,1 s
CLS 0,003 0,0003
```

Conforme apresentado na Tabela 4.3, as intervenções da Esfera 3 produziram
melhorias substanciais nas métricas relacionadas ao carregamento e renderização da
aplicação. O _First Contentful Paint_ (FCP) foi reduzido de 6,4 s para 0,2 s, representando

```
uma redução aproximada de 96,9%. Esse resultado indica que o primeiro conteúdo visível
passou a ser exibido quase instantaneamente ao usuário.
```

De forma ainda mais expressiva, o _Largest Contentful Paint_ (LCP) reduziu-se de
27,6 s para 0,2 s, correspondendo a uma melhoria de aproximadamente 99,3%. Considerando
que o Google recomenda valores inferiores a 2,5 s para essa métrica, o resultado obtido
demonstra que as estratégias de persistência de dados e cache foram altamente eficazes na
entrega do conteúdo principal da página. O _Speed Index_ (SI) também apresentou redução
significativa, passando de 6,4 s para 1,1 s. Essa melhoria reflete uma maior velocidade de
renderização visual da interface e contribui diretamente para uma experiência de navegação
mais fluida e responsiva. Em relação à estabilidade visual, o _Cumulative Layout Shift_
(CLS) permaneceu em níveis excelentes, reduzindo-se de 0,003 para 0,0003. Esses valores
estão muito abaixo do limite recomendado de 0,1, evidenciando que a interface manteve
elevada consistência visual durante o carregamento.

```
Por outro lado, observou-se um aumento no Total Blocking Time (TBT), que
passou de 20 ms para 740 ms. Esse resultado indica a existência de tarefas mais longas
durante a execução da aplicação, possivelmente decorrentes do processamento adicional
introduzido pelas novas funcionalidades implementadas. Ainda assim, o impacto percebido
pelo usuário tende a ser reduzido em razão dos ganhos expressivos nas métricas de
carregamento e renderização.
```

```
De maneira geral, os resultados obtidos em ambiente de produção foram positivos
no sentido de validar a eficácia das intervenções propostas pela Esfera 3 do método
POUPI. As melhorias observadas demonstram que estratégias voltadas à persistência
e reutilização de dados possuem elevado potencial para reduzir a latência percebida e
acelerar o carregamento da interface.
```

```
4.1.2.3 Conclusão geral da Esfera 3
De forma geral, os resultados obtidos em ambos os ambientes foram relevantes
para o estudo. Enquanto o ambiente de desenvolvimento apresentou ganhos graduais, o
ambiente de produção evidenciou melhorias substanciais no carregamento e entrega do
conteúdo. Esses resultados reforçam que o diagnóstico relizado no formulário, detectou
um gargalo importante na aplicação, fazendo com que os ganhos fossem significativos em
comparação ao esforço de implementação.
```

## 4.1.3 Impacto na Otimização do Build e Carregamento (Esfera 1)

```
Conforme o diagnóstico do método POUPI, a dimensão D1 (Build e Carga)
indicou a necessidade de reduzir o volume de recursos transferidos no carregamento
```

inicial da aplicação. Em especial, foram identificados gargalos relacionados ao uso de
mídias pesadas (D1.1) e ao tamanho do bundle JavaScript (D1.2). Alinhado à matriz de
direcionamento metodológico, as intervenções desta esfera buscaram otimizar a entrega de
ativos e minimizar o custo computacional do carregamento inicial.

1. **Otimização de Ativos de Mídia (D1.1):** Arquivos de imagem com tamanho
   superior a 1 MB foram convertidos para o formato WebP, reduzindo significativamente
   o volume de dados transferidos sem comprometer a qualidade visual percebida. Exceto
   em uma imagem hero da página inicial que precisou ser comprimida e convertida em
   AVIF perdendo entre 20% e 30% da sua qualidade.
2. **Lazy Loading de Imagens (D1.1):** Implementou-se o carregamento tardio ( _lazy_
   _loading_ ) de imagens presentes em componentes de cartão, garantindo que esses
   recursos fossem carregados apenas quando entrassem na área visível da página.
3. **Carregamento Assíncrono de Fontes Externas (D1.1/D1.2):** Fontes externas
   passaram a ser carregadas de forma assíncrona, reduzindo bloqueios na renderização
   e minimizando impactos sobre métricas como FCP e LCP.
4. **Code Splitting em Rotas (D1.2):** Foi implementado _code splitting_ utilizando
   React.lazy, permitindo o carregamento sob demanda dos módulos associados às
   rotas da aplicação e reduzindo o tamanho do bundle inicial.
5. **Extração Dinâmica do Módulo de PDF (D1.2):** O pacote@react-pdf/renderer
   foi movido para um chunk dinâmico, sendo carregado apenas quando funcionalidades
   relacionadas à geração de documentos são utilizadas.
6. **Fragmentação Manual do Bundle (D1.2):** Utilizou-se a funcionalidademanual-
   Chunksdo Rollup/Vite para segmentar bibliotecas externas em arquivos indepen-
   dentes (10 bibliotecas ao todo)( _vendor chunking_ ), favorecendo o cache do navegador
   e reduzindo a transferência redundante de recursos.

Essas intervenções buscaram reduzir o volume de recursos transferidos no carrega-
mento inicial da aplicação, melhorar o aproveitamento do cache do navegador e acelerar a
renderização do conteúdo principal. Esperou-se que tais estratégias impactem positivamente
métricas como FCP, LCP, SI e principalmente TBT.

## 4.1.3.1 Ambiente de Desenvolvimento

Após a implementação das intervenções descritas anteriormente, foi realizada
uma nova auditoria utilizando a ferramenta Lighthouse em ambiente de desenvolvimento,
visando mensurar os impactos iniciais das otimizações propostas.

```
Figura 4.4 – Resultado da auditoria Lighthouse após as intervenções da Esfera 1 em
ambiente de desenvolvimento.
```

Os resultados indicaram melhorias relevantes nas métricas associadas ao carrega-
mento e à renderização da aplicação. A pontuação geral de desempenho aumentou de 69
para 83 pontos, indicando redução do impacto do carregamento inicial sobre a experiência
do usuário. As métricas de FCP e LCP apresentaram reduções expressivas, passando de
2,3 s para 0,3 s e de 4,8 s para 0,3 s, respectivamente. Esses resultados sugerem que as
estratégias de compressão de imagens, carregamento tardio e fragmentação do bundle
contribuíram para uma entrega mais rápida do conteúdo principal da aplicação.

O SI também apresentou melhora significativa, reduzindo-se de 3,5 s para 1,1 s,
indicando uma renderização visual mais rápida da interface. Em contrapartida, o TBT
aumentou de 320 ms para 700 ms, sugerindo maior processamento da thread principal
durante a execução da aplicação. Esse comportamento pode estar associado ao custo
adicional de carregamento dinâmico de módulos e inicialização de recursos sob demanda.
Por fim, a métrica CLS apresentou pequena variação, passando de 0 para 0,0003. Apesar da
alteração, o valor permanece muito abaixo do limite recomendado pelo Google (0,1), não
indicando impacto perceptível na estabilidade visual da interface. A Tabela 4.4 apresenta
uma comparação entre o estado inicial da aplicação e os resultados obtidos após as
intervenções desta esfera.

**Tabela 4.4 –Comparação das métricas Lighthouse em ambiente de desenvolvimento após as
intervenções da Esfera 1.
Métrica Estado final da Esfera 3 Resultado Atual**
Performance 69 83
FCP 2,3 s s 0.3 s
LCP 4.8 s 0.3 s
TBT 320 ms 700 ms
Speed Index 3.5 s 1.1 s
CLS 0 0.0003

Em síntese, as intervenções da Esfera 1 produziram ganhos relevantes em ambiente
de desenvolvimento, especialmente nas métricas relacionadas ao carregamento inicial e à
renderização da página. Embora tenha sido observado aumento no TBT, os resultados
sugerem que as estratégias aplicadas contribuíram para reduzir a latência percebida pelo
usuário e melhorar a eficiência do carregamento da aplicação.

## 4.1.3.2 Ambiente de Simulação Produção

Em seguida, foi conduzida uma nova auditoria em ambiente de produção após a
implementação das intervenções propostas. O objetivo foi validar o impacto das otimizações
em um cenário mais próximo do uso real da aplicação.

**Figura 4.5 –Análise Lighthouse em ambiente de produção após as intervenções da Esfera 1.**

Os resultados obtidos na figura 4.5 evidenciaram mudanças moderadas nas métricas
de desempenho em ambiente de produção. A pontuação geral do Lighthouse aumentou
de 82 para 89 pontos, indicando melhora no desempenho global da aplicação após as
intervenções da Esfera 1.

```
Tabela 4.5 – Comparação das métricas Lighthouse em produção antes e após as
intervenções da Esfera 1.
Métrica Produção pós Esfera 1 Produção após Esfera 1
Performance 82 89
FCP 0.2 s 0.2 s
LCP 0,2 s 0.8 s
TBT 740 ms 460 ms
Speed Index 1.1 s 1.3 s
CLS 0.0003 0
```

Conforme apresentado na Tabela 4.5, as métricas de carregamento apresentaram
comportamento misto. O FCP manteve-se estável em 0,2 s, indicando que o primeiro
conteúdo continuou sendo exibido rapidamente ao usuário. Por outro lado, o LCP aumen-
tou de 0,2 s para 0,8 s. Apesar desse crescimento, o valor permanece abaixo do limite
recomendado pelo Google de 2,5 s (Developers, 2019).

O TBT apresentou redução de 740 ms para 460 ms, representando uma melhora
aproximada de 37,8%. Esse resultado sugere menor tempo de bloqueio da thread principal
e maior responsividade da interface durante a execução da aplicação.

Em relação ao SI, observou-se uma pequena variação de 1,1 s para 1,3 s. Embora
represente uma piora numérica, a diferença é relativamente pequena e pouco perceptível
na experiência de navegação. De maneira semelhante, o CLS foi reduzido de 0,0003 para 0,
indicando estabilidade visual durante o carregamento.

Em síntese, os resultados em ambiente de produção indicam que as intervenções
da Esfera 1 contribuíram principalmente para reduzir o tempo de bloqueio da interface
e melhorar a pontuação geral de desempenho. As alterações observadas nas métricas de
carregamento permaneceram dentro de faixas consideradas adequadas, sugerindo que as
otimizações não introduziram degradações significativas na experiência do usuário.

**4.1.3.3 Conclusão geral da Esfera 1**

De forma geral, os resultados validam as intervenções da Esfera 1, evidenciando
melhorias no desempenho da aplicação em ambos os ambientes. Os ganhos observados
reforçam a consistência do diagnóstico do POUPI para a dimensão D1. Embora algumas
métricas tenham apresentado pequenas degradações, os benefícios gerais superaram os
impactos negativos identificados.

## 4.1.4 Impacto na Renderização Eficiente (Esfera 2)

Conforme o diagnóstico do método POUPI, a dimensão D2 (Renderização Efici-
ente) indicou a necessidade de reduzir renderizações desnecessárias e minimizar o tempo

de processamento da interface durante a interação do usuário. Alinhado à matriz de
direcionamento metodológico, as intervenções desta esfera buscaram otimizar o ciclo de
renderização dos componentes React e reduzir a ocorrência de tarefas longas ( _Long Tasks_ )
na _thread_ principal do navegador.

1. **Deferred Rendering na HomePage (D2.1):** Implementou-se uma estratégia de
   renderização adiada ( _Deferred Rendering_ ) na página inicial da aplicação, postergando
   a montagem de componentes não críticos. Essa abordagem buscou fragmentar tarefas
   longas da _thread_ principal e reduzir bloqueios durante o carregamento inicial da
   interface.
2. **Memoização do componente Cronômetro (D2.2):** O componente responsável
   pelo cronômetro foi otimizado utilizandoReact.memoem conjunto com uma estraté-
   gia de _Short-Circuit State Update_ , evitando atualizações de estado e re-renderizações
   quando não ocorriam mudanças efetivas nos dados.
3. **Estabilização de listas e filtros (D2.2):** Foram aplicadas técnicas de memoização
   utilizandouseMemo eReact.memopara preservar referências de objetos e evitar
   recomputações desnecessárias durante a renderização de listas e filtros da interface.
4. **Estabilização de funções comuseCallback(D2.2):** Funções frequentemente
   repassadas como propriedades entre componentes foram memoizadas com use-
   Callback, reduzindo a recriação de referências e prevenindo re-renderizações em
   componentes filhos dependentes dessas funções.

Cabe destacar que a virtualização de listas já havia sido previamente implementada
em etapas anteriores ao estudo, razão pela qual não foi considerada como intervenção
desta esfera.

## 4.1.4.1 Ambiente de Desenvolvimento

Após a implementação das intervenções descritas anteriormente, foi realizada
uma nova auditoria utilizando a ferramenta Lighthouse em ambiente de desenvolvimento,
visando mensurar os impactos iniciais das otimizações propostas (figura 4.6.

```
Figura 4.6 – Resultado da auditoria Lighthouse após as intervenções da Esfera 2 em
ambiente de desenvolvimento.
```

Os resultados obtidos indicaram [... ]. Tudo isso pode ser visualizado de forma
resumida na tabela 4.6

**Tabela 4.6 –Comparação das métricas Lighthouse em ambiente de desenvolvimento após as
intervenções da Esfera 2.
Métrica Estado anterior Resultado Atual**
Performance 83 94
FCP 0.3 s 2.3 s
LCP 0.3 s 2.7 s
TBT 700 ms 10 ms
Speed Index 1.1 s 0.5 s
CLS 0.0003 0

Em síntese, as intervenções da Esfera 2 produziram [ganhos moderados/expressivos]
em ambiente de desenvolvimento, especialmente nas métricas relacionadas à responsividade
e ao processamento da interface. Os resultados sugerem que as estratégias aplicadas
contribuíram para tornar a renderização mais eficiente e reduzir a latência percebida pelo
usuário.

## 4.1.4.2 Ambiente de Simulação Produção

Em seguida, foi conduzida uma nova auditoria em ambiente de produção após a
implementação das intervenções propostas. O objetivo foi validar o impacto das otimizações
em um cenário mais próximo do uso real da aplicação.

**Figura 4.7 –Análise Lighthouse em ambiente de produção após as intervenções da Esfera 2.**

Os resultados obtidos na Figura 4.7 evidenciaram o impacto das otimizações de
renderização sobre a experiência do usuário. A pontuação geral do Lighthouse passou
de 89 para 100 pontos, representando um aumento aproximado de 12,4% e atingindo a
pontuação máxima da ferramenta, indicando melhora excelente no desempenho global da
aplicação.

```
Tabela 4.7 – Comparação das métricas Lighthouse em produção antes e após as
intervenções da Esfera 2.
Métrica Produção anterior Produção após Esfera 2
Performance 89 100
FCP 0.2 s 0.2 s
LCP 0.8 s 0.6 s
TBT 460 ms 20 ms
Speed Index 1.3 s 0.5 s
CLS 0 0
```

Conforme apresentado na Tabela 4.7, as intervenções da Esfera 2 produziram
melhorias significativas nas métricas de desempenho. O FCP manteve-se estável em 0,2 s,
indicando que o tempo para exibição do primeiro conteúdo permaneceu otimizado. O LCP
apresentou redução de 0,8 s para 0,6 s, correspondendo a uma melhoria aproximada de 25%.
Esse resultado sugere uma entrega mais rápida do conteúdo principal da página. O maior
ganho foi observado no TBT, que passou de 460 ms para apenas 20 ms, representando
uma redução de aproximadamente 95,7%.

```
Esse resultado está diretamente relacionado às estratégias de Deferred Rendering
e memoização implementadas nesta esfera, reduzindo tarefas longas e renderizações desne-
cessárias. O Speed Index também apresentou melhora expressiva, reduzindo-se de 1,3 s
para 0,5 s, o que representa um ganho aproximado de 61,5%. Esse resultado indica uma
renderização visual mais rápida da interface. Por fim, o CLS permaneceu em 0, evidenci-
ando que as otimizações não introduziram instabilidades visuais durante o carregamento
da aplicação.
```

## 4.1.4.3 Conclusão geral da Esfera

```
De maneira geral, os resultados obtidos em ambiente de produção validam a
eficácia das intervenções propostas pela Esfera 2 do método POUPI. Diferentemente das
esferas anteriores, que atuaram predominantemente sobre o carregamento e persistência de
recursos, esta esfera concentrou-se na eficiência da renderização da interface. Os resultados
demonstram que a redução de renderizações redundantes e de tarefas longas possui
elevado potencial para aumentar a responsividade percebida pelo usuário e melhorar
substancialmente a experiência de navegação.
```

```
4.2 ANÁLISE DA APLICAÇÃO DE GRANDE PORTE (PLATAFORMA
NILO PEÇANHA - CICLOS DE COLETA E VALIDAÇÃO - PNP-CCV)
```

```
A Plataforma Nilo Peçanha: Ciclos de Coleta e Validação (PNP-CCV) é um
ambiente virtual responsável pela coleta, validação e disseminação das estatísticas ofici-
ais da Rede Federal de Educação Profissional, Científica e Tecnológica (Rede Federal).
Seu objetivo é consolidar informações relativas aos corpos docente, discente e técnico-
administrativo, além de dados financeiros das instituições da Rede Federal, servindo de
base para o cálculo dos indicadores de gestão acompanhados pela Secretaria de Educação
Profissional e Tecnológica do Ministério da Educação (SETEC/MEC). Nessa sistema, os
procedimentos realizados ganham uma pontuação maior de esforço, devido a complexidade
de suas funcionalidades e necessidades específicas. Pois, Atualmente, o módulo CCV
possui 96 requisitos épicos, caracterizando-se como um sistema de elevada complexidade e
abrangência. Nesse contexto, busca-se investigar como a adoção dos princípios da POUPI
pode contribuir para a melhoria através da refatoração parcial desse sistema.
```

## 4.2.1 Aplicação do Instrumentos de Mapeamento e Diagnóstico

O diagnóstico inicial da Plataforma Nilo Peçanha – Ciclos de Coleta e Validação
(PNP-CCV) foi dividido em duas etapas complementares: a aplicação do instrumento
de mapeamento do método POUPI (Apêndice A) e uma análise técnica de desempenho
utilizando a ferramenta Lighthouse.

## 4.2.1.1 Diagnóstico Qualitativo: Mapeamento POUPI

A aplicação do formulário de diagnóstico permitiu identificar os principais gargalos
sob a ótica do desenvolvimento. Como ilustrado na Figura 4.8, as dimensões **D1 (Build e
Carga)** e **D2 (Renderização)** obtiveram a maior pontuação (2 pontos cada), indicando
que o carregamento inicial da aplicação e a eficiência da renderização constituem os
principais pontos críticos do sistema. A dimensão **D3 (Cache)** obteve apenas 1 ponto,
sugerindo menor criticidade relativa, embora ainda apresente oportunidades de melhoria.

```
Figura 4.8 – Pontuação obtida no formulário de diagnóstico da PNP-CCV.
```

Os resultados corroboram a natureza da aplicação analisada. Por se tratar de um
sistema de grande porte, com elevado número de módulos e funcionalidades, é esperado que
gargalos relacionados ao tamanho do _bundle_ , carregamento de recursos e processamento
da interface tenham impacto significativo sobre a experiência do usuário.

## 4.2.1.2 Diagnóstico Técnico: Análise com Lighthouse

```
ubsubsectionDiagnóstico Técnico: Análise com Lighthouse
```

Para quantificar os impactos desses gargalos, analisamos a página inicial da apli-
cação em dois ambientes: desenvolvimento e produção. A Tabela 4.8 resume os resultados
coletados antes da aplicação das otimizações.

```
Tabela 4.8 – Comparação de métricas (Lighthouse) pré-otimização da PNP-CCV.
Métrica Desenvolvimento Produção
Performance 14 17
FCP 10,8 s 47,7 s
LCP 20,7 s 47,9 s
TBT 5.030 ms 2.410 ms
Speed Index 13,0 s 47,7 s
CLS 0,224 0,206
```

A análise técnica revela um cenário de desempenho crítico em ambos os ambientes,
com degradação acentuada principalmente em produção. Embora o ambiente de desenvol-
vimento já apresente indicadores significativamente acima dos limites recomendados pelo
Google, o ambiente de produção evidencia gargalos ainda mais severos relacionados ao
carregamento e renderização da interface.

Os valores de FCP e LCP em produção, ambos próximos de 48 segundos, indicam
que o conteúdo inicial e principal da página demora excessivamente para ser exibido ao
usuário. Considerando que o Google recomenda valores inferiores a 2,5 s para o LCP,
os resultados obtidos evidenciam um gargalo crítico no carregamento dos recursos da
aplicação.

Além disso, o TBT apresentou valores elevados em ambos os ambientes, atingindo
5.030 ms em desenvolvimento e 2.410 ms em produção. Esses resultados sugerem a
existência de tarefas longas executadas na _main thread_ , comprometendo a responsividade
da interface.

Em relação à estabilidade visual, o CLS apresentou valores de 0,224 em desen-
volvimento e 0,206 em produção, apesar da variação irrisória, ambos acima do limite
recomendado de 0,1 (Developers, 2019). Esse comportamento indica a ocorrência de deslo-
camentos visuais perceptíveis durante o carregamento da página, afetando negativamente
a experiência do usuário.

De maneira geral, os resultados indicam que a aplicação apresenta gargalos
simultâneos relacionados ao carregamento inicial, processamento da interface e estabilidade
visual, reforçando a necessidade de intervenções sistemáticas orientadas pelo método
POUPI.

## 4.2.1.3 Direcionamento Metodológico

Com base na matriz do POUPI (Tabela **??** ), as intervenções foram priorizadas
conforme a criticidade identificada pelo diagnóstico. Como as dimensões D1 e D2 obtive-
ram a mesma pontuação, foi aplicada a regra de priorização do método, que estabelece
precedência para a Esfera 1.Portanto resolvidos e analisados questões relacionadas a resc-
pectivamente; Dimensão D1 (Build e Carga), ligada a esfera 1 da metodologia; Dimensão
D2 (Renderização) ligada a esfera 2; Dimensão D3 (Cache), ligada a esfera 3.

Por conseguinte, pode-se esboçar, que a A PNP-CCV constitui um estudo de caso
relevante para a validação do método POUPI, pois representa um sistema de grande porte,
com elevada complexidade funcional e múltiplos fluxos de interação. Nesse contexto, a
aplicação do método permite investigar como intervenções sistemáticas de desempenho

podem contribuir para melhorar a experiência do usuário sem a necessidade de reescrever
integralmente a aplicação, que nesse contexto, seria extramamente custoso.

## 4.2.2 Impacto na Otimização do Build e Carregamento (Esfera 1)

Conforme o diagnóstico do método POUPI, a dimensão D1 (Build e Carga) indicou
a necessidade de reduzir o volume de recursos processados durante o carregamento inicial
da aplicação. A análise do código-fonte revelou um padrão de importação centralizada
de páginas, resultando em um _bundle_ inicial excessivamente grande. Como consequência,
componentes e rotas não utilizados no primeiro acesso eram carregados antecipadamente,
aumentando o tempo de bloqueio da _main thread_ e degradando a experiência do usuário.
Alinhado à matriz de direcionamento metodológico, as intervenções desta esfera buscaram
reduzir o tamanho do _bundle_ inicial, otimizar o carregamento de recursos e diminuir o
custo computacional da inicialização da aplicação.

1. **Code Splitting e Lazy Loading de Rotas (D1.1):** Implementou-se o carre-
   gamento sob demanda das páginas da aplicação, permitindo que módulos fossem
   transferidos apenas quando requisitados pelo usuário.
2. **Remoção de** **_Barrel Exports_** **(D1.2):** Foram removidas estruturas de exportação
   centralizada, reduzindo importações desnecessárias e melhorando a eficiência do
   processo de empacotamento.
3. **Importações Dinâmicas (D1.2):** Serviços e componentes passaram a ser carrega-
   dos dinamicamente, evitando o processamento antecipado de funcionalidades não
   utilizadas.
4. **Lazy Loading de Componentes Pesados (D1.2):** Componentes como _CodeE-_
   _ditor_ , _BrTableAnt_ e _BrTablePagination_ passaram a ser carregados apenas quando
   necessários.
5. **Extração de CSS Crítico (D1.1):** Utilizou-se a ferramenta Beasties integrada ao
   Vite para extração do CSS crítico, reduzindo bloqueios de renderização durante o
   carregamento inicial.

Essas intervenções buscaram reduzir o custo do carregamento inicial da aplicação,
melhorar o aproveitamento dos recursos do navegador e aumentar a responsividade per-
cebida pelo usuário. É importante lembrar também que para esse sistema em específico,
dado a sua complexidade, alguns tecnicas foram analisadas isoladamente devido ao seu
esforço de implementação e a natureza incremental desse experimento. As técnicas em que
foram necessárias essa divisão, foi explicitado ao decorrer da análise.

## 4.2.2.1 Ambiente de Desenvolvimento

Como primeira etapa, foi implementada a técnica de _Code Splitting_ por meio de
_Lazy Loading_ das rotas da aplicação. Os resultados iniciais podem ser observados na Figura
4.9.

```
Figura 4.9 – Comparação dos indicadores Lighthouse antes e após a aplicação de Lazy
Loading nas rotas da aplicação.
```

```
Os resultados preliminares já evidenciaram ganhos relevantes, com aumento da
pontuação do Lighthouse de 14 para 20 pontos e redução do TBT de 5.030 ms para
2.330 ms. Esses resultados indicaram que o carregamento excessivo de código durante a
inicialização era um dos principais fatores responsáveis pela degradação do desempenho
da aplicação.
```

```
Com base nesse diagnóstico, novas otimizações foram incorporadas, incluindo
remoção de barrel exports , importações dinâmicas, expansão do uso de lazy loading e
extração de CSS crítico. Após a implementação dessas mudanças, uma nova auditoria foi
realizada. Os resultados consolidados são apresentados na Tabela 4.9, e logo em seguida
na figura 4.10 é mostrado a análise do lighthouse final propriamente dita.
Tabela 4.9 – Comparação das métricas Lighthouse ao longo das otimizações da Esfera 1.
Métrica Inicial Após o primeiro Lazy Loading Resultado Atual
Performance 14 20 40
FCP 10,8 s 4,9 s 2,8 s
LCP 20,7 s 9,2 s 5,0 s
TBT 5.030 ms 2.330 ms 1.280 ms
Speed Index 13,0 s 6,8 s 3,6 s
CLS 0,224 0,224 0,229
```

**Figura 4.10 –Comparação dos indicadores Lighthouse antes e após as otimizações de Build
e Carga.**

Conforme apresentado na Tabela 4.9, as intervenções da Esfera 1 produziram
melhorias substanciais nas métricas relacionadas ao carregamento da aplicação. A pon-
tuação geral passou de 14 para 40 pontos, representando um aumento acumulado de
aproximadamente 186%. O FCP foi reduzido de 10,8 s para 2,8 s, correspondendo a uma
melhoria aproximada de 74,1%. De maneira semelhante, o LCP diminuiu de 20,7 s para
5,0 s, representando uma redução de aproximadamente 75,8%. O TBT apresentou melhora
expressiva, passando de 5.030 ms para 1.280 ms, uma redução aproximada de 74,6%. O
Speed Index também apresentou comportamento semelhante, reduzindo-se de 13,0 s para
3,6 s, o que corresponde a uma melhoria de aproximadamente 72,3%. Por outro lado, o
CLS permaneceu praticamente inalterado, comportamento esperado, uma vez que essa
métrica não está diretamente associada às otimizações de Build e Carga.

Em síntese, as intervenções da Esfera 1 produziram ganhos expressivos em ambiente
de desenvolvimento, com destaque para a redução das métricas de carregamento e aumento
da pontuação geral de desempenho. Os resultados sugerem que a redução do tamanho
do _bundle_ inicial possui elevado impacto sobre a experiência do usuário em aplicações de
grande porte.

## 4.2.2.2 Ambiente de Simulação Produção

Com o objetivo de avaliar o desempenho da aplicação em um cenário mais próximo
do ambiente real de utilização, foi gerada uma versão de produção ( _build_ ) e realizada uma

nova análise utilizando o Lighthouse em modo _preview_. Os resultados obtidos antes e após
as otimizações da Esfera 1 podem ser observados nas Figuras 4.11 e 4.12.

```
Figura 4.11 – Análise Lighthouse da aplicação antes das otimizações em ambiente de
produção.
```

```
Figura 4.12 – Análise Lighthouse da aplicação após as otimizações em ambiente de
produção.
```

As Figuras 4.11 e 4.12 mostram os resultados da aplicação antes e após as
otimizações da Esfera 1 em ambiente de produção. Observa-se um aumento da pontuação
geral do Lighthouse de 17 para 63 pontos. A comparação detalhada das métricas é
apresentada na Tabela 4.10.

```
Tabela 4.10 – Comparação das métricas Lighthouse em produção antes e após as
intervenções da Esfera 1.
Métrica Produção Inicial Produção após Esfera 1
Performance 17 63
FCP 47,7 s 1,1 s
LCP 47,9 s 2,4 s
TBT 2.410 ms 1.170 ms
Speed Index 47,7 s 1,7 s
CLS 0,206 0,224
```

```
Conforme apresentado na Tabela 4.10, as intervenções da Esfera 1 reduziram
significativamente as métricas relacionadas ao carregamento da aplicação. O FCP passou
de 47,7 s para 1,1 s, correspondendo a uma redução de aproximadamente 97,7%. De forma
semelhante, o LCP foi reduzido de 47,9 s para 2,4 s, uma melhora de cerca de 95,0%.
```

O Speed Index também apresentou redução expressiva, passando de 47,7 s para
1,7 s, o que representa uma melhora aproximada de 96,4%. Já o TBT diminuiu de 2.410
ms para 1.170 ms, correspondendo a uma redução de aproximadamente 51,5%. Por outro
lado, o CLS apresentou uma pequena piora, passando de 0,206 para 0,224. Ainda que a
variação seja pequena, ambos os valores permanecem acima do limite recomendado de 0,1,
indicando a presença de deslocamentos visuais durante o carregamento da interface.

```
Em suma, os resultados em produção indicam que as intervenções da Esfera 1
reduziram o custo do carregamento inicial da aplicação e melhoraram métricas relacionadas
à renderização e interatividade, embora ainda existam oportunidades de aprimoramento
da estabilidade visual da interface.
```

## 4.2.2.3 Conclusão geral da Esfera

```
Em ambos os ambientes analisados, as intervenções produziram impactos relevantes
sobre o desempenho da aplicação. Enquanto o ambiente de desenvolvimento apresentou
ganhos graduais e consistentes, o ambiente de produção evidenciou reduções expressivas
nos tempos de carregamento e no tempo de bloqueio da interface. Esses achados ajudaram
reforçam a capacidade do método POUPI de identificar gargalos relevantes e direcionar
otimizações com boa relação entre esforço de implementação e benefícios obtidos.
```

## 4.2.3 Impacto na Renderização Eficiente (Esfera 2)

```
A partir do diagnóstico do método POUPI, a dimensão D2 (Renderização) eviden-
ciou a necessidade de melhorar a eficiência da interface e reduzir o processamento realizado
pelo navegador. Esse comportamento é comum em sistemas do tipo Data-Heavy , como
```

ERPs e plataformas de gestão, perfil no qual a PNP-CCV se enquadra devido ao grande
volume de formulários, tabelas, filtros e estados compartilhados entre componentes.

Além disso, a análise técnica revelou valores elevados de TBT e baixa pontuação
geral de desempenho, indicando a existência de tarefas longas executadas na _main thread_.
Em consonância com a matriz de direcionamento metodológico, as intervenções desta
esfera concentraram-se em diminuir renderizações desnecessárias e tornar as interações da
aplicação mais leves e responsivas.

1. **Virtualização de listas (D2.1):** Empregou-se a virtualização para limitar a quan-
   tidade de elementos exibidos simultaneamente, reduzindo o custo de processamento
   em tabelas e listas extensas.
2. **Memoização de componentes e valores (D2.1):** Aplicaram-se técnicas com
   useMemo,memoeuseCallback, evitando recomputações e atualizações desnecessárias.
3. **Descentralização de estados (D2.2):** Estados compartilhados foram segmen-
   tados entre componentes específicos, reduzindo atualizações em cascata e isolando
   responsabilidades.
4. **Renderização sob demanda (D2.1):** Componentes secundários passaram a ser
   carregados apenas quando necessários, diminuindo o trabalho realizado durante a
   inicialização da interface.

Essas modificações buscaram diminuir o trabalho executado pela _main thread_
e tornar a navegação mais fluida. Considerando a elevada complexidade da PNP-CCV,
algumas técnicas foram avaliadas individualmente, permitindo observar seus efeitos isolados
e respeitando o caráter incremental deste experimento.]

## 4.2.3.1 Ambiente de Desenvolvimento

Após a implementação das intervenções descritas anteriormente, foi realizada uma
auditoria em ambiente de desenvolvimento, visando mensurar os impactos iniciais das
otimizações propostas.

Os resultados obtidos indicaram melhora na pontuação geral de desempenho e
redução do tempo de bloqueio da interface. A pontuação do Lighthouse passou de 40 para
58 pontos, representando um aumento aproximado de 45%. A comparação detalhada das
métricas pode ser observada na Tabela 4.11.

```
Tabela 4.11 – Comparação das métricas Lighthouse em ambiente de desenvolvimento após
as intervenções da Esfera 2.
Métrica Estado anterior (Esfera 1) Resultado Atual (Esfera 2)
Performance 40 58
FCP 2,8 s 3,4 s
LCP 5,0 s 5,0 s
TBT 1.280 ms 640 ms
Speed Index 3,6 s 3,7 s
CLS 0,229 0
```

Conforme apresentado na Tabela 4.11, as intervenções da Esfera 2 produziram
melhorias principalmente nas métricas relacionadas à renderização e interatividade da
aplicação. O TBT foi reduzido de 1.280 ms para 640 ms, representando uma melhoria
aproximada de 50%. Esse resultado sugere uma redução das tarefas executadas na _main
thread_.

```
A pontuação geral também apresentou crescimento de 40 para 58 pontos, indicando
melhora no desempenho global da aplicação. Além disso, o CLS foi reduzido de 0,229 para
0, eliminando deslocamentos visuais durante o carregamento da interface.
```

```
Por outro lado, observou-se um pequeno aumento no FCP, passando de 2,8 s
para 3,4 s, enquanto o Speed Index variou de 3,6 s para 3,7 s. Essas mudanças foram
relativamente pequenas e não anularam os ganhos obtidos.
```

```
Em síntese, as intervenções da Esfera 2 produziram ganhos moderados em ambiente
de desenvolvimento, especialmente na redução do tempo de bloqueio da interface e na
estabilidade visual da aplicação.
```

## 4.2.3.2 Ambiente de Simulação de Produção

```
cCnsecutivamente, foi conduzida uma nova auditoria em ambiente de produção
após a implementação das intervenções propostas. O objetivo foi validar o impacto das
otimizações em um cenário mais próximo do uso real da aplicação.
```

```
Os resultados obtidos evidenciaram melhorias adicionais sobre os ganhos já al-
cançados pela Esfera 1. A pontuação geral do Lighthouse passou de 63 para 82 pontos,
representando um aumento aproximado de 30,2%. A comparação detalhada é apresentada
na Tabela 4.12.
```

```
Tabela 4.12 – Comparação das métricas Lighthouse em produção antes e após as
intervenções da Esfera 2.
Métrica Produção após Esfera 1 Produção após Esfera 2
Performance 63 82
FCP 1,1 s 1,2 s
LCP 2,4 s 1,4 s
TBT 1.170 ms 720 ms
Speed Index 1,7 s 1,5 s
CLS 0,224 0,019
```

```
Os dados da Tabela 4.12 mostram que as intervenções da Esfera 2 contribuíram
principalmente para melhorar aspectos relacionados à renderização e à estabilidade da
interface. O LCP passou de 2,4 s para 1,4 s, representando uma redução aproximada de
41,7%. Esse comportamento indica que o conteúdo principal da página passou a ser exibido
em menos tempo.
```

```
Também foi observada uma diminuição no TBT, que passou de 1.170 ms para
720 ms, correspondendo a uma redução de aproximadamente 38,5%. Esse resultado sugere
menor ocupação da main thread e, consequentemente, uma interface potencialmente mais
responsiva durante a interação do usuário.
```

De forma semelhante, o Speed Index reduziu-se de 1,7 s para 1,5 s, o que representa
uma melhora aproximada de 11,8%. Já o CLS apresentou a variação mais expressiva,
passando de 0,224 para 0,019, uma redução de aproximadamente 91,5%. Com isso, a
aplicação passou a atender ao limite recomendado pelo Google para estabilidade visual.
Em contrapartida, o FCP apresentou uma pequena variação, aumentando de 1,1 s para
1,2 s. Apesar desse acréscimo de aproximadamente 9,1%, ambos os valores permanecem
em níveis considerados adequados.

```
Em síntese, os resultados obtidos em produção indicam que a Esfera 2 refinou
os ganhos previamente alcançados pela Esfera 1, atuando principalmente na redução
do processamento da interface e na diminuição dos deslocamentos visuais durante o
carregamento da aplicação.
```

```
4.2.3.3 Conclusão geral da Esfera 2
Por fim, os resultados obtidos em ambos os ambientes indicam que as intervenções
da Esfera 2 contribuíram principalmente para melhorar a eficiência da renderização e
reduzir o tempo de bloqueio da interface. Enquanto a Esfera 1 atuou predominantemente
sobre o carregamento inicial da aplicação, a Esfera 2 refinou aspectos relacionados à
interatividade e estabilidade visual. Esses resultados reforçam a complementaridade entre
as esferas do método POUPI em sistemas de grande porte.
```

## 4.2.4 Impacto no Gerenciamento de Cache (Esfera 3)

Com base no diagnóstico do método POUPI, a dimensão D3 (Cache) apontou
oportunidades de melhoria relacionadas ao reaproveitamento de dados e à diminuição de
acessos repetitivos ao servidor. Embora tenha obtido menor pontuação no diagnóstico,
sistemas transacionais de grande porte frequentemente se beneficiam de mecanismos de
persistência e cache.

Segundo a matriz de direcionamento metodológico, a Esfera 3 busca aprimorar
o fluxo de dados e aumentar a resiliência da aplicação. Nesse sentido, as intervenções
concentraram-se em reduzir a latência percebida e tornar as navegações recorrentes mais
eficientes.

1. **Persistência e reutilização de dados (D3.1):** Foram adotadas estratégias de
   cache local para reaproveitar informações já carregadas e evitar novas requisições
   desnecessárias.
2. **Gerenciamento de estado assíncrono (D3.1):** Utilizou-se o TanStack Query
   para controlar o ciclo de vida das requisições e automatizar a invalidação de dados.
3. **Estratégias de atualização de cache (D3.1):** Empregaram-se abordagens ins-
   piradas no modelo _Stale-While-Revalidate_ , exibindo dados armazenados enquanto
   atualizações ocorrem em segundo plano.
4. **Resiliência e otimização de rede (D3.2):** Foram implementados mecanismos
   voltados à redução do impacto de falhas temporárias de conectividade e à melhoria
   da experiência em acessos frequentes.

Essas intervenções buscaram tornar o fluxo de dados mais eficiente e reduzir o
tempo de espera percebido pelos usuários. Em aplicações compostas por diversos módulos
e grande volume de requisições, estratégias de cache contribuem para diminuir o tráfego
de rede, acelerar consultas recorrentes e melhorar a experiência de navegação sem exigir
alterações estruturais profundas no sistema.

## 4.2.4.1 Ambiente de Desenvolvimento

Após a implementação das intervenções da Esfera 3, foi realizada uma nova
auditoria em ambiente de desenvolvimento com o objetivo de avaliar os impactos das
estratégias de cache e persistência de dados.

```
Os resultados indicaram avanços em praticamente todas as métricas analisadas. A
pontuação geral do Lighthouse passou de 58 para 80 pontos, representando um aumento
aproximado de 37,9%. A comparação detalhada é apresentada na Tabela 4.13.
Tabela 4.13 – Comparação das métricas Lighthouse em ambiente de desenvolvimento após
as intervenções da Esfera 3.
Métrica Estado anterior (Esfera 2) Resultado Atual (Esfera 3)
Performance 58 80
FCP 3,4 s 0,8 s
LCP 5,0 s 1,4 s
TBT 640 ms 120 ms
Speed Index 3,7 s 1,4 s
CLS 0 0,244
```

```
Os dados da Tabela 4.13 mostram que as intervenções da Esfera 3 impactaram
principalmente o carregamento e o acesso a dados previamente armazenados. O FCP foi
reduzido de 3,4 s para 0,8 s, correspondendo a uma melhora aproximada de 76,5%. Já o
LCP passou de 5,0 s para 1,4 s, representando uma redução de cerca de 72,0
```

```
Também foi observada queda no TBT, que diminuiu de 640 ms para 120 ms, uma
redução aproximada de 81,3%. Esse resultado sugere menor tempo gasto em processamento
durante a inicialização da aplicação.
```

O Speed Index apresentou comportamento semelhante, reduzindo-se de 3,7 s para
1,4 s, o que representa uma melhora de aproximadamente 62,2%. Em contrapartida, o
CLS aumentou de 0 para 0,244, indicando a presença de deslocamentos visuais durante o
carregamento da interface.

```
De forma geral, os resultados em ambiente de desenvolvimento indicam que as
estratégias de cache reduziram o tempo de carregamento e o custo de processamento da
aplicação, embora tenham surgido oportunidades de melhoria relacionadas à estabilidade
visual.
```

## 4.2.4.2 Ambiente de Simulação de Produção

```
Em seguida, foi conduzida uma nova auditoria em ambiente de produção para
verificar o comportamento das otimizações em um cenário mais próximo do uso real da
aplicação.
```

```
Os resultados obtidos mostram novos ganhos sobre as melhorias já alcançadas pelas
esferas anteriores. A pontuação do Lighthouse passou de 82 para 99 pontos, representando
um aumento aproximado de 20,7%. A comparação detalhada é apresentada na Tabela
4.14.
```

```
Tabela 4.14 – Comparação das métricas Lighthouse em produção antes e após as
intervenções da Esfera 3. (PNP-CCV)
Métrica Produção após Esfera 2 Produção após Esfera 3
Performance 82 99
FCP 1,2 s 0,3 s
LCP 1,4 s 0,4 s
TBT 720 ms 90 ms
Speed Index 1,5 s 0,5 s
CLS 0,019 0,018
```

Conforme apresentado na Tabela 4.14, as intervenções da Esfera 3 produziram
reduções em todas as métricas analisadas. O FCP passou de 1,2 s para 0,3 s, representando
uma redução aproximada de 75,0%. Esse resultado indica que o primeiro conteúdo da
página passou a ser exibido mais rapidamente.

O LCP foi reduzido de 1,4 s para 0,4 s, correspondendo a uma melhora de
aproximadamente 71,4%, sugerindo uma entrega mais rápida do conteúdo principal da
interface.

Além disso, o TBT caiu de 720 ms para 90 ms, uma redução de cerca de 87,5%.
Esse comportamento indica menor bloqueio da _main thread_ e maior capacidade de resposta
da aplicação.

O Speed Index também apresentou queda expressiva, passando de 1,5 s para 0,5 s,
o que representa uma melhora aproximada de 66,7%. Já o CLS permaneceu praticamente
estável, variando de 0,019 para 0,018, mantendo-se abaixo do limite recomendado pelo
Google.

Em síntese, os resultados em produção indicam que as estratégias de cache
complementaram as otimizações das esferas anteriores, reduzindo a dependência da rede e
acelerando o acesso a dados e recursos já utilizados.

## 4.2.3.3 Conclusão geral da Esfera

Os resultados obtidos em ambos os ambientes mostram que as intervenções da
Esfera 3 contribuíram principalmente para reduzir a latência percebida e melhorar o
reaproveitamento de dados. Enquanto a Esfera 1 atuou sobre o carregamento inicial e a
Esfera 2 concentrou-se na renderização da interface, a Esfera 3 aprimorou o fluxo de dados
e diminuiu o custo de acessos recorrentes ao servidor. Em conjunto, os resultados reforçam
o caráter complementar das três esferas da metodologia POUPI.

## 4.3 Discussão Comparativa e Eficácia da Metodologia POUPI

Retomando as análises anteriores, a aplicação da metodologia POUPI em dois
sistemas com características distintas permitiu avaliar seu comportamento em cenários
de diferentes níveis de complexidade. Enquanto o Kitintrega representa uma aplicação de
pequeno porte, desenvolvida originalmente seguindo boas práticas de frontend, a PNP-CCV
caracteriza-se como um sistema de grande porte, com elevado número de módulos, estados
compartilhados e intenso fluxo de dados. Em ambos os casos, o instrumento de diagnóstico
foi capaz de identificar gargalos coerentes com a arquitetura das aplicações e direcionar
intervenções compatíveis com suas necessidades específicas.

```
Tabela 4.15 – Comparação geral dos resultados obtidos após aplicação da POUPI em
produção.
Indicador Kitintrega PNP-CCV
Performance Inicial 59 17
Performance Final 100 99
LCP Inicial 27,6 s 47,9 s
LCP Final 0,6 s 0,4 s
Maior gargalo iden-
tificado
```

```
Cache (D3) Build e Renderização (D1/D2)
Complexidade da
aplicação
```

```
Baixa Alta
```

Os resultados da Tabela 4.15 indicam que a metodologia produziu melhorias
relevantes independentemente do porte da aplicação. Entretanto, o comportamento das
esferas variou conforme as características arquiteturais de cada sistema. No Kitintrega,
as maiores melhorias foram observadas na Esfera 3, relacionada ao gerenciamento de
cache e persistência de dados. Esse comportamento pode ser explicado pelo fato de a
aplicação já possuir um carregamento relativamente otimizado, fazendo com que os maiores
ganhos estivessem associados à reutilização de recursos e redução de requisições recorrentes.
Nesse contexto, a POUPI atuou principalmente como um mecanismo de governança de
desempenho, permitindo recuperar e manter a qualidade da experiência do usuário ao
longo da evolução do software.

Em contraste, a PNP-CCV apresentou ganhos mais expressivos nas Esferas 1 e 2.
A Esfera 1 teve impacto significativo porque o sistema possuía um _bundle_ inicial elevado,
grande quantidade de módulos carregados simultaneamente e dependências não utilizadas
durante a inicialização da interface. Dessa forma, técnicas como _code splitting_ , _lazy loading_
e importações dinâmicas reduziram substancialmente o volume de recursos transferidos
e o trabalho executado pela _main thread_. Já a Esfera 2 refinou esses ganhos ao reduzir
re-renderizações e melhorar a estabilidade visual da aplicação. Esses resultados sugerem

que aplicações maiores tendem a se beneficiar mais de otimizações estruturais relacionadas
ao carregamento e à renderização, enquanto aplicações menores podem obter maiores
vantagens por meio de estratégias de cache e governança contínua.

Em conclusão. os experimentos indicam que a metodologia POUPI apresenta
caráter adaptativo, uma vez que o diagnóstico inicial direciona automaticamente os esforços
para os gargalos predominantes de cada sistema. Assim, os resultados obtidos sugerem
que a metodologia pode ser empregada tanto no aprimoramento incremental de aplicações
legadas quanto na manutenção contínua de sistemas já otimizados, contribuindo para a
governança de desempenho em aplicações frontend.

## 4.4 Considerações Finais

Este trabalho propôs e validou a metodologia **POUPI** como uma abordagem
estruturada para enfrentar os desafios de performance e escalabilidade em aplicações React.
A pesquisa partiu da premissa de que a performance web transcende a eficiência do código,
consolidando-se como um diferencial estratégico essencial para a retenção de usuários e o
sucesso de negócios digitais.

A aplicação da POUPI nos dois objetos de estudo demonstrou a eficácia da divisão
em esferas operacionais. No sistema **Kitintrega** , a metodologia atuou como um mecanismo
de governança, recuperando o desempenho degradado ao longo do tempo e atingindo a
pontuação máxima (100) no Lighthouse. Já na **Plataforma Nilo Peçanha (PNP-CCV)** ,
a POUPI provou sua capacidade de guiar refatorações incrementais em sistemas de alta
complexidade, reduzindo gargalos críticos de carregamento (LCP) de 47,9s para 0,4s sem
a necessidade de reescrever a arquitetura completa.

Os resultados quantitativos, com reduções superiores a 90% em métricas de tempo
de carregamento e melhorias significativas no _Total Blocking Time_ (TBT), confirmam que a
identificação sistemática de gargalos via formulário de diagnóstico permite intervenções mais
precisas e com melhor relação custo-benefício. Em conclusão, a metodologia POUPI cumpre
o objetivo de equilibrar manutenibilidade e performance, oferecendo aos desenvolvedores
um roteiro claro para a construção de interfaces resilientes e eficientes.

## 4.5 Trabalhos Futuros

Como desdobramentos desta pesquisa e visando a evolução da abordagem proposta,
sugerem-se as seguintes frentes de investigação:

- **Guia Formal de Governança POUPI:** Elaborar um manual técnico padronizado
  e um guia de referência rápida para a aplicação da metodologia. Este guia visa
  facilitar a adoção por equipes de desenvolvimento e garantir que as otimizações
  sejam mantidas durante todo o ciclo de vida do software, evitando a degradação de
  performance observada em sistemas legados.
- **Automação via CI/CD:** Desenvolver ferramentas que integrem o formulário de
  diagnóstico POUPI diretamente ao fluxo de integração contínua (CI/CD), permitindo
  que regressões de desempenho sejam detectadas automaticamente em cada novo
  _commit_.
- **Exploração de React Server Components (RSC):** Investigar a aplicabilidade
  das esferas POUPI em arquiteturas de _Server Components_ e _Streaming SSR_ , compa-

rando os ganhos de eficiência em relação ao modelo puramente _client-side_ utilizado
neste estudo.

## APÊNDICES

# APÊNDICE A – INSTRUMENTO DE CARACTERIZAÇÃO

# TÉCNICA POUPI

```
Este apêndice apresenta o instrumento de diagnóstico e caracterização técnica
proposto neste trabalho. O instrumento foi desenvolvido a partir da síntese dos gargalos de
desempenho e técnicas de otimização identificados na literatura especializada em frontend.
Seu objetivo é mapear características arquiteturais da aplicação e associá-las aos sintomas
observáveis por meio das métricas do Google Lighthouse, servindo como subsídio para o
direcionamento das esferas da metodologia POUPI.
```

### INSTRUÇÕES DE PREENCHIMENTO

```
Para cada uma das questões abaixo, assinale a opção que melhor reflete o estado
atual da aplicação em análise no Cenário A (antes de qualquer intervenção de otimização).
```

1. **Dimensão 1: Carga de Ativos e Mídia (D1)**

```
□ D1.1: A página inicial ou dobra crítica do sistema depende criticamente de
múltiplos ativos estáticos pesados (e.g., imagens de alta resolução, fontes web
customizadas não otimizadas ou elementos multimídia)?
⃝ Sim
⃝ Não
□ D1.2: O tamanho total dos artefatos de compilação ( bundle size ) ultrapassa os
limiares recomendados para redes de restrição de banda (e.g., conexões móveis
3G/4G)?
⃝ Sim
⃝ Não
```

2. **Dimensão 2: Dados e Complexidade de Renderização (D2)**

```
□ D2.1: A interface renderiza volumes massivos de dados dinâmicos de forma
simultânea (e.g., tabelas com mais de 100 registros, painéis analíticos em tempo
real ou árvores de componentes profundas)?
⃝ Sim
⃝ Não
```

```
□ D2.2: Há acoplamento severo a estados globais ou gerenciadores de estado (e.g.,
Redux, Context API, Zustand) que propagam re-renderizações em cascata para
componentes estruturalmente estáticos?
⃝ Sim
⃝ Não
```

3. **Dimensão 3: Navegação e Persistência em Rede (D3)**
   □ **D3.1:** O fluxo de usuário compreende uma navegação com requisições repetitivas
   ou redundantes aos mesmos _endpoints_ de API dentro de uma mesma sessão
   (período logado)?
   ⃝ Sim
   ⃝ Não
   □ **D3.2:** O modelo de negócio exige estratégias de resiliência a oscilações de
   conectividade ou persistência temporária de dados localmente no cliente?
   ⃝ Sim
   ⃝ Não
4. **Dimensão 4: Diagnóstico de Sintomas do Lighthouse (D4)**
   □ **D4.1:** Quais indicadores apresentam coloração de alerta (amarelo) ou criticidade
   (vermelho) no relatório do Google Lighthouse? _(Marque todas as que se aplicam)_
   □ _Speed Index_ (SI) / _Total Blocking Time_ (TBT)
   □ _Largest Contentful Paint_ (LCP) / _First Contentful Paint_ (FCP)
   □ Pontuação de Performance Geral degradada, sem indicadores isolados
   críticos.

**Critério de Avaliação:** As respostas fornecidas neste formulário servem como parâmetros
de entrada para a Matriz de Agrupamento descrita na Metodologia, correlacionando os
sintomas técnicos encontrados às soluções e esferas específicas da metodologia POUPI.

## APÊNDICE B – MAPA CONCEITUAL DA METODOLOGIA POUPI

Este apêndice apresenta o mapa conceitual da metodologia POUPI. O artefato
sintetiza as principais dimensões do método, incluindo esferas de atuação, técnicas de
intervenção, métricas de avaliação e estudos de caso utilizados na validação experimental.
Seu objetivo é fornecer uma visão integrada da metodologia proposta e facilitar sua
interpretação e aplicação prática.

**Figura B.1 – Representação visual: Mapa Conceitual da Metodologia POUPI**

## Referências

```
ADOBE EXPERIENCE CLOUD, E. do. Aplicações de página única (SPAs) — o
que são e como funcionam. [ S. l.: s. n. ], 2023. Disponível em:
https://business.adobe.com/blog/basics/learn-the-benefits-of-single-page-apps-spa.
Acesso em: 11 jun. 2026.
```

```
DEVELOPERS, C. for. Introdução ao Lighthouse. 2025. Disponível em:
https://developer.chrome.com/docs/lighthouse/overview/.
```

DEVELOPERS, C. for. **Lighthouse performance scoring**. 2019. Disponível em:https:
//developer.chrome.com/docs/lighthouse/performance/performance-scoring/.

```
GARRETT, J. J. Ajax: A New Approach to Web Applications. Acessado em 12 de
maio de 2026. Adaptive Path. Fev. 2005. Disponível em:
https://designftw.mit.edu/lectures/apis/ajax_adaptive_path.pdf.
```

```
HARRIS, R. Virtual DOM is pure overhead. Acessado em 14 de junho de 2026. Dez.
```

2018. Disponível em: https://svelte.dev/blog/virtual-dom-is-pure-overhead.

```
KARKA, N. R. Front-End Performance Optimization: A Comprehensive Guide.
International Journal of Scientific Research in Computer Science, Engineering
and Information Technology (IJSRCSEIT) , v. 11, n. 2, p. 83–100, 2025. ISSN
2456-3307. DOI: 10.32628/CSEIT251112389. Disponível em:
https://doi.org/10.32628/CSEIT251112389.
```

```
KENNY, B. Lighthouse user flows. 2021. Disponível em:
https://web.dev/lighthouse-user-flows/.
```

```
LEARN, M. Otimizar a velocidade do site com o Lighthouse. 2026. Disponível em:
https://learn.microsoft.com/pt-br/microsoft-edge/devtools-guide-
chromium/lighthouse/lighthouse-notes.
```

LOPES, H. F.; BAVARESCO, J. L. B. **Análises e soluções performáticas para
aplicações em ReactJS**. 2023. Monografia (Trabalho de Conclusão de Curso
(Bacharelado em Ciência da Computação)) – Instituto Federal de Educação, Ciência e
Tecnologia Sul-rio-grandense, Campus Passo Fundo, Passo Fundo. Acessado em 12 de
maio de 2026.

```
META PLATFORMS, INC. React Documentation. [ S. l.: s. n. ], 2026. Acesso em: 14
jun. 2026. Disponível em: https://react.dev/reference/react/Component.
```

```
META PLATFORMS, INC. React Documentation – Using Hooks. [ S. l.: s. n. ], 2026.
Acesso em: 14 jun. 2026. Disponível em: https://react.dev/reference/react/hooks.
```

```
MOJEED, I. What is the virtual DOM in React? Acessado em 14 de junho de 2026.
LogRocket Blog. Fev. 2025. Disponível em:
https://medium.com/@narayanansundar02/react-js-virtual-dom-an-in-depth-
exploration-9f0e9caec7cf.
```

PAVIĆ, F.; BRKIĆ, L. Methods of Improving and Optimizing React Web-applications*.
In:* 2021 44th International Convention on Information, Communication and Electronic
Technology (MIPRO). [ _S. l.: s. n._ ], 2021. p. 1753–1758. DOI:
10.23919/MIPRO52101.2021.9596762.

ROCHA, E. d. O. **Estudo e análise de técnicas para melhorar desempenho de
sistemas front-end com React**. 2023. Monografia (Trabalho de Conclusão de Curso
(Bacharelado em Ciência da Computação)) – Universidade Federal de Campina Grande
(UFCG), Campina Grande - PB. Orientador: Prof. Dr. Cláudio de Souza Baptista.

```
SOUZA ALVES, A. A. de. O Impacto da Performance de Front-end na
Experiência do Usuário. Fatec São José do Rio Preto. 2025.
```

```
SPAGNOLI, L. d. A.; BECKER, K. Um Estudo sobre o Desenvolvimento Baseado
em Componentes. Porto Alegre, RS, 2003. Disponível em:http://www.pucrs.br/inf.
```

SUNDARAM, N. **React.js Virtual DOM: An In-Depth Exploration**. Acessado em
14 de junho de 2026. Jan. 2025. Disponível em:
https://medium.com/@narayanansundaram.

```
VEERI, V. Performance Optimization Techniques in React Applications: A
Comprehensive Analysis. 2024.
```
