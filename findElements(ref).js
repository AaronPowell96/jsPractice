//finding element reference type
//use find on array of reference types
const courses = [{
    id: 1,
    name: 'a'
}, {
    id: 2,
    name: 'b'
}];
// searches array for elements with name of 'a'.
let found = courses.find(function (course) {
    return course.name === 'a';
})
//find index
let foundIndex = courses.findIndex(function (course) {
    return course.name === 'a';
})

console.log(foundIndex);
console.log(found);