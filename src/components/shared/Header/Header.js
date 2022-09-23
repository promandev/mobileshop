import React, {useContext, useEffect, useState} from 'react';
import './Header.css'
import { useNavigate } from 'react-router-dom';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import { Context as ProductsContext } from '../../../context/productsContext'

function Header() {
    const navigate = useNavigate()
    const { state: productState, resetActualProductId, GetProducts, setActualProductId } = useContext(ProductsContext);
    const [ goingBack, setgoingBack ] = useState(false)

    useEffect(() => {
        async function resetStoragedData() {
            if (goingBack) {
                await resetActualProductId()
            }
        }
        resetStoragedData()
    },
    [goingBack])


    const handleOnClick =  () => {
        navigate('/')
        setgoingBack(true)
    }

    return (
        <div className='Header-container'>
            <div onClick={handleOnClick}>
                <span >
                    DMMY MOBILE SHOP
                </span>        
            </div>
            <ShoppingCart/>
    </div>
    )
}

export default Header