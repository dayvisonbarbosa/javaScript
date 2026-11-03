/* A escopo global tem acesso a variável criada dentro do escopo do bloco pois atribuímos uma função para a var global que imprime a var do bloco. */

// Closures //

let funcaoGlobal;
{
    let variavelBloco = "a";
    funcaoGlobal = function() {
        console.log(variavelBloco);
    }
}
funcaoGlobal();