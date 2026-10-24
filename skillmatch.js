const candidato = {
  nome: "Henrique Pedroso",
  areaInteresse: "Desenvolvedor FullStack jr",
  habilidades: [
    "HTML",
    "CSS",
    "JavaScript",
    "Git",
    "C#",
    ".NET",
    "MySQL",
    "Tailwind",
  ],
  experienciaAnos: 1,
};

class Vaga {
  constructor(id, empresa, cargo, modalidade, requisitos) {
    this.id = id;
    this.empresa = empresa;
    this.cargo = cargo;
    this.modalidade = modalidade;
    this.requisitos = requisitos;
  }

  resumo() {
    return `${this.cargo} na ${this.empresa} (${this.modalidade})`;
  }

  habilidadesQueTem(habilidadesCandidato) {
    return this.requisitos.filter((req) => habilidadesCandidato.includes(req));
  }

  habilidadesFaltantes(habilidadesCandidato) {
    return this.requisitos.filter((req) => !habilidadesCandidato.includes(req));
  }

  calcularCompatibilidade(habilidadesCandidato) {
    const tem = this.habilidadesQueTem(habilidadesCandidato).length;
    return (tem / this.requisitos.length) * 100;
  }
}

class VagaRemota extends Vaga {
  constructor(id, empresa, cargo, requisitos, fusoHorario) {
    super(id, empresa, cargo, "remoto", requisitos);
    this.fusoHorario = fusoHorario;
  }

  resumo() {
    return `${super.resumo()} - Fuso: ${this.fusoHorario}`;
  }
}

function classificarCompatibilidade(percentual) {
  if (percentual >= 80) {
    return "Alta compatibilidade";
  } else if (percentual >= 50) {
    return "Média compatibilidade";
  } else {
    return "Baixa compatibilidade";
  }
}

const vagas = [
  new Vaga(1, "Tech Floripa", "Desenvolvedor Fullstack Jr", "presencial", [
    "HTML",
    "CSS",
    "JavaScript",
    "Git",
    "React",
  ]),
  new VagaRemota(
    2,
    "Web Solutions",
    "Desenvolvedor Fullstack Jr",
    ["HTML", "CSS", "JavaScript", "TypeScript", "Figma"],
    "UTC-3",
  ),
  new VagaRemota(
    3,
    "Hcode",
    "Desenvolvedor Fullstack Pleno",
    ["JavaScript", "TypeScript", "Next.js", "Jest", "Docker"],
    "UTC-3",
  ),
];
const resultados = vagas.map((vaga) => {
  const percentual = vaga.calcularCompatibilidade(candidato.habilidades);
  return {
    vaga: vaga,
    percentual: percentual,
    classificacao: classificarCompatibilidade(percentual),
    faltantes: vaga.habilidadesFaltantes(candidato.habilidades),
  };
});

for (const r of resultados) {
  console.log("-----------------------------");
  console.log(r.vaga.resumo());
  console.log(`Compatibilidade: ${r.percentual}% - ${r.classificacao}`);
  console.log(`Faltam: ${r.faltantes.join(", ")}`);
}

const melhor = resultados.reduce((melhorAteAgora, atual) => {
  return atual.percentual > melhorAteAgora.percentual ? atual : melhorAteAgora;
});

console.log("=============================");
console.log(`Vaga mais compatível: ${melhor.vaga.resumo()}`);
console.log(`Compatibilidade: ${melhor.percentual}%`);

const contagem = {};

for (const r of resultados) {
  for (const habilidade of r.faltantes) {
    contagem[habilidade] = (contagem[habilidade] || 0) + 1;
  }
}

const prioridades = Object.entries(contagem)
  .sort((a, b) => b[1] - a[1])
  .map(
    ([habilidade, qtd]) => `${habilidade} (${qtd} vaga${qtd > 1 ? "s" : ""})`,
  );

console.log("=============================");
console.log("Recomendação de estudo (da maior para a menor prioridade):");
prioridades.forEach((item, i) => console.log(`${i + 1}. ${item}`));