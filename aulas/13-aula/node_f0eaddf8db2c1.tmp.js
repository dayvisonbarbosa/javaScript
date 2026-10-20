function fatorial(n) {
    var c = 1

    while (c < n) {
       c++
       n = n * (n - 1)
    }
}

console.log(fatorial(5))