/*
* Null: não aponta para nenhum endereçamento de memória nem possui valor
* Undefined: não atribui nada para a variável
*/

//valores primitivos
//console.log(a) //ERRO: a is not defined - não foi definida a variavel

//tipos primitivos: por valor
let a = 'x'
let b = a
b = 'y'
console.log(a) //x
console.log(b) //y

//objetos
let c = {
    valor: 12
}

let d = c
d.valor = 999

console.log(c)  //999
console.log(d)  //999

console.log(c.propriedadeNaoExistente) //undefined
console.log(c.propriedadeNaoExistente.subPropriedade) //TypeError: Cannot read property 'subPropriedade' of undefined

const e = undefined //evitar (mas pode ser atribuído)