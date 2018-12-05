const numbers = [1, 2, 3, 1]; 
//can add second parameter to start search at a later index
// ie: console.log(numbers.indexOf(1,3)) starts looking for 
// 1 from index 3 onwards
console.log(numbers.indexOf(1)); 
console.log(numbers.lastIndexOf(1)); 

console.log(numbers.indexOf(1) !== -1)
//this is same as above
console.log(numbers.includes(1)); 