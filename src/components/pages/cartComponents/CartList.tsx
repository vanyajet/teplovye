import { Container } from '@mui/material'
import { observer } from 'mobx-react-lite'
import React, { FC } from 'react'
import { ICartItem } from '../../../store/cart'
import CartItem from './CartItem'

const CartList:FC<{ cartList:ICartItem[] }> = observer(({ cartList }) => {
  
    return (
        <Container maxWidth={false} style={{borderBottom:'5px solid #998f8f7a'}}>

            {cartList.map((item:ICartItem) => (

                <CartItem key={item.id} item={item}/>

            ))} 
            
        </Container>
    )


})

export default CartList