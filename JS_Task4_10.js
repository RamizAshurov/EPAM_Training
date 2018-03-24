function sum(a,b) {
  a = parseFloat(a);
  b = parseFloat(b);
  var c = (a + b);
  return Math.round(c * 1e3)/1e3;
}
var x,y;
x = prompt("First term");
y = prompt("Second Term");
alert(sum(x,y));