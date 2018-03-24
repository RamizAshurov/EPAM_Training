function subString(str1,str2) {
  switch (str1.indexOf(str2)) {
      case -1: 
          return false;
          break;
      default:
          return true;
  }
}
var string1, string2;
string1 = prompt("String");
string2 = prompt("SubString");
alert(subString(string1,string2));