const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr){
    const mySet = new Set(arr);

    return [...mySet];
    // [...spread] argumento spread para tornar um array ao invés de enviar um set e o array acima
}

console.log(valoresUnicos(meuArray));