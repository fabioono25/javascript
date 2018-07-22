const alunos = [
    {nome: 'joao', nota: 7.2, bolsista: false},
    {nome: 'juca', nota: 9.2, bolsista: true},
    {nome: 'maria', nota: 9.8, bolsista: false},
    {nome: 'fatima', nota: 5.2, bolsista: true}
]

//retornar todos alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas)) //false

//algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista)) //[ false, true, false, true ]
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista)) //true