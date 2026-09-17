

function adicionar() {
    let liganum = document.getElementById("num")
    let jsnum = liganum.value
    let jstabela = document.getElementById("itabela")
    if (jsnum == "") {
        window.alert("Preencha os dados corretamente.")
    } else if (jsnum < 1 || jsnum > 100) {
        window.alert("Valor fora do limite.")
    } else {
        jstabela.innerHTML += `<option>Valor ${jsnum} adicionado</option>`
    }
    
}