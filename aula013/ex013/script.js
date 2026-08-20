    function carregar() {
        var jshora, img, data, hora
    
        jshora = document.getElementById("hora")
        img = document.getElementById("imagem")
        data = new Date()
        hora = data.getHours()
        jshora.innerHTML = `Agora são ${hora} horas`
        if (hora >= 0 && hora < 12) {
            // Bom dia
            img.src = "manha.png"
        } else if (hora >= 12 && hora < 18) {
            // Boa tarde
            img.src = "tarde.png"
        } else {
            // Boa noite
            img.src = "manha.png"
        }

    }
    
