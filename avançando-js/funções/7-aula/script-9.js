/*Validador de Usuário
Crie uma função validarEntrada(dado, funcaoValidacao) que recebe um dado qualquer e uma função que retorna true ou false. Crie duas validações:

ehEmail(str): verifica se o texto contém @.

ehSenhaForte(str): verifica se a string tem mais de 8 caracteres.*/


let dado = "Dayvison30*"

const ehEmail = d => d.includes("@") ? "E-mail validado." : "E-mail incorreto.";

const ehSenhaForte = d => d.length > 8 ? "Senha forte." : "Senha fraca.";

const validarEntrada = (dado, funcaoValidacao) => funcaoValidacao(dado);

console.log(validarEntrada(dado, ehSenhaForte));






