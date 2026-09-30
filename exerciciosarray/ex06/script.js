
let vagasHTML = [
    document.getElementById("a"),
    document.getElementById("b"),
    document.getElementById("c"),
    document.getElementById("d"),
]

let jsvagas = ["A", "B", "C", "D"]

let ocupada = [false, false, false, false]

function adicionar() {
    let inputVagas = document.getElementById("vaga")
    let digitado = inputVagas.value.toUpperCase()

    let pos = jsvagas.indexOf(digitado)

    if (pos != -1) {
        if (ocupada[pos] == true) {
            window.alert(`A vaga ${digitado} já foi digitada anteriormente.`)
        } else {
            vagasHTML[pos].innerHTML = "[X]"
            ocupada[pos] = true
        }
    } else {
        window.alert("Preencha com alguma das vagas disponíveis (A, B, C, D)")
    }

    inputVagas.value = ""
    inputVagas.focus()
}