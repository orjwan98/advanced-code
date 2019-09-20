//Turn ALL the functions in the following code to arrow functions

let url =
  'http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick';

//function 1
const makeApiRequest = () => {
  fetch(url)
    .then(response => response.json())
    .then(parsedResponse => console.log(parsedResponse))
    .catch(error => console.log(error));
};

makeApiRequest();

//function 2

const multiplyByFive = num => num * 5;

multiplyByFive(5);

//function 3

const addThreeNums = (num1, num2, num3) => {
  let sum = num1 + num2 + num3;
  return sum;
};

addThreeNums(5, 10, 32);

//function 4

const upperCaseFun = str => {
  console.log(str);
  return str.toUpperCase();
};

upperCaseFun('ameera');

//function 5
var marineAnimals = ['FISH', 'SHRIMP', 'SHARK', 'OCTOPUS', 'SQUID', 'WHALE'];

const toLowerCaseAnimals = seaAnimals => {
  let lowerCaseSeaAnimals = seaAnimals.map(seaAnimal =>
    seaAnimal.toLowerCase()
  );
};

toLowerCaseAnimals(marineAnimals);

//function 6
let numbers = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

let reducedNumbers = numbers.reduce(reducer);

console.log(reducedNumbers);
