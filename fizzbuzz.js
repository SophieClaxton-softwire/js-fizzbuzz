// This is our main function
function fizzbuzz() {
    let maxNum = getMaxNumber()
    let validRules = getValidRules()

    let rules = [[3, "Fizz"], [5, "Buzz"], [7, "Bang"], [11, "Bong"], [13, "Fezz"], [17, ""]]

    for (let i = 1; i <= maxNum; i++) {
        let output = []

        for (const pair of rules) {
            if (validRules.includes(pair[0]) && i % pair[0] == 0) {
                if (pair[0] == 13) {
                    let index = getfirstBWordIndex(output)
                    output.splice(index, 0, pair[1])
                } else if (pair[0] == 17) {
                    output = output.reverse()
                } else  {
                    output.push(pair[1])
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

function getfirstBWordIndex(arr) {
    for (const i in arr) {
        if (Array.from(arr[i])[0] == 'B') {
            return i
        }
    }
    return arr.length
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

