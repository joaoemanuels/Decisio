<div align="center">

```
██████╗ ███████╗ ██████╗██╗███████╗██╗ ██████╗
██╔══██╗██╔════╝██╔════╝██║██╔════╝██║██╔═══██╗
██║  ██║█████╗  ██║     ██║███████╗██║██║   ██║
██║  ██║██╔══╝  ██║     ██║╚════██║██║██║   ██║
██████╔╝███████╗╚██████╗██║███████║██║╚██████╔╝
╚═════╝ ╚══════╝ ╚═════╝╚═╝╚══════╝╚═╝ ╚═════╝
```

**Um motor de decisão para desenvolvedores.**
Não é um quiz. Não é um wizard. É um sistema de raciocínio estruturado.

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Status](https://img.shields.io/badge/status-completo-9fa7ff?style=flat-square)]()
[![Licença](https://img.shields.io/badge/licença-MIT-0e0e0e?style=flat-square)]()

</div>

---

## O que é o Decisio?

O Decisio é uma aplicação web SaaS que ajuda desenvolvedores a tomarem melhores decisões técnicas — frameworks, stacks, bibliotecas — através de um motor de decisão estruturado.

O usuário responde uma série de perguntas dinâmicas e contextuais. O motor pontua cada resposta contra um sistema de regras com pesos e produz uma recomendação ranqueada, com uma explicação transparente de _por que_ cada opção venceu.

> **O Decisio não é um quiz.** É um sistema de raciocínio com uma interface construída ao redor dele.

---

## Conceito Central

```
Usuário responde as perguntas
        ↓
Motor aplica regras de pontuação com pesos
        ↓
Opções acumulam pontos em múltiplas categorias
        ↓
Recomendação ranqueada + explicação transparente
```

A lógica de decisão vive em JSON. A UI renderiza. O motor avalia. Essas três camadas nunca se misturam.

---

## Funcionalidades

### Fluxo de Decisão

- Questionário passo a passo com lógica condicional
- Indicador de progresso ao longo de todas as etapas
- Navegação Anterior / Próximo com preservação de estado
- Perguntas que se adaptam com base nas respostas anteriores

### Motor de Decisão

- Estrutura de perguntas e regras baseada em JSON
- Pontuação com peso por resposta (ex: `+2 React`, `+3 Next.js`)
- Acúmulo de pontos em múltiplas dimensões
- Ranking final baseado na pontuação total

### Sistema de Resultados

- Recomendação principal destacada com nível de confiança
- Explicação da lógica de decisão
- Breakdown de pontuação por categoria (UX, performance, escalabilidade, etc.)
- Opções alternativas ranqueadas abaixo do resultado principal

### Exportação

- Exportar resultado como JSON
- Exportar resultado como CSV
- Exportar como relatório PDF legível

---

## Arquitetura

```
src/
├── assets/               # Arquivos estáticos: imagens, fontes, ícones
├── components/
│   ├── ui/               # Botões, inputs, modais, badges
│   ├── layout/           # Sidebar, Header, Footer
│   └── shared/           # Componentes usados em múltiplas features
├── features/
│   ├── decision/         # Fluxo do questionário, lógica de etapas
│   ├── engine/           # Pontuação, avaliação de regras, ranking
│   ├── results/          # Exibição da recomendação, breakdown
│   ├── history/          # Decisões salvas, revisão
│   └── export/           # Exportação JSON e PDF
├── hooks/                # useDecision, useHistory, useEngine
├── lib/                  # Configurações de libs de terceiros
├── pages/                # Componentes de página no nível de rota
├── routes/               # Configuração do React Router, guards
├── services/             # Comunicação com APIs externas
├── styles/               # CSS global, variáveis, tokens
├── utils/                # Formatadores, validadores, helpers
├── App.jsx
└── main.jsx
```

### Princípios Arquiteturais

**Separação de responsabilidades** — estrutura de perguntas, regras de pontuação e lógica de avaliação estão sempre em arquivos separados. Nenhuma lógica de decisão vive dentro de componentes React.

**Motor orientado a JSON** — todas as perguntas, condições e pesos de pontuação são definidos em JSON. Adicionar um novo fluxo de decisão não exige nenhuma mudança no código do motor.

**Organização por feature** — o código é agrupado por domínio (`features/decision`, `features/engine`), não por tipo de arquivo. Cada feature possui seus próprios componentes, hooks e lógica.

---

## Motor de Decisão — Como Funciona

O motor é o núcleo do Decisio. Abaixo uma visão simplificada de como a pontuação funciona:

```js
// Exemplo: uma pergunta com pontuação com pesos
{
  "id": "q_tamanho_time",
  "text": "Qual é o tamanho do seu time?",
  "options": [
    {
      "label": "Solo ou time pequeno (1–3)",
      "scores": { "nextjs": 2, "react": 3, "vue": 2 }
    },
    {
      "label": "Time médio (4–15)",
      "scores": { "nextjs": 3, "react": 2, "angular": 2 }
    },
    {
      "label": "Time grande / enterprise",
      "scores": { "angular": 4, "nextjs": 2 }
    }
  ]
}
```

Após todas as perguntas serem respondidas, o motor soma as pontuações por opção e as ranqueia. O resultado inclui não apenas o vencedor, mas a margem de confiança e um breakdown por categoria.

---

## Stack Tecnológica

| Camada        | Tecnologia                   |
| ------------- | ---------------------------- |
| Framework     | React 18                     |
| Build tool    | Vite 5                       |
| Roteamento    | React Router v6              |
| Estilização   | CSS
| Exportação    | jsPDF                        |
| Linting       | ESLint + Prettier            |

---

## Como Rodar

### Pré-requisitos

- Node.js 18+
- npm ou pnpm

### Instalar e rodar

```bash
# Clonar o repositório
git clone https://github.com/joaoemanuels/decisio.git
cd decisio

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

### Build de produção

```bash
npm run build
npm run preview
```

---

## Status do Projeto

| Funcionalidade               | Status                |
| ---------------------------- | --------------------- |
| UI do fluxo de decisão       | ✅ Completo        |
| Motor de decisão (pontuação) | ✅ Completo        |
| Sistema de resultados        | ✅ Completo        |
| Exportação (JSON)            | ✅ Completo        |
| Exportação (PDF)             | ✅ Completo        |

---

## Roadmap

- **Feedback de pontuação em tempo real** — exibir mudanças de pontuação conforme o usuário seleciona respostas
- **Comparação de decisões** — visualizar duas decisões passadas lado a lado

## Licença

MIT — faça o que quiser com isso.

---

<div align="center">
  <sub>Construído com product thinking. Projetado para desenvolvedores.</sub>
</div>
