//notacao literal
const obj = {}
console.log(obj)

//object em JS 
console.log(typeof Object, typeof new Object) //function

//funcao construtora
const obj2 = new Object
console.log(obj2)

//escopos: global - funcoes construtoras
function Produto(nome, preco, desc){
    this.nome = nome //escopo global
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.2, 0.23)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//funcao factory
function criaFuncionario(nome, salarioBase, faltas){
    return {
        nome, 
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criaFuncionario('Joao', 7980, 1)
const f2 = criaFuncionario('Maria', 11990, 2)

console.log(f1.getSalario(), f2.getSalario())

//funcao create = Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//JSON parse
const fromJSON = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJSON.info)

