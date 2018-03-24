function reverseString(str) {
  var str1,str2,
      n,
      i,imin,imax;
  i = 0;
  imax = 0;
  str1 = '';
  while (imax != -1) {
    imin = imax;
    imax = str.indexOf(' ',i);
    if (imin == 0 && str.charAt(imin) != " ") {
      str1 = str[imin].toUpperCase() + ((str[imax] == ' ') ? str.slice(imin + 1,imax) : str.slice(imin + 1))
    } else {
      str2 = str.slice(imin,i);
      str1 = str1 + str2;
        if (imax - imin > 1 || imax == -1) {
          str1 = str1 + str[imin + 1].toUpperCase() + ((imax == -1) ? str.slice(imin + 2) : str.slice(imin + 2,imax ))
        }
    };
    i = imax + 1;
  };
  alert (str1)
  alert (str1.length)
};
var x = prompt ('Введите строку');
reverseString(x);