import { TYPES } from "../actions/shoppingActions";

export const shoppingInitialState = {
    products: [
        { id:1 , name:"Producto 1", price: 100},
        { id:2 , name:"Producto 2", price: 200},
        { id:3 , name:"Producto 3", price: 300},
        { id:4 , name:"Producto 4", price: 400},
        { id:5 , name:"Producto 5", price: 500},
    ],
    cart:[]
};

export function shoppingReducer (state, action) {
switch (action.type) {
    case TYPES.ADD_TO_CART:{
        debugger
        let newItem= state.products.find((product) => product.id === action.payload);
        let ItemInCart= state.cart.find(Item=> action.payload===Item.id);
        

        return ItemInCart?
        { ...state, cart:state.cart.map(oe=> oe.id === ItemInCart.id? {...oe,quantity:  oe.quantity +1} : oe),} : {
            ...state, cart: [...state.cart, {...newItem,quantity:1 }],

        }
       
    }
    case TYPES.CLEAR_CART:{
        return shoppingInitialState
    }

    case TYPES.REMOVE_ALL_FROM_CART: {}
    case TYPES.REMOVE_ONE_FROM_CART: {}
    case TYPES.CLEAR_CART: {}
    default:
        return state;
}

}