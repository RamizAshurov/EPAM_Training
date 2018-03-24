function random() {
  var n = Math.random() * 101;
  return (n > 100) ? Math.floor(n) : n;
}
alert(random())