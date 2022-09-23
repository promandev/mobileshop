import axios from "axios";
import createDataContext from "./createDataContext";

const INITIAL_STATE = {
    productId: {},
    actualProductId: '',
    itemDetailsToCart: {},
}

const productDetailsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'set_actualProductId':
            return {
                ...state,
                actualProductId: action.payload
            }; 
        case 'get_productId':
            return {
                ...state,
                productId: action.payload
            };
        case 'reset_productId':
            return {
                ...state,
                productId: INITIAL_STATE.productId
            };
        case 'set_dataPrePostItemCart':
            return {
                ...state,
                itemDetailsToCart: action.payload
            }
        case 'reset_dataPrePostItemCart':
            return {
                ...state,
                itemDetailsToCart: INITIAL_STATE.productId
            }
    }
}

const setActualProductId = (dispatch) => 
    {return (mobileId) => {
        dispatch({ type: 'set_actualProductId', payload: mobileId });
    };}
    
const resetProductId = (dispatch) => {
    return async () => {
        dispatch({ type: 'reset_productId' });
    }
}

const getProductId = (dispatch) => {
    return async (mobileId) => {
    if (mobileId.length) {
        const url = `https://front-test-api.herokuapp.com/api/product/${mobileId}`
        var data = await fetch(url)
        var response = await data.json();
        console.log('aquí el response', response)
        dispatch({ type: 'get_productId', payload: response });
        return response;    
    }  
}
}

const resetActualProductId = (dispatch) => {
    return async () => {
        dispatch({ type: 'reset_actualProductId' });
    }
}

const setDataPrePostItemCart = (dispatch) => 
    {return (itemCount) => {
        dispatch({ type: 'set_dataPrePostItemCart', payload: itemCount });
    };
}

const resetDataPrePostItemCart = (dispatch) => {
    return async () => {
        dispatch({ type: 'reset_dataPrePostItemCart' });
    }
}


const postItemCart = () => {
    return async (itemList) => {
        if (itemList.id && itemList.colorCode && itemList.storageCode) {
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(itemList),
            headers: {
                'Content-Type': 'application/json'
          }
        }
        var url = 'https://front-test-api.herokuapp.com/api/cart';
        fetch(url, requestOptions)
        .then(response => response, alert('¡ARTÍCULO COMPRADO SATISFACTORIAMENTE!'))
        }
    }
}

export const { Provider, Context } = createDataContext(
    productDetailsReducer,
    {
        setActualProductId,
        resetActualProductId,
        getProductId,
        resetProductId,
        setDataPrePostItemCart,
        resetDataPrePostItemCart,
        postItemCart,
    },

    INITIAL_STATE,
)