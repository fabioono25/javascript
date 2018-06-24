//nao funciona com arrow function
Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim;
}

const imprimirResultado = (nota) => {
    if (nota.entre(9, 10))
        console.log('quadro de honra')
    else if (nota.entre(7, 8.99))
        console.log('reprovado');
    else if (nota.entre(4, 6.99))
        console.log('recuperacao');
    else
        console.log("nota invalida");
}

imprimirResultado(10)
