const escola = "Charrete22"

console.log(escola.charAt(2))
console.log(escola.charAt(90))    //nao gera erro (retorna vazio)
console.log(escola.charCodeAt(2)) //valor na tabela ASC/Unicode = 97
console.log(escola.indexOf('a'))
console.log(escola.substring(1))
console.log(escola.substring(1, 3))
console.log('escola '.concat('americana ').concat(escola).concat('!'))
console.log(escola.replace('r','x'))
console.log(escola.replace(/\d/g,'num')) //Charretenumnum
console.log('Joao, Maria, Jose'.split(',')) //[ 'Joao', ' Maria', ' Jose' ]

//working with templatestring (consider breakline)
const escola = "joao de barro"
const x = `
    ola,
    tudo bom Joao?
    voce está na escola ${escola}, sem bem vindo!
`

console.log(x)