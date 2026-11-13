function somaArraysObectos([x, y] = [1, 2], {z: z} = {z: 3}) {
    return x + y + z;
}

somaArraysObectos();
console.log(somaArraysObectos([3, 4], {z: 1}))