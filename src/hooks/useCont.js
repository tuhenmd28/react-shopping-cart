let products = []
// fetch product 
useEffect(() => {
  fetchData()
}, [])
// fetch function
const fetchData = ()=>{

  dispatch({
    type:"SET_TOP",
    payload:'top'
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
    card:[],
})