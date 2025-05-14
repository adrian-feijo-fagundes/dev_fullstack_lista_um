import promptSync from "prompt-sync";


export const sumFive = () => {
    const prompt = promptSync()
    console.clear()
    console.log("11. Escreva um programa que solicita ao usuário 5 números e calcula a soma totalutilizando um loop for.")

    let count = 0
    let sum = 0
    while (count != 5) {

            
        const num = Number(prompt(`Qual o ${count + 1} número a ser somado? `))
    
        if (isNaN(num)) {
            prompt("Valor invalido...")
            continue
        }

        sum += num
        count++
    }

    console.log("A soma total dos números é:", sum)
}