function props (obj) {
    for (var key in obj) {
        alert (key + ":" + obj[key])
    } 
}
var person = {
    name: "Ramiz",
    age: 21,
    city: "Ryazan"
}
props(person);