// This is our main function
function fizzbuzz() {
    let numbers = [[3, "Fizz"], [5, "Buzz"], [7, "Bang"], [11, "Bong"], [13, "Fezz"], [17, ""]]

    for (let i = 1; i <= 300; i++) {
        let output = []

        for (const pair of numbers) {
            if (i % pair[0] == 0) {
                if (pair[0] == 17) {
                    output = output.reverse()
                } else if (pair[0] == 13) {
                    let firstBWord = getfirstBWord(output)
                    if (firstBWord != "") {
                        let index = output.indexOf(firstBWord)
                        output.splice(index, 0, pair[1])
                    } else {
                        output.push(pair[1])
                    }
                } else {
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

function getfirstBWord(arr) {
    for (const str of arr) {
        if (Array.from(str)[0] == 'B') {
            return str
        }
    }
    return ""
}

// Now, we run the main function:
fizzbuzz();

