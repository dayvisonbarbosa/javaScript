// Valores falsy em JS pulam a pré definição de um parâmetro.

function test(num = 1) {
    console.log(typeof num);
}

test();
test(undefined);

test("");
test(null);