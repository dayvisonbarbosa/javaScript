/* Fábrica de Descontos (Currying)
Crie uma função aplicarDesconto(porcentagem) que retorna outra função. A função retornada deve receber o precoOriginal de um produto e calcular o preço final com a porcentagem de desconto já embutida.

Exemplo de uso esperado:

JavaScript
const descontoBlackFriday = aplicarDesconto(0.20); // 20% de desconto
console.log(descontoBlackFriday(100)); // Retorna: 80
console.log(descontoBlackFriday(250)); // Retorna: 200 */

/* const calcularDesconto = valor => outraFuncao(valor)
const outraFuncao = v => v - v * 0.20
console.log(calcularDesconto(200)) */

const aplicarDesconto = desconto => {
    return (precoOriginal) => precoOriginal - (precoOriginal * desconto)
} 

const descontoBlackFriday = aplicarDesconto(0.20)
console.log(descontoBlackFriday(100))