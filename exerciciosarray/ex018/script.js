
let input = document.getElementById("num")
let select = document.getElementById("select")
let res = document.getElementById("res")
let array = []

function analisarArray(vetor, resultado) {
    let p1 = document.createElement("p")
    p1.innerHTML = `O total de elementos digitados: ${vetor.length}`
    resultado.appendChild(p1)

    let maior = vetor[0]
    for (let numeros1 of vetor) {
        if (numeros1 > maior) {
            maior = numeros1
        }
    }

    let p2 = document.createElement("p")
    p2.innerHTML = `Maior Número: ${maior}`
    resultado.appendChild(p2)

    let menor = vetor[0]
    for (let numeros2 of vetor) {
        if (numeros2 < menor) {
            menor = numeros2
        }
    }

    let p3 = document.createElement("p")
    p3.innerHTML = `Menor Número: ${menor}`
    resultado.appendChild(p3)

    let soma = 0
    for (let numeros3 of vetor) {
        soma = soma + numeros3
    }

    let p4 = document.createElement("p")
    p4.innerHTML = `Soma de todos os Números: ${soma}`
    resultado.appendChild(p4)

    let media = soma / vetor.length
    let p5 = document.createElement("p")
    p5.innerHTML = `A média entre os valores: ${media}`
    resultado.appendChild(p5)

}

function adicionar() {
    let valor = Number(input.value)
    array.push(valor)
    let item = document.createElement("option")
    item.textContent = `Valor ${valor} adicionado`
    select.appendChild(item)
}

function finalizar() {
    analisarArray(array, res)
}