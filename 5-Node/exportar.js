console.log(module.exports)

console.log(module.exports === this) //true
console.log(module.exports === exports) //true

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null //outra variavel que aponta para o objeto
console.log(module.exports) //{ a: 1, b: 2, c: 3 } - quem será exportado

exports = {
    nome: 'teste'
}

console.log(module.exports) //{ a: 1, b: 2, c: 3 }

module.exports = {publico: true}