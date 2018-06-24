const pessoa = {
    saudacao : 'bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar() //bom dia

const falar = pessoa.falar
falar() //undefined - conflito entre o mundo da programacao funcional vs OO

const falarDePessoa = pessoa.falar.bind(pessoa) //passa objeto para resolucao do this

falarDePessoa()