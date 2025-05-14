import promptSync from "prompt-sync";

const print10 = (num) => {
    for (let i = 0; i < 10; i++) {
        console.log(num)
    }
}

export const print10Example = () => {
    const prompt = promptSync()

    while (true) {
        console.clear()

        console.log("Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.")
            
        const num = Number(prompt("Qual numero deseja escrever?"))
    
        if (isNaN(num)) {
            prompt("Valor invalido...")
            continue
        }

        print10(num)
        break
    }
}