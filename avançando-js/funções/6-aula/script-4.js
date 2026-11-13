// O valor de uma função é passado como parâmetro pré definido para outra função.

/* function chamaAlgumaCoisa(coisa = algumaCoisa()) {
    return coisa;
}

function algumaCoisa() {
    return "sth";
}

const result = chamaAlgumaCoisa();

console.log(result); */

const chamaAlgumaCoisa = (coisa = algumaCoisa()) => coisa;

const algumaCoisa = () => "sth";

const result = chamaAlgumaCoisa();

console.log(result);