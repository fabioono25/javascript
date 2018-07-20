const pilotos = ['Vettel','Alonso','Raikkonen','Massa']
pilotos.pop() //retira ultimo elemento
console.log(pilotos) //[ 'Vettel', 'Alonso', 'Raikkonen' ]

pilotos.push('Verstappen')
console.log(pilotos) //[ 'Vettel', 'Alonso', 'Raikkonen', 'Verstappen' ]

pilotos.shift() //remove o primeiro
console.log(pilotos) //[ 'Alonso', 'Raikkonen', 'Verstappen' ]

pilotos.unshift('Hamilton') //insere na primeira posicao
console.log(pilotos)        //[ 'Hamilton', 'Alonso', 'Raikkonen', 'Verstappen' ]

pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos) //[ 'Hamilton','Alonso','Bottas','Massa','Raikkonen','Verstappen' ]

//removendo elemento
pilotos.splice(3, 1)
console.log(pilotos) //[ 'Hamilton', 'Alonso', 'Bottas', 'Raikkonen', 'Verstappen' ]

const algunsPilotos1 = pilotos.slice(2) //novo array, a partir do indice 2
console.log(algunsPilotos1) //[ 'Bottas', 'Raikkonen', 'Verstappen' ]

const algunsPilotos2 = pilotos.slice(1, 4) //indice 1 ao 4 (que nao entra)
console.log(algunsPilotos2) //[ 'Alonso', 'Bottas', 'Raikkonen' ]