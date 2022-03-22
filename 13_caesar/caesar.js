const caesar = function(string, shift) {

    if (shift < 0) {
        return caesar(string, shift + 26);
    }
      
    let encodedString = "";

    for(let i = 0; i < string.length; i++){
        let charCode = string[i].charCodeAt();

        if (charCode >= 65 && charCode <= 90){
            encodedString += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
        } else if ((charCode >= 97 && charCode <= 122)) {
            encodedString += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
        } else {
            encodedString += string[i];
        }
    }

    return encodedString;
};

// Do not edit below this line
module.exports = caesar;

