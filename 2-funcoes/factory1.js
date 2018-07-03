//funcao factory: funcao que retorna um objeto

// const prod1 = {
//     nome: 'prod1',
//     preco: 12
// }

// const prod2 = {
//     nome: 'prod2',
//     preco: 22
// }

//funcao factory, criando uma nova instancia de pessoa
function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Joaquina'
    }
}

console.log(criarPessoa())