function letterCounter (str) {
  var elem,
      counter = 0,
      sumCounter = 0,
      arr = str.split("");
  while(arr.length > 0) {
      elem = arr[0];
      arr = arr.filter(function (item,i) {
          return item != arr[0]
      })
  sumCounter += counter;
  counter = str.length - arr.length - sumCounter;
  alert(elem + ":" + counter)
  }
}
var input;
input = prompt("String");
letterCounter(input);