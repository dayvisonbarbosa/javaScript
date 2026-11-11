
function calcMedia(aluno, ...nota) {
    let tot = 0;
    for (let not of nota) {
        tot += not;
    }
    let media = tot / nota.length;
    console.log(`Nome do Aluno:  ${aluno}`);
    console.log(`Média Final: ${media}`);
}

calcMedia("Pedro", 44, 16);