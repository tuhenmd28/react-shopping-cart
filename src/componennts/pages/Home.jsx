import React from "react";
import { CartState } from "../../context/Context";
import Filters from "../Filters";
import SingleProduct from "../SingleProduct";

const Home = () => {
  const {
    state: { products },
    dispatch,
  } = CartState();
  return (
    <>
      <div className="home">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 position-relative">
             <Filters/>
            </div>
            <div className="col-md-9">
              <div className="productContainer">
                {products.map((pro) => { 
                  return <SingleProduct product={pro} key={pro.id} />
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
