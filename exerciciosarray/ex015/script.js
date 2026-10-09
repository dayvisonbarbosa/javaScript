let input = document.getElementById("idd")
let res = document.getElementById("res")
let array1 = []

function filtrarMaiores(vetor1) {
    let array2 = []
    for (let idade of vetor1) {
        if (idade >= 18) {
            array2.push(idade)
        }
    }
    return array2.join(", ")
}

function adicionar() {
    let idd = Number(input.value)

    if (input.value == "" || isNaN(idd)) {
        window.alert("Por favor, digite uma idade válida!")
    } else if (idd > 100 || idd < 1) {
        window.alert("Por favor, digite uma idade válida.")
    } else {
        array1.push(idd)
        let msg = filtrarMaiores(array1)

        res.innerHTML = `<strong><p>Idade Digitada: ${idd}</p></strong>`
        res.innerHTML += `<p><strong>Idades Maiores (ou iguais) que 18:</strong> [${msg}]</p>`
    }
    
    input.value = ""
    input.focus()

}