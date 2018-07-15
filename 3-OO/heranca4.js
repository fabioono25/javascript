function MeuObjeto() {}
console.log(MeuObjeto.prototype)

//apontando para funcao construtora
const obj1 = new MeuObjeto()
const obj2 = new MeuObjeto()

console.log(obj1.__proto__ === obj2.__proto__) //apontam para o mesmo objeto/prototipo por padrao
console.log(MeuObjeto.prototype === obj1.__proto__) //cria funcao a partir de funcao construtora

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia, meu nome é ${this.nome}.`)
}

console.log(obj1.nome)//Anônimo
console.log(obj1.__proto__)//MeuObjeto { nome: 'Anônimo', falar: [Function] }

//prototipo: link outros objetos, cadeia de protótipos
//atributo prototype
//atributo __proto__ : como objeto referencia seu prototipo
obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.falar() //Bom dia, meu nome é Anônimo.

//resumo: verdadeiros
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

