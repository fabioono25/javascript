const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//leitura sincrona: nao recomendado - travará o EventLoop
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//leitura assincrona: recomendado, pois libera o EventLoop
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`) //localhost:5432
})

const config = require('./arquivo.json')
console.log(config.db) //{ host: 'localhost', port: 5432, user: 'j', password: 'p' }

fs.readdir(__dirname, (err, arquivos) => {
    console.log('conteudo da pasta')
    console.log(arquivos) //exibe os arquivos do diretorio atual
})

console.log(__dirname) //c:\study\javascript\5-Node

