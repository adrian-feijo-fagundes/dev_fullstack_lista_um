import promptSync from "prompt-sync";

export const menu = () => {
    const prompt = promptSync();
    
    console.log(
        "\n4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.",
        "\nUtilize switch-case para implementar a lógica de cada opção selecionada."
    )


    while (true) {

        console.log("Escolha uma opção:")
        console.log(" 0. Sair")
        console.log(" 1. Descubra meu amigo")
        console.log(" 2. Essa opção não é a errada")
        console.log(" 3. Não tem opção errada")
    
        let option = Number(prompt("\n Escolha uma opção: "))
        switch (option) {
            case 0:
                return
            case 1:
                console.log(" Já tentou as outras opções?")
                break
            case 2:
                console.log(" Resposta neutra")
                break
            case 3:
                console.log(" Tenha um ótimo dia, tarde ou noite!")
                break
            default:
                console.log(" Okay essa é uma opção errada...")
                break
        }

        prompt("\n Clique enter para continuar...")
        console.clear()
    }
}