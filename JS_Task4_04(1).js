function firstUp(str) {
    str = str.split(" ");
    for (var i = 0; i < str.length; i++) {
       str[i] == "" || (str[i] = str[i][0].toUpperCase() + str[i].slice(1));
    };
    return str = str.join(" ");
};
var input;
input = prompt("String");
alert(firstUp(input));