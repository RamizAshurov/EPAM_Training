function upperCase(str) {
  while (str.indexOf(" ") == 0) {
      str = str.substring(1);
      };
  str = str[0].toUpperCase() + str.substring(1)
  return str;
};
var input;
input = prompt("String");
alert(upperCase(input));