// //fetch demo

fetch('https://picsum.photos/v2/list')
  .then(function(response) {
      console.log('I will run last')
    return response.json();
  })
  .then(function(response){
      console.log(response)
  })
  .catch(function(error) {
    console.log(error);
  });    


console.log('I will run first');

console.log('I will run second');

