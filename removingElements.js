//removing elements
        const numbers = [1, 2, 3, 4]; 
        //end
        const last = numbers.pop(); 
        console.log(numbers); 
        console.log(last); 
        //beginning
        const first = numbers.shift(); 
        console.log(first); 
        console.log(numbers); 
        //middle, choose what index and how many to delete
        numbers.splice(1, 1); 
        console.log(numbers); 