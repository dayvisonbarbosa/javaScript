/* Blocos possuem seu próprio escopo, se tentarmos chamar uma let ou const criada em um bloco fora dele no escopo globao, irá ocorrer um erro de referência. */

console.log("Antes do bloco");
{
    console.log("Dentro do bloco");
    const valorX = 3;
    console.log(valorX);
}
console.log(`Fora do bloco; valorX=${valorX}`);