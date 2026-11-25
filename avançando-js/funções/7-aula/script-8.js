
 const aplicarDesconto = desconto => {
    return (valor) => valor - (valor * desconto);
}

const descontoBlackFriday = aplicarDesconto(0.20)

console.log(descontoBlackFriday(60)) 

/* const aplicarDesconto = desconto => valor => console.log(valor - (valor * desconto))

const descontoBlackFriday = aplicarDesconto(0.20)(100) */