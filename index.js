import promptSync from "prompt-sync";

import { isEvenExample } from "./src/exercicio_01.js";
import { classifyAgeExample } from "./src/exercicio_02.js";
import { classifyGradeExample } from "./src/exercicio_03.js";
import { menu } from "./src/exercicio_04.js";
import { calcIMCExample } from "./src/exercicio_05.js";
import { showTriangleTypeExample } from "./src/exercicio_06.js";

const start = (callback) => {
    callback()
}

const exercises = [
    isEvenExample,
    classifyAgeExample,
    classifyGradeExample,
    menu,
    calcIMCExample,
    showTriangleTypeExample
]

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
            start(exercises[option - 1])
        }
        prompt("\nClique na tecla ENTER para continuar...")
        console.clear()
    }
}

main()