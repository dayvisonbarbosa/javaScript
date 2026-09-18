let acentos = []
let jsnome = document.getElementById("nome")



function adicionar() {
    let nome = jsnome.value
    acentos.push(nome)    
}

function final() {
    let c = 0
    while (c < 3) {
         window.alert(`Aluno(a) ${acentos[c]} está no assento ${c + 1}`)
        c++
    }
}