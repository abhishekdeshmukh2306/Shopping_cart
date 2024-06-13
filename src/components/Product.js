import React from "react";

export default function Product(props) {
  return (
    <div className="row mt-3 mb-3 align-items-center">
      <div className="col-6">
        <h2>
          {props.product.name}
          <span className="badge badge-secondary ms-2">₹{props.product.price}</span>
        </h2>
      </div>
      <div className="col-6 d-flex justify-content-end">
        <div className="btn-group me-3" role="group" aria-label="Basic mixed styles example">
          <button type="button" className="btn btn-danger" onClick={() => { props.decrementQuantity(props.index) }}>
            -
          </button>
          <button type="button" className="btn btn-warning">
            {props.product.quantity}
          </button>
          <button type="button" className="btn btn-success" onClick={() => { props.incrementQuantity(props.index) }}>
            +
          </button>
        </div>
        <div className="col-2">
          <span>{props.product.quantity * props.product.price}</span>
           <button className="btn btn-danger" onClick={() => {
            props.removeItem(props.index);
           }}>
            Remove
           </button>
        </div>

      </div>
    </div>
  );
}
