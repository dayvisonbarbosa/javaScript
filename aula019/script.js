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
        window.alert("Tudo OK")
    } else {
        window.alert("Valor inválido ou já encontrado na lista.")
    }
}
