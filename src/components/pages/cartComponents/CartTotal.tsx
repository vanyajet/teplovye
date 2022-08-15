import { Button, Container, Typography } from '@mui/material'
import React, { FC, } from 'react'
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import { observer } from 'mobx-react-lite';
import cart from '../../../store/cart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const CartTotal:FC = observer(() => {

    const handleClear = () => {
        cart.clearCart()
    }
  
    return (
        <React.Fragment>
            <Container>
                <div className="cart-total">
                        <Button 
                            variant="contained" 
                            color="error"
                            onClick={handleClear}
                        >
                            Очистить корзину
                        </Button>
                    <Button 
                            variant="contained" 
                            color="success"
                            size='large'
                            style={{padding: '1rem'}}
                            endIcon={<ShoppingCartCheckoutIcon style={{ marginBottom: '4px'}} />}
                            // onClick={toggle}
                        >
                            Оформить заказ
                    </Button>
                    <Typography variant='h5' align='center' display='flex' >
                        Итого: {cart.cartTotal} <CurrencyRubleIcon />
                    </Typography>
                </div>
            </Container>
        </React.Fragment>
    )

})

export default CartTotal