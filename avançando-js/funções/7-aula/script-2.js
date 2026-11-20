const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;

function operacaoNum(num1, num2, operacao) {
    return operacao(num1, num2)
}

console.log(operacaoNum(10, 5, somar))
console.log(operacaoNum(30, 22, subtrair))