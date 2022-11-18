const readline = require('readline-sync')

function start(){
    const content = {}
    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()
    function  askAndReturnSearchTerm(){
        return readline.question("Digite o termo da pesquisa: ")
    }
    function  askAndReturnPrefix(){
        const prefixes = ["Quem", "O que", "Historia"]
        const selectedPrefixIndex =  readline.keyInSelect(prefixes, "Choose an option: ")
        const selectedPrefixText = prefixes[selectedPrefixIndex]

        return selectedPrefixText
    }
    console.log(content);
}

start()