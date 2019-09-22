//In this worksheet we're going to review some of the concepts we learned earlier in the course.

//This worksheet will have exercises to refresh your memory of what you learned.

//Q1. Using ES6 syntax, write the following functions:

//PS: No loops are allowed.

//1. a function that takes an array of strings as an argument, and returns one big sentence instead.

var sentence = '';
var strings = ['Hello', 'This', 'Is', 'JavaScript'];

function returnTotal(arrayOfStrings) {
  //write your code here
  return sentence;
}

//should return "hello this is javascript"

//2. a function that takes an array of objects as an arguement, and returns one object instead.

var dictionary = [
  { english: 'cat', arabic: 'قطة' },
  { english: 'apologize', arabic: 'يعتذر' },
  { english: 'plane', arabic: 'طائرة' },
  { english: 'honey', arabic: 'عسل' }
];

function oneObj(arrayOfObjs) {
  //write your code here
  return dictionaryObject;
}

//should output:
// {
//     cat: 'قطة',
//     apologize: 'يعتذر',
//     plane: 'طائرة',
//     honey: 'عسل'
// }

//3. write a function that does the opposite of the previous challenge.

var dictionaryObj = {
  cat: 'قطة',
  apologize: 'يعتذر',
  plane: 'طائرة',
  honey: 'عسل'
};

function arrayOfObjects(object) {
  //write your code here
  return dictionaryArray;
}

//output
// [
//   { english: 'cat', arabic: 'قطة' },
//   { english: 'apologize', arabic: 'يعتذر' },
//   { english: 'plane', arabic: 'طائرة' },
//   { english: 'honey', arabic: 'عسل' }
// ];

//4. write a function that takes an array of objects as an argument and returns a new array that only has cities where it was above 25 degrees on a Tuesday.

var weather = [
  { city: 'bethlehem', temprature: '25', day: 'tuesday' },
  { city: 'Nablus', temprature: '28', day: 'friday' },
  { city: 'Ramallah', temprature: '26', day: 'wednesday' },
  { city: 'Hebron', temprature: '31', day: 'tuesday' },
  { city: 'Hebron', temprature: '21', day: 'tuesday' }
];

function newArray(arr) {
  //write your code here
}

//output:
// [
//   { city: 'Hebron', temprature: '31', day: 'tuesday' },
// ];

//5. write a function that takes two objects, and merges their keys into one big array.

var dogs = {
  crackers: 'bulldog',
  trixie: 'poodle',
  rex: 'german shepherd',
  shadow: 'husky',
  cherry: 'golden retriever'
};

var cats = {
  sunshine: 'tabby cat',
  marbles: 'persian cat',
  vanilla: 'siamese cat',
  buttons: 'munchkin cat'
};

function mergeIntoArray(obj1, obj2) {
  //write your code here
  return animals;
}

//should return

//['crackers', 'trixe', 'rex', 'shadow', 'cherry', 'sunshine', 'marbles', 'vanilla', 'buttons']

//6. write a function that takes two objects and merges them into one big object.

var personalInfo = {
  first: 'Mike',
  last: 'Miles',
  age: 32,
  married: false,
  siblings: 3
};

var businessInfo = {
  occupation: 'software engineer',
  company: 'transcend Ltd',
  email: 'markmiles@transcend.com'
};

function mergeObjects(object1, object2) {
  //write your code here
  return markInfo;
}

//output

// {
//   first: 'Mike',
//   last: 'Miles',
//   age: 32,
//   married: false,
//   siblings: 3,
//   occupation: 'software engineer',
//   company: 'transcend Ltd',
//   email: 'markmiles@transcend.com'
// }
