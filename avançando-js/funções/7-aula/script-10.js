
function teste(a) {
    let novoArray = []
    for (let i = 0; i < a.length; i++) {
        if (a[i].nota > 10) {
            novoArray.push(a[i].nota)
        }
    }

    return novoArray
}

let aluno = [  
    {nome: "Deivi", nota: 10}, 
    {nome: "Tiago", nota: 20}, 
    {nome: "Sther", nota: 30} 
]

console.log(teste(aluno))

