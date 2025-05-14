import promptSync from "prompt-sync";


const calcAppleTotalPrice = (quantity) => {
    let price = 0.30
    if (quantity < 12) price = 0.25

    return price * quantity 
}


export const calcAppleTotalPriceExample = () => {
    const prompt = promptSync()

    while (true) {
        console.clear()

        console.log(
            "\n7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se",
            "\nforem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs",
            "\ncompradas, calcule e escreva o valor total da compra.")
            
            const quantity = Number(prompt("Quantas maças você deseja comprar? "))
    
        if (isNaN(quantity)) {
            prompt("Valor invalido...")
            continue
        }
        console.log(`O preço total das ${quantity} maças é ${calcAppleTotalPrice(quantity)}`)
        break

    }
        
        
}