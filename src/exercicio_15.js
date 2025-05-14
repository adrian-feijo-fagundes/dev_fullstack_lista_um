import promptSync from "prompt-sync";

export const calcFibonacci = () => {
    const prompt = promptSync()
    console.clear()

    console.log("14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário",
                "utilizando um loop for ou while.")
    
    let fibonacci = [1,1]
    while (true) {    
        const num = Number(prompt(`Quer ver qual número da sequencia de fibonacci? `))
        if (isNaN(num) || num == 0) {
            prompt("Valor invalido...")
            continue
        }

        for (let i = 2; i < num; i++) {
            fibonacci.push(fibonacci[i - 1] + fibonacci[i-2])
        }
        break;
    }
    console.log("A sequencia é", fibonacci)
    console.log("O último número é: ", fibonacci[fibonacci.length -1])
}