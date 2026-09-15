/* function fatorial(n) {
  let fat = 1
  
  for (let c = n; c > 1; c--)  {
    fat *= c
  }
  return fat

}

console.log(fatorial(5)) */

function fatorial(n) {
  let fat = 1
  let c = n
  while (c > 1) {
    fat *= c
    c--
  }
  return fat
}

console.log(fatorial(5))