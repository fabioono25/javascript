let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(global) //true

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param) //this é o modulo
comparaComThisArrow(global)

//arrow mais previsivel - this aponta para objeto corrente
comparaComThisArrow(module.exports)
comparaComThisArrow(this)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) //arrow function mais forte que bind = false
comparaComThisArrow(module.exports)

//this de funcao arrow é um this associado ao contexto ao qual a funcao foi escrita 
//mesmo forçando mudança de contexto com o bind, nao consegue

