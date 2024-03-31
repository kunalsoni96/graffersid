export const ADD_ON_CART = 'ADD_ON_CART';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const addOnCartAction = (id:number) => {
    return {
        type:ADD_ON_CART,
        payload:{id:id, quantity:1}
    }
}

export const incrementOnCartAction = (id:number, quantity:number) => {
    return {
        type:INCREMENT,
        payload:{id:id, quantity:quantity+1}
    }
}

export const decrementOnCartAction = (id:number, quantity:number) => {
    if(quantity==1){
    return {
        type:REMOVE_FROM_CART,
        payload:{id:id, quantity:1}
    }
    }
    
    return {
        type:DECREMENT,
        payload:{id:id, quantity:quantity-1}
    }
}
