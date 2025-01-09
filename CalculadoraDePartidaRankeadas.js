let qtd = derrotasVitorias(95,5)
function derrotasVitorias(vitoria, derrota){
    let qtd2 = vitoria - derrota
        return qtd2
}

if (qtd <=10)
    console.log('O seu nivel é ferro}')
else if (qtd >=11 && qtd <=20)
    console.log("O seu nivel Bronze")
else if (qtd >=21 && qtd<=50)
    console.log("O seu nivel Prata")
else if (qtd >=51 && qtd <=80)
    console.log("O seu nivel Ouro")
else if (qtd >=81 && qtd<=90)
    console.log("O seu nivel Diamante")
else if (qtd >=91 && qtd <=100)
    console.log("O seu nivel Lendário")
else console.log("O seu nivel Imortal")

