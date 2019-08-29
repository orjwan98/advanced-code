import React from 'react';

class Form extends React.Component {

    state = {
        imageInput: ''
    }

    render() {
        return (
            <div>
                <label htmlFor="image-input">
                    <input type="text" id="image-input"/>
                </label>
                <button type="button">ADD</button>
            </div>
        )
    }
}

export default Form;