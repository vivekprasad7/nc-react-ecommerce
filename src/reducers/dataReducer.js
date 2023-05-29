
export const dataReducer = (state, action) => {
    // For styling the cart and wishlist as of now, will update later with encoded token
    switch(action.type){
        case"ADD_TO_WISHLIST":
        return{...state, wishlist: [...state.wishlist, action.payload]}
        case"REMOVE_FROM_WISHLIST":{
            const newList = state.wishlist.filter(({_id}) => _id !== action.payload)
            return {...state, wishlist: newList}
        }
        case"ADD_TO_CART":
        return{...state, cart:[...state.cart, action.payload]}
        case"REMOVE_FROM_CART":
        {
            const newList = state.cart.filter(({_id}) => _id !== action.payload)
            return{...state, cart: newList}
        }
        default:
        return state
    }
}