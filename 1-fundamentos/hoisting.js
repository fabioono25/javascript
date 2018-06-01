//jogar para cima (quando criou variavel, durante execucao)
//move todas as declaracoes para cima

console.log(x) //undefined
var x = 1
console.log(x) //1


//ReferenceError: y is not defined
// console.log(y)
let y = 10
console.log(y)

function xxx(nome){
    this.nome = nome
}

