function calculadoraBasica(operador, ...valor) {
    if (valor.length === 0) return 0; 

    let res = valor[0]; 

    for (let i = 1; i < valor.length; i++) {
        let num = valor[i];
        if (operador === "+") {
            res += num;
        } else if (operador === "-") {
            res -= num;
        } else if (operador === "*") {
            res *= num;
        } else if (operador === "/") {
            res /= num;
        }
    }

    return res;
}

console.log(calculadoraBasica("/", 10, 2)); 