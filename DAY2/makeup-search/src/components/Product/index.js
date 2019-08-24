import React from 'react'; 


function Product(props){
    return (
        <div>
            <img src={props.image} alt={props.name}/>
            <p>name: {props.name}</p>
            <p>brand:{props.brand}</p>
            <p>price:{props.priceSign + props.price}</p>
        </div>
    )
}

export default Product