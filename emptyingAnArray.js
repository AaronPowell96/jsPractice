//emptying an array

let numbers = [1, 2, 3, 4]; 
let another = numbers; //another still points to original array
//solution 1
// numbers = []; //new object
//old array still in memory,
// removed by garbage collector
//if there are other references
//it will not change and will not
//be removed

//solution 2 // recommended
//truncates to length 0, effects references too
//numbers.length = 0;

//solution 3
//numbers.splice(0, numbers.length)

//solution 4
//not recommended 
while (numbers.length > 0)
numbers.pop(); 

console.log(numbers); 
console.log(another); 

