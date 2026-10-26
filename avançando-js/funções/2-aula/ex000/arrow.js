/* function subtracao(a, b) {
    return a - b;
}

function somar2(a) {
    return a + 2
}

function diaDoMes() {
    return (new Date()).getDate();
} */

const subtracao2 = (a, b) => a - b; // se a instrução for apenas return, pode apagar o return e as chaves.

const somar2 = a => a + 2 // se a função tiver apenas um parâmetro, pode apagar os parênteses.


const diaDoMes = () => (new Date()).getDate(); 

/* function superFuncao(a, b) {
    let subtracao = a - b;
    subtracao -= 2;
    let diaDoMes = new Date().getDate(); 
    return diaDoMes;
} */

const superFuncao = (a, b) => {
    let subtracao = a - b;
    subtracao -= 2;
    let diaDoMes = new Date().getDate(); 
    return diaDoMes;
}


