/* function multiplicar(...valores) {
    res = 1;
    for (let num of valores) {
        res *= num;
    }
    return res
}

console.log(multiplicar(5, 6, 5)) */

// Exemplo de HOF:

/* function multiplyBy(num1) {
    return function(num2) {
        return console.log(num1 * num2)
    }
} */

const multiplyBy = (num1) => (num2) => console.log(num1 * num2);
multiplyBy(10)(6)