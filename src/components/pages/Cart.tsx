import { Typography } from '@mui/material'
import { observer } from 'mobx-react-lite'
import React, { FC } from 'react'
import cart from '../../store/cart'
import Footer from '../navigation/Footer'
import CartColumns from './cartComponents/CartColumns'
import CartList from './cartComponents/CartList'
import CartTotal from './cartComponents/CartTotal'

const Cart:FC = observer(() => {
  
    return (

           <>
                {cart.cartList.length === 0 ? 
                <Typography variant='h3' align='center' mt={10}>Ваш Заказ Пуст</Typography>
                :
                <>
                <Typography variant='h3' align='center' mt={10}>Ваш Заказ</Typography>
                <CartColumns />
                <CartList 
                    cartList={cart.cartList}
                    // state={state}
                    // dispatch={dispatch}
                />
                
                <CartTotal 
                    // dispatch={dispatch}
                />
                <Footer />
                </>}
            </>
    )

})

export default Cart