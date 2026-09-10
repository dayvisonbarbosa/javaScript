var valores, indice

valores = [1, 2, 3, 4, 5]

/* for (contador = 0; contador < valores.length; contador++) {
    console.log(`A posição ${contador} guarda o valor ${valores[contador]}`)
} */

for (indice in valores) {
    console.log(`O valor ${valores[indice]} está no índice ${indice}`)
}

indice = valores.indexOf(3)
console.log(`O valor pesquisado está na posição ${indice}`)
