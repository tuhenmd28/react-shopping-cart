export const cartReducer = (state,action) =>{
    switch (action.type) {
        case "ADDFULLDATA":
            return {
                ...state,
                products:action.payload,
                Lodding:false
            }
        case "SET_LODDING":
            return {
                ...state,
                Lodding:true
            }
        case "ADD_TO_CART":
        return{
            ...state,
            cart:[{...action.payload,qty:1},...state.cart]
        }
        case "REMOVE_FORM_CART":
        return{
            ...state,
            cart:state.cart.filter(pro=>pro.id !== action.payload.id)
        }
        default:
            return state
    }
}