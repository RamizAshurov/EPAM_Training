function simpleNumber() {
  var n,count;
  n = +prompt ("Number <= 1000");
  switch (n) {
    case 0:
    case 1:
      alert(n + " is not simple or complex number");
      break;
    default:
      count = 0;
      for (var i = 1; i <= n; i++) {
        n%i == 0 && count++;
        if (count > 2) return alert (n + " is complex number")
      }
      return alert (n + " is simple number")
  }
}
simpleNumber();