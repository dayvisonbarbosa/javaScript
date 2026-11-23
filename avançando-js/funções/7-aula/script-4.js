const adicao = (a, b) => a + b;
const subtracao = (a, b) => a - b;

const operarNum = (num1, num2, operador) => operador(num1, num2);


console.log(operarNum(12, 6, subtracao));