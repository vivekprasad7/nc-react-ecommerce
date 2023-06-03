export const isItemInWishlist = (productID, wishlist) => {
    return wishlist.find((item) => item._id === productID)
}