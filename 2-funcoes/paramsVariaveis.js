function soma(){
    let soma = 0

    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1,56, 745))
console.log(soma(1, 12313, 'teste'))
