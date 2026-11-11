/* function mercado(tipo, ...itens) {
    return tipo + itens.length;
}

console.log(mercado("vegetais: ", "batata", "inhame", "cenoura")) */

function mercado(tipo, ...itens) {
    console.log(`Tipo de item: ${tipo}`);
    console.log(`Quantidade disponível: ${itens.length}`)
}

mercado("vegetal", "batata", "cenoura")
