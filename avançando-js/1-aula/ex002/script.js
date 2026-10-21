let idd = document.getElementById("idd");

const verificarMaioridade = function(vetor) {
    let verificar = ""

    if (vetor >= 18) {
        verificar = "Maior de idade"
    } else {
        verificar = "Menor de idade"
    }

    return verificar
}

function adicionar() {
    let idade = Number(idd.value)

    let res = verificarMaioridade(idade)

    window.alert(res)
}