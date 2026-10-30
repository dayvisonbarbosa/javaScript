// Exemplo de Isolamento de Escopo //

// A função não tem acesso a const dentro da outra função //

function funcao() {
    console.log(y);
}

function outraFuncao() {
    const y = 3;
    funcao()
}

outraFuncao();