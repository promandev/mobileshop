import React, {useContext} from 'react';
import './Header.css'
import { useNavigate } from 'react-router-dom';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import { Context as ProductsContext } from '../../../context/productsContext'

function Header() {
    const navigate = useNavigate()
    const { state: productState, resetActualProductId, GetProducts, setActualProductId } = useContext(ProductsContext)

    // useEffect(() => {
    //     if (goingBack) {
    //         resetActualProductId()
    //     }
    //     }, [goingBack])


    // const handleOnClick =  () => {
    //     setGoingBack(true)

    //     if (goingBack) {
    //         navigate('/')
    //     }
    // }



    const handleOnClick =  () => {
        navigate('/')
        setActualProductId('')
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