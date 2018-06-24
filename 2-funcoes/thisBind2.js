// function Pessoa() {
//     this.idade = 0

//     setInterval(function () {
//         this.idade++
//         console.log(this.idade)
//     }, 1000)
// }

// new Pessoa //temporizador executando o codigo

// function Pessoa() {
//     this.idade = 0

//     setInterval(function () {
//         this.idade++
//         console.log(this.idade)
//     }.bind(this), 1000) //amarrando pessoa
// }

// new Pessoa //temporizador executando o codigo



function Pessoa() {
    this.idade = 0

    const self = this //instancia atual que esta executando o codigo

    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }, 1000) //amarrando pessoa
}

new Pessoa //temporizador executando o codigo
