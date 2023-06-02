import axios from "axios"

export const getWishlistData = async (token) => {
    try{
        const res = await axios({
            method:'GET',
            url:'/api/user/wishlist',
            headers:{authorization: token}
        })
        console.log("get_wish_data", res)

    } catch(e){
        console.error(e)
    }
}

export const addWishlistItem = async (item, token) => {
    try{
        const res = await axios({
            method:'POST',
            url:'/api/user/wishlist/',
            data:{product: item},
            headers:{authorization: token},
        })
        console.log("add_wishlist_item", res)

    } catch(e){
        console.error(e)
    }
}


export const removeWishlistItem = async (productID, token) => {
    try{
        const res = await axios({
            method:'DELETE',
            url:`/api/user/wishlist/${productID}`,
            headers:{authorization: token}
        })
        console.log("delete_wishlist_service", res)

    } catch(e){
        console.error(e)
    }
}



