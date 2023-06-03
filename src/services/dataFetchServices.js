import axios from "axios"


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



