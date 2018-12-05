       //filter array
       const numbers = [1, -1, 2, 3];

       //Go through each element of the array
       //execute callBack function on each element
       // if element matches criteria, add element
       // to new array 'filterArray'
       const filteredArray = numbers.filter(value => value >= 0);
       //all positive array.
       console.log(filteredArray);