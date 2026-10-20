/* let num = document.getElementById("num")
let array = []
let tot = 0
let media = 0
const calcularMedia = function() {
    if (num.value == "") {
        window.alert("Adicione números primeiro!")
    } else {
        let valor = Number(num.value)
        array.push(valor)
        tot += valor
        media = tot / 3
        if (array.length == 3) {
            window.alert(`${media}`)
        }
        num.value = ""
        num.focus()
    }
} */

let num = document.getElementById("num")
let array = []

function calcmedia(vetor) {
    let tot = 0
    media = 0
    for (let c = 0; c < vetor.length; c++) {
        tot += vetor[c]
    }
    media = tot / 3
    return media
}


const calcularMedia = function() {
    if (num.value == "") {
        window.alert("Adicione números primeiro!")
    } else {
        let valor = Number(num.value)
        array.push(valor)
        let res = calcmedia(array)
        if (array.length == 3) {
            window.alert(`${res}`)
        }
        num.value = ""
        num.focus()
    }
}

