import React from 'react'; 


function Photo(props) {
    return (
        <div>
            <img src={props.image}/>
        </div>
    )
}

export default Photo;