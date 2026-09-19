

let vet = []
let lignum = document.getElementById("num")

function adicionar() {
    let valor = Number(lignum.value)

    vet.push(valor)
}

function soma() {
    let soma = vet[0] + vet[1]

    window.alert(`${soma}`)
}

