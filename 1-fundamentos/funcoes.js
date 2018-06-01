    class Produto{}
    console.log(typeof Produto) //function
    console.log(typeof new Produto) //object

    function somar(a, b){
        return a + b
    }

    console.log(somar(1)) //NaN
    console.log(somar(1,1,2,3,4)) //2

    function somar(a = 0, b = 0){ //atribuicao de valor default
        return a + b
    }

    console.log('soma: ' + somar(1)) //1

    const imprSoma = function (a, b) { return a + b } //funcao anonima
    const imprSoma2 = (a, b) => { return a + b }      //arrow function
    const imprSoma3 = (a, b) => a + b                 //arrow function

    const funcTeste = x => console.log(x)

    console.log(imprSoma(1,20))

    funcTeste('apenas um teste')