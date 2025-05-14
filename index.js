import promptSync from "prompt-sync";

import { exercises } from "./src/listaExercicios.js";

const main = () => {
    const prompt = promptSync();

    console.log("Bem vindo a lista de exercicios")

    while (true) {
        console.log("\n Escolha um exercicio para testar!")
        console.log(`Existem ${exercises.length} exercicios na lista, escolha um número entre 1 e ${exercises.length}`)
        console.log("para sair digite 0")
        const option = Number(prompt("Digite o número do exercicio: "))

        if (option == 0) return

        if (isNaN(option) || option > exercises.length) {
            console.log("Isso não foi uma escolha válida")
        } else {
            exercises[option - 1]()
        }
        prompt("\nClique na tecla ENTER para continuar...")
        console.clear()
    }
}

main()