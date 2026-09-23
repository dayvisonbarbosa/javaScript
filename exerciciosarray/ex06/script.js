/*
let jsvagas = document.getElementById("vaga")
let jsa = document.getElementById("a")
let jsb = document.getElementById("b")
let jsc = document.getElementById("c")
let jsd = document.getElementById("d")

function adicionar() {
if (jsvagas.value == "A" || jsvagas.value == "a") {
    jsa.innerHTML = `<li>[X]</li>`
} else if (jsvagas.value == "B" || jsvagas.value == "b") {
    jsb.innerHTML = `<li>[X]</li>`
} else if (jsvagas.value == "C" || jsvagas.value == "c") {
    jsc.innerHTML = `<li>[X]</li>`
} else if (jsvagas.value == "D" || jsvagas.value == "d") {
    jsd.innerHTML = `<li>[X]</li>`
} else {
    window.alert("Preencha com alguma das vagas disponíveis no momento")
}

jsvagas.value = ""
jsvagas.focus()

}

*/

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