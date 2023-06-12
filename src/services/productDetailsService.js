import axios from "axios";


export const getProductById = async( productId) => {
    try{
        const {data, status} = await axios.get(`/api/products/${productId}`);
        //console.log(data,status);
        if(status === 200){
            return data;
        }
    } catch(e){
        console.error(e)
    }
}