let nome = document.getElementById("nome")
let resultado = document.getElementById("resultado")
let array = []

function saudarNomes(vetor) {
        let mensagem = ""
        for (let c = 0; c < vetor.length ; c++) {
            mensagem += `<p>Bem vindo(a), ${vetor[c]}</p>`
        }

        return mensagem
}

function enviar () {

    let nomeDigitado = nome.value.trim()
    let nomeFormatado = nomeDigitado.charAt(0).toUpperCase() + nomeDigitado.slice(1).toLowerCase()
    if (nome.value == "") {
        window.alert("Digite pelo menos três nomes.")
    } else if (array.indexOf(nome.value) != -1) {
        window.alert("Já foi adicionado")
    } else if (array.length >= 3) {
        window.alert ("Limite de três nomes registrados!")
        resultado.innerHTML = ""
    } else {
        array.push(nomeFormatado)

        let boasvindas = saudarNomes(array)
        resultado.innerHTML = boasvindas
    }


    nome.value = ""
    nome.focus()
}