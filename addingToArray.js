const numbers = [4, 5];
//add to end of array
numbers.push(6, 7);
//add to start of the array
numbers.unshift(1, 2);

console.log(numbers);

//middle

numbers.splice(2, 0, 3, 'a', 'b')