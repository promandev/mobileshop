import React from "react";
import createDataContext from "./createDataContext";
import API_URL from "../api/endpoints.json"
import { apiRequestHandler } from '../helpers/utils';

const INITIAL_STATE = {

}

const productsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'get_products':
            return {
                ...state,
                INITIAL_STATE: action.payload
            };
    //     case 'get_productId':
    //         return {
    //             ...state,
    //             productsId: action.payload
    //         };
    //     case 'post_cart':
    //         return {
    //             ...state,
    //             cart: action.payload
    //         };
    //     case 'reset_data':
    //         return {
    //             ...state,
    //             resetData: action.payload
    //         };   
    // }
    }
}

const getProducts = (dispatch) => {

    return async (signout) => {
        var url = API_URL
        url = url + API_URL.product
        
        return await apiRequestHandler(url, 'get', undefined, signout).then(
            response => {
                dispatch({ type: 'get_prodcuts', payload: response });
            },
        ).catch((err) => {
            return null
        })
    }
}

export const { Provider, Context } = createDataContext(
    productsReducer,
    {
        getProducts,
    },

    INITIAL_STATE
)