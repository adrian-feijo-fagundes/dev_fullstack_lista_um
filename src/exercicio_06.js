const showTriangleType = (aSide, bSide, cSide) => {
    if (aSide >= bSide + cSide || bSide >= aSide + cSide || cSide >= aSide + bSide) {
        return "Não é um triângulo"
    }
    if (aSide === bSide && bSide === cSide) return "Equilátero"
    if (aSide === bSide || aSide === cSide || bSide === cSide) return "Isóceles"
    return "Escaleno"
}


export const showTriangleTypeExample = () => {

    console.log(
        "\n6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos",
        "\nformam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:",
        "\nIsósceles, escaleno ou eqüilátero.\n")



    const triangles = [
        { aSide: 1, bSide: 1, cSide: 1},
        { aSide: 1.2, bSide: 1, cSide: 1},
        { aSide: 1, bSide: 1.2, cSide: 1},
        { aSide: 1, bSide: 1, cSide: 1.2},
        { aSide: 1, bSide: 1.2, cSide: 1.3},
    ]

    for (let index in triangles) {
        const triangle = triangles[index]
        console.log(`
            O triangulo ${index} de lados A = ${triangle.aSide}, B = ${triangle.bSide}, C = ${triangle.cSide}
            é ${showTriangleType(triangle.aSide, triangle.bSide, triangle.cSide)}`)
    } 
}




