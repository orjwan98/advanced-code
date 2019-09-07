//Turn ALL the functions in the following code to arrow functions

var url =
  'http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick';

//function 1
function makeApiRequest() {
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(parsedResponse) {
      console.log(parsedResponse);
    })
    .catch(function(error) {
      console.log(error);
    });
}

makeApiRequest();

//function 2

function multiplyByFive(num) {
  return num * 5;
}

multiplyByFive(5);

//function 3

function addThreeNums(num1, num2, num3) {
  var sum = num1 + num2 + num3;
  return sum;
}

addThreeNums(5, 10, 32);

//function 4

var upperCaseFun = function(str) {
  console.log(str);
  return str.toUpperCase();
};

upperCaseFun('ameera');

//function 5
var marineAnimals = ['FISH', 'SHRIMP', 'SHARK', 'OCTOPUS', 'SQUID', 'WHALE'];

function toLowerCaseAnimals(seaAnimals) {
  var lowerCaseSeaAnimals = seaAnimals.map(function(seaAnimal) {
    return seaAnimal.toLowerCase();
  });
}

toLowerCaseAnimals(marineAnimals);

//function 6
var numbers = [1, 2, 3, 4];
var reducer = function(accumulator, currentValue) {
  return accumulator + currentValue;
};

var reducedNumbers = numbers.reduce(reducer);

console.log(reducedNumbers);
