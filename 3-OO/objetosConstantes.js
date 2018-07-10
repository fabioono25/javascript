//pessoa -> endereço memoria 123 -> {}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Maria'
console.log(pessoa)

//pessoa -> 456 -> {}
//pessoa = {nome: 'Ana Julia'} //erro

Object.freeze(pessoa) //nao consigo mexer no objeto

pessoa.nome = 'Joao de Barro' //Maria
pessoa.end = 'Rua ABC'

console.log(pessoa) //{ nome: 'Maria' }

const pessoaConstante = Object.freeze({nome: 'Nome Teste'})
