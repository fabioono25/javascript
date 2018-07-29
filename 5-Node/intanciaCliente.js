const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

//retorna uma funcao (factory)
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor) //3 - 3

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor) //3 - 1

