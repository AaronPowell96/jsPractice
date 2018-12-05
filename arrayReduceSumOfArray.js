const numbers = [1, -1, 2, 3];
//finding the sum of array long way
let sum = 0;
for (let n of numbers) {
    sum += n;
}
console.log(sum);

//more elegant using REDUCE
// a = 0,
// c = element
// a = 0 + element
// c = element2
// a = 0 + element + element2
//etc
//accumulator is same as let sum = 0;

//remove second parameter (0), and accumulator is set to value
//of first element, starting the addition quicker.
const sumReduce = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sumReduce);