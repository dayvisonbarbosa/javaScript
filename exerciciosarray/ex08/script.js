
let numero = document.getElementById("numero")
let select = document.getElementById("select")
let resultado = document.getElementById("resultado")
let array = []

function adicionar() {
    let item = document.createElement("option")

    if (numero.value == "") {
        window.alert("Adicione números primeiro!")
    } else if (array.indexOf(Number(numero.value)) != -1) {
        window.alert("Esse número já foi adicionado!")
    } else {
        item.textContent = `Valor ${numero.value} adicionado.`
        select.appendChild(item)
        array.push(Number(numero.value))
    }

    numero.value = ""
    resultado.innerHTML = ""
    numero.focus()
}

function somarPrimeiros(soma) {
    return soma[0] + soma[1]
}

function finalizar() {
    if (array.length < 2) {
        window.alert("Adicione pelo menos 2 números!")
    } else {
        let resultadoSoma = somarPrimeiros(array)
        let h3 = document.createElement("h3")
        let paragrafo1 = document.createElement("p")
        let paragrafo2 = document.createElement("p")
        let paragrafo3 = document.createElement("p")

        h3.textContent = "Resultado"
        paragrafo1.textContent = `Primeiro Número: ${array[0]}`
        paragrafo2.textContent = `Segundo Número: ${array[1]}`
        paragrafo3.textContent = `Resultado: ${resultadoSoma}`

        resultado.appendChild(h3)
        resultado.appendChild(paragrafo1)
        resultado.appendChild(paragrafo2)
        resultado.appendChild(paragrafo3)
    }
}