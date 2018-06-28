const fabricantes = ["Mercedes", "Audit", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)

fabricantes.forEach((a,b,c) => {
    console.log(a)
    console.log(b)
    console.log(c)
})