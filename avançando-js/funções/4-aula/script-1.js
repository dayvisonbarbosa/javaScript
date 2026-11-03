/* Ainda que um objeto receba um valor dentro do bloco, ele pode ser modificado fora do escopo do bloco. */

// Closures //

let f;
{
    let o = {nota: "Seguro"};
    f = function() {
        return o;
    }
}
let referenciaO = f();
referenciaO.nota = "Afinal, não tão seguro!";
console.log(referenciaO);