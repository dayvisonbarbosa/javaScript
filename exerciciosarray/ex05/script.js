
let jsnumero = document.getElementById("num")
let jsselect = document.getElementById("select")
let vet = []


function adicionar() {
    let valores = Number(jsnumero.value)
    vet.push(valores)
    jsselect.innerHTML += `
        <option>${jsnumero.value}</option>
    `
}

function finalizar() {
    let soma = 0

    for (let pos = 0; pos < vet.length; pos++) {
        soma += vet[pos]
    }

    window.alert(`${soma}`)
}