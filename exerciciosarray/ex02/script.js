let jsnum = document.getElementById("num")

function ParOuImpar(n) {
    if (n % 2 == 0) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (ParOuImpar(jsnum.value)) {
    window.alert("Par")
    } else {
        window.alert("Ìmpar")
    }
}