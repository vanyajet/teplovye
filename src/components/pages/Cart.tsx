import { Typography } from '@mui/material'
import React, { FC } from 'react'
import Footer from '../navigation/Footer'
import CartColumns from './cartComponents/CartColumns'
import CartList from './cartComponents/CartList'
import CartTotal from './cartComponents/CartTotal'

const Cart:FC = () => {
  
    return (

            
            <>
            {/* {state.every(product => product.inCart !== true) ?
                <Typography variant='h2'>Сейчас Ваша Корзина Пуста</Typography>
            : */}
                <Typography variant='h2' align='center' mt={10}>Ваша Корзина</Typography>
                <CartColumns />
                <CartList 
                    // state={state}
                    // dispatch={dispatch}
                />
                
                <CartTotal 
                    // dispatch={dispatch}
                />
                <Footer />

            </>
    )

}

export default Cart