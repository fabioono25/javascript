//funcao em JS é First-Class Object (Citizens)
//higher-order function

//forma literal
function func1() { }

//armazenar em variavel (criando uma funcao anonima)
const func2 = function () { }

//armazenar em um array
const array = [function (a, b) { return a + b}, func1, func2]
//console.log(array[0][2,3])

//armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'opa'}
console.log(obj.falar())

//passar funcao como parametro para outra funcao
function run(func1){
    func1()
}
run(function () { console.log("executando funcao")})

//retornar funcao como parametro
//pode retornar/conter outra funcao
function soma(a, b){
    return function (c){
        console.log(`Resultado total da soma: ${a + b + c}.`)
    }
}
soma(2,3)(4)
const cincoMais = soma(2,3)
cincoMais(5)

