const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 2.10 }',
    '{ "nome": "Kit lápis", "preco": 1.99 }',
    '{ "nome": "Caneta", "preco": 7.80 }'
]

//retorno de array com os precos
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const precos = carrinho.map(paraObjeto).map(apenasPreco)

console.log(precos) //[ 3.45, 2.1, 1.99, 7.8 ]