console.log('Hello fetch');

//Write a function that takes the name of a character as an argument, and uses fetch to make a request to the rick and morty characters API, and returns:

function returnCharacters(name) {
  fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(parsedRes) {
      console.log(parsedRes);
    })
    .catch(function(error) {
      console.log(error);
    });
}

returnCharacters('');
returnCharacters('rick');
returnCharacters('morty');

//1. All characters.
//Hint: you can't see the data inside the response unless you parse the response.

//2. Only characters that are called 'rick'.

//3. Only characters that are called 'morty'.

//Refer to the rick and morty documentation to learn how about the available endpoints and how to filter your requests results: (https://rickandmortyapi.com/documentation/)
