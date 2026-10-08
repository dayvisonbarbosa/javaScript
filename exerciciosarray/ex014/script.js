let input = document.getElementById("nota")
let res = document.getElementById("res")
let finalizado = false

let matérias = [
    document.getElementById("A"),
    document.getElementById("B"),
    document.getElementById("C"),
    document.getElementById("D"),
    document.getElementById("E")
]

let materia = [
    "Português: ",
    "Matemática: ",
    "Ciências: ",
    "História: ",
    "Geografia: "
]

let array = []

function calcularMedia(vetor) {
    let media = 0
    for (let c = 0; c < 5; c++) {
        media = media + vetor[c]
    }

    return media / 5
}

function adicionar() {

    if (input.value == "") {
        window.alert("Digite números primeiro!")
    } else {
        let nota = Number(input.value)
        array.push(nota)
    }

    if (array.length > 5) {
        window.alert("As notas já foram preenchidas.")
        input.focus()
    }

    for (let c = 0; c < array.length; c++) {
        matérias[c].innerHTML = `<strong>${materia[c]} ${array[c]}</strong>`
    }

    input.value = ""
    input.focus()
}

function finalizar() {
    let msg = calcularMedia(array)

    if (finalizado) {
        window.alert("O programa já foi finalizado")
    }

    if (array.length < 5) {
        window.alert("Digite todas as notas primeiro!")
    } else {
        res.innerHTML = "<h2>Resultado</h2>"
        res.innerHTML += `<p><strong>Media final: ${msg}</strong></p>`
        finalizado = true
    }
}