# Schedule for DAY2 - 24th of August 2019

### Async JS. (1hour)

Before we get started, start by adding this [extension](https://jsonview.com/) to your browser.

**Requests & Responses cycle**

When you open your browser and type www.facebook.com and hit enter, a couple of things happen:

1. You send a request to the server where facebook is hosted.
2. The server looks at your request, and reads it to know what to send back.
3. The server will send you the home page.
4. Depending on whether you are logged in or not, this 'home' page can either be the screen where you log in & register, or your facebook timeline.
5. If you click on your profile, you make another request to www.facebook.com/your-username.
6. The server looks at your request, and reads it to know what to send back.
7. It sees that you are requesting your profile, so it sends you your profile page, and all the data associated with it.
8. Each time you click on something where there is data to be fetched, you will be making a request and receving a response.
9. requests and responses are objects that hold data.

**Using Fetch to make a request**

- `fetch` in simple terms is a built-in JavaScript _unique_ kind of function that allows us to make requests and recieve responses. `fetch` takes a url as an argument and after the response comes back, it uses a set of functions to handle the response.

Here's an example of how to use fetch for a `GET` request:

```js
fetch(url)
  .then(function(response) {
    console.log(response); //prints successful response object
  })
  .catch(function(error) {
    console.log(error); //prints server error if there was any
  });
```

**HTTP**

HTTP is the protocol (method) used to transfer and exchange data across the web. HTTP stands for **H**yper **T**ext **T**ransfer **P**rotocol.

There are several type of requests, most common ones are `GET` and `POST`. `GET` is used to ask for and bring data. `POST` is used to submit and send data.

`GET` and `POST` are types of HTTP methods.

Examples:

- Your facebook's timeline posts are fetched using a `GET` request.
- When you log into your facebook account, you send your email and password to facebook's server using a `POST` request.

HTTP also offer **status codes**. Status codes can be found as extra information on each response object that tells if a response was successful or not.

Most common status codes are:

- `200 ok`: means the request has been successful.
- `404 not found`: means the server couldn't find what you are asking for.
- `500 error`: means there's something wrong with the server.

**Fetch's response**

The response is an object that has some information about itself. Like the status code, for example. In order to extract the data from the response, we need to _parse_ it to a JSON format. **Parsing means to make something understandable**. A **JSON** (JavaScript Object Notation) data format is a popular form of data that looks like JavaScript objects.

To parse a response into JSON format, we can do:

```js
fetch(url)
  .then(function(response) {
    console.log(response.json()); //prints parsed response object that has data
  })
  .catch(function(error) {
    //catches errors and handles them
    console.log(error);
  });
```

**Async JavaScript**

JavaScript is a Sync language. Sync means that it can only do one thing at a time. So if it had more than one operation to do, let's say: **A**, **B**, **C** and **D** operations, it will execute **A**, and once it finishes, it will execute **B** and once it finishes, it will execute **C**... etc.

But what if **C** was taking too long? In this case JavaScript would have to wait until **C** fnishes before it can do **D** and **E**...etc. Which would be bad because **C** would be blocking other important operations from taking place.

So the solution would be to start operation **C** and while we wait for it to finish, we start and finish the other operations (**D**, **E**, **F** ...etc), and come back to **C** once it finishes. This is called **Async JavaScript**.

Remember when we said that `fetch` is a unique kind of function? That's because `fetch` is a promise based function.

A promise based function is a function that helps us make operations that would take a little longer than usual to execute **without blocking other operations**. Like making requests to a remote server and waiting for a response. Promise based functions operate in the background, and return a **promise object**, which has methods that allows us to process the response in a suitable way.

### [Making a request to another server with fetch in react - lecture. (1 hour)]()

### [Making a request to another server with fetch in react - project. (1 hour)]()

Instructions:

- `cd` into your local repository, make a folder and call it DAY2 and `cd` into it.

- In your terminal, run the following commands:

1. `npm install -g create-react-app`
2. `create-react-app makeup-search`

- cd into your react's project.

**The project**

We're going to build a search engine where we can look for makeup products based on what the user enters.

> How the site should look/work?

- There are two text boxes, one where the user can enter the `product_type` and another where we can enter the `brand`.
- There has to be a submit button, when clicked, makes a request to the makeup site and gets back data based on what the user enters.

> Where should I get the data from?

[Makeup](http://makeup-api.herokuapp.com) is going to be the site we make requests to. It also has some simple documentation to show you how you can customize your requests.

### React project review (1 hour)
