/* function soPares(...num) {
    let array = []
    for (let valor of num) {
        if (valor % 2 == 0) {
            array.push(valor)
        }
    }

    return "Pares: " + array;
} */

// Utilizando o .filter() //

function soPares(...valores) {
    let pares = valores.filter(num => num % 2 == 0)
    return "Pares: " + pares
}

console.log(soPares(1, 2, 3, 4, 6)) 


