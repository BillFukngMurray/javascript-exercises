const sumAll = function (num1, num2) {

    let sum = 0;

    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";

    } else if (num1 > num2) {

        for (let i = num1; i >= num2; i--) {
            sum += i;
        }
        return sum;

    } else if (num1 < num2) {

        for (let i = num1; i <= num2; i++) {
            sum += i;
        }
        return sum;
    }

};

// sumAll(5, 1);

// Do not edit below this line
module.exports = sumAll;
