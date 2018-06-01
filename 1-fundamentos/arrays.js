//heterogeneo e dinamico - unidirecional
const valores = [7.4, , 123, 'batata', 12]
console.log(valores[1])     //undefined
console.log(valores[10])    //undefined
valores[10] = 'joao de barro'
console.log(valores)        //...12, <5 empty items>,'joao de barro'
console.log(valores[10])    //joao de barro

valores.push('valor push')
console.log(valores)
valores.pop()
console.log(valores) //valor com referencia excluída

valores.push('valor para delete')
console.log(valores[11])
delete valores[11]
console.log(valores) //... 'joao de barro', <1 empty item> 
console.log(valores[11]) //undefined

valores.push('novo valor')
console.log(valores)    //...joao de barro, <1 empty item>, 'novo valor'

console.log(typeof valores) //object
