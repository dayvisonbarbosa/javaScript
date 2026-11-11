function somarTudo(...num) {
    let tot = 0
    for (let valor of num) {
        tot += valor
    }
    
    return tot
}

console.log(somarTudo(1, 2, 3))