import React from 'react'; 

class Form extends React.Component{

    constructor(){
        super()
        this.state = {
            searchInput:''
        }

        this.handleSearch = this.handleSearch.bind(this)
    }

    handleSearch(event){
        this.setState({searchInput:event.target.value}); 
    }

    render(){
        return (
            <div>
                <label htmlFor="sreach-box">
                  product type
                  <input type="text" id="search-box" onChange={this.handleSearch}/>  
                </label>
                <button type="button" onClick={function(){
                    this.props.handleClick(this.state.searchInput)
                }.bind(this)}>Search!</button>
            </div>
        )
    }
}

export default Form;