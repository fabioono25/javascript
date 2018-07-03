class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Joao')
p1.falar()


//contexto lexico, nao preciso acessar via this
const criarPessoa = nome => {
    return {
        falar: () => console.log(`meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Juca')
p2.falar()

