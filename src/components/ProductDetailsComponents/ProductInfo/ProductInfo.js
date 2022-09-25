import React, {useContext} from 'react';
import './ProductInfo.css'
import { Context as ProductDetailsContext} from "../../../context/productDetailsContext";

function ProductInfo() {
    const { state: productDetailsState } = useContext(ProductDetailsContext)
    const item = productDetailsState.productId

    return (
        <div className='ProductInfo-list'>
        { item.brand ? <span className='text_medium_thin'>- Marca: {item.brand}.</span> : null }
        { item.model ? <span className='text_medium_thin'>- Modelo: {item.model}.</span> : null }
        { item.cpu ? <span className='text_medium_thin'>- CPU: {item.cpu}.</span> : null }
        { item.ram ? <span className='text_medium_thin'>- RAM: {item.ram}.</span> : null }
        { item.so ? <span className='text_medium_thin'>- Sistema Operativo: {item.so}.</span> : null }
        { item.displayResolution ? <span className='text_medium_thin'>- Resolución de pantalla: {item.displayResolution}.</span> : null }
        { item.battery ? <span className='text_medium_thin'>- Batería: {item.battery}.</span> : null }
        { item.primaryCamera ? <span className='text_medium_thin'>- Cámara trasera: {item.primaryCamera}.</span> : null }
        { item.secondaryCmera ? <span className='text_medium_thin'>- Cámara delantera: {item.secondaryCmera}.</span> : null }
        { item.dimentions ? <span className='text_medium_thin'>- Dimensiones: {item.dimentions}.</span> : null }
        { item.weight ? <span className='text_medium_thin'>- Peso: {item.weight}gr.</span> : null }
    </div>
    )
}

export default ProductInfo