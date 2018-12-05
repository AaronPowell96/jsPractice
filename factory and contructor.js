// Factory Function

//let address = createAddress('a', 'b', 'c'); 
function createAddress(street, city, postcode) {
    return {
        street,
        city,
        postcode
    };
}

//Construction function OOP, Java like.
let address = new Address('a', 'b', 'c');

function Address(street, city, postcode) {
    this.street = street;
    this.city = city;
    this.postcode = postcode;
}