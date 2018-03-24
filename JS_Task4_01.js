function deleteSpace (str) {
  str = str.split("");
  str[0] == " " && str.shift();
  str[str.length - 1] == " " && str.pop();
  str = str.join("")
  return str
};
var input;
input = prompt("String");
alert(deleteSpace(input));