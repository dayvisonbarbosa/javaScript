// Parâmetros pré definidos não armazenam valores para sempre.

function concatenador(value, array = []) {
    array.push(value);
    return array;
}

concatenador(1);
concatenador(2);
console.log(concatenador(3));