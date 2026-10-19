let input = document.getElementById("num")
let select = document.getElementById("select")
let res = document.getElementById("res")
let array = []
let verificar = true

function analisarArray(vetor, resultado) {
    let p1 = document.createElement("p")
    p1.innerHTML = `O total de elementos digitados: ${vetor.length}.`
    resultado.appendChild(p1)

    let maior = vetor[0]
    let menor = vetor[0]
    let soma = 0

    for (let numeros of vetor) {
        if (numeros > maior) {
            maior = numeros
        }

        if (numeros < menor) {
            menor = numeros
        }

        soma = soma + numeros
    }

    let media = soma / vetor.length

    let p2 = document.createElement("p")
    p2.innerHTML = `Maior Número: ${maior}.`
    resultado.appendChild(p2)

    let p3 = document.createElement("p")
    p3.innerHTML = `Menor Número: ${menor}.`
    resultado.appendChild(p3)


    let p4 = document.createElement("p")
    p4.innerHTML = `Soma de todos os Números: ${soma}.`
    resultado.appendChild(p4)

    let p5 = document.createElement("p")
    p5.innerHTML = `A média entre os valores: ${media}.`
    resultado.appendChild(p5)

}

function adicionar() {
    let valor = Number(input.value)
    if (valor == "") {
        window.alert("Preencha o campo.")
    } else if (verificar == true) {
        array.push(valor)
        let item = document.createElement("option")
        item.textContent = `Valor ${valor} adicionado.`
        select.appendChild(item)
        res.innerHTML = ""
    } else {
        window.alert("O programa foi finalizado.")
    }

    input.value = ""
    input.focus()
}

function finalizar() {
    if (array.length == 0) {
        window.alert("Adicione números primeiro.")
    } else if (verificar == true) {
        analisarArray(array, res)
        verificar = false
    } else {
        window.alert("O programa foi finalizado.")
    }
}