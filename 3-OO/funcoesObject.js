const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(pessoa)
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
});

Object.entries(pessoa).forEach(([chave, valor]) => { //destructor
    console.log(`${chave}: ${valor}`)
});

//pode-se definir algumas caracteristicas da propriedade
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //pode ser listada na lista de propriedades
    writable: false,
    value: '01/01/1980'
})

pessoa.dataNascimento = '10/10/2019'
console.log(pessoa.dataNascimento)
