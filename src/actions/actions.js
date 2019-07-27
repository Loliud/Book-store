import *as types from '../constants/TypeAction';
import getApiRequest from '../utils/apiActions';




export const getDataFromApiRequest = () =>{
    return (dispatch) =>{
        getApiRequest('GET', 'products', null)
        .then((res) =>{
            dispatch(getDataFromApi(res.data));
        });
    }
}
export const getDataFromApi = (products) =>{
    return{
        type: types.GET_DATA_FROM_API,
        products
    }
} 
