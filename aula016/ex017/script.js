function calcular() {
    var lignumero, jsnumero, jsresultado, contador, multiplicado

    lignumero = document.getElementById("numero")
    jsnumero = Number(lignumero.value)
    jsresultado = document.getElementById("resultado")

    contador = 0
    while (contador < 10) {
        contador++
        multiplicado = jsnumero * contador
        jsresultado.innerHTML = `<p>${jsnumero} x ${contador} = ${multiplicado} <br></p>`
    }
}


