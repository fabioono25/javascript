console.log(this === global) //false: this aponta para module.exports
console.log(this === module) //false
console.log(this === module.exports) //true
console.log(this === exports) //true

function logThis() {
    console.log('dentro de uma funcao')
    console.log(this === exports) //false (this nao aponta para exports dentro de uma funcao)
    console.log(this === module.exports) //false
    console.log(this === global) //true

    this.perigo = 'asdasdsad' //voce esta colocando informacao no escopo global
}

this.aqui = 'asdasdsa' //voce esta colocando no module.exports

logThis()