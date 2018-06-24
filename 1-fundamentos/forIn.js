const nota = [6.7, 7.4, 9.8, 7.7]

for (const i in nota) {
    console.log(i, nota[i])
}

const pessoa = {
    nome: 'ana',
    sobrenome: 'silva',
    peso: 65
}

for (const atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}