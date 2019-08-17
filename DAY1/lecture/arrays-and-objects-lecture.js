//an array is a javascript data type
//we can think of the array as a list
//lists usually have items
//we call items in arrays 'elements'

//let's define an array of odd numbers:

var oddNumsArray = [1, 3, 5, 7, 9];

//we can access each element in an array, via indexing:
//indexing starts at 0, so the first element's index is 0:

console.log(oddNumsArray[0]); //prints 1
console.log(oddNumsArray[3]); //prints 7

//let's assume we wanted to print each number in the above array, but it had 300 elements instead of 5. We can use a for... loop:

for (var i = 0; i < oddNumsArray.length; i++) {
  console.log(oddNumsArray[i]);
}
//prints 1, 3, 5, 7, 9.

//loops are great and all, but arrays actually have their own kind of special loops. like forEach, map, reduce and filter. And they are methods on the array object.

//forEach method

//forEach methods don't return anything. Even if you use the return statement.

var animals = ['lion', 'zebra', 'cat', 'eagle', 'shark', 'bird'];
var animalsUpperCase = [];

animals.forEach(function(animal) {
  animalsUpperCase.push(animal.toUpperCase());
});

console.log(animalsUpperCase); //prints ['LION', 'ZEBRA', 'CAT', 'EAGLE', 'SHARK', 'BIRD']

//
//map method

//map method returns an array of any elements we want.

var seaAnimals = ['FISH', 'SHRIMP', 'SHARK', 'OCTOPUS', 'SQUID', 'WHALE'];

var lowerCaseSeaAnimals = seaAnimals.map(function(seaAnimal) {
  return seaAnimal.toLowerCase();
});

console.log(lowerCaseSeaAnimals); //prints ['fish', 'shrimp', 'shark', 'octopus', 'squid', 'whale']

//
//filter method

//filter method returns an array of elements that pass a certain test.

var numbers = [1, 2, 0, -44, 50, 100, 30, -59, -66];

var positiveNums = numbers.filter(function(number) {
  if (number >= 0) {
    return number;
  }
});

console.log(positiveNums); //prints [1, 2, 50, 100, 30]

//
//reduce method

//reduce method returns a single value of the array. It reduces the array to one value only.

var planets = [
  {
    name: 'earth',
    distance: '150 million km'
  },
  {
    name: 'neptune',
    distance: '4.50 billion km'
  },
  {
    name: 'mars',
    distance: '228 million km'
  }
];

var allPlanetsObj = planets.reduce(function(accumulator, planetObj) {
  accumulator[planetObj.name] = planetObj.distance;
  return accumulator;
}, {});

console.log(allPlanetsObj);

//prints
// {
//   earth: '150 million km',
//   neptune: '4.50 billion km',
//   mars: '228 million km'
// }

//NOTE: to do the opposite of the last thing we did, we can use map with Object.keys.

var planetsKeys = Object.keys(allPlanetsObj);

var planetsArrays = planetsKeys.map(function(planet) {
  return {
    name: planet,
    distance: allPlanetsObj[planet]
  };
});

console.log(planetsArrays); //prints

// [
//   { name: 'earth', distance: '150 million km' },
//   { name: 'neptune', distance: '4.50 billion km' },
//   { name: 'mars', distance: '228 million km' }
// ];

//rest operator and the spread operator

//you can use the rest operator to access elements only.

//example:

var accessories = ['necklace', 'ring', 'earring', 'bracelet'];

console.log(accessories); //prints [ 'necklace', 'ring', 'earring', 'bracelet' ]

console.log(...accessories); //prints necklace ring earring bracelet

//you can use the rest operator to join two arrays into one:

var arr1 = [1, 2, 3, 4];
var arr2 = [5, 6, 7, 8];

var arr3 = [...arr1, ...arr2];

console.log(arr3); //prints [1, 2, 3, 4, 5, 6, 7, 8]

//or to add an element into an array:
var nine = 9;

var arr4 = [...arr3, nine];

console.log(arr4); //prints [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

//
//the spread operator

//the spread operator does the exact same stuff as the rest operator, but with objects instead of arrays

var myFavThings = {
  color: 'red',
  food: 'Maqlubah',
  music: 'Arabic music'
};

var myFavBook = 'Gone with the wind';

myFavThings = {
  ...myFavThings,
  book: myFavBook
};

console.log(myFavThings);

//prints
// {
//   color: 'red',
//   food: 'Maqlubah',
//   music: 'Arabic music',
//   book: 'Gone with the wind'
// }
