
const isEven = (num) => {
    if (num % 2 == 0) return true;
    return false;
}

export const isEvenExample = () => {
    console.log("\n 1. Escreva um programa que recebe um número inteiro e verifica \n se ele é par ou ímpar utilizando uma estrutura de controle if.")
    
    const nums = [1,2,3,4,5,6,7,8]
    for (let num of nums) {
        let result = isEven(num) ? "sim" : "não"
        console.log(` O número ${num} é par? ${result}`)
    }
}
