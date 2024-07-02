// This is our main function
function fizzbuzz() {
    let maxNum = getMaxNumber()
    let validRules = getValidRules()

    let rules = {3: "Fizz", 5: "Buzz", 7: "Bang", 11: "Bong", 13: "Fezz", 17: ""}

    for (let i = 1; i <= maxNum; i++) {
        let output = []

        for (const rule of validRules) {
            if (i % rule == 0) {
                if (rule == 13) {
                    let index = getfirstBWordIndex(output)
                    output.splice(index, 0, rules[rule])
                } else if (rule == 17) {
                    output = output.reverse()
                } else  {
                    output.push(rules[rule])
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

function getMaxNumber() {
    let maxNumStr = process.argv[2]
    let maxNum = 100
    if (maxNumStr) {
        maxNum = parseInt(maxNumStr)
    }
    return maxNum
}

function getValidRules() {
    let validRules = process.argv.splice(3)
    for (ruleIndex in validRules) {
        validRules[ruleIndex] = parseInt(validRules[ruleIndex])
    }
    if (validRules.length == 0) {
        validRules = [3, 5, 7, 11, 13, 17]
    }
    return validRules
}

// Now, we run the main function:
fizzbuzz();

