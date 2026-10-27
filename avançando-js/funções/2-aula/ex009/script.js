
/* let st = "deivi";

const inverter = string => {
    let string1 = string;
    let arraystring = string1.split("");
    let arrayinvertido = arraystring.reverse()
    let stringinvertida = arrayinvertido.join("")
    return stringinvertida
}

console.log(inverter(st)) */

const inverter = string => string.split("").reverse().join("")

console.log(inverter("dei"))