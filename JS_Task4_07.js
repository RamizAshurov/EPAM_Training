function addString (str,word,num) {
  str = str.split(" ").filter(function (item) {
      return item != ""
  })
  for (var i = str.length; i > num + 1; i--) {
      str[i] = str[i - 1];
  };
  str[num + 1] = word;
  return str.join(" ");
};
var string, substring, number;
string = prompt("String");
substring = prompt("Substring");
number = +prompt("Index number");
alert (addString(string,substring,number));