function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 2
    }
}

console.log(criarProduto('Prod1', 22.32))