interface aluno {
    nome: string;
    cursoId: number;
    nomeCurso: string;
    notas: number[];
    mensagem: string;
}


function mediaAluno(aluno: aluno): number {

    return (aluno.notas[0] + aluno.notas[1] + aluno.notas[2]) / 3;

}


const estiloAprendizO = function (estudante: aluno) {
    let media = mediaAluno(estudante)


    if (media >= 7) {
        console.log("Exploradora confiante.")

    } else if (media >= 5 && media < 7) {
        console.log("Brilha como aprendiz.")

    } else {
        console.log("Desbravando a programação.")

    }

}

let aluno1: aluno =
{
    nome: "Julliane Sousa",
    cursoId: 123,
    nomeCurso:"Programação",
    notas: [10, 9, 9],
    mensagem: "Parabéns, você foi aprovada!",
};
let aluno2: aluno =
{
    nome: "Janjo Santos",
    cursoId: 453,
    nomeCurso:"Ed. Fisica",
    notas: [10, 5, 3],
    mensagem: "Aluno na final,continue se esforçando!",
};

let aluno3: aluno = {

    nome: "Jair Anderson",
    cursoId: 454,
    nomeCurso:"Engenharia",
    notas: [5, 7, 3],
    mensagem: "Infelizmente você foi reprovado!",
};

estiloAprendizO(aluno1)

function imprimirCurso(aluno: aluno, aluno2: aluno, aluno3: aluno): void {
  switch (aluno.cursoId) {
    case 1:
      console.log(aluno.nomeCurso + aluno.cursoId);
      break;
    case 2:
      console.log(aluno.nomeCurso + aluno.cursoId);
      break;
    case 454: // seu caso específico
      console.log(aluno.nomeCurso + aluno.cursoId);
      break;
    default:
      console.log((aluno1), (aluno2), (aluno3));
  }
}

imprimirCurso(aluno1, aluno2, aluno3);


