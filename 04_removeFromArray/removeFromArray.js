const removeFromArray = function(array, ...remove) {
    let argArray = Array.from(remove);

    for(let i = 0; i < argArray.length; i++){

        if(!(array.includes(argArray[i]))){
            continue;
        }

        let index = array.indexOf(argArray[i]);
        array.splice(index, 1);
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

