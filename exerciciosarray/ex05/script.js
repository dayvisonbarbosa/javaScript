function adicionar() {
    let jsnumero = document.getElementById("num")
    let jsselect = document.getElementById("select")
    jsselect.innerHTML += `<option>${jsnumero.value}</option>`
}