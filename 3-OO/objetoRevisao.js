//colecao dinamica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca'] = 'Generica'
produto.preco = 220.0

console.log(produto)

delete produto.preco
delete produto.marca

console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 44,
        endereco: {
            logradouro: 'rua das ruas'
        }
    },
    condutores: [
        {nome: 'junior', idade: 22},
        {nome: 'joao', idade: 43}
    ],
    calcularValorSeguro: function(){
        console.log('calcularValorSeguro')
    }
}

carro.proprietario.endereco.numero = 22
carro['proprietario']['endereco']['logradouro'] = 'Av. Gigante'

console.log(carro)

delete carro.condutores

console.log(carro)