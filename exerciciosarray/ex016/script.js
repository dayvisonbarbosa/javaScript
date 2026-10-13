let input = document.querySelector("#texto")
let add = document.querySelector("#adicionar")
let select = document.querySelector("#select")
let res = document.querySelector("#res")
let array1 = []

function inverterArray(vetor) {
    let array2 = []
    for (let c = vetor.length - 1; c >= 0; c--) {
        array2.push(vetor[c]);
    }
    return array2
}

function adicionar() {
    let valor = input.value

    if (valor == "") {
        window.alert("Preencha o campo.")
    } else if (array1.indexOf(valor) != -1) {
        window.alert("Já foi adicionado anteriormente.")
    } else {
        let item = document.createElement("option")
        item.textContent = `String ${valor} adicionada`
        select.appendChild(item)
        array1.push(valor)

        res.innerHTML = ""
    }

    input.value = ""
    input.focus()
}

function finalizar() {
    if (array1.length == 0) {
        window.alert("Adicione palavras primeiro.")
    }

    let invertido = inverterArray(array1)

    res.innerHTML = `Palavras digitadas invertidas: ${invertido}`
}