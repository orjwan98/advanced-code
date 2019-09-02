import React from 'react'; 
import Photo from '../Photo';

var Gallery = (props) => {

    
    var photosArray = props.imagesArr.map((image) => {
        return <Photo imageLink={image}/>
    })

    console.log(photosArray)
    return (
        <div>
            {photosArray}
        </div>
    )
}

export default Gallery;