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

