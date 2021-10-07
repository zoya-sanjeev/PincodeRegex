console.log("Welcome to pincode validation");

let pinCodeRegex = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");

function validatePincode(pincode){
    if(pinCodeRegex.test(pincode))
        console.log("Valid Pincode");
    else
        throw 'Invalid pincode';
}

try{
    validatePincode("500000");
    validatePincode("500 000");
    validatePincode("40088B");
}catch(e){
    console.error(e);
}