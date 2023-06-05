import axios from "axios"

// Wishlist Services

export const getWishlistService = async ( token) => 
        await axios({
            method:'GET',
            url:'/api/user/wishlist',
            headers:{authorization:token},
        });


export const addToWishlistService = async (item, token) => 
        await axios({
            method:'POST',
            url:'/api/user/wishlist/',
            data:{product: item},
            headers:{authorization: token},
        })


export const removeWishlistService = async(productID, token) => 
    await axios({
        method:'DELETE',
        url:`/api/user/wishlist/${productID}`,
        headers:{authorization: token},
    });

// Cart Services

export const getCartService = async( token) => 
    await axios({
        method:'GET',
        url:'/api/user/cart',
        headers:{authorization:token},
    });

export const addToCartService = async( item, token) => 
    await axios({
        method:'POST',
        url:'/api/user/cart',
        data:{product:item},
        headers:{authorization: token},
    })

export const removeCartService = async (productID, token) =>
    await axios({
        method:'DELETE',
        url:`/api/user/cart/${productID}`,
        headers:{authorization:token},
    });

export const updateCartQtyService = async (productID, updateType, token) =>
    await axios({
        method:'POST',
        url:`/api/user/cart/${productID}`,
        data:{action: {type : updateType}},
        headers:{authorization:token},
    });

// Address Services


export const getAddressDataService = async (token) => 
    await axios({
        method:'GET',
        url:'/api/user/addresses',
        headers:{authorization:token},
    });

export const addAddressService = async (address, token) => 
    await axios({
        method:'POST',
        url:'/api/user/address',
        data:{address:address},
        headers:{authorization:token}
    });

export const editAddressService = async(address, addressID, token) =>
    await axios({
        method:'POST',
        url:`/api/user/address/${addressID}`,
        data:{address:address},
        headers:{authorization: token},
    });

export const removeAddressService = async( addressID, token) => 
    await axios({
        method:'DELETE',
        url:`/api/user/address/${addressID}`,
        headers:{authorization:token},
    });


