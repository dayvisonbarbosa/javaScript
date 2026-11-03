const funcao = (function() {
    let cont = 0;
    return function() {
        return `Eu fui chamada ${++cont} vez(es).`;
    }
}) ();
console.log(funcao());
console.log(funcao());