const valor = 'Global'

//procura o local em que foi definida
function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec() //Global

