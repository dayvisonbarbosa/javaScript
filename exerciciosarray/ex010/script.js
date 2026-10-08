let item = document.getElementById("item")

let res = document.getElementById("resultado")

let array = [
    document.getElementById("A"),
    document.getElementById("B"),
    document.getElementById("C"),
    document.getElementById("D"),
    document.getElementById("E"),
]

let produtosValidos = [
    "Leite", 
    "Café", 
    "Arroz", 
    "Feijão", 
    "Biscoito",
]

let armazenar = []

function comprar() {

    let itemDigitado = item.value.trim()
    let itemFormatado = itemDigitado.charAt(0).toUpperCase() + itemDigitado.slice(1).toLowerCase()

    if (itemDigitado == "") {
        window.alert("Adicione algo ao carrinho")
    } else if (armazenar.indexOf(itemFormatado) !== -1) {
        window.alert("Já foi adicionado.")
    } else if (!produtosValidos.includes(itemFormatado)) {
        window.alert("Digite algo disponível no carrinho.")
    } else {
        if (itemFormatado == "Leite") {
            array[0].innerHTML = "[X]"
            armazenar.push(itemFormatado)
        }

        if (itemFormatado == "Café") {
            array[1].innerHTML = "[X]"
            armazenar.push(itemFormatado)
        }

        if (itemFormatado == "Arroz") {
            array[2].innerHTML = "[X]"
            armazenar.push(itemFormatado)
        }

        if (itemFormatado == "Feijão") {
            array[3].innerHTML = "[X]"
            armazenar.push(itemFormatado)
        }

        if (itemFormatado == "Biscoito") {
            array[4].innerHTML = "[X]"
            armazenar.push(itemFormatado)
        }

        let msg = totalItens(armazenar)
        res.innerHTML = `Total de Itens Comprados: ${msg}`
   }

   item.value = ""
   item.focus()
}

function totalItens(vetor) {
    return vetor.length
}