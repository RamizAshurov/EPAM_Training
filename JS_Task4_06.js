function camelCase(str) {
  str = str.split(" ");
  str = str.filter(function (item,) {
      return item != "";
  })
  for (var i = 1; i < str.length; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].slice(1);
  }
  str = str.join("")
  return str;
}
var input;
input = prompt("String");
alert(camelCase(input));