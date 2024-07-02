// This is our main function
function fizzbuzz() {
    let numbers = [[3, "Fizz"], [5, "Buzz"], [7, "Bang"], [11, "Bong"], [13, "Fezz"], [17, ""]]

    for (let i = 1; i <= 300; i++) {
        let output = []

        for (const pair of numbers) {
            if (i % pair[0] == 0) {
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

// Now, we run the main function:
fizzbuzz();

