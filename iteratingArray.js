  //iterating an array

  const numbers = [1, 2, 3];

  for (let number of numbers)
      console.log(number);
  //callback function can optionally take second parameter
  //doesnt need to have index but would need for IN loop instead
  // of for OF to show index
  numbers.forEach((number, index) => console.log(index, number));