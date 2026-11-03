/* Uma IIFE significa Função de expressão invocadas imediatamente. Sua principal vantagem é proteger uma variável dentro do seu próprio escopo e não permitir que ela seje acessada fora do escopo global. */

const mensagem = (function(){
    const segredo = "Eu sou um segredo!";
    return `O segredo tem ${segredo.length} caracteres.`
}) ();
console.log(mensagem);