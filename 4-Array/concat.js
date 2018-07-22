const filhas = ['Valesca', 'Joana']
const filhos = ['Joah', 'Mack']
const todos = filhas.concat(filhos, 'Fufulo') //[ 'Valesca', 'Joana', 'Joah', 'Mack', 'Fufulo' ] [ 'Valesca', 'Joana' ] [ 'Joah', 'Mack' ]
console.log(todos, filhas, filhos)

console.log([].concat([1,2], [3,4],5, [[6,7]])) //[ 1, 2, 3, 4, 5, [ 6, 7 ] ]

