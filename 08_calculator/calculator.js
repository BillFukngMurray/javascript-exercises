const add = function (num1, num2) {

  return num1 + num2;

};

const subtract = function (num1, num2) {
  return num1 - num2;

};

const sum = function (arr) {
  let sum = 0;

  for (let i = 0; i <= arr.length - 1; i++) {
    sum += arr[i];
  }
  return sum;
  
  //oder: return array.reduce((total, current) => total + current, 0);

};

const multiply = function (arr) {

  let mult = 1;

  for (let i = 0; i < arr.length; i++) {
    mult *= arr[i];

  }
  return mult;
  
  //oder: return array.length ? array.reduce((accumulator, nextItem) => accumulator * nextItem) : 0;

};

const power = function (num1, num2) {
  return Math.pow(num1, num2);

};

const factorial = function (num) {
  let fac = 1;

  if(num === 0){
    return 1;
  }else{

    for(let i = 1; i <= num; i++){
      fac *= i;
    }
    return fac;
  }

  // oder mit rekursion: 

  // const recursiveFactorial = function(n) {
  //   if (n === 0) {
  //     return 1;
  //   }
  //   return n * recursiveFactorial (n-1);

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
