/* function parOuImpar(a) {
    let verificar = ""

    if (a % 2 == 0) {
        verificar = "Par"
    } else {
        verificar = "Ímpar"
    }

    return verificar
}

console.log(parOuImpar(4)) */

const parOuImpar = a => (a % 2 == 0) ? "Par" : "Impar"

console.log(parOuImpar(3))
