import *as types from '../constants/TypeAction';
import getApiRequest from '../utils/apiActions';




export const getDataFromApiRequest = () => {
    return (dispatch) => {
        getApiRequest('GET', 'products', null)
            .then((res) => {
                dispatch(getDataFromApi(res.data));
            });
    }
}
export const getDataFromApi = (products) => {
    return {
        type: types.GET_DATA_FROM_API,
        products
    }
}

export const getBestSellerRequest = () => {
    return (dispatch) => {
        getApiRequest('GET', 'products', null)
            .then(res => {
                // xu ly du lieu
                let data = res.data.filter(item =>{
                    return  item.status === true;
                });
                dispatch(getBestSeller(data));
            });
    }

}

export const getBestSeller = (products) => {
    return {
        type: types.GET_BEST_SELLER,
        products
    }
} 

export const getNewProductsRequest = () => {
    return (dispatch) => {
        getApiRequest('GET', 'products', null)
            .then(res => {
                // xu ly du lieu
                let data = res.data.filter(item =>{
                    return  item.status === false;
                });
                dispatch(getNewProducts(data));
            });
    }

}



export const getNewProducts = (products) => {
    return {
        type: types.GET_NEW_PRODUCTS,
        products
    }
} 


export const setViewItem = (product) =>{
    return {
        type: types.GET_ITEM_VIEW,
        product
    }
}

export const addToCart = (item) =>{
    return{
        type: types.ADD_TO_CART,
        item
    }
}
