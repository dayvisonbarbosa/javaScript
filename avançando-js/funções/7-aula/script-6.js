/* Crie uma função formatarTexto(texto, formatador) que recebe uma string e uma função formatadora. Crie duas funções formatadoras: emMaiusculas(str) e comExclamacao(str). Passe-as para formatarTexto. */

const emMaiusculas = texto => texto.toUpperCase();

const comExclamacao = texto => `${texto}!`;

const formatarTexto = (texto, formatador) => formatador(texto);

let textoOG = "Deivi"

console.log(formatarTexto(textoOG, comExclamacao));