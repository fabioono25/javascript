//EcmaScript 2015 - ES6 - operador de desestruturação

const pessoa = {
    nome  : "Joao de Barro",
    idade : 21,
    endereco: {
        logradouro: "Rua J de Barro",
        numero: "12B"
    }
}

// const {nome, idade} = pessoa
// console.log(nome, idade)

const {nome : n, idade : i, propNaoDefinida = "N/A"} = pessoa
console.log(n, i, propNaoDefinida) //Joao de Barro 21 N/A

//cuidado com o caminho, pode gerar exception
const {endereco: {logradouro, numero}, idade} = pessoa 
console.log(idade, logradouro, numero) //21 'Rua J de Barro' '12B'

const [n1, n2, n3, n4] = [12,,2,4]
console.log(n1,n2,n3,n4) //12 undefined 2 4

function rand([min = 0, max = 100]){
    if (min > max) 
        [min, max] = [max, min]
    
    console.log(min)
    console.log(max)
}

rand([1000])