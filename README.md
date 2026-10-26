# SkillMatch JS

Simulador de compatibilidade entre o perfil de um candidato e vagas de Front-End/Fullstack júnior, feito em JavaScript puro.

**Autor:** Henrique Pedroso

## O que o sistema faz

O sistema compara as habilidades do candidato com os requisitos de 3 vagas fictícias. Para cada vaga, ele calcula o percentual de compatibilidade, classifica (Alta, Média ou Baixa), lista as habilidades que faltam, indica a vaga mais compatível e recomenda o que estudar.

## Como executar (passo a passo)

1. Instale o Node.js em https://nodejs.org
2. Clone o repositório: `git clone https://github.com/HenriquePedrosoTech/skillmatch-js.git`
3. Entre na pasta: `cd skillmatch-js`
4. Execute: `node skillmatch.js`

O programa mostra "Carregando vagas do servidor...", espera 2 segundos (servidor simulado) e imprime o relatório completo no console.

## Regra de cálculo da compatibilidade

```
compatibilidade = (requisitos que o candidato tem ÷ total de requisitos da vaga) × 100
```

Exemplo: a Tech Floripa pede 5 requisitos e eu tenho 4, então 4 ÷ 5 × 100 = 80%.

Escolhi essa regra porque é simples de entender e de explicar, e é aplicada da mesma forma em todas as vagas, o que deixa a comparação justa.

| Percentual | Classificação |
|---|---|
| 80% a 100% | Alta compatibilidade |
| 50% a 79% | Média compatibilidade |
| 0% a 49% | Baixa compatibilidade |

O limite de 80% conta como Alta (uso `>=`), e a Tech Floripa cai exatamente nesse limite.

## Critério de prioridade dos estudos

Uma habilidade faltante é mais prioritária quanto **mais vagas a exigem**. O sistema conta quantas vagas pedem cada habilidade que me falta e mostra a lista da maior para a menor. Escolhi esse critério porque estudar o que aparece em mais vagas aumenta minhas chances em mais oportunidades.

## Conceitos do Módulo 01 e onde foram aplicados

| Conceito | Onde aparece |
|---|---|
| Tipos de dados (string, número, boolean, array, objeto) | `candidato`, `vagas`, `sucesso` |
| `const` e `let` | `const` em quase tudo, `let` em `criarContador` |
| Operadores lógicos e matemáticos | `calcularCompatibilidade`, `>=`, `!` |
| `if-else` | `classificarCompatibilidade` |
| Operador ternário | `reduce` da melhor vaga e plural de "vaga(s)" |
| Laços `for` / `for...of` | `exibirResultados` e contagem das habilidades faltantes |
| Funções e arrow functions | `classificarCompatibilidade`, métodos de array |
| Métodos de array | `filter`, `map`, `reduce` |
| Objetos e chaves/valores | `candidato`, `contagem` |
| Classes, construtor, atributos, métodos | `Vaga` e `VagaRemota` |
| Herança | `VagaRemota extends Vaga` (acrescenta `fusoHorario` e sobrescreve `resumo`) |
| `this` | métodos da classe `Vaga` |
| Callback | `exibirResultados(lista, formatar)` |
| Closure | `criarContador` |
| Promise e async/await | `buscarVagas` e `main` |

## var, let e const

- `var`: escopo de função, permite redeclarar e sofre *hoisting*. Por isso evitei usar.
- `let`: escopo de bloco, o valor pode mudar.
- `const`: escopo de bloco, não pode ser reatribuída. É a que mais uso.

## Como a internet e o cliente-servidor funcionam

Quando acesso um site ou uso um programa, o meu dispositivo (cliente) envia uma requisição pela internet. O servidor recebe, processa e devolve uma resposta. Essa troca segue protocolos como o HTTP.

No projeto, `main` é o **cliente** que pede as vagas e `buscarVagas` é o **servidor simulado**: usa uma Promise com `setTimeout` de 2 segundos para imitar o atraso da rede, e `try/catch` trata a falha.

## Organização do projeto

- **Kanban (Trello):** https://trello.com/b/AbYpRdWY/skillmatch-js

**Branches:**

- `feat/dados`: candidato e lista de vagas
- `feat/classes`: classes `Vaga` e `VagaRemota`, herança e `this`
- `feat/calculo`: compatibilidade, classificação e habilidades faltantes
- `melhor-vaga`: vaga mais compatível (`reduce`) e recomendação de estudo
- `feat/async`: Promise, async/await, callback e closure
- `docs/readme`: README

## Extensões do VS Code

- Prettier: formata o código automaticamente
- Live Server: abre páginas HTML com recarregamento automático

## Vídeo de apresentação
(https://drive.google.com/file/d/1GhyMJyi7SlpYSZUjQSApM4d50uU1IxAL/view?usp=drive_link)