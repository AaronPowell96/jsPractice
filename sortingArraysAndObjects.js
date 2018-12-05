 //sorting arrays
 const numbers = [2, 3, 1];
 //converts to string and sorts elements
 numbers.sort();
 console.log(numbers);

 //reverse order method
 numbers.reverse();
 console.log(numbers);
 //sorting objects by attributes
 const courses = [{
         id: 1,
         name: 'node.js'
     },
     {
         id: 2,
         name: 'Javascript.js'
     },
 ]

 courses.sort(function (a, b) {
     //a < b => -1
     // a > b => 1
     // a === b => 0
     const nameA = a.name.toUpperCase;
     const nameB = b.name.toUpperCase;
     if (a.nameA < b.nameB) return -1;
     if (a.nameA > b.nameB) return 1;
     return 0;
 });

 console.log(courses);