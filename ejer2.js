function cuadrado(valor){
    return valor * valor;
}

function cubo(valor){
    return valor * valor * valor;
}

function factorial(valor){
    if(valor < 0){
        throw new Error("El factorial no es definido para valores negativos.");
    }
    
    let resultado = 1;
    for(let i = 2; i <= valor; i++){
        resultado *= i;
    }
    return resultado;
}
