import React, {useState, useRef} from "react";
import createDataContext from "./createDataContext";

const INITIAL_STATE = {
    products: [],
    productId: [],
    actualProductId: ''
}

const productsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'get_products':
            return {
                ...state,
                products: action.payload
            };
        case 'reset_products':
            return {
                ...state,
                products: INITIAL_STATE.products
            };
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
    //     case 'post_cart':
    //         return {
    //             ...state,
    //             cart: action.payload
    //         };
    // }
    }
}

const GetProducts = async  (dispatch) => {
    const [firstRequest, setFirstRequest] = useState(true)
    
    if (firstRequest) {
        const url = 'https://front-test-api.herokuapp.com/api/product'
        var data = await fetch(url)
        var response = await data.json();
        
        if (data.ok && firstRequest) {
            setFirstRequest(false)
            dispatch({ type: 'get_products', payload: response });
        }    
    }
    return response;
}

// const resetProductId = (dispatch) => {
//     return async () => {
//         dispatch({ type: 'reset_productId' });
//     }
// }

export const { Provider, Context } = createDataContext(
    productsReducer,
    {
        GetProducts,
    },

    INITIAL_STATE,
)