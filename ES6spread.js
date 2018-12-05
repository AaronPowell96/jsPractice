//spread ES6
//better concatination with es6

const first = [1, 2, 3];
const second = [4, 5, 6];
//const combined = first.concat(second); 
const combined = [...first, ...second];
//can add elements at start, end, or in the middle
//const combined = [...first, 'a', ...second];

//copy array
const copy = [...combined];