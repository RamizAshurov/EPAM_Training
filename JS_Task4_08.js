function reverseString (str) {
  return str.split("").reverse().join("");
};
var input;
input = prompt("String");
alert(reverseString(input));