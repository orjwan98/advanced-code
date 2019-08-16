//challenge1:

//a)) using array.forEach(), an empty object and a function that takes a number as an argument return an object that has numbers as keys and their doubles as values.

var double = {};
var numbers = [1, 2, 3, 4];

//should return

// {
//   1: 2, 2:4, 3:6, 4:8
// }

//-------------------------

//b)) using array.forEach(), a total variable, and a function that takes a number as an argument return the total sum of all numbers in the array.

var total = 0;
var numbers = [34, 56, 12, 88, 10];

//should return total = 200

//

//-------------------------------------------------

//challenge2: using array.map and a function that takes a string as an argument return a new array of objects where each string is the value of a name property.

var names = ['Ahmad', 'Nour', 'Amira', 'Omar'];

// should return [{name:'Ahmad'}, {name:'Nour'}, {name:'Amira'}, {name:'Omar'}]

//-------------------------------------------------

//challenge3: using array.filter() and a function that takes an object as an argument, return a new array with the objects where the langauge is Arabic or English.

var countries = [
  { country: 'Palestine', language: 'Arabic' },
  { country: 'Spain', language: 'Spanish' },
  { country: 'Germany', language: 'German' },
  { country: 'USA', language: 'English' },
  { country: 'Turkey', language: 'Turkish' }
];

//should return

//[{country: 'Palestine', language: 'Arabic'}, {country: 'USA', language: 'English'}]

//-------------------------------------------------

//challenge4: using array.reduce() and a function that takes an object return an object where each key is the dog's name and the value is their breed.

var dogs = [
  { name: 'crackers', breed: 'bulldog' },
  { name: 'trixie', breed: 'poodle' },
  { name: 'rex', age: 'german shepherd' },
  { name: 'shadow', age: 'husky' },
  { name: 'cherry', age: 'golden retriever' }
];

//should return
// {
//     crackers: 'bulldog',
//     trixie: 'poodle',
//     rex: 'german shepherd',
//     shadow: 'husky',
//     cherry: 'golden retriever'
// }

//-------------------------------------------------

//challenge5: using Object.keys and one of the other array methods do the exact opposite of challenge4.

var people = {
  amelie: 'drawing',
  jackson: 'cooking',
  sarah: 'reading & writing',
  mike: 'listening to music',
  martha: 'knitting'
};

//should return

//[{name: 'amelie', hobbie: 'drawing}, {name: 'jackson', hobbie: 'cooking}, {name: 'sarah', hobbie:'reading & writing'}, {name:'mike', hobbie:'listening to music'}, {name: 'martha', hobbie:'knitting'}]

//-------------------------------------------------
