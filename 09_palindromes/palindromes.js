const palindromes = function (string) {

    let pali = string.trim().split(" ").join("").replace(/\W/g, '').toLowerCase(); // removes any whitespaces from the string and converts to lowercase.
    // replace(/\W/g, '') allows only numbers and letters

    for (let i = 0; i < pali.length - 1 / 2; i++) {
        if (pali.charAt(i) !== pali.charAt(pali.length - 1 - i)) {
            return false;
        }
    }
    return true;

};

// oder:
// processedString = string.toLowerCase().replace(/[^a-z]/g, "");
//   return (
//     processedString
//       .split("")
//       .reverse()
//       .join("") == processedString
//   );


// Do not edit below this line
module.exports = palindromes;
