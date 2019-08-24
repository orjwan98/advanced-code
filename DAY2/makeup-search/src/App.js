import React from 'react';
import './App.css';
import Form from './components/Form'
import Products from './components/Products'

class App extends React.Component {

  constructor(){
    super(); 
    this.state = {
      data:''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(searchInput){
    fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${searchInput}`)
    .then(function(response){
      return response.json();
    })
    .then(function(resData){
      this.setState({data:resData})
    }.bind(this))
    .catch(function(error){
      console.log(error)
    })
  }   


  render(){
    return (
      <div className="App">
        <h1>Hello World</h1>
        <Form handleClick={this.handleClick}/>
        <Products data={this.state.data}/>
      </div>
    );
  }

}

export default App;
