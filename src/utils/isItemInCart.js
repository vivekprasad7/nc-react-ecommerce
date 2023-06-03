export const isItemInCart = (productID, cart) => {
    return cart.find((item) => item._id === productID)
}