const notas = [7.7, 6.5, 5.2, 4.6, 2]

//sem utilizacao do callback
let notasBaixas = []

for (let i in notas){
    if (notas[i] < 7)
        notasBaixas.push(notas[i])
}

console.log(notasBaixas)

//utilizando callback
notasBaixas =  notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas)

const notaMenor7 = nota => nota < 7
notasBaixas = notas.filter(notaMenor7)

console.log(notasBaixas)