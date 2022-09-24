import React, {useContext, useEffect, useState} from 'react';
import './Header.css'
import { useNavigate } from 'react-router-dom';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import { Context as ProductsContext } from '../../../context/productsContext';
import { Context as ProductDetailsContext } from '../../../context/productDetailsContext'
import IconBreadcrumbs from '../Breadcrumbs/Breadcrumbs';


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
            <div className='Header-titleWrapper'>
                <div className='Header-title' onClick={handleOnClick}>
                    <span className='text_large_bold'>
                        GET YOURSELF A PHONE .COM
                    </span>        
                </div>
                <div className='Header-breadcrumbs'>
                    <IconBreadcrumbs/>
                </div>
            </div>
            <ShoppingCart/>
    </div>
    )
}

export default Header