Array.prototype.filter2 = function(callback) {
    const newArray = []

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) { //elemento, indice, array
            newArray.push(this[i])
        }
    }

    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 2333, fragil: true},
    { nome: 'iPad', preco: 4000, fragil: true},
    { nome: 'Copo Vidro', preco: 12.00, fragil: true},
    { nome: 'Copo Plastico', preco: 18.23, fragil: false}
]

console.log(produtos.filter((p) => {
    // return false //[]
    return p.preco > 2500 //[ { nome: 'iPad', preco: 4000, fragil: true } ]

}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil)) 
