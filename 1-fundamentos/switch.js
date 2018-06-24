//permite a pesquisa por intervalo
const imprimirResultado = (nota) => {

    switch (Math.floor(nota)) {
        //validacao entre 9  e 10
        case 10, 9:
            console.log('quadro de honra')
            break;
        case 8.99:
        case 7:
            console.log('muito bom')
            break;
        case 6.99:
        case 5:
            console.log('Mais ou menos')
            break;     
        case 4.99:
        case 0:
            console.log('reprovado')
            break;               
        default:
            console.warn('nota invalida'); 
    }
}

imprimirResultado(9.5)
imprimirResultado(5.10)