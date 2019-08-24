import React from 'react'; 
import Product from '../Product'

function Products(props){

    if (props.data){
        var mappedProducts = props.data.splice(30).map(function(product){
            return (<Product key={product.name} name={product.name} brand={product.brand} price={product.price} priceSign={product.price_sign} image={product.image_link}/>)
        })

        return (
            <div>
                 <h2>Your search results</h2>
                 {mappedProducts}
            </div>
         )
    }else {
        return <h2>No search results available</h2>
    }

}

export default Products