//evitar criar variaveis em escopo global
var variavel1 = 1
{
    {
        {
            var variavel1 = 2
        }
    }
}

console.log(variavel1) //2

let variavel2 = 1
{
    {
        {
            let variavel2 = 2
        }
    }
}

console.log(variavel2) //1, pois respeita o escopo
//em nao existindo a variavel2, sera retornado exception de not defined


const funcs = [];
for (var index = 0; index < 10; index++) {
    funcs.push(()=> console.log(index))
}

funcs[1]() //10
funcs[9]() //10

const funcs = [];
for (let index = 0; index < 10; index++) {
    funcs.push(()=> console.log(index))
}

funcs[1]() //1
funcs[9]() //9