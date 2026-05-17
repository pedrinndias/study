# NetProject API — Endpoints GET para o Data Mart

> **Tenant:** `demo2` &nbsp;|&nbsp; **Base URL:** `https://demo2.netproject.com.br/backend/api`
> **Spec fonte:** [`https://stg-oas.netproject.com.br/netproject.yml`](https://stg-oas.netproject.com.br/netproject.yml) — OpenAPI 3.0.2, NETPROJECT API v2.0.0
> Gerado em **17/05/2026**. Documento NÃO versionado.

---

## 1. Autenticação (uma vez por execução do ETL)

| Método | Path | Descrição |
|---|---|---|
| `POST` | `/oauth/token` | OAuth2 password grant — retorna `access_token` |

**Payload:**
```json
{
  "grant_type": "password",
  "client_id":     "93ccbc56-21b1-4923-8121-e4e14608b5d6",
  "client_secret": "7TApWWnaj4msvgjzxg9gtd59p6d8tYyKEAe9VhnI",
  "username":      "<usuario_demo2>",
  "password":      "<senha_demo2>"
}
```
Depois enviar `Authorization: Bearer <access_token>` em todos os GETs abaixo.

> ⚠️ Os campos `username` e `password` do `.env` (já lidos pelo `NetProjectAuthDTO`) precisam ser fornecidos pela NetProject (item pendente na ata de 04/05). Os `client_id`/`client_secret` desta mensagem já podem ser colocados no `.env`.

---

## 2. Mapa de Endpoints por Dimensão / Fato

A coluna **Embed** indica que o endpoint aceita `?embed=...` para trazer relacionamentos (padrão da API). A coluna **Paginação** indica que aceita `?page=` e `?per_page=`.

### 2.1. `Dim_Tempo`
Não tem endpoint próprio — é **gerada localmente** a partir dos campos de data presentes em `tasks`, `projects`, `timesheets`, `allocations`, `costs` (`starts_at`, `ends_at`, `actual_starts_at`, `actual_ends_at`, `date`).

---

### 2.2. `Dim_Info_Projetos`

| Método | Endpoint | Tag | Sumário | Paginação | Embed |
|---|---|---|---|---|---|
| GET | `/projects` | Project | Listar projetos | ✅ | ✅ |
| GET | `/projects/{project}` | Project | Buscar projeto por ID | — | ✅ |
| GET | `/projects/{project}/sub-projects` | Project | Subprojetos de um projeto | — | — |
| GET | `/sub-projects` | Project | Listar subprojetos | — | — |
| GET | `/project-statuses` | Project | Lista de status de projeto | ✅ | — |
| GET | `/project-situations` | Project | Lista de situações | ✅ | — |
| GET | `/project-priorities` | Project | Lista de prioridades | ✅ | — |
| GET | `/project-types` | Project | Tipos de projeto | ✅ | — |
| GET | `/project-classifications` | Project | Classificações | ✅ | — |
| GET | `/project-categorizations` | Project | Categorizações | ✅ | — |
| GET | `/project-patterns` | Project | Padrões de projeto | ✅ | — |
| GET | `/methodologies` | Methodology | Metodologias (PMI, ágil, etc.) | — | — |

**Filtros úteis em `/projects`:** `?user_id={uuid}` (filtrar por responsável), `?has_hierarchy_or_is_program=true`.

---

### 2.3. `Dim_Info_Tarefa`

| Método | Endpoint | Tag | Sumário |
|---|---|---|---|
| GET | `/tasks` | Task | Listar tarefas (suporta `?by_project={uuid}` e `?user_id={uuid}`) |
| GET | `/tasks/{task}` | Task | Buscar tarefa por ID |
| GET | `/tree/tasks/children/{task}` | Task | Filhos diretos de uma tarefa |
| GET | `/tree/tasks/descendants/{task}` | Task | Todos os descendentes |
| GET | `/tree/tasks/ancestors/{task}` | Task | Ancestrais (caminho até a raiz) |
| GET | `/tree/tasks/root/{task}` | Task | Raiz da árvore |
| GET | `/tree/tasks/leaves/{task}` | Task | Folhas (tarefas terminais) |
| GET | `/overdue-tasks/{user}` | Task | Tarefas atrasadas de um usuário |
| GET | `/task-statuses` | Task | Lista de status de tarefa |
| GET | `/task-types` | Task | Tipos de tarefa |
| GET | `/task-constraint-types` | Task | Tipos de restrição |
| GET | `/task-dependency-types` | Task | Tipos de dependência |
| GET | `/task-dependencies` | Task | Dependências entre tarefas |
| GET | `/task-allocation-types` | Task | Tipos de alocação por tarefa |
| GET | `/task-time-ranges` | Task | Faixas de tempo da tarefa |
| GET | `/task-checklists` | Task | Checklists de tarefa |

---

### 2.4. `Dim_Equipe` / Recursos

| Método | Endpoint | Tag | Sumário |
|---|---|---|---|
| GET | `/user` | User | Usuário autenticado |
| GET | `/accounts` | User | Listar contas de usuário |
| GET | `/accounts/{userId}` | User | Detalhe de conta |
| GET | `/auth/me` | Auth | Dados do usuário logado |
| GET | `/resources` | Resource | Listar recursos (humanos e materiais) |
| GET | `/resources/{resource}` | Resource | Detalhe de recurso |
| GET | `/project-teams` | Team | Equipes vinculadas a projetos |
| GET | `/project-team-members` | Team | Membros das equipes de projeto |
| GET | `/task-resources` | Task | Recursos alocados em tarefas |
| GET | `/task-team-members` | Task | Membros das equipes de tarefa |
| GET | `/teams` | Team | Listar equipes |
| GET | `/positions` | User | Cargos / posições |
| GET | `/skills` | Skill | Habilidades |
| GET | `/user-skill-levels` | Skill | Nível de habilidade por usuário |
| GET | `/skill-levels` | Skill | Níveis de habilidade |
| GET | `/user-types` | User | Tipos de usuário |
| GET | `/organizational-structures` | Org | Estrutura organizacional |
| GET | `/calendars` | Calendar | Calendários de trabalho |
| GET | `/work-days` | Calendar | Dias úteis |
| GET | `/vacations` | Calendar | Férias |
| GET | `/dayoffs` | Calendar | Folgas |
| GET | `/availability` | Calendar | Disponibilidade |
| GET | `/daily-availability` | Calendar | Disponibilidade diária |

---

### 2.5. `Dim_Portfolio` / Programa

| Método | Endpoint | Tag | Sumário |
|---|---|---|---|
| GET | `/portfolios` | Portfolio | Listar portfólios |
| GET | `/portfolio-explorer/summary` | Portfolio | Resumo do explorador de portfólio |
| GET | `/portfolio-explorer/projects` | Portfolio | Projetos no explorador de portfólio |
| GET | `/projects/{project}/portfolio-explorer-detail` | Portfolio | Detalhes do projeto no portfólio explorer |
| GET | `/programs` | Program | Listar programas (agrupamento de projetos por cliente) |
| GET | `/programs/{program}` | Program | Detalhe do programa |
| GET | `/project-portfolios` | Portfolio | Vínculo projeto ↔ portfólio |
| GET | `/project-portfolios/{project}` | Portfolio | Portfólios de um projeto |
| GET | `/clients` | Client | Listar clientes |
| GET | `/clients/{client}` | Client | Detalhe do cliente |
| GET | `/companies` | Company | Empresas |

---

### 2.6. `Dim_EVM` e Indicadores de Saúde (núcleo do Fato Projeto)

| Método | Endpoint | Tag | Sumário |
|---|---|---|---|
| GET | `/projects/{project}/evm` | Project | **EVM (PV, EV, AC, CPI, SPI, VAC, EAC)** do projeto |
| GET | `/projects/{project}/health` | Project | Indicadores de saúde do projeto |
| GET | `/explorer/projects/{project}/detailed` | Portfolio | Dados detalhados consolidados do projeto |
| GET | `/explorer/projects/{project}/charts` | Portfolio | Dados de gráficos do projeto |
| GET | `/project-explorer` | Portfolio | Explorador geral de projetos |
| GET | `/baselines/status/{processId}` | Methodology | Status da criação de baseline (assíncrono) |
| GET | `/sprints/{project}` | Methodology | Sprints do projeto (para metodologias ágeis) |
| GET | `/sprint/tasks/{task}` | Methodology | Tarefas do sprint associado |

> 💡 **Importante:** o cálculo direto de EVM já é feito pela API em `/projects/{project}/evm` — não precisamos recalcular CPI/SPI no Transform. Basta consumir e armazenar o snapshot diário.

---

### 2.7. `Fato_Projeto`

Composto por agregações sobre os dados consumidos via:

| Método | Endpoint | Sumário | Uso na Fato |
|---|---|---|---|
| GET | `/projects` | Lista | Iteração diária por projeto |
| GET | `/projects/{project}` | Detalhe | Orçamento, datas planejadas/reais |
| GET | `/projects/{project}/evm` | EVM | `custo_previsto`, `custo_real`, `custo_baseline` (PV/EV/AC) |
| GET | `/projects/{project}/health` | Saúde | `saude_financeira`, indicadores agregados |
| GET | `/explorer/projects/{project}/detailed` | Consolidado | `qtd_tarefas`, `qtd_concluidas`, `qtd_pendentes`, `qtd_atrasadas` |
| GET | `/project-costs` | Custos | Agregação financeira por projeto |
| GET | `/costs` | Custos calculados | Detalhamento de custos |
| GET | `/revenues` | Receitas | Receitas do projeto |
| GET | `/expenses` | Despesas | Despesas operacionais |
| GET | `/acquisitions` | Aquisições | Aquisições por projeto/tarefa |
| GET | `/cash-flow/summary` | Resumo de fluxo de caixa | KPIs financeiros |
| GET | `/cash-flow/time-series` | Série temporal de caixa | Histórico financeiro |
| GET | `/cash-flow/s-curve` | Curva S | Comparação planejado x realizado no tempo |
| GET | `/cash-flow/by-category` | Caixa por categoria | Drill-down |
| GET | `/cash-flow/monthly-detail` | Caixa mensal | Detalhamento por mês |
| GET | `/delays` | Atrasos registrados | Análise de aderência ao prazo |
| GET | `/delay-reasons` | Motivos de atraso | Dimensão de qualidade |

---

### 2.8. `Fato_Tarefa`

| Método | Endpoint | Sumário | Uso na Fato |
|---|---|---|---|
| GET | `/tasks?by_project={uuid}` | Lista por projeto | Iteração diária |
| GET | `/tasks/{task}` | Detalhe | `pct_conclusao`, `pct_previsto`, datas reais |
| GET | `/task-calculated-costs` | Custos calculados de tarefa | Custo real por tarefa |
| GET | `/task-added-value-inputs` | Entradas de valor agregado | Inputs para EV em nível de tarefa |
| GET | `/timesheets` | Apontamentos de horas | `horas_alocadas` |
| GET | `/timesheets/{timesheet}` | Detalhe de apontamento | Validação |
| GET | `/timesheets/automatic/{user}` | Apontamentos automáticos | Auditoria |
| GET | `/allocations` | Alocações | `responsaveis_durante_toda_tarefa` |
| GET | `/project-allocations` | Alocações por projeto | Variação de equipe |
| GET | `/project-allocations/matrix` | Matriz de alocação | Visão consolidada |
| GET | `/gantt/{project}` | Dados do Gantt | Sequência e dependências |
| GET | `/scheduler/{project}` | Dados do Scheduler | Alocações ao longo do tempo |
| GET | `/multi-scheduler` | Scheduler multi-projeto | Visão portfólio |
| GET | `/analyses/timesheet/day` | Análise de apontamento — dia | Snapshot diário de horas |
| GET | `/analyses/timesheet/week` | Análise — semana | Histórico semanal |
| GET | `/analyses/timesheet/month/{monthId}` | Análise — mês | Histórico mensal |
| GET | `/analyses/timesheet/user` | Análise por usuário | Produtividade |

---

### 2.9. Dimensões auxiliares (opcionais, mas recomendadas)

| Método | Endpoint | Para que serve |
|---|---|---|
| GET | `/risks` | Riscos por projeto (para análise de saúde) |
| GET | `/risk_statuses` | Status do risco |
| GET | `/risk_impacts`, `/risk_probabilities`, `/risk_qualifications`, `/risk_strategies`, `/risk_types` | Atributos do risco |
| GET | `/issues` | Issues / impedimentos |
| GET | `/issue-statuses`, `/issue-types` | Atributos da issue |
| GET | `/delays` | Histórico de atrasos |
| GET | `/lessons-learned` | Lições aprendidas (pós-projeto) |
| GET | `/stakeholders` | Stakeholders |
| GET | `/requirements` | Requisitos |
| GET | `/products` | Produtos entregáveis |
| GET | `/tags` | Tags (útil como dimensão livre) |
| GET | `/meeting-minutes` | Atas de reunião |

---

## 3. Recomendação de Ordem de Ingestão (ETL diário)

```
1. POST /oauth/token                              → obter Bearer token
2. GET  /project-statuses, /project-situations,   → Dimensões de domínio
        /project-priorities, /project-types,        (alta cardinalidade baixa)
        /task-statuses, /task-types,
        /methodologies, /portfolios, /programs,
        /clients, /companies
3. GET  /resources, /accounts, /positions,        → Dim_Equipe
        /project-teams, /project-team-members,
        /skills, /user-skill-levels
4. GET  /projects?page=N&per_page=50              → Itera lista de projetos
   para cada projeto:
     GET /projects/{id}                           → detalhe + datas
     GET /projects/{id}/evm                       → Dim_EVM (snapshot)
     GET /projects/{id}/health                    → indicadores de saúde
     GET /explorer/projects/{id}/detailed         → agregações
     GET /gantt/{id}                              → estrutura/sequência
     GET /scheduler/{id}                          → alocações
     GET /tasks?by_project={id}                   → tarefas do projeto
        para cada tarefa:
          GET /task-calculated-costs?...          → custo real (filtrável)
          (ou consumir batch: /task-calculated-costs paginado)
5. GET  /timesheets?page=N                        → horas apontadas
6. GET  /allocations, /project-allocations        → alocações
7. GET  /costs, /project-costs, /revenues,        → bloco financeiro
        /expenses, /acquisitions,
        /cash-flow/summary, /cash-flow/time-series
8. INSERT INTO dim_tempo                          → geração local com base nas datas coletadas
9. UPSERT nas tabelas fato com PK composta (dim_tempo + dim_X) → snapshot diário
```

---

## 4. Atualização sugerida do `endpoints_config.json`

Substituir o conteúdo atual de [`src/utils/endpoints_config.json`](src/utils/endpoints_config.json) por algo mais completo:

```json
{
  "api_settings": {
    "base_url": "https://{tenant}.netproject.com.br/backend/api"
  },
  "auth": {
    "token_endpoint": "/oauth/token"
  },
  "dimensions": {
    "Dim_Info_Projetos": {
      "list_projects": "/projects",
      "get_project": "/projects/{project}",
      "sub_projects": "/projects/{project}/sub-projects",
      "project_statuses": "/project-statuses",
      "project_situations": "/project-situations",
      "project_priorities": "/project-priorities",
      "project_types": "/project-types",
      "project_classifications": "/project-classifications",
      "project_categorizations": "/project-categorizations",
      "project_patterns": "/project-patterns",
      "methodologies": "/methodologies"
    },
    "Dim_Info_Tarefa": {
      "list_tasks": "/tasks",
      "get_task": "/tasks/{task}",
      "task_children": "/tree/tasks/children/{task}",
      "task_descendants": "/tree/tasks/descendants/{task}",
      "task_ancestors": "/tree/tasks/ancestors/{task}",
      "task_root": "/tree/tasks/root/{task}",
      "task_leaves": "/tree/tasks/leaves/{task}",
      "overdue_tasks": "/overdue-tasks/{user}",
      "task_statuses": "/task-statuses",
      "task_types": "/task-types",
      "task_constraint_types": "/task-constraint-types",
      "task_dependency_types": "/task-dependency-types",
      "task_dependencies": "/task-dependencies",
      "task_allocation_types": "/task-allocation-types",
      "task_time_ranges": "/task-time-ranges",
      "task_checklists": "/task-checklists",
      "gantt_data": "/gantt/{project}"
    },
    "Dim_Equipe": {
      "me": "/auth/me",
      "current_user": "/user",
      "accounts": "/accounts",
      "account": "/accounts/{userId}",
      "resources": "/resources",
      "resource": "/resources/{resource}",
      "project_teams": "/project-teams",
      "project_team_members": "/project-team-members",
      "task_resources": "/task-resources",
      "task_team_members": "/task-team-members",
      "teams": "/teams",
      "positions": "/positions",
      "skills": "/skills",
      "user_skill_levels": "/user-skill-levels",
      "skill_levels": "/skill-levels",
      "user_types": "/user-types",
      "organizational_structures": "/organizational-structures",
      "calendars": "/calendars",
      "work_days": "/work-days",
      "vacations": "/vacations",
      "dayoffs": "/dayoffs",
      "availability": "/availability",
      "daily_availability": "/daily-availability",
      "scheduler_data": "/scheduler/{project}",
      "multi_scheduler": "/multi-scheduler"
    },
    "Dim_Portfolio": {
      "portfolios": "/portfolios",
      "portfolio_summary": "/portfolio-explorer/summary",
      "portfolio_projects": "/portfolio-explorer/projects",
      "portfolio_project_detail": "/projects/{project}/portfolio-explorer-detail",
      "programs": "/programs",
      "program": "/programs/{program}",
      "project_portfolios": "/project-portfolios",
      "project_portfolio": "/project-portfolios/{project}",
      "clients": "/clients",
      "client": "/clients/{client}",
      "companies": "/companies",
      "project_health": "/projects/{project}/health"
    },
    "Dim_EVM": {
      "project_evm": "/projects/{project}/evm",
      "project_health": "/projects/{project}/health",
      "project_detailed": "/explorer/projects/{project}/detailed",
      "project_charts": "/explorer/projects/{project}/charts",
      "project_explorer": "/project-explorer",
      "baseline_status": "/baselines/status/{processId}",
      "sprints": "/sprints/{project}",
      "sprint_tasks": "/sprint/tasks/{task}"
    },
    "Fato_Projeto": {
      "list_projects": "/projects",
      "get_project": "/projects/{project}",
      "project_evm": "/projects/{project}/evm",
      "project_health": "/projects/{project}/health",
      "project_detailed": "/explorer/projects/{project}/detailed",
      "project_costs": "/project-costs",
      "costs": "/costs",
      "revenues": "/revenues",
      "expenses": "/expenses",
      "acquisitions": "/acquisitions",
      "cash_flow_summary": "/cash-flow/summary",
      "cash_flow_time_series": "/cash-flow/time-series",
      "cash_flow_s_curve": "/cash-flow/s-curve",
      "cash_flow_by_category": "/cash-flow/by-category",
      "cash_flow_monthly_detail": "/cash-flow/monthly-detail",
      "delays": "/delays",
      "delay_reasons": "/delay-reasons"
    },
    "Fato_Tarefa": {
      "list_tasks": "/tasks",
      "get_task": "/tasks/{task}",
      "task_calculated_costs": "/task-calculated-costs",
      "task_added_value_inputs": "/task-added-value-inputs",
      "timesheets": "/timesheets",
      "timesheet": "/timesheets/{timesheet}",
      "timesheet_user_auto": "/timesheets/automatic/{user}",
      "allocations": "/allocations",
      "project_allocations": "/project-allocations",
      "project_allocation_matrix": "/project-allocations/matrix",
      "gantt_data": "/gantt/{project}",
      "scheduler_data": "/scheduler/{project}",
      "multi_scheduler": "/multi-scheduler",
      "ts_analyses_day": "/analyses/timesheet/day",
      "ts_analyses_week": "/analyses/timesheet/week",
      "ts_analyses_month": "/analyses/timesheet/month/{monthId}",
      "ts_analyses_user": "/analyses/timesheet/user"
    },
    "Aux_Riscos_Issues": {
      "risks": "/risks",
      "risk_statuses": "/risk_statuses",
      "risk_impacts": "/risk_impacts",
      "risk_probabilities": "/risk_probabilities",
      "risk_qualifications": "/risk_qualifications",
      "risk_strategies": "/risk_strategies",
      "risk_types": "/risk_types",
      "risk_plan_responses": "/risk_plan_responses",
      "risk_plan_contingencies": "/risk_plan_contingencies",
      "issues": "/issues",
      "issue_statuses": "/issue-statuses",
      "issue_types": "/issue-types",
      "lessons_learned": "/lessons-learned",
      "stakeholders": "/stakeholders",
      "requirements": "/requirements",
      "products": "/products",
      "tags": "/tags",
      "meeting_minutes": "/meeting-minutes"
    }
  },
  "common_query_params": {
    "page": "page",
    "per_page": "per_page",
    "embed": "embed",
    "sort": "sort",
    "filter": "filter"
  }
}
```

---

## 5. Variáveis de ambiente (.env)

```dotenv
NETPROJECT_TENANT=demo2
NETPROJECT_CLIENT_ID=93ccbc56-21b1-4923-8121-e4e14608b5d6
NETPROJECT_CLIENT_SECRET=7TApWWnaj4msvgjzxg9gtd59p6d8tYyKEAe9VhnI
NETPROJECT_USERNAME=<pendente — solicitar ao Agne/Hayala>
NETPROJECT_PASSWORD=<pendente — solicitar ao Agne/Hayala>
```

> 🔐 **Segurança:** `client_secret` está em commit/log público desta conversa. Vale considerar rotacionar com a NetProject depois de validar o ambiente.

---

## 6. Resumo

- **211 paths** documentados na API total; **~85 endpoints GET** são relevantes para o DW.
- **EVM (CPI/SPI/PV/EV/AC/EAC/VAC)** já vem calculado pela API em `/projects/{project}/evm` — não precisa recalcular.
- Para snapshot diário, basta iterar `/projects` e, para cada projeto, chamar `evm`, `health`, `detailed`, `tasks?by_project=...`. O resto são lookups de dimensões com baixa cardinalidade (puxar 1x e atualizar semanalmente).
- O `endpoints_config.json` atual está incompleto e nomeado de forma inconsistente — bloco acima já traz uma versão pronta para colar.

**Arquivo salvo em:** `C:\Users\Pedro\AppData\Local\Temp\netproject_api_endpoints_dw.md`
