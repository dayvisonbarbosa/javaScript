// Exemplo de Acesso Léxico //

// A função tem acesso aos valores de x e y do escopo global em seu escopo léxico. //

const x = 3;

function f() {
    console.log(x)
    console.log(y)
}

const y = 3;

f();