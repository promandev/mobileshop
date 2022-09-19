import React, {useState} from "react";
import createDataContext from "./createDataContext";
import API_URL from "../api/endpoints.json"
import { apiRequestHandler } from '../helpers/utils';
import axios from 'axios';
import { useParams } from "react-router-dom";

const INITIAL_STATE = {
    products: [],
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
                productsId: action.payload
            };
    //     case 'post_cart':
    //         return {
    //             ...state,
    //             cart: action.payload
    //         };
    // }
    }
}

const GetProducts = async function (dispatch){
    const [firstRequest, setFirstRequest] = useState(true)

    const url = 'https://front-test-api.herokuapp.com/api/product'
    var data = await fetch (url)
    var response = await data.json();
    if (data.ok && firstRequest) {
        setFirstRequest(false)
        dispatch({ type: 'get_products', payload: response });
        return response;    
    }
    if (firstRequest == false) {
        return null
    }
}

const GetProductList = async function (dispatch){    
    // const [firstRequest, setFirstRequest] = useState(true)


    const url = `https://front-test-api.herokuapp.com/api/product${INITIAL_STATE.actualProductId}`
    var data = await fetch (url)
    var response = await data.json();
    if (data.ok) {
        // setFirstRequest(false)
        dispatch({ type: 'get_productId', payload: response });
        return response;    
    }
    // if (firstRequest == false) {
    //     return null
    // }
}

const setActualProductId = (dispatch) => {return async (payload) => {
    dispatch({ type: 'set_ActualProductId', payload: payload });  
    console.log('setActualProductId::::::', payload)
    }
  };

const resetProducts = (dispatch) => {
    return async () => {
        dispatch({ type: 'reset_products' });
    }
}

export const { Provider, Context } = createDataContext(
    productsReducer,
    {
        GetProducts,
        GetProductList,
        resetProducts,
        setActualProductId

    },

    INITIAL_STATE,
    console.log('veamos a ver', INITIAL_STATE.products.products)
)