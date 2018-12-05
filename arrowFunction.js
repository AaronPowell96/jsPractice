const courses = [ {id:1, name:'a'},  {id:2, name:'b'}
]; 
// arrow function for same method below
// can remove brackets if 1 parameter
const foundViaArrow = courses.find((course) => course.name === 'a'); 
// searches array for elements with name of 'a'.
const found = courses.find(function (course) {
    return course.name === 'a'; 
})
//find index
let foundIndex = courses.findIndex(function (course) {
    return course.name === 'a'; 
})

console.log(foundIndex); 
console.log(found); 
console.log(foundViaArrow); 