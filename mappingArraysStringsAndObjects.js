        //filter array
        const numbers = [1, -1, 2, 3];

        //Go through each element of the array
        //execute callBack function on each element
        // if element matches criteria, add element
        // to new array 'filterArray'
        const filteredArray = numbers.filter(value => value >= 0);
        //all positive array.
        //console.log(filteredArray);

        //MAP ARRAY
        //MAPPING STRINGS
        // const items = filteredArray.map((value => '<li>' + value + '</li>'))

        // const html = '<ul>' + items.join('') + '<ul>';

        //MAPPING OBJECTS
        //Put object into parenthesis when returning object with arrow function
        // arrow function thinks curly braces are code block not object.
        // const items = filteredArray.map(value => ({
        //     value
        // }));

        //CHAIN FILTER AND MAP
        const items = numbers
            .filter(value => value >= 0)
            .map(value => ({
                value
            }))
            .filter(obj => obj.value > 1)
            .map(obj => obj.value);
        console.log(items);
        //console.log(html);