function prot(obj,prop) {
    if (obj.hasOwnProperty(prop)) {
      alert (prop)
    };
};
var obj1 = {a:1,b:2};
var obj2 = Object.create(obj1);
obj2.c = 3;
prot(obj2,'c')

