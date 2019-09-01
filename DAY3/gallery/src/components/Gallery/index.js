import React from 'react'; 
import Photo from '../Photo';


function Gallery(props) {
    var images = props.images.map(function (image) {
        return <Photo image={image}/>
    })
    return (
        <div>
            {images}
       </div>
    )
}

export default Gallery;