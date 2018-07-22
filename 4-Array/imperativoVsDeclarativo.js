const alunos = [
    {nome: "Joao", nota: 7.9},
    {nome: "Maria", nota: 9.2}
]

//imperativo (como tem ser feito)
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length) //8.55

//declarativo (foco no que tem de ser feito)
const getNota = aluno => aluno.nota //consigo a lista de notas
const soma = (total, atual) => total + atual //obtenho a soma
console.log(alunos.map(getNota)) //[ 7.9, 9.2 ]
const total2 = alunos.map(getNota).reduce(soma) //mapeio as notas e recupero a soma
console.log(total2 / alunos.length) //8.55 //retorno o calculo


