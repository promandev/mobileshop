import createDataContext from "./createDataContext";

const INITIAL_STATE = {
    productId: {},
    actualProductId: ''
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

export const { Provider, Context } = createDataContext(
    productDetailsReducer,
    {
        setActualProductId,
        resetActualProductId,
        getProductId,
        resetProductId,
    },

    INITIAL_STATE,
)