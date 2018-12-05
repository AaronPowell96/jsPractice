const numbers = [1, 2, 3, 4];

console.log(numbers.includes(1));

function includes(array, searchElement) {
    for (let item of array) {
        if (item === searchElement)
            return true;
    }
    return false;
}

console.log(includes(numbers, -1));