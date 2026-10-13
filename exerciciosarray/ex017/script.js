let input1 = document.getElementById("nome")
let input2 = document.getElementById("busca")
let array = []

function buscarItem(vetor, nomeBusca) {
    let verificar = false
    for (let nome of vetor) {
        if (nome === nomeBusca) {
            verificar = true
            break
        }
    }

    return verificar
}

function Adicionar() {
    let nome = input1.value
    if (nome == "") {
        window.alert("Preencha o campo.")
    } else if (array.indexOf(nome) != -1) {
        window.alert("Já foi adicionado anteriormente.")
    } else {
        array.push(nome)
    }

    input1.value = ""
    input1.focus()
}

function Buscar() {
    let nomeBuscado = input2.value
    let encontrado = buscarItem(array, nomeBuscado)

    if (array.length == 0) {
        window.alert("Adicione nomes primeiro.")
    } else if (nomeBuscado == "") {
        window.alert("Preencha o campo.")
    } else if (encontrado) {
        window.alert("O nome foi encontrado!")
    } else {
        window.alert("O nome NÃO foi encontrado!")
    }

    input2.value = ""
    input2.focus()
}