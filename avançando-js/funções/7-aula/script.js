function multiplicar(...valores) {
    res = 1;
    for (let num of valores) {
        res *= num;
    }
    return res
}

console.log(multiplicar(5, 6, 5))