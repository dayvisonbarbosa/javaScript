
let array = []

let res = document.getElementById("resultado")

function adicionar() {
    let input = document.getElementById("numero")
    let select = document.getElementById("select")
    let numero = Number(input.value)

    if (input.value == "") {
        window.alert("Obrigatório preencher esse espaço!")
    } else if (array.includes(numero)) {
        window.alert("Esse número já foi adicionado!")
    } else {
        let option = document.createElement("option")
        option.text = `Valor ${numero} adicionado.`
        select.appendChild(option)
        array.push(numero)
        res.innerHTML = ""
    }

    input.value = ""
    input.focus()

}

function finalizar() {
    if (array.length == 0) {
        window.alert("Adicione números primeiro!")
    } else {
        let maior = array[0]
        let menor = array[0]
        for (let pos in array) {
            if (array[pos] > maior)
                maior = array[pos]
            if (array[pos] < menor)
                menor = array[pos]
        }

        res.innerHTML = ""
        let p = document.createElement("p")
        p.innerHTML = `Maior número: ${maior} <br> Menor número: ${menor}`
        res.appendChild(p)
    }
}