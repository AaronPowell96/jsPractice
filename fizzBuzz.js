
const output = fizzBuzz(false);
console.log(output);

function fizzBuzz(input) {
    let result = "";
    if (typeof input !== 'number') {
        return NaN;
    }
    if (input % 3 === 0) result += 'fizz';
    if (input % 5 === 0) result += 'Buzz';
    if (input % 3 !== 0 && input & 3 !== 0) return input;
    return result;

}