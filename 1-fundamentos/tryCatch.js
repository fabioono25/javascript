function tratarErroLancar(erro){
    //console.log('Ocorreu um erro: ' + error)        
    //throw new Error('Ocorreu um erro: ' + erro)
    //throw 10
    //throw true
    //throw 'Ocorreu um erro: ' + erro
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date()
    }
}

function imprimirNomeUpper(obj){

    try {
        console.log(obj.name.toUpperCase() + '!!!')    
    } catch (e) {
        tratarErroLancar(e)
    } finally {
        console.log('passando pelo finally')
    }
}

const obj = { nome : 'Roberto'}
imprimirNomeUpper(obj)
