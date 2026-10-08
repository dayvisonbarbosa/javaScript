let num = document.getElementById("num")
let res = document.getElementById("tot")
let array = []

function totalPares(array) {
    let pares = 0

    for (let numeros of array) {
        if (numeros % 2 == 0) {
            pares++
        }
    } 

    return pares
}

function totalImpar(array) {
    let impares = 0

    for (let numeros of array) {
        if (numeros % 2 != 0) {
            impares++
        }
    }

    return impares
}

function adicionar() {
    if (num.value == "") {
        window.alert("Adicione números primeiro!")
    } else {
        let valor = Number(num.value)
        array.push(valor)
        let totPar = totalPares(array)
        let totImpar = totalImpar(array)
        res.innerHTML = `<p>Total Pares: ${totPar}</p>`
        res.innerHTML += `<p>Total Ìmpares: ${totImpar}</p>`
    }

    num.value = ""
    num.focus()
}