//object: colecao chave-valor - prop: nome unico

const produto = {
    nome: 'Produto Hum',
    descricao: 'é um produto bom',
    nome: 'Essa propriedade já existe'
}

console.log(produto.nome)           //propriedade nome sobrescrita, retorna 'Esta propriedade já existe'
console.log(produto['descricao'])   //evitar

produto.valor = 12.23
produto.propriedadeX = 111

console.log(produto)    //produto com propriedadeX

delete produto.propriedadeX

console.log(produto)    //produto sem propriedadeX