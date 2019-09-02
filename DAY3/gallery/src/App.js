import React from 'react';
import './App.css';
import Form from './components/Form'; 
import Gallery from './components/Gallery'

class App extends React.Component {
  state = {
    imagesArr: []
  }

  handleClick = (imageInput) => {
    this.setState({imagesArr:[...this.state.imagesArr, imageInput]})
  }

  render() {
      return (
        <div className="App">
          <h1>Welcome to your Gallery</h1>
          <h2>Add your favorite images</h2>
          <Form handleClick={this.handleClick} />
          <Gallery imagesArr={this.state.imagesArr}/>
        </div>
  );
  }
}

export default App;
