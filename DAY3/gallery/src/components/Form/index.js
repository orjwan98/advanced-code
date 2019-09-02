import React from 'react'; 


class Form extends React.Component {

    state = {
        imageInput:''
    }

    handleChange = event => {
        this.setState({ imageInput: event.target.value })
    }

    handleFormClick = () => {
        this.props.handleClick(this.state.imageInput)
    }

    render() {
        return (
            <div>
                <label htmlFor="image-input">
                    <input type="text" id="image-input" onChange={this.handleChange}/>
                </label>
                <button type="button" onClick={this.handleFormClick}>Add</button>
            </div>
        )
    }
}

export default Form;