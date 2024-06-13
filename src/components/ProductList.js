import React from "react";
import Product from './Product';

export default function ProductList(props) {
  return (
    <div>
      {props.productList.length > 0 ? (
        props.productList.map((product, index) => (
          <Product 
            key={index} 
            product={product} 
            incrementQuantity={props.incrementQuantity} 
            decrementQuantity={props.decrementQuantity} 
            removeItem={props.removeItem}
            index={index} 
          />
        ))
      ) : (
        <h1>No products in the cart</h1>
      )}
    </div>
  );
}
