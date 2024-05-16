
import { bitcoinCliCommands } from "./bitcoin-cli"


export type BitcoinCliCommand = {
    name: string
    description: string
    arguments: string[]
    url: string
}

export async function getBitcoinCliCommands() {
    const res: BitcoinCliCommand[] = []
    bitcoinCliCommands.forEach(command => {
        res.push({
            name: command.name,
            description: command.description,
            arguments: command.arguments,
            url: `https://chainquery.com/bitcoin-cli/${command.name}`
        })
    })

    return res
}

