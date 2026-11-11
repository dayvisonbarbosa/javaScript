function multiplicar (...valores) {
    let tot = 1
    for (let num of valores) {
        tot *= num
    }

    return tot
}

console.log(multiplicar(2, 3, 2))