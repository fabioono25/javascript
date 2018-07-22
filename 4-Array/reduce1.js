const alunos = [
    {nome: 'joao', nota: 7.2, bolsista: false},
    {nome: 'juca', nota: 9.2, bolsista: true},
    {nome: 'maria', nota: 9.8, bolsista: false},
    {nome: 'fatima', nota: 5.2, bolsista: true}
]

console.log(alunos.map(a => a.nota)) //[ 7.2, 9.2, 9.8, 5.2 ]
const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual

    /**
     * 100 7.2
     * 107.2 9.2
     * 116.4 9.8
     * 126.2 5.2
     */
}, 100)

console.log(resultado) //131.4