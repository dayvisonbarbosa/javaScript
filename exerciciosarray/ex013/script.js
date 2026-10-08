let num = document.getElementById("num")
let res = document.getElementById("res")
let select = document.getElementById("select")
let array = []

function encontrarMaior(vetor) {
    let maior = vetor[0]
 
    for (let numeros of vetor) {
        if (numeros > maior) {
            maior = numeros
        }
    }

    return maior
}

function adicionar() {
    let valor = Number(num.value)

    if (num.value == "") {
        window.alert("Digite Valores primeiro.")
    } else if (array.includes(valor)) {
        window.alert("Já adicionado.")
    } else {
        array.push(valor)
        let item = document.createElement("option")
        item.textContent = `Valor ${valor} adicionado.`
        select.appendChild(item)

        res.innerHTML = ""
        num.value = ""
        num.focus()
    }
}

function finalizar() {
    let ret = encontrarMaior(array)
    let h3 = document.createElement("h3")
    let p = document.createElement("p")

    res.innerHTML = ""

    if (array.length == 0) {
        window.alert("Digite valores primeiro.")
        res.innerHTML = ""
    } else {
        h3.textContent = "Resultado"
        p.textContent = `O maior valor digitado foi ${ret}`
        res.appendChild(h3)
        res.appendChild(p)
    }
}