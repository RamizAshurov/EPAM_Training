function currentProp (obj,prop) {
  if (prop in obj) {
    return true
  }
  return false
};
var person = {
  name: 'Ramiz',
  age: 21,
  city: 'Ryazan'
};
var x = prompt ('Введите имя свойства');
alert (currentProp (person,x));