/* Filtro Personalizado com Array.prototype.filter
Dada uma lista de números [3, 8, 12, 5, 20, 7], utilize o método nativo .filter() (que é uma Higher-Order Function) passando uma arrow function como parâmetro para extrair apenas os números maiores que 7. 

let lista = [1, 5, 9, 11, 4, 12]

let array = []

const arrow = num => num > 7 ? array.push(num) : false

let maiorqsete = lista.filter(arrow)

console.log(maiorqsete) */

const lista = [1, 5, 9, 11, 4, 12, 17];

const maiorqsete = lista.filter(num => num > 7);

console.log(maiorqsete)





