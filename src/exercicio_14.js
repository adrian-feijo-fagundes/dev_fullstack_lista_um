import promptSync from "prompt-sync";

export const calcFactorial = () => {
    const prompt = promptSync()
    console.clear()

    console.log("14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário",
                "utilizando um loop for ou while.")
    
    let factorial = 1
    while (true) {
            
        const num = Number(prompt(`Quer calcular o fatorial de qual número?`))
        if (isNaN(num)) {
            prompt("Valor invalido...")
            continue
        }
        if (num == 0 || num == 1) break 
        for (let i = num; i > 0; i--) {
            factorial *= i
        }
        break;
    }
    console.log("O fatorial é:", factorial)
}