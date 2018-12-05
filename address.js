let address =  {
    street:'fake street', 
    city:'london', 
    postCode:'co100nh'
}

function showAddress(address) {
for (let key in address)
    console.log(key, address[key])
}

showAddress(address); 