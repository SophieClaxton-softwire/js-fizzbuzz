// This is our main function
async function fizzbuzz() {
    let defaultRules = [
        {'num': 3, 'word': "Fizz", 'extra': ""},
        {'num': 5, 'word': "Buzz", 'extra': ""},
        {'num': 7, 'word': "Bang", 'extra': ""},
        {'num': 11, 'word': "Bong", 'extra': ""},
        {'num': 13, 'word': "Fezz", 'extra': "BeforeB"},
        {'num': 17, 'word': "", 'extra': "Reverse"},
    ]
    let args = process.argv.splice(2)
    let maxNum = getMaxNumber(args)
    let rules = args.includes("-user") ? await getUserRules() : defaultRules 

    for (let i = 1; i <= maxNum; i++) {
        let output = []

        for (const rule of rules) {
            if (i % rule['num'] == 0) {
                if (rule['extra'] == "BeforeB") {
                    let index = getfirstBWordIndex(output)
                    output.splice(index, 0, rule['word'])
                } else {
                    if (rule['word']) {
                        output.push(rule['word'])
                    }
                    if (rule['extra'] == "Reverse") {
                        output = output.reverse()
                    }
                }
            }
        }

        if (output.length == 0) {
            console.log(i)
        } else {
            console.log(output.join(""))
        }
    }
}

function getfirstBWordIndex(currentOutput) {
    for (const i in currentOutput) {
        if (Array.from(currentOutput[i])[0] == 'B') {
            return i
        }
    }
    return currentOutput.length
}

function getMaxNumber(args) {
    let defaultMax = 100
    if (args.includes("-max")) {
        let index = args.indexOf("-max")
        let max = parseInt(args[index + 1])
        return isNaN(max) ? defaultMax : max
    }
    return defaultMax
}

async function getUserRules() {
    const readline = require('node:readline')

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })

    const qNum = () => {
        return new Promise((resolve) => {
            rl.question("How many rules do you want to enter? ", resolve)
        })
    }

    const qRuleNum = () => {
        return new Promise((resolve) => {
            rl.question("Number: ", resolve)
        })
    }
    const qRuleWord = () => {
        return new Promise((resolve) => {
            rl.question("Word: ", resolve)
        })
    }
    const qRuleExtra = () => {
        return new Promise((resolve) => {
            rl.question("Extra: ", resolve)
        })
    }

    let userRules = []

    let numRules = parseInt(await qNum())

    console.log("For each rule specify a number, optionally a word and optionally an extra command (Reverse or BeforeB)")
    for (let i = 0; i < numRules; i++) {
        let num = parseInt(await qRuleNum())
        let word = await qRuleWord()
        let extra = await qRuleExtra()
        rule = {'num': num, 'word': word, 'extra': extra}
        userRules.push(rule)
    }

    rl.close()
    
    return userRules
}

// Now, we run the main function:
fizzbuzz();

