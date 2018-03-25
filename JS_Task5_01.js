function calculator() {
  var currentState = 0;
  return {
            sum : function (arg) {
                    return currentState + arg;
                   },
            dif : function (arg) {
                    return currentState - arg;
                   },
            div : function (arg) {
                    var result;
                    result = currentState;
                    result = (arg == 0) ? alert("На ноль делить нельзя") : (result / arg);
                    currentState = result;
                    return result;
                  },
            mul : function (arg) {
                    return currentState * arg;
                   },
            getResult : function() {return currentState},
            reset : function() { return currentState = 0}
      }; 
};
var myCalculator = calculator(),
    m,n,
    currentArith;
m = + prompt ('Select an operation \n 1.Add \n 2.Subtract \n 3.Divide \n 4.Multiply \n 5.Get current result \n 6.Reset');
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
  case 5: 
       currentArith = 'getResult';
       break;
  case 6:
       currentArith = 'reset';
       break;
};
m <= 4 && (n = + prompt ('Put an argument'));
alert (myCalculator[currentArith](n));