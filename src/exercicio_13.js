import promptSync from "prompt-sync";


export const calcAvarage = () => {
    const prompt = promptSync()
    console.clear()

    console.log("13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazera média aritmética desses números.")
    console.log("\nPara encerrar digite 0")

    let count = 0
    let sum = 0
    while (true) {
            
        const num = Number(prompt(`Qual o ${count + 1} número a ser calculado na média? `))
    
        if (isNaN(num)) {
            prompt("Valor invalido...")
            continue
        }
        if (num == 0) break

        sum += num
        count++

    }
    if (count == 0) {
        console.log("Nenhum número foi inserido para calcular a média")
        return
    }

    console.log("A média dos numeros informados é", sum / count)
}



