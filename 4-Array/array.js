//o array é um objeto: ao invés de organizar por meio de chaves, é por indice, comecando por 0
//recomendável vc trabalhar com coleção de dados homogênea
console.log(typeof Array, typeof new Array, typeof []) //function object object

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados) //[ 'Bia', 'Carlos', 'Ana' ]

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0]) //Bia
console.log(aprovados[3]) //undefined
console.log(aprovados[-1]) //undefined

aprovados[3] = 'John'
console.log(aprovados[3]) //undefined
aprovados[10] = 'josh'
console.log(aprovados) //[ 'Bia', 'Carlos', 'Ana', 'John', <6 empty items>, 'josh' ]
console.log(aprovados.length) //11
aprovados.push('Biaaaa')
console.log(aprovados.length) //12
console.log(aprovados[5] === undefined) //true
aprovados.sort()
console.log(aprovados) //[ 'Ana', 'Bia', 'Biaaaa', 'Carlos', 'John', 'josh', <6 empty items> ]

delete aprovados[1]
console.log(aprovados) //[ 'Ana',<1 empty item>,'Biaaaa','Carlos','John','josh',<6 empty items> ]

aprovados = ['Bia','Carlos','Ana']
aprovados.splice(1,2,'Josh', 'Henry')
console.log(aprovados) //[ 'Bia', 'Josh', 'Henry' ]

