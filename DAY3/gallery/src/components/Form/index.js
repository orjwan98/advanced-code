import React from 'react';

class Form extends React.Component {

    constructor() {
        super();
        this.state = {
            imageInput: ''
        }

        this.handleInput = this.handleInput.bind(this)
    }

    handleInput(event) {
        this.setState({ imageInput: event.target.value })
    }

    render() {
        return (
            <div>
                <label htmlFor="image-input">
                    <input type="text" id="image-input" onChange={this.handleInput}/>
                </label>
                <button type="button" onClick={function () {
                    this.props.handleClick(this.state.imageInput)
                }.bind(this)}>ADD</button>
            </div>
        )
    }
}

export default Form;