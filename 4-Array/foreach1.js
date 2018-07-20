const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach((nome, indice, array, x) =>{
    console.log(`${indice + 1} - ${nome} - ${array} - ${x}`) //utilizando template string
})

/**
 * 1 - Agatha   Agatha,Aldo,Daniel,Raquel undefined
 * 2 - Aldo
 * 3 - Daniel
 * 4 - Raquel
 */

const exibirAprovados = (aprovado, indice) => console.log(`${indice + 1} - ${aprovado}`)
aprovados.forEach(exibirAprovados)
/**
 * 1 - Agatha
 * 2 - Aldo
 * 3 - Daniel
 * 4 - Raquel
 */

