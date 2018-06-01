const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 6.871
const avaliacao2 = 6.671

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(3))
console.log(media.toString())

console.log(media.toString(2)) //em binario
console.log(typeof media)  //tipo de dado
console.log(typeof Number) //funcao

//alguns cuidados
console.log(7 / 0)  //Infinity
console.log(typeof (7 / 0)) //number

console.log("10" / 2)  //5
console.log("alo" * 2) //NaN
console.log(0.1 + 0.7)  //0.7999999999999999 - especificação IEEE

console.log(10.345.toFixed(2))

console.log('3' + '2') //32

