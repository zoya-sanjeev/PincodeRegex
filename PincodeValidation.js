console.log("Welcome to pincode validation");

let pinCodeRegex = RegExp("^[0-9]{6}");

function validatePincode(pincode){
    if(pinCodeRegex.test(pincode))
        console.log("Valid Pincode");
    else
        throw 'Invalid pincode';
}

try{
    validatePincode("500000");
    validatePincode("8989");
}catch(e){
    console.error(e);
}