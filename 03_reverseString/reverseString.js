const reverseString = function (word) {

    const arrayString = word.split("");
    const reversedArray = [];
    let concatString = "";
    // console.log(arrayString.toString());

    for (let i = 0; i < arrayString.length; i++) {

        reversedArray[i] = arrayString[(arrayString.length - 1) - i];

    }
    concatString = reversedArray.join("");

    // console.log(concatString);

    return concatString;

};

//Oder einfach: return string.split("").reverse().join("");

// Do not edit below this line
module.exports = reverseString;
