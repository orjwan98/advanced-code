import React from 'react';
import './App.css';
import Form from './components/Form';
import Gallery from './components/Gallery'


class App extends React.Component{

  constructor() {
    super(); 
    this.state = {
      images: ["https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"]
    }

    this.handleClick = this.handleClick.bind(this)
  }
  

  handleClick(imageInput) {
    this.setState({ images: [...this.state.images, imageInput] })
  }

  render(){
     return (
      <div className="App">
        <h1>Photo Gallery</h1>
        <h2>Add your favorite images!</h2>
         <Form handleClick={this.handleClick}/>
         <Gallery images={this.state.images}/>
      </div>
  );
 }
}

export default App;
