// Colocando Parâmetros Rest em prática.

/* function soma(n1, n2) {
    return n1 + n2;
}

console.log(soma(10, 5)) */

// Percorrendo o Parâmetro Rest com laço for.

/* function soma(...valores) {
    let tam = valores.length;
    let res = 0;
    for (let i=0; i < tam; i++) {
        res += valores[i]
    }
    return res;
}

console.log(soma(10, 5, 2, 8)); */

function soma(...valores) {
    let res = 0;
    for (let num of valores) {
        res += num
    }

    return res;
}

console.log(soma(22, 33))