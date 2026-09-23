let liganum = document.getElementById("num")
let jstabela = document.getElementById("tabela")
let jsresultado = document.getElementById("resultado")
let valores = []

// Funções de Validação (Retornam true ou false)

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, vl) {
    if (vl.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false

    } 
}

// Função Disparada pelo Botão Adicionar

function adicionar() { 
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement(`option`)
        item.text = `Valor ${num.value} adicionado`
        jstabela.appendChild(item)
        jsresultado.innerHTML = ""
    } else {
        window.alert("Valor inválido ou já encontrado na lista.")
    }
    num.value = ""
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert(`Adicione valores antes de finalizar!`)
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        jsresultado.innerHTML += ""
        jsresultado.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        jsresultado.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        jsresultado.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        jsresultado.innerHTML += `<p>A média dos valores digitados é igual a ${media}</p>`
    }
}
