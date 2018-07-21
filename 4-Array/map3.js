Array.prototype.map2 = function(callback) {
    const newArray = []

    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }

    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 2.10 }',
    '{ "nome": "Kit lápis", "preco": 1.99 }',
    '{ "nome": "Caneta", "preco": 7.80 }'
]

//retorno de array com os precos
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const precos = carrinho.map2(paraObjeto).map2(apenasPreco)

console.log(precos) //[ 3.45, 2.1, 1.99, 7.8 ]