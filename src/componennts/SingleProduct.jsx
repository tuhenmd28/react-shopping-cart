import React from "react";
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import { CartState } from "../context/Context";
const SingleProduct = ({ product }) => {
  const {dispatch,state:{cart}} = CartState()
  return (
    <>
      <div className="card shadow border-0" >
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title?.substring(0,25)}...</h5>
          
          <p className="card-text d-flex justify-content-between">
            <span>4 days delivery</span> <span className="lead fw-bold">${product.price}</span>
          </p>
          <p>
          <Rating
            name="simple-controlled"
            value={product.rating && product.rating.rate}
            // onChange={(event, newValue) => {
            //     setValue(newValue);
            // }}
            />
          </p>
          {console.log(cart.some(p=>p.id === product.id))}
          {cart.some(p=>p.id === product.id)?(
               <button className="btn btn-danger" onClick={()=>dispatch({
                type:"REMOVE_FORM_CART" ,
                payload:product
              })}>
               Remove Form Card
              </button>
          ):(

            <button className="btn btn-primary" onClick={()=>dispatch({
              type:"ADD_TO_CART" ,
              payload:product
            })}>
              Add to Card
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
