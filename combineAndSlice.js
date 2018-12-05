//combine and slice array
 const first = [1, 2, 3]; 
 const second = [4, 5, 6]; 
 // both arrays unaffected, creates a new one
 const combined = first.concat(second); 
 console.log(combined); 

 //slicing the array, pass start and end index
 //or just pass one and get all after the starting ones
 const slice = combined.slice(2); 
 console.log(slice); 