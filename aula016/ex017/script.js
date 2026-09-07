function calcular() {
    var lignumero, jsnumero, jsresultado, contador, multiplicado

    lignumero = document.getElementById("numero")
    jsnumero = Number(lignumero.value)
    jsresultado = document.getElementById("resultado")

    contador = 0
    jsresultado.innerHTML += `<option>${jsnumero} x 0 = 0</option>`
    while (contador < 10) {
        contador++
        multiplicado = jsnumero * contador
        jsresultado.innerHTML += `<option>${jsnumero} x ${contador} = ${multiplicado}</option>`
    }
}


