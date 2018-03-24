function random(min,max) {
  return Math.floor((Math.random() * (max - min + 1) + min));
}
var x1,x2;
x1 = +prompt("Lower");
x2 = +prompt("Upper")
alert(random(x1,x2));