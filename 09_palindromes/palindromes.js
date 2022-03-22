const palindromes = function (palin) {
    let palindrome = palin.replace(/\W/g, "").toLowerCase();
    let reversed = palindrome.split("").reverse().join("");
    

    if(reversed === palindrome){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
