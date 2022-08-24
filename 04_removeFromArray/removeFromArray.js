const removeFromArray = function(array, ...args) {



    for(let i = 0; i < array.length; i++){
        if(array[i] === args){
            array.splice(i, 1);
            continue;
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
