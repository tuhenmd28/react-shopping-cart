import React, { createContext, useContext, useReducer, useEffect } from 'react'
// import { faker } from '@faker-js/faker';
import { cartReducer } from './Reducer';

const Cart = createContext()

const Context = ({children}) => {

    let products = []
    // fetch product 
    useEffect(() => {
      fetchData()
    }, [])
    // fetch function
    const fetchData = ()=>{

      dispatch({
        type:"SET_LODDING",
      })
      fetch('https://fakestoreapi.com/products')
      .then((response)=>{
        if(response.ok){
          return response.json()
        }
        throw response;
      })
      .then(data=>dispatch({type:"ADDFULLDATA",payload:data}))
  
    }
    const [state, dispatch] = useReducer(cartReducer, {
        products:products,
        Lodding:false,
        cart:[],
    })
    return (
      <Cart.Provider value={{state,dispatch}}>
      {children}
    </Cart.Provider>
  )
}

export default Context ;


export const CartState = ()=>{
    return useContext(Cart);
} 

// export function CartState() {
//     return React.useContext(UserContext)
//   }