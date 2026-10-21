let string = document.getElementById("string")

const inverterTexto = function() {
    let string1 = string.value
    let arraystring = string1.split("")
    let arrayinvertido = arraystring.reverse()
    let stringinvertida = arrayinvertido.join("")
    window.alert(stringinvertida)
}