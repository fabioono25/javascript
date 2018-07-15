console.log(typeof String) //funcao: possuem atributo chamado .prototype
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function(){
    return this.split('').reverse().join('')   
}

console.log('Escola de Teste'.reverse()) //etseT ed alocsE

Array.prototype.first = function() {
    return this[0]
}

console.log([1,2,3,4,5].first())

//sobrescrevendo comportamento NAO FACA ISSO!
String.prototype.toString = function() {
    return 'asdasda sd'
}

console.log('Escola de teste'.reverse()) //ds adsadsa