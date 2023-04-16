import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
import { CartState } from "../context/Context";
const Header = () => {
  const {state:{cart},dispatch} =CartState()
  console.log(cart);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark py-3 bg-dark">
        <div className="container">
          <Link to='/' className="navbar-brand" >
            Shopping Cart
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <input
                style={{ minWidth: 370 }}
                type="text"
                className="form-control shadow-none"
                placeholder="Serch a product"
              />
            </ul>
            <div className="dropdown">
              <button
                className="btn btn-success dropdown-toggle shadow-none"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              <FiShoppingCart fontSize={25} /> <span className="badge bg-success">{cart.length}</span>
              </button>
              <ul className="dropdown-menu  " style={{right:'0',left:"unset",minWidth:370}} aria-labelledby="dropdownMenuButton1">
               {cart.length === 0? (
                 <li>
                 <a className="dropdown-item" href="#">
                   Empty Product !
                 </a>
               </li>
               ):(
                cart.map((pro)=>(
                <li key={pro.id}>
                  <div className="d-flex cardItem">
                    <img src={pro.image} alt={pro.title} />
                    <span className="name">{pro.title.substring(0,30)}...</span>
                    <span className="icon"
                    onClick={()=>dispatch({
                      type:"REMOVE_FORM_CART",
                      payload:pro
                    })}
                    ><BsTrash/></span>
                  </div>
              </li>
                ))
               )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
