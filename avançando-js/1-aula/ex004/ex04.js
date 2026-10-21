const calcularIMC = function(p, a) {
    let imc = p / (a * a)
    return imc
}

let res = calcularIMC(80, 1.78)
console.log(res)