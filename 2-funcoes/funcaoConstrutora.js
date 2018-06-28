//funciona como uma classe
function Carro(velocidadeMaxima = 200, delta = 5){
    //atributo privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta < velocidadeMaxima)
            velocidadeAtual += delta
        else
            velocidadeAtual = velocidadeMaxima
    }

    //this torna visivel (const funcao() = privado)
    this.getVelocidadeAtual = () => velocidadeAtual
}

const uno = new Carro
console.log(uno.velocidadeAtual) //undefined
uno.acelerar()
console.log(uno.getVelocidadeAtual()) //undefined

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

// console.log(Carro.acelerar())
// console.log(Carro.velocidadeAtual) //undefined