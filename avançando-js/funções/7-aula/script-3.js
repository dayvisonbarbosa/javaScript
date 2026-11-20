/* function saudarPessoa(saudar) {
    return function(nome) {
        return console.log(saudar + nome)
    }
} */

let saudar = "Olá,"
let nome = "Dayvison"

const saudarPessoa = (saudar) => (nome) => console.log(`${saudar} ${nome}`);

saudarPessoa(saudar)(nome)

