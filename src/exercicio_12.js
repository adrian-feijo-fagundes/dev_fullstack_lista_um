import promptSync from "prompt-sync";


export const multiplicationTable = () => {
    const prompt = promptSync()
    console.clear()
    console.log("12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a10) utilizando um loop for.")


    while (true) {

        const num = Number(prompt("Deseja visualizar a tabuada de qual número? "))
            
        if (isNaN(num)) {
            prompt("Valor invalido...")
            continue
        }
        for (let i = 0; i < 11; i++) {
            console.log(`${i} * ${num} = ${i * num}`)
        }
        break
    }    
}