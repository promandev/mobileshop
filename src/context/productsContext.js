import React, {useState, useRef} from "react";
import createDataContext from "./createDataContext";

const INITIAL_STATE = {
    products: [],
}

const productsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'get_products':
            return {
                ...state,
                products: action.payload
            };
    }
}

const getProducts = (dispatch) => {
    return async() => {
        console.log('fetch')
            const url = 'https://front-test-api.herokuapp.com/api/product'
            var data = await fetch(url)
            var response = await data.json();
            
            if (data.ok) {
                dispatch({ type: 'get_products', payload: response });
                console.log('pasa si')
                console.log(response)
                return response;
            }
            else {
                return null
            }
    }
}

export const { Provider, Context } = createDataContext(
    productsReducer,
    {
        getProducts,
    },

    INITIAL_STATE,
)