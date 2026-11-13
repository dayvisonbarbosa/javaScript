/* Antigamente eram feitas gambiarras para que os valores de parâmetros retornassem valores pré definidos caso o usuário não digitasse nada. */

/* function multiplicar(a, b) {
    a = typeof a !== "undefined" ? a : 1;
    b = typeof b !== "undefined" ? b : 1;

    return a * b;
}

console.log(multiplicar()) */

// Agora com os parâmetros pré definidos, tudo fica mais simplificado.

/* function multiplicar(a=1, b=1) {
    return a * b;
} */

const multiplicar = (a, b=1) => a * b;

console.log(multiplicar(5));
console.log(multiplicar());
console.log(multiplicar(undefined,6));