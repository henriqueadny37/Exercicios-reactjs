function sena(qtde = 6, numeros = []){
    if(qtde < 6 && qtde > 60){
        throw "Númereo inválido"
    }
    if(numeros.length === qtde){
        return numeros.sort((n1, n2) => n1 - n2)
    }
    const numeroAleatorio = parseInt(Math.random() * 60) + 1
    if(!numeros.includes(numeroAleatorio)){
        return sena(qtde, [...numeros,numeroAleatorio])
    }else{
        return sena(qtde, numeros)
    }
}
console.log(sena(7))
