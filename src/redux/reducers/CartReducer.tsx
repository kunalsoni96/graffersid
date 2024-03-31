import { ADD_ON_CART, INCREMENT, DECREMENT, REMOVE_FROM_CART } from "../actions/CartAction";

const initialState = {
    cartItems:[]
}

const CartReducer = (state=initialState, action:any) => {
    switch(action.type){
        case ADD_ON_CART :
        return{
            ...state,
            cartItems:[...state.cartItems, action.payload]
        };
        case INCREMENT :
        return{
            ...state,
            cartItems:state.cartItems.map((value:any)=>(
               value.id==action.payload.id?{...value, quantity:action.payload.quantity}:value
            ))
        };
        case DECREMENT :
        return{
            ...state,
            cartItems:state.cartItems.map((value:any)=>(
               value.id==action.payload.id?{...value, quantity:action.payload.quantity}:value
            ))
        };

        case REMOVE_FROM_CART :
        return{
            ...state,
            cartItems:state.cartItems.filter((item:any)=>(item.id!=action.payload.id))
        };

        default :
        return {
            ...state
        }
    }
}

export default CartReducer