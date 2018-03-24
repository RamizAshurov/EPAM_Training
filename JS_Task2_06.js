function stringToNumber() {
  var arr = [1,2,"3","10"];
  for (var i = 0; i < arr.length; i++) {
    Number(arr[i]);
  }
  alert(arr);
}
stringToNumber();