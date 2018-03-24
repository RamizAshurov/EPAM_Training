function copyObj (obj) {
  var copy = {};
  for (var key in obj) {
      if (typeof obj[key] == "object") copy[key] = copyObj(obj[key])
          else copy[key] = obj[key]  
  }
  alert (copy === obj)
}
var person = {
  name : "Ramiz",
  age : 21,
  city : "Ryazan",
  music: {
          rap : "50 cent",
          latina: "shakira" 
      }
}
copyObj(person);