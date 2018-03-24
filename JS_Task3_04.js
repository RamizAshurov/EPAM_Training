function newProp(obj,prop) {
  prop in obj || (obj[prop] = "new")
  return obj
};
var person = {
  name: 'Ramiz',
  age: 18,
  city: 'Ryazan'
};
var x = prompt ('Property name','');
newProp (person,x);