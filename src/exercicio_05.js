

const calcIMC = (weight, height) => {
    const imc = (weight / (height * height)).toFixed(2)
    let classification = "obesidade"

    if (imc < 18.5) classification = "baixo peso!"
    else if (imc < 25) classification = "peso normal!"
    else if (imc < 30) classification = "sobrepeso"
    
    return { imc, classification}
}

const calcIMCExample = () => {
    console.log(
        "\n5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e",
        "\n determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)",
        "\n utilizando if-else."
    )

    let weight = 80
    let height = 1.80

    const result = calcIMC(weight, height)

    console.log(`\nUma pessoa que pesa ${weight} e tem a altura de ${height} tem o imc ${result.imc} e tem a classificação de ${result.classification}\n`)
}

calcIMCExample()