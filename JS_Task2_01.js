function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}
var x;
x = prompt("Number or String");
if (isNumeric(x)) {
    alert("This is Number")
} else alert("This is String")