function calcular() {
    var ligin, ligfim, ligpasso, jsresultado, jsinicio, jsfim, jspasso, contador

    /* Conectando os inputs ao Script Utilizando ID */

    ligin = document.getElementById("inicio")
    ligfim = document.getElementById("fim")
    ligpasso = document.getElementById("passo")
    jsresultado = document.getElementById("resultado")

    /* Testando caso algum input não for preenchido */

    if (ligin.value === "" || ligfim.value === "" || ligpasso.value === "") {
        jsresultado.innerHTML = "Preencha todas as caixas e tente novamente."
    } else {
        /* As variáveis recebem os valores de cada input convertidos em números para fazer os cálculos */

        jsinicio = Number(ligin.value)
        jsfim = Number(ligfim.value)
        jspasso = Number(ligpasso.value)

        jsresultado.innerHTML = `${jsinicio} 👉`

        contador = jsinicio /* O contador recebe o valor inicial da contagem */

        /* Função repita para iniciar a contagem */

        while (contador < jsfim) {
            contador = contador + jspasso /* È aqui que o cálculo da contagem é feito */
            jsresultado.innerHTML += `${contador} 👉`
        }

        jsresultado.innerHTML += `🏁`

    }
}