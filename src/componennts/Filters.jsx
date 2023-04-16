import React,{useState} from "react";
// import Rating from '@mui/material/Rating';
import {AiTwotoneStar} from 'react-icons/ai'
import Rating from "./Rating";
const Filters = () => {
    const [rating, setrating] = useState(0)
  return (
    <>
      <div className="filters bg-dark text-white ">
        <h4 className="text-center py-3">Filter Products</h4>
        <div className="py-2 form-check ms-4">
          <input
            className="form-check-input"
            type="radio"
            name="filterProduct"
            id="filterProduct1"
          />
          <label className="form-check-label" htmlFor="filterProduct1">
            Ascending
          </label>
        </div>
        <div className="py-2 form-check ms-4">
          <input
            className="form-check-input"
            type="radio"
            name="filterProduct"
            id="filterProduct2"
          />
          <label className="form-check-label" htmlFor="filterProduct2">
            Dscending
          </label>
        </div>
        <div className="py-2 form-check ms-4">
          <input
            className="form-check-input"
            type="radio"
            name="filterProduct"
            id="filterProduct3"
          />
          <label className="form-check-label" htmlFor="filterProduct3">
            Include Out of Stock
          </label>
        </div>
        <div className="py-2 form-check ms-4">
          <input
            className="form-check-input"
            type="radio"
            name="filterProduct"
            id="filterProduct4"
          />
          <label className="form-check-label" htmlFor="filterProduct4">
           Fast Delivery Only
          </label>
        </div>
        <div className="d-flex ms-4 mt-2">
            <span>Rating:</span>
             <Rating
             rating={rating}
             onClick={(i)=>setrating(i+1)}
             />
        </div>
        <div className="button text-center mt-4">
          <button className="btn btn-secondary">Clear Filter</button>
        </div>
      </div>
    </>
  );
};

export default Filters;
