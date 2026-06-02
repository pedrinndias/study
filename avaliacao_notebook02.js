const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType,
  ShadingType, VerticalAlign, PageNumber, PageBreak, LevelFormat,
  TabStopType, TabStopPosition
} = require('docx');
const fs = require('fs');
const path = require('path');

// ── Paleta de cores ────────────────────────────────────────────────────────
const C = {
  azul_escuro : "1B3A6B",
  azul_medio  : "2E75B6",
  azul_claro  : "D6E4F0",
  azul_header : "1F5C99",
  verde_escuro: "1E6631",
  verde_claro : "E2EFDA",
  amarelo_esc : "7F5A00",
  amarelo_cl  : "FFF2CC",
  vermelho_esc: "7B1C1C",
  vermelho_cl : "FCE4E4",
  cinza_escuro: "404040",
  cinza_claro : "F2F2F2",
  cinza_borda : "CCCCCC",
  branco      : "FFFFFF",
};

// ── Bordas reutilizáveis ───────────────────────────────────────────────────
const borda = (cor = C.cinza_borda, sz = 1) =>
  ({ style: BorderStyle.SINGLE, size: sz, color: cor });
const bordas_std = { top: borda(), bottom: borda(), left: borda(), right: borda() };
const bordas_sem = { top: borda(C.branco, 0), bottom: borda(C.branco, 0),
                     left: borda(C.branco, 0), right: borda(C.branco, 0) };

// ── Helpers de texto ─────────────────────────────────────────────────────
const txt = (t, opts = {}) => new TextRun({ text: t, font: "Arial", ...opts });
const txt_neg = (t, sz = 20, cor) => txt(t, { bold: true, size: sz, ...(cor ? { color: cor } : {}) });
const txt_nor = (t, sz = 20, cor) => txt(t, { bold: false, size: sz, ...(cor ? { color: cor } : {}) });
const txt_ital = (t, sz = 20) => txt(t, { italics: true, size: 20 });
const TAB = () => new TextRun({ text: "\t" });

// ── Parágrafo simples ─────────────────────────────────────────────────────
const par = (runs, opts = {}) => new Paragraph({ children: Array.isArray(runs) ? runs : [runs], font: "Arial", ...opts });
const par_vazio = (sz = 80) => new Paragraph({ children: [txt("")], spacing: { before: sz, after: 0 } });

// ── Parágrafo de heading com linha inferior azul ──────────────────────────
const heading1 = (texto) => new Paragraph({
  heading: HeadingLevel.HEADING_1,
  children: [new TextRun({ text: texto, font: "Arial" })],
  border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: C.azul_medio, space: 4 } },
  spacing: { before: 320, after: 160 },
});
const heading2 = (texto) => new Paragraph({
  heading: HeadingLevel.HEADING_2,
  children: [new TextRun({ text: texto, font: "Arial" })],
  spacing: { before: 240, after: 120 },
});
const heading3 = (texto) => new Paragraph({
  heading: HeadingLevel.HEADING_3,
  children: [new TextRun({ text: texto, font: "Arial" })],
  spacing: { before: 160, after: 80 },
});

// ── Bullet item ──────────────────────────────────────────────────────────
const bullet = (runs, lvl = 0) => new Paragraph({
  numbering: { reference: "bullets", level: lvl },
  children: Array.isArray(runs) ? runs : [runs],
  spacing: { before: 40, after: 40 },
});

// ── Célula de tabela ─────────────────────────────────────────────────────
const cel = (children, opts = {}) => new TableCell({
  borders: bordas_std,
  margins: { top: 90, bottom: 90, left: 130, right: 130 },
  children: Array.isArray(children) ? children : [par(children)],
  ...opts,
});

const cel_header = (texto, w, span = 1) => new TableCell({
  borders: bordas_std,
  margins: { top: 90, bottom: 90, left: 130, right: 130 },
  shading: { fill: C.azul_header, type: ShadingType.CLEAR },
  width: { size: w, type: WidthType.DXA },
  columnSpan: span,
  children: [par([txt_neg(texto, 18, C.branco)], { alignment: AlignmentType.CENTER })],
});

const cel_sub = (texto, w, fill = C.cinza_claro, bold = true) => new TableCell({
  borders: bordas_std,
  margins: { top: 90, bottom: 90, left: 130, right: 130 },
  shading: { fill, type: ShadingType.CLEAR },
  width: { size: w, type: WidthType.DXA },
  children: [par([txt_neg(texto, 18, C.cinza_escuro)], { alignment: AlignmentType.LEFT })],
});

// Badge visual: caixa colorida com texto
const badge_cel = (texto, fill, cor_txt, w) => new TableCell({
  borders: bordas_std,
  margins: { top: 90, bottom: 90, left: 130, right: 130 },
  shading: { fill, type: ShadingType.CLEAR },
  width: { size: w, type: WidthType.DXA },
  verticalAlign: VerticalAlign.CENTER,
  children: [par([txt_neg(texto, 18, cor_txt)], { alignment: AlignmentType.CENTER })],
});

const cel_w = (children, w, opts = {}) => new TableCell({
  borders: bordas_std,
  margins: { top: 90, bottom: 90, left: 130, right: 130 },
  width: { size: w, type: WidthType.DXA },
  children: Array.isArray(children) ? children : [par(children)],
  ...opts,
});

// ── TABELA DE KPIs ────────────────────────────────────────────────────────
const tabela_kpis = () => new Table({
  width: { size: 9360, type: WidthType.DXA },
  columnWidths: [2340, 2340, 2340, 2340],
  rows: [
    new TableRow({ children: [
      cel_header("Produtos gerados", 2340),
      cel_header("Registros válidos", 2340),
      cel_header("Artrite Pura (n)", 2340),
      cel_header("Desbalanceamento", 2340),
    ]}),
    new TableRow({ children: [
      new TableCell({ borders: bordas_std, margins:{top:120,bottom:120,left:130,right:130},
        shading:{fill:C.verde_claro,type:ShadingType.CLEAR}, width:{size:2340,type:WidthType.DXA},
        children:[
          par([txt_neg("11 / 11",36,C.verde_escuro)],{alignment:AlignmentType.CENTER}),
          par([txt_nor("Todos os outputs",16,C.verde_escuro)],{alignment:AlignmentType.CENTER}),
        ]}),
      new TableCell({ borders: bordas_std, margins:{top:120,bottom:120,left:130,right:130},
        shading:{fill:C.azul_claro,type:ShadingType.CLEAR}, width:{size:2340,type:WidthType.DXA},
        children:[
          par([txt_neg("22.728",36,C.azul_escuro)],{alignment:AlignmentType.CENTER}),
          par([txt_nor("de 43.554 totais",16,C.azul_escuro)],{alignment:AlignmentType.CENTER}),
        ]}),
      new TableCell({ borders: bordas_std, margins:{top:120,bottom:120,left:130,right:130},
        shading:{fill:C.azul_claro,type:ShadingType.CLEAR}, width:{size:2340,type:WidthType.DXA},
        children:[
          par([txt_neg("494",36,C.azul_escuro)],{alignment:AlignmentType.CENTER}),
          par([txt_nor("vs. 4.332 saudáveis",16,C.azul_escuro)],{alignment:AlignmentType.CENTER}),
        ]}),
      new TableCell({ borders: bordas_std, margins:{top:120,bottom:120,left:130,right:130},
        shading:{fill:C.amarelo_cl,type:ShadingType.CLEAR}, width:{size:2340,type:WidthType.DXA},
        children:[
          par([txt_neg("1 : 8,7",36,C.amarelo_esc)],{alignment:AlignmentType.CENTER}),
          par([txt_nor("Justifica RUS (NB03)",16,C.amarelo_esc)],{alignment:AlignmentType.CENTER}),
        ]}),
    ]}),
  ],
});

// ── TABELA DE RESULTADOS CIENTÍFICOS ─────────────────────────────────────
const tabela_resultados = () => {
  const W = [2800, 3200, 3360];
  const rows_data = [
    ["Prevalência global",
     "17,71%  (IC 95%: 17,21–18,21%)\nn = 22.728 registros válidos",
     "PLAUSÍVEL — Consistente com a literatura brasileira (15–20% em idosos segundo MS/2023)."],
    ["Prevalência por sexo",
     "Feminino: 25,11%  |  Masculino: 8,60%\nz = −32,426 · p < 0,001 ***",
     "EXCELENTE — Razão ~3:1 esperada; artrite reumatoide é 3× mais frequente em mulheres."],
    ["Prevalência por faixa etária",
     "60–69: 16,6%  →  70–79: 18,4%  →  80+: 20,5%",
     "PLAUSÍVEL — Tendência crescente com a idade; coerente com processo degenerativo."],
    ["IMC — bivariada",
     "Artrite: md 25,3 vs Saudável: md 24,8\nMann-Whitney U · p = 0,006 **",
     "SIGNIFICATIVO — Sobrecarga mecânica articular; literatura confirma associação IMC–artrose."],
    ["Frutas — bivariada (!) ",
     "Artrite: md 6 vs Saudável: md 5\np = 0,001 ** — artrite consome MAIS",
     "ATENÇÃO — Contraintuitivo. Provável viés de resposta pós-diagnóstico (busca por hábitos saudáveis após descoberta da doença). Discutir na seção Discussão."],
    ["Refrigerante — bivariada (!)",
     "Artrite: md 1 vs Saudável: md 2\np = 0,012 * — artrite consome MENOS",
     "ATENÇÃO — Mesmo viés possível. Reportar com cautela; pode ser limitação do desenho transversal."],
    ["Sexo — bivariada",
     "χ² = 91,67 · p < 0,001 ***\n65% mulheres (Artrite) vs 42% (Saudável)",
     "EXCELENTE — Variável mais discriminativa; essencial no modelo ML."],
    ["Plano de saúde — bivariada",
     "χ² = 7,83 · p = 0,005 **\nArtrite: 11,3% vs Saudável: 7,6%",
     "SIGNIFICATIVO — Artrite tem mais plano de saúde, provavelmente por busca ativa de diagnóstico."],
    ["Kruskal-Wallis — 4 bases",
     "Idade: H = 175,6 ***\nIMC: H = 413,9 ***",
     "CORRETO — Post-hoc Dunn com Bonferroni executado adequadamente."],
    ["Correlação Spearman (pairwise)",
     "Nenhum par com |ρ| > 0,50",
     "RESULTADO VÁLIDO — Baixa multicolinearidade. Favorece o ML (sem variáveis redundantes). Interpretar explicitamente no artigo."],
  ];

  const fill_avaliacao = (av) => {
    if (av.startsWith("PLAUSÍVEL")) return C.verde_claro;
    if (av.startsWith("EXCELENTE")) return C.verde_claro;
    if (av.startsWith("SIGNIFICATIVO")) return C.verde_claro;
    if (av.startsWith("CORRETO")) return C.verde_claro;
    if (av.startsWith("RESULTADO")) return C.azul_claro;
    return C.amarelo_cl;
  };
  const cor_avaliacao = (av) => {
    if (av.startsWith("ATENÇÃO")) return C.amarelo_esc;
    if (av.startsWith("RESULTADO")) return C.azul_escuro;
    return C.verde_escuro;
  };

  return new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: W,
    rows: [
      new TableRow({ children: [
        cel_header("Análise", W[0]),
        cel_header("Resultado obtido", W[1]),
        cel_header("Avaliação", W[2]),
      ]}),
      ...rows_data.map(([analise, resultado, avaliacao]) =>
        new TableRow({ children: [
          cel_w([par([txt_neg(analise, 18)])], W[0]),
          cel_w([par([txt_nor(resultado, 18)])], W[1]),
          new TableCell({
            borders: bordas_std,
            margins:{top:90,bottom:90,left:130,right:130},
            shading:{fill:fill_avaliacao(avaliacao),type:ShadingType.CLEAR},
            width:{size:W[2],type:WidthType.DXA},
            children:[par([txt_nor(avaliacao, 18, cor_avaliacao(avaliacao))])],
          }),
        ]})),
    ],
  });
};

// ── TABELA DE PROBLEMAS ────────────────────────────────────────────────────
const tabela_problemas = () => {
  const W = [1200, 1400, 3000, 2200, 1560];
  const problemas = [
    {
      sev:"CRÍTICO", fill_sev: C.vermelho_cl, cor_sev: C.vermelho_esc,
      area:"Tabela 2-B",
      problema:"Q092 (Depressão) = 100% \"Não\" em ambos os grupos",
      impacto:"Variável inútil como preditor. Excluída por design no NB01 (artrite pura = sem comorbidades). Gera impressão falsa de análise bivariada no artigo.",
      correcao:"Remover Q092 de VARS_QUAL ou adicionar nota explícita: \"excluída por critério de inclusão — constante nesta amostra\".",
    },
    {
      sev:"CRÍTICO", fill_sev: C.vermelho_cl, cor_sev: C.vermelho_esc,
      area:"Tabela 2-B",
      problema:"Tabela 2-B sem p-valor (qui-quadrado)",
      impacto:"O guia exige: Variável | n(Artrite) | %(Artrite) | n(Saudável) | %(Saudável) | p-valor. Sem o teste, a tabela não é comparativa — é apenas descritiva.",
      correcao:"Adicionar loop de χ² por variável qualitativa, ou mover p-valor da Tab 2-C para compor a Tab 2-B corretamente.",
    },
    {
      sev:"MODERADO", fill_sev: C.amarelo_cl, cor_sev: C.amarelo_esc,
      area:"Tabela 3-A",
      problema:"Tabela 3-A incompleta — apenas Idade e IMC",
      impacto:"Guia exige também: % Feminino, % Hipertensão, % Diabetes, dias exercício e dias ultraprocessados por base. Tabela insuficiente para o artigo.",
      correcao:"Expandir SQL_BASES para incluir C006, Q00201, Q03001, P035, P02501 e adicionar loop para variáveis qualitativas (χ² entre 4 bases).",
    },
    {
      sev:"MODERADO", fill_sev: C.amarelo_cl, cor_sev: C.amarelo_esc,
      area:"Tabelas 2-A e 2-C",
      problema:"Variável P04501 (TV/sedentarismo) ausente das análises",
      impacto:"Prevista no guia como preditora de sedentarismo. A base formatada provavelmente armazena como texto (ex.: \"3 horas\") — pd.to_numeric converte para NaN silenciosamente.",
      correcao:"Verificar o tipo em sqlite3. Se texto, converter com regex: str.extract(r'(\\d+)').astype(float) antes da conversão numérica.",
    },
    {
      sev:"MODERADO", fill_sev: C.amarelo_cl, cor_sev: C.amarelo_esc,
      area:"SQL / VARS_QUAL",
      problema:"Variáveis previstas no plano ausentes da análise",
      impacto:"N001 (autoavaliação saúde), VDF004 (renda) na bivariada, P02001, P023, P01601 e P02602 estão no guia CAPTO mas não são analisadas.",
      correcao:"Expandir SQL_COMPLETO, VARS_QUAL e VARS_QUANT. N001 e VDF004 já são carregados no SQL mas não entram nas análises bivariadas.",
    },
    {
      sev:"MENOR", fill_sev: C.azul_claro, cor_sev: C.azul_escuro,
      area:"Tabelas 2-A / 2-B",
      problema:"Formato \"long\" (uma linha por grupo) — inadequado para o artigo",
      impacto:"O padrão JHI exige formato \"wide\": colunas Artrite e Saudável paralelas com p-valor (\"Tabela 1\" de artigos científicos).",
      correcao:"Aplicar .pivot_table() ou reformular o loop para gerar uma linha por variável com colunas Artrite/Saudável.",
    },
    {
      sev:"MENOR", fill_sev: C.azul_claro, cor_sev: C.azul_escuro,
      area:"Célula tab2c",
      problema:"IC 95% via bootstrap não documentado no código",
      impacto:"Metodologicamente correto, mas o artigo precisa descrever o método. Sem referência o revisor pode questionar.",
      correcao:"Adicionar docstring: \"Bootstrap percentílico 500 amostras — IC 95% da diferença de medianas (Efron & Tibshirani, 1993)\".",
    },
    {
      sev:"MENOR", fill_sev: C.azul_claro, cor_sev: C.azul_escuro,
      area:"Gráfico 2-B",
      problema:"Proporção por coluna em vez de por linha",
      impacto:"Cada barra mostra % dentro da categoria (ex.: % da artrite que é mulher), não % do grupo que pertence à categoria. A interpretação do leitor é oposta ao esperado.",
      correcao:"Trocar tabela.div(tabela.sum(axis=1), axis=0) por tabela.div(tabela.sum(axis=0), axis=1) — normalizar por grupo, não por categoria.",
    },
  ];

  return new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: W,
    rows: [
      new TableRow({ children: [
        cel_header("Severidade", W[0]),
        cel_header("Localização", W[1]),
        cel_header("Problema", W[2]),
        cel_header("Impacto", W[3]),
        cel_header("Correção", W[4]),
      ]}),
      ...problemas.map(p => new TableRow({ children: [
        new TableCell({
          borders: bordas_std, margins:{top:90,bottom:90,left:130,right:130},
          shading:{fill:p.fill_sev,type:ShadingType.CLEAR}, width:{size:W[0],type:WidthType.DXA},
          verticalAlign: VerticalAlign.CENTER,
          children:[par([txt_neg(p.sev,16,p.cor_sev)],{alignment:AlignmentType.CENTER})],
        }),
        cel_w([par([txt(p.area,{size:18,italics:true})])], W[1]),
        cel_w([par([txt_nor(p.problema,18)])], W[2]),
        cel_w([par([txt_nor(p.impacto,18)])], W[3]),
        cel_w([par([txt_nor(p.correcao,18)])], W[4]),
      ]})),
    ],
  });
};

// ── TABELA CONFORMIDADE COM GUIA ──────────────────────────────────────────
const tabela_conformidade = () => {
  const W = [3200, 1680, 4480];
  const items = [
    // Fase 2
    ["2.1 · Tab 2-A — Univariada quantitativa","OK","Gerada com Média, DP, Mediana, Q1-Q3, Shapiro-Wilk.",true],
    ["2.2 · Tab 2-B — Univariada qualitativa","PARCIAL","Gerada (n e %), porém sem p-valor do qui-quadrado. Incompleta para JHI.",false],
    ["2.3 · Tab 2-C — Bivariada completa + IC 95%","OK","Testes Mann-Whitney U e χ² com IC 95% bootstrap. Completa.",true],
    ["2.4 · Tab 2-D — Pares com |ρ| > 0,50","OK","Correlação pairwise Spearman implementada. Nenhum par > 0,50.",true],
    ["2.A · Gráfico 2-A — Box plots quantitativas","OK","Gerado com paleta padronizada e ordem correta de grupos.",true],
    ["2.B · Gráfico 2-B — Barras qualitativas","PARCIAL","Gerado, porém proporção calculada por coluna (ver problema). Eixo Y correto (0–100%).",false],
    ["2.D · Gráfico 2-D — Heatmap Spearman","OK","Gerado com matriz pairwise. Triangulo inferior, escala RdBu.",true],
    ["Normalidade antes dos testes","OK","Shapiro-Wilk aplicado. Todas as variáveis não-normais → Mann-Whitney U correto.",true],
    // Fase 3
    ["3.2 · Tab 3-A — Comparação das 4 bases","PARCIAL","Só Idade e IMC. Faltam: % Feminino, Hipertensão, Diabetes, exercício, ultraprocessados.",false],
    ["3.3 · Tab 3-B — Prevalência por subgrupo","OK","Sexo, Faixa etária, Escolaridade, Renda — com IC 95% e Teste Z.",true],
    ["3.A · Gráfico 3-A — Box plots 4 bases","OK","Kruskal-Wallis + Dunn/Bonferroni. Quatro bases corretas.",true],
    ["3.B · Gráfico 3-B — Prevalência c/ IC 95%","OK","Barras horizontais com barras de erro e linha de referência global.",true],
    ["Filtros de integridade V0015 + M001","OK","22.728 de 43.554 aproveitados. Safety valve implementado.",true],
  ];

  return new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: W,
    rows: [
      new TableRow({ children: [
        cel_header("Produto previsto no guia", W[0]),
        cel_header("Status", W[1]),
        cel_header("Observação", W[2]),
      ]}),
      ...items.map(([produto, status, obs, ok]) => new TableRow({ children: [
        cel_w([par([txt_nor(produto,18)])], W[0]),
        new TableCell({
          borders: bordas_std, margins:{top:90,bottom:90,left:130,right:130},
          shading:{fill: ok ? C.verde_claro : C.amarelo_cl, type:ShadingType.CLEAR},
          width:{size:W[1],type:WidthType.DXA}, verticalAlign:VerticalAlign.CENTER,
          children:[par([txt_neg(status,18, ok ? C.verde_escuro : C.amarelo_esc)],{alignment:AlignmentType.CENTER})],
        }),
        cel_w([par([txt_nor(obs,18)])], W[2]),
      ]})),
    ],
  });
};

// ── TABELA QUALIDADE DO CÓDIGO ────────────────────────────────────────────
const tabela_codigo = () => {
  const W = [4500, 4860];
  const positivos = [
    "Safety valve em filtrar_v0015() e filtrar_m001() — evita zerar o df por formato inesperado",
    "Correlação pairwise Spearman (min_periods=30) — sem dropna() global que eliminava todas as linhas",
    "Guard if not tab2d.empty antes de sort_values() — corrige KeyError em lista vazia",
    "Bootstrap IC 95% da diferença de medianas (500 amostras) — mais robusto que fórmula paramétrica",
    "RANDOM_STATE = 42 documentado — garante reprodutibilidade dos testes",
    "Fallback se banco .db não encontrado — notebook não quebra sem base",
    "salvar_fig() e salvar_tab() centralizados — DRY, facilita manutenção",
    "Filtros V0015/M001 com múltiplos formatos: int, float, '1', '01', 'Realizada'",
  ];
  const pontos = [
    "P04501 (TV) sem tratamento para texto formatado — bug silencioso, variável some da análise",
    "N001 (autoavaliação saúde) carregado no SQL mas nunca usado nas análises",
    "VDF004 (renda) convertido numericamente mas ausente da bivariada e de VARS_QUANT",
    "Gráfico 2-B: proporção por coluna vs. por grupo — interpretação invertida",
    "Tabela 2-B sem coluna de p-valor — incompleto para o padrão JHI/SBIS",
    "Bootstrap não referenciado com citação — Efron & Tibshirani (1993) obrigatório no artigo",
  ];
  return new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: W,
    rows: [
      new TableRow({ children: [
        cel_header("Pontos positivos do código", W[0]),
        cel_header("Pontos a melhorar", W[1]),
      ]}),
      new TableRow({ children: [
        new TableCell({
          borders: bordas_std,
          margins:{top:90,bottom:90,left:130,right:130},
          shading:{fill:C.verde_claro,type:ShadingType.CLEAR},
          width:{size:W[0],type:WidthType.DXA},
          children: positivos.map(t => par([txt_nor("✓  " + t, 18, C.verde_escuro)], {spacing:{before:40,after:40}})),
        }),
        new TableCell({
          borders: bordas_std,
          margins:{top:90,bottom:90,left:130,right:130},
          shading:{fill:C.amarelo_cl,type:ShadingType.CLEAR},
          width:{size:W[1],type:WidthType.DXA},
          children: pontos.map(t => par([txt_nor("⚠  " + t, 18, C.amarelo_esc)], {spacing:{before:40,after:40}})),
        }),
      ]}),
    ],
  });
};

// ── TABELA PRIORIDADES ────────────────────────────────────────────────────
const tabela_prioridades = () => {
  const W = [720, 1200, 4800, 2640];
  const prioridades = [
    ["1","CRÍTICO","Remover Q092 de VARS_QUAL ou documentar como constante","Variável inútil, distorce a Tabela 2-B no artigo"],
    ["2","CRÍTICO","Adicionar p-valor (χ²) à Tabela 2-B","Obrigatório pelo guia e pelo padrão JHI para tabela comparativa"],
    ["3","MODERADO","Investigar e corrigir P04501 (TV) — converter texto formatado para numérico","Variável de sedentarismo relevante para o modelo CAPTO"],
    ["4","MODERADO","Expandir Tabela 3-A — incluir % Feminino, Hipertensão, Diabetes, exercício, ultraprocessados","SQL_BASES precisa ser ampliado; usar χ² para variáveis qualitativas"],
    ["5","MODERADO","Incluir N001 (autoavaliação saúde) e VDF004 (renda) nas análises bivariadas","Ambos já estão no SQL; só precisam entrar em VARS_QUAL/VARS_QUANT"],
    ["6","MENOR","Reformatar Tabelas 2-A e 2-B para formato \"wide\" antes do artigo","Usar .pivot_table() ou pivot_wider — padrão Tabela 1 de artigos JHI"],
    ["7","MENOR","Corrigir proporção do Gráfico 2-B (normalizar por grupo, não por categoria)","Trocar axis=1 por axis=0 na divisão do crosstab"],
    ["8","MENOR","Discutir resultados contraintuitivos de Frutas e Refrigerante na Discussão","Viés de resposta pós-diagnóstico — limitação inerente ao desenho transversal"],
  ];
  const fill_prio = (p) => p === "CRÍTICO" ? C.vermelho_cl : p === "MODERADO" ? C.amarelo_cl : C.azul_claro;
  const cor_prio  = (p) => p === "CRÍTICO" ? C.vermelho_esc : p === "MODERADO" ? C.amarelo_esc : C.azul_escuro;

  return new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: W,
    rows: [
      new TableRow({ children: [
        cel_header("#", W[0]),
        cel_header("Prioridade", W[1]),
        cel_header("Ação", W[2]),
        cel_header("Justificativa", W[3]),
      ]}),
      ...prioridades.map(([num, prio, acao, just]) => new TableRow({ children: [
        cel_w([par([txt_neg(num,18)],{alignment:AlignmentType.CENTER})], W[0]),
        new TableCell({
          borders:bordas_std, margins:{top:90,bottom:90,left:130,right:130},
          shading:{fill:fill_prio(prio),type:ShadingType.CLEAR}, width:{size:W[1],type:WidthType.DXA},
          verticalAlign:VerticalAlign.CENTER,
          children:[par([txt_neg(prio,16,cor_prio(prio))],{alignment:AlignmentType.CENTER})],
        }),
        cel_w([par([txt_nor(acao,18)])], W[2]),
        cel_w([par([txt_nor(just,18)])], W[3]),
      ]})),
    ],
  });
};

// ═══════════════════════════════════════════════════════════════════════════
// DOCUMENTO PRINCIPAL
// ═══════════════════════════════════════════════════════════════════════════
const doc = new Document({
  numbering: {
    config: [{
      reference: "bullets",
      levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u2022",
        alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 720, hanging: 360 } } } }],
    }],
  },
  styles: {
    default: { document: { run: { font: "Arial", size: 20 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 36, bold: true, font: "Arial", color: C.azul_escuro },
        paragraph: { spacing: { before: 320, after: 160 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: "Arial", color: C.azul_medio },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 1 } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, font: "Arial", color: C.cinza_escuro },
        paragraph: { spacing: { before: 160, after: 80 }, outlineLevel: 2 } },
    ],
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1440, right: 1200, bottom: 1440, left: 1200 },
      },
    },
    headers: {
      default: new Header({ children: [
        new Paragraph({
          children: [
            txt_neg("Avaliação — Notebook 02 · PNS 2019", 18, C.azul_medio),
            TAB(),
            txt_nor("Pedro Dias Soares · PUC Minas", 18, C.cinza_escuro),
          ],
          tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
          border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: C.azul_claro, space: 4 } },
        }),
      ]}),
    },
    footers: {
      default: new Footer({ children: [
        new Paragraph({
          children: [
            txt_nor("Análise Exploratória e Inferencial — Mineração de Dados em Saúde", 16, C.cinza_escuro),
            TAB(),
            txt_nor("Pág. ", 16, C.cinza_escuro),
            new TextRun({ children: [PageNumber.CURRENT], font: "Arial", size: 16, color: C.cinza_escuro }),
          ],
          tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
          border: { top: { style: BorderStyle.SINGLE, size: 4, color: C.azul_claro, space: 4 } },
        }),
      ]}),
    },
    children: [

      // ── CAPA ─────────────────────────────────────────────────────────────
      par_vazio(400),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [txt("RELATÓRIO DE AVALIAÇÃO", { bold: true, size: 44, color: C.azul_escuro, font: "Arial" })],
        spacing: { before: 0, after: 120 },
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [txt("Notebook 02 — Análise Exploratória e Inferencial", { bold: true, size: 32, color: C.azul_medio, font: "Arial" })],
        spacing: { before: 0, after: 80 },
        border: { bottom: { style: BorderStyle.SINGLE, size: 10, color: C.azul_medio, space: 6 } },
      }),
      par_vazio(160),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [txt("Projeto de Mineração de Dados em Saúde · PNS 2019", { size: 24, color: C.cinza_escuro, font: "Arial" })],
        spacing: { before: 0, after: 60 },
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [txt("Artrite e Reumatismo em Idosos Brasileiros", { size: 24, italics: true, color: C.cinza_escuro, font: "Arial" })],
        spacing: { before: 0, after: 160 },
      }),
      new Table({
        width: { size: 6000, type: WidthType.DXA },
        columnWidths: [2400, 3600],
        rows: [
          new TableRow({ children: [
            new TableCell({ borders: bordas_sem, margins:{top:60,bottom:60,left:0,right:120},
              children:[par([txt_neg("Pesquisador:", 20, C.azul_escuro)],{alignment:AlignmentType.RIGHT})] }),
            new TableCell({ borders: bordas_sem, margins:{top:60,bottom:60,left:120,right:0},
              children:[par([txt_nor("Pedro Dias Soares", 20)])] }),
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: bordas_sem, margins:{top:60,bottom:60,left:0,right:120},
              children:[par([txt_neg("Orientador:", 20, C.azul_escuro)],{alignment:AlignmentType.RIGHT})] }),
            new TableCell({ borders: bordas_sem, margins:{top:60,bottom:60,left:120,right:0},
              children:[par([txt_nor("Prof. Dr. Luis Enrique Zárate — PUC Minas", 20)])] }),
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: bordas_sem, margins:{top:60,bottom:60,left:0,right:120},
              children:[par([txt_neg("Periódico-alvo:", 20, C.azul_escuro)],{alignment:AlignmentType.RIGHT})] }),
            new TableCell({ borders: bordas_sem, margins:{top:60,bottom:60,left:120,right:0},
              children:[par([txt_nor("Journal of Health Informatics (JHI/SBIS)", 20)])] }),
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: bordas_sem, margins:{top:60,bottom:60,left:0,right:120},
              children:[par([txt_neg("Base de dados:", 20, C.azul_escuro)],{alignment:AlignmentType.RIGHT})] }),
            new TableCell({ borders: bordas_sem, margins:{top:60,bottom:60,left:120,right:0},
              children:[par([txt_nor("Microdados PNS 2019 — IBGE (293.726 registros)", 20)])] }),
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: bordas_sem, margins:{top:60,bottom:60,left:0,right:120},
              children:[par([txt_neg("Data:", 20, C.azul_escuro)],{alignment:AlignmentType.RIGHT})] }),
            new TableCell({ borders: bordas_sem, margins:{top:60,bottom:60,left:120,right:0},
              children:[par([txt_nor("Maio de 2026", 20)])] }),
          ]}),
        ],
      }),

      // ── PÁGINA 2 ─────────────────────────────────────────────────────────
      new Paragraph({ children: [new PageBreak()] }),

      heading1("1. Visão Geral da Execução"),
      par([txt_nor(
        "O Notebook 02 foi executado com sucesso: todos os 11 produtos previstos foram gerados sem erros de runtime. " +
        "Os filtros de integridade da entrevista (V0015 = 1 e M001 = 1) funcionaram corretamente, resultando em 22.728 " +
        "registros válidos dos 43.554 idosos originais (52,2% de aproveitamento). " +
        "O dataset bivariado final conta com 494 casos de Artrite Pura e 4.332 Saudáveis, " +
        "gerando um desbalanceamento de 1:8,7 — o que justifica a aplicação do Random Under Sampler (RUS) no Notebook 03.",
        20)]),
      par_vazio(160),
      tabela_kpis(),

      par_vazio(240),
      heading1("2. Resultados Científicos — Qualidade e Plausibilidade"),
      par([txt_nor(
        "Os resultados obtidos são em geral coerentes com a literatura nacional e internacional sobre artrite e reumatismo em idosos. " +
        "Destacam-se dois achados contraintuitivos que requerem interpretação cuidadosa na seção de Discussão do artigo.",
        20)]),
      par_vazio(120),
      tabela_resultados(),

      par_vazio(200),
      heading2("2.1 Resultados que merecem destaque positivo"),
      bullet([txt_neg("Prevalência global de 17,71% ",20), txt_nor("com IC 95% estreito (17,21–18,21%) — dado citável diretamente na Introdução do artigo.",20)]),
      bullet([txt_neg("Diferença por sexo massiva: ",20), txt_nor("feminino 25,11% vs masculino 8,60%, z = −32,4, p < 0,001***. Razão ~3:1 esperada para artrite reumatoide.",20)]),
      bullet([txt_neg("IMC significativamente maior no grupo Artrite ",20), txt_nor("(p = 0,006**) — associação com sobrecarga mecânica bem documentada.",20)]),
      bullet([txt_neg("Ausência de multicolinearidade severa ",20), txt_nor("(nenhum par |ρ| > 0,50) — favorece a interpretabilidade dos modelos de ML.",20)]),

      par_vazio(120),
      heading2("2.2 Resultados contraintuitivos — análise obrigatória no artigo"),
      par([txt_nor(
        "Dois resultados contradizem a hipótese inflamatória original do estudo: o grupo Artrite consome " +
        "mais frutas (p = 0,001**) e menos refrigerante (p = 0,012*) que os Saudáveis. " +
        "A explicação mais provável é o viés de resposta pós-diagnóstico: após o diagnóstico de artrite, " +
        "o paciente tende a modificar os hábitos alimentares em busca de melhora — fenômeno documentado na literatura " +
        "como \"reverse causation\" em estudos transversais.",
        20)]),
      par_vazio(80),
      par([txt_nor(
        "Este achado é uma limitação inerente ao delineamento transversal da PNS 2019 (exposição e desfecho medidos simultaneamente) " +
        "e deve ser explicitamente discutido. Ironicamente, fortalece a justificativa para o uso de ML: " +
        "algoritmos não-lineares como Random Forest e AdaBoost capturam padrões complexos que a correlação simples não consegue separar.",
        20)]),

      new Paragraph({ children: [new PageBreak()] }),

      heading1("3. Problemas Identificados"),
      par([txt_nor(
        "A análise identificou 8 problemas distribuídos em três níveis de severidade. " +
        "Os dois problemas críticos devem ser corrigidos antes de qualquer revisão do orientador, " +
        "pois afetam diretamente a validade das tabelas para o artigo.",
        20)]),
      par_vazio(120),
      tabela_problemas(),

      new Paragraph({ children: [new PageBreak()] }),

      heading1("4. Conformidade com o Guia de Análises"),
      par([txt_nor(
        "O notebook cobre integralmente as Fases 2 e 3 do Guia de Análises. " +
        "Dois itens estão parcialmente implementados (Tabela 2-B sem p-valor e Tabela 3-A incompleta). " +
        "As Fases 1 (pré-processamento), 4 (ML) e 5 (Feature Importance) estão previstas para o Notebook 03.",
        20)]),
      par_vazio(120),
      tabela_conformidade(),

      par_vazio(200),
      heading2("4.1 Produtos não cobertos neste notebook (previstos para NB03)"),
      bullet([txt_nor("Fase 1 — Tabelas 1-A (Missing data), 1-B (Outliers), 1-C (IMC categorizado), 1-D (distribuição pós-RUS)",20)]),
      bullet([txt_nor("Fase 4 — Regressão Logística (OR brutos e ajustados) · Forest plot · Otimização de hiperparâmetros",20)]),
      bullet([txt_nor("Fase 4 — Validação cruzada 10-fold · Métricas no conjunto de teste · Teste-T entre modelos",20)]),
      bullet([txt_nor("Fase 5 — Feature Importance por algoritmo (DT, RF, AdaBoost) · Extração de regras · Dimensão CAPTO",20)]),

      new Paragraph({ children: [new PageBreak()] }),

      heading1("5. Qualidade Técnica do Código"),
      par([txt_nor(
        "O código demonstra maturidade técnica nas soluções de robustez implementadas, " +
        "especialmente nos filtros de integridade e no tratamento de formatos variáveis da PNS. " +
        "Os pontos a melhorar são principalmente de cobertura de variáveis, não de correção técnica.",
        20)]),
      par_vazio(120),
      tabela_codigo(),

      new Paragraph({ children: [new PageBreak()] }),

      heading1("6. Prioridades antes do Notebook 03"),
      par([txt_nor(
        "As correções abaixo estão ordenadas por impacto no artigo final. " +
        "Os itens 1 e 2 são obrigatórios; os demais melhoram substancialmente a qualidade analítica e a completude frente ao guia.",
        20)]),
      par_vazio(120),
      tabela_prioridades(),

      par_vazio(200),
      heading1("7. Conclusão"),
      par([txt_nor(
        "O Notebook 02 está em bom estado: funcional, sem erros de runtime e com resultados científicos plausíveis. " +
        "A prevalência de 17,71% de artrite em idosos brasileiros é um dado robusto, citável no artigo. " +
        "A diferença massiva por sexo (z = −32,4, p < 0,001***) e a associação com IMC (p = 0,006**) " +
        "são os achados mais sólidos para embasar a seleção de atributos do modelo CAPTO.",
        20)]),
      par_vazio(80),
      par([txt_nor(
        "Antes de avançar para o Notebook 03, dois pontos críticos devem ser resolvidos: " +
        "(1) remover ou documentar a variável Q092 que é constante nesta amostra por design, e " +
        "(2) adicionar o qui-quadrado à Tabela 2-B para que ela atenda o padrão JHI. " +
        "As demais correções ampliam a cobertura de variáveis previstas no guia CAPTO e melhoram a qualidade das visualizações.",
        20)]),
      par_vazio(80),
      par([txt_nor(
        "O desbalanceamento de 1:8,7 entre as classes (494 Artrite Pura vs 4.332 Saudáveis) está adequadamente " +
        "dimensionado para a aplicação do Random Under Sampler no treino. " +
        "A ausência de multicolinearidade severa entre as preditoras (nenhum par |ρ| > 0,50) " +
        "é um resultado positivo que deve ser reportado na seção de Materiais e Métodos do artigo.",
        20)]),

      par_vazio(200),
      new Paragraph({
        border: { top: { style: BorderStyle.SINGLE, size: 4, color: C.cinza_borda, space: 8 } },
        children: [
          txt_nor("Relatório gerado por assistente de pesquisa IA (Claude — Anthropic)  |  Baseado em: Notebook 02 executado · Guia de Análises PNS 2019 · Plano de Artigo Científico (Pedro Dias Soares)  |  PUC Minas — Prof. Dr. Luis Enrique Zárate", 16, C.cinza_escuro),
        ],
        alignment: AlignmentType.CENTER,
        spacing: { before: 80, after: 0 },
      }),
    ],
  }],
});

Packer.toBuffer(doc).then(buf => {
  const outDir = path.join(__dirname, 'outputs');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, 'Avaliacao_Notebook02_PNS2019.docx');
  fs.writeFileSync(outPath, buf);
  console.log('OK', outPath);
});