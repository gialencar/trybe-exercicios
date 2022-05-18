class estudante {
  readonly matricula: number;
  readonly nome: string;
  notaPort: number = 0;
  notaMat: number = 0;
  notaGeo: number = 0;
  notaHist: number = 0;
  notaTrabalhoPort: number = 0;
  notaTrabalhoHist: number = 0;

  constructor(matricula: number, nome: string) {
    this.matricula = matricula;
    this.nome = nome;
  }

  public calcSomaNotas(): number {
    return (
      this.notaPort +
      this.notaMat +
      this.notaGeo +
      this.notaHist +
      this.notaTrabalhoPort +
      this.notaTrabalhoHist
    );
  }

  public calcMediaNotas(): number {
    return this.calcSomaNotas() / 6;
  }
}

const s = new estudante(123, 'gilson');

console.log(s);
