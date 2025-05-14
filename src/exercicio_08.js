const sortTwo = (a , b) => {
    let result = []
    if (a == b) throw new Error(`Os números não podem ser iguais inputs: ${a}, ${b}`)

    if (a < b) {
        result.push(a)
        result.push(b)
    } else {
        result.push(b)
        result.push(a)
    }

    return result
}


export const sortTwoExample = () => {    
    console.log(
        "\n8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)",
        "\ne escreve-los em ordem crescente.")

    try {
        console.log("Exemplo 01: input 10, 2", "output:", sortTwo(10, 2))
        console.log("Exemplo 02: input 11, 12", "output:", sortTwo(11, 12))
        console.log("Exemplo 03: input 12, 2", "output:", sortTwo(12, 2))
        console.log("Exemplo 04: input 12, 12", "output:", sortTwo(12, 12))


    } catch (error) {
        console.log(error.message)
    }
}