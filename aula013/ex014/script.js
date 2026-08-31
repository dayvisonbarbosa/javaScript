function verificar() {
    var data, jsano, formano, jsresultado, jssex, jsidade, genero, jsimg

    data = new Date()
    jsano = data.getFullYear()
    formano = document.getElementById(`ano`)
    jsresultado = document.getElementById(`resultado`)
    if (formano.value == 0 || formano.value > jsano) {
        window.alert(`[ERRO] Verifique os dados e tente novamnte!`)
    } else {
        jssex = document.getElementsByName(`sexo`)
        jsidade = jsano - Number(formano.value)
        genero = ""
        jsimg = document.createElement(`img`)
        jsimg.setAttribute(`id`, `foto`)
        if (jssex[0].checked) {
            genero = "Homem"
            if (jsidade >= 0 && jsidade < 10) {
                // criança
                jsimg.setAttribute(`src`, `imagens/bebemas.png`)
            } else if (jsidade < 21) {
                // jovem
                jsimg.setAttribute(`src`, `imagens/jovemmas.png`)
            } else if (jsidade < 50) {
                // adulto
                jsimg.setAttribute(`src`, `imagens/adulto.png`)
            } else {
                // idoso
                jsimg.setAttribute(`src`, `imagens/idosomas.png`)
            }
        } else if (jssex[1].checked) {
            genero = "Mulher"
            if (jsidade >= 0 && jsidade < 10) {
                // criança
                jsimg.setAttribute(`src`, `imagens/bebefem.png`)
            } else if (jsidade < 21) {
                // jovem
                jsimg.setAttribute(`src`, `imagens/jovemfem.png`)
            } else if (jsidade < 50) {
                // adulto
                jsimg.setAttribute(`src`, `imagens/adulta.png`)
            } else {
                // idoso
                jsimg.setAttribute(`src`, `imagens/idosofem.png`)
            }
        }
        jsresultado.style.textAlign = "center"
        jsresultado.innerHTML = `<p>Detectamos ${genero} com ${jsidade} anos.</p>`
        jsresultado.appendChild(jsimg)
    } 

    
}


