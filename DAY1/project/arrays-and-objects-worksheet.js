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

//challenge2: using array.map and a function that takes a string as an argument return a new array of objects where each string is capitalized and is the value of a name property.

var names = ['Ahmad', 'Nour', 'Amira', 'Omar'];

// should return [{name:'AHMAD'}, {name:'NOUR'}, {name:'AMIRA'}, {name:'OMAR'}]

//-------------------------------------------------

//challenge3: using array.filter() and a function that takes an object as an argument, return a new array with the objects where the language is either Arabic or English.

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

//challenge6: using the rest and spread operators ONLY, solve the following challenges:

//1. write a function that takes two arrays as arguements and returns one big array containing elements from both of these arrays.

var numArr = [1, 2, 3];
var namesArr = ['Sammi', 'Arwa', 'Maraam', 'Mahmoud'];

function concatArrs(arr1, arr2) {
  //write your code here

  return bigArr;
}

//should return

// bigArr = [1, 2, 3, 'Sammi', 'Arwa', 'Maraam', 'Mahmoud']

//------------------------------------------

//2. write a function that takes an array and a word as arguments and returns a new copy of the array with the word as an extra element at the end.

var fruits = ['Apple', 'Orange', 'Kiwi', 'Lemon'];

function newArrays(word, arr) {
  //write your code here

  return newArr;
}

//should return

//newArr = ['Apple', 'Orange', 'Kiwi', 'Lemon', 'banana']

//------------------------------------------

//3. write a function that takes two objects as an argument and returns one big object that has all properties and values of both objects.

var company = {
  company: 'Intersect Ltd.',
  location: 'Germany'
};

var employee = {
  name: 'Mark Miles',
  age: 32,
  email: 'mark@intersect_ltd.com'
};

function concatObjs(obj1, obj2) {
  //write your code here

  return bigObj;
}

//should return

//bigObj = {
//  name: 'Mark Miles',
//  age: 32,
//  email: 'mark@intersect_ltd.com',
//  company: 'Intersect Ltd.',
//  location: 'Germany'
//}

//------------------------------------

//4. write a function that takes an object as an argument, and returns a copy of the object that has a new property and value. The property and value can be anything you want.

var laptop = {
  modelName: 'Lenovo ThinkPad',
  modelNum: 'L440',
  ram: '4GB',
  hdd: '500GB'
};

function returnNewObj() {
  //write your code here

  return newObj;
}

//should return

//newObj = {
//  modelName: 'Lenovo ThinkPad',
//  modelNum: 'L440',
//  ram: '4GB',
//  hdd: '500GB',
//  cpu: 'i5 intel core'
//}
