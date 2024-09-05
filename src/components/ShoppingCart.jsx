import { useReducer } from "react";
import { shoppingInitialState,shoppingReducer } from "../reducers/ShoppingReducer"
import ProductItem from "./ProductItem"
import CartItems from "./CartItems"
import { TYPES } from "../actions/shoppingActions";

/*const {state, dispatch} = useReducer(shoppingReducer , shoppingInitialState)
const {products, cart}= state;
const addToCart =()=> {};
//const delFromCart =() =>{};*/


const ShoppingCart= ()=> {

const productor= shoppingInitialState.products

const [state, dispatch] = useReducer( shoppingReducer , shoppingInitialState);
const {products, cart} = state ;
const addToCart =(id)=> {
    console.log (id)
    dispatch({type:TYPES.ADD_TO_CART, payload:id})
};

const delFromCart =() => {
    dispatch ({type: TYPES.CLEAR_CART})
}

    
    return ( <>
    
        <div>
            <h2> Carrito de Compras </h2>
            <h3> Productos </h3>
            <article className="box grid-responsive" >{productor.map((product)=> <ProductItem key={product.id} data={product} addToCart={addToCart}/>)} </article>
            <h3> Carrito </h3>
            <button className="eliminarto" onClick={delFromCart}> Limpiar Carrito  </button>


            {cart.map(item=> <CartItems key={item.id} data={item}  />)}

            
        </div>
        </>
    )
}

export default ShoppingCart;

