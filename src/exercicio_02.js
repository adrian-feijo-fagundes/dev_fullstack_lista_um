


const classifyAge = (age) => {
    if (age > 59) return "Idoso";
    if (age > 17) return "Adulto";
    if (age > 11) return "Adolescente";
    return "Criança";
}

export const classifyAgeExample = () => {
    console.log(
        "\n 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,",
        "\nadolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de",
        "\ncontrole if-else."
    )
}