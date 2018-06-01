let isAtivo = true

//true returns
console.log(isAtivo)
console.log(!!1)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo=true))

//false returns
console.log(!!0)
console.log(!!'')
console.log(!!NaN)
console.log(!!undefined)

console.log(null || undefined || 123 || 234) //123

const nome = ''
console.log(nome || 'desconhecido') //desconhecido
