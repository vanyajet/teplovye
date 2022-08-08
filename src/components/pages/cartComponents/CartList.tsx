import { Container } from '@mui/material'
import React, { FC } from 'react'
import { productData } from '../../../data/productData'
import CartItem from './CartItem'

const CartList:FC = () => {
  
    return (
        <Container maxWidth={false} style={{borderBottom:'5px solid #e3071340'}}>
            {productData.map(product => (

                <CartItem key={product.id} product={product}/>

            ))} 
            
        </Container>
    )


}

export default CartList