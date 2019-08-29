import React from 'react';
import './App.css';
import Form from './components/Form';
import Gallery from './components/Gallery'


class App extends React.Component{

  constructor() {
    super(); 
    this.state = {
      images: []
    }

    this.handleClick = this.handleClick.bind(this)
  }
  

  handleClick(imageInput) {
    console.log(imageInput)
  }

  render(){
     return (
      <div className="App">
        <h1>Photo Gallery</h1>
        <h2>Add your favorite images!</h2>
         <Form handleClick={this.handleClick}/>
        <Gallery/>
      </div>
  );
 }
}

export default App;
