/*Encadeamento com map e filter
Dado o array de alunos:

JavaScript
const alunos = [
    { nome: "Ana", nota: 8.5 },
    { nome: "Pedro", nota: 5.0 },
    { nome: "Maria", nota: 9.0 },
    { nome: "Lucas", nota: 6.5 }
];
Use .filter() para pegar os alunos com nota igual ou superior a 7.0 e, em seguida, encadeie com .map() para retornar um novo array contendo apenas os nomes desses alunos aprovados.*/

const alunos = [
    { nome: "Ana", nota: 8.5 },
    { nome: "Pedro", nota: 5.0 },
    { nome: "Maria", nota: 9.0 },
    { nome: "Lucas", nota: 6.5 }
];

const verificar = aluno => aluno.nota >= 7;
const finalizar = aluno => aluno.nome;

const res = alunos.filter(verificar).map(finalizar);

console.log(`Nome aprovados: ${res.join(", ")}`)



