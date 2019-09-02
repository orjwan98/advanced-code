function makeAPIReq() {
  console.log('Hi all'); //runs first

  fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
    .then(function(response) {
      console.log('Hey'); //runs fourth
      console.log(response.json());
    })
    .catch(function(error) {
      console.log(error);
    });
}

makeAPIReq();

console.log('Hello'); //runs second
console.log('Hi'); //runs third
