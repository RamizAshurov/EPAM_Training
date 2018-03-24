function calculator(firstNumber) {
  var arithmetic = {};
  return arithmetics = {
               sum : function (b) {
                       var result;
                       result = firstNumber;
                       result = result + b;
                       firstNumber = result;
                       return result;
                     },
               dif : function (b) {
                       var result;
                       result = firstNumber;
                       result = result - b;
                       firstNumber = result;
                       return result;
                     },
               div : function (b) {
                       var result;
                       result = firstNumber;
                       result = (b == 0) ? result : (result / b);
                       firstNumber = result;
                       return result;
                     },
               mul : function (b) {
                       var result;
                       result = firstNumber;
                       result = result * b;
                       firstNumber = result;
                       return result;
                     }
         }; 
};
var myCalculator = calculator(100),
    m,n,x,
    currentArith;
    arr = [];
x = 0;
m = + prompt ('Put number of arithmetic \n 1.sum \n 2.dif \n 3.div \n 4.mul');
switch (m) {
  case 1: 
       currentArith = 'sum';
       break;
  case 2: 
       currentArith = 'dif';
       break;
  case 3: 
       currentArith = 'div';
       break;
  case 4: 
       currentArith = 'mul';
       break;
};
n = + prompt ('Put number of arguments');
for (var i = 0; i < n; i++) {
  arr[i] = + prompt ('Put ' + (i + 1) + ' argument');
  x = myCalculator[currentArith](arr[i])
};
alert (x);