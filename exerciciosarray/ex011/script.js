let num = document.getElementById("num")
let tot = document.getElementById("tot")
let array = []

function contarPares(vetor) {
    let c = 0

    for (let numero of vetor) {
        if (numero % 2 == 0) {
            c++
        }
    }

    return c
}

function adicionar() {
    let valor = Number(num.value)

    array.push(valor)

   let msg = contarPares(array)

    tot.innerHTML = `Total de Números Pares: ${msg}`

    num.value = ""
    num.focus()
}
