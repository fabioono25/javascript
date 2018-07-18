//Object.preventExtensions: nao permitira que seu objeto seja extendido - excluir atributos pode, mas incluir nao
const produto = Object.preventExtensions({
    nome: 'Produto1', preco: 1.99, tag: 'promocao'
})

console.log('Extensivel: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)
// Extensivel:  false
// { nome: 'Borracha', preco: 1.99 }

//Object.seal: nao consegue adicionar, excluir, é possivel modificar os valores dos atributos presentes
const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa)

console.log('Selado: ', Object.isSealed(pessoa))

pessoa.nome = 'JK'
pessoa.sobrenome = 'jasdasdasd'
delete pessoa.idade

console.log('Selado: ', pessoa)
// Selado:  true
// Selado:  { nome: 'JK', idade: 35 }

//Object.freeze: selado + valores constantes
const produtoFreezed = Object.freeze({
    nome: 'Produto1', preco: 1.99, tag: 'promocao'
})

console.log('Object freezed: ', Object.isFrozen(produtoFreezed));
produtoFreezed.nome = 'Beto Jamaica'
delete produtoFreezed.preco
console.log(produtoFreezed)
// Object freezed:  true
// { nome: 'Produto1', preco: 1.99, tag: 'promocao' }