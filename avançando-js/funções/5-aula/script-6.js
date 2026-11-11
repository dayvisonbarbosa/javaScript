/* function maiorNum (...valores) {
    let maior = valores[0]
    for (let num of valores) {
        if (num > maior) {
            maior = num
        }
    }

    return maior
} */

// Utilizando o Math.max() //

function maiorNum(...valores) {
    return Math.max(...valores);
}

console.log(maiorNum(5, 7, 55, 77, 99))