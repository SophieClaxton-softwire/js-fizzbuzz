const fizzbuzz = require('./fizzbuzz')

test('FizzBuzz for multiples of 3, 1-10', () => { 
    expect(fizzbuzz([10, 3])).toEqual([1, 2, "Fizz", 4, 5, "Fizz", 7, 8, "Fizz", 10]); 
})

test('FizzBuzz for multiples of 5, 1-10', () => { 
    expect(fizzbuzz([10, 5])).toEqual([1, 2, 3, 4, "Buzz", 6, 7, 8, 9, "Buzz"]); 
})

test('FizzBuzz for multiples of 3 and 5, 1-15', () => {
    expect(fizzbuzz([15, 3, 5])).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"])
})

test('FizzBuzz for multiples of 3 and 7, 1-21', () => {
    expect(fizzbuzz([21, 3, 7])).toEqual([1, 2, "Fizz", 4, 5, "Fizz", "Bang", 8, "Fizz", 10, 11, "Fizz", 13, "Bang", "Fizz", 16, 17, "Fizz", 19, 20, "FizzBang"])
})
