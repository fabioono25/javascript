const sequencia = {
    _valor: 1, //convencao que esta é uma variavel pretendida ser acessada internamente
    get valor() { return this._valor++ },
    set valor(valor) { 
        if (valor > this._valor)
            this._valor = valor 
    }
}

console.log(sequencia.valor, sequencia.valor, sequencia.valor, sequencia.valor)//1 2 3 4

console.log(sequencia._valor) //5

sequencia.valor = 1000
console.log(sequencia.valor,sequencia.valor) //1000 1001

sequencia.valor = 900
console.log(sequencia.valor,sequencia.valor) //1002 1003
