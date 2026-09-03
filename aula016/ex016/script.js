function contar() {
    var ligacaoin, jsinicio, ligacaofim, jsfim, ligacaopasso, jspasso, jsresultado, c

    ligacaoin = document.getElementById("inicio")
    ligacaofim = document.getElementById("fim")
    ligacaopasso = document.getElementById("passo")
    jsresultado = document.getElementById("resultado")

    if (ligacaoin.value === "" || ligacaofim.value === "" || ligacaopasso.value === "") {
        jsresultado.innerHTML = "Não foi possível executar a conta"
    } else {
        jsinicio = Number(ligacaoin.value)
        jsfim = Number(ligacaofim.value)
        jspasso = Number(ligacaopasso.value)

        jsresultado.innerHTML = `${jsinicio} 👉 `
        c = jsinicio

        while (c < jsfim) {
            c = c + jspasso
            jsresultado.innerHTML += `${c} 👉`
        }
        jsresultado.innerHTML += `🏁`
    }
}
