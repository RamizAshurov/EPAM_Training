function truncateString(str, num) {
    str = (num >= str.length) ? str : (num > 3) ? str.slice(0,num - 3) + "..." : str.slice(0,num) + "...";
    return str; 
}
var string, len;
string = prompt ("String");
len = prompt ("Length");
alert(truncateString(string,len));