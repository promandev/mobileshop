import React from 'react';
import { useNavigate } from 'react-router-dom';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import './Header.css'

function Header() {
    const navigate = useNavigate()

    const handleOnClick = () => {
        console.log('botón dado')
        navigate('/')
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