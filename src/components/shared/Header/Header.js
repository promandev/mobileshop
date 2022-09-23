import React, {useContext, useEffect, useState} from 'react';
import './Header.css'
import { useNavigate } from 'react-router-dom';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import { Context as ProductsContext } from '../../../context/productsContext';
import { Context as ProductDetailsContext } from '../../../context/productDetailsContext'


function Header() {
    const navigate = useNavigate()
    const { resetActualProductId } = useContext(ProductsContext);
    const { resetProductId, resetDataPrePostItemCart } = useContext(ProductDetailsContext);

    const [ goingBack, setgoingBack ] = useState(false)

    useEffect(() => {
        async function resetStoragedData() {
            if (goingBack) {
                await resetActualProductId()
            }
        }
        resetStoragedData()
        resetProductId()
        resetDataPrePostItemCart()
    }, [goingBack])


    const handleOnClick =  () => {
        navigate('/')
        setgoingBack(true)
    }

    return (
        <div className='Header-container'>
            <div onClick={handleOnClick}>
                <span >
                    GET YOURSELF A PHONE .COM
                </span>        
            </div>
            <ShoppingCart/>
    </div>
    )
}

export default Header