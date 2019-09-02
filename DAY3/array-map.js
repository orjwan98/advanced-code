var array = ['Ahmad', 'Rawan', 'Jihad'];

var arrayOfObjs = array.map(function(name) {
  var obj = {
    name: name
  };
  return obj;
});

console.log(arrayOfObjs);
//output

// // [
//     {name:'Ahmad'}, {name:'Rawan'}, {name:'Jihad'}
// ]

//map returns a new array that has the modified elements
