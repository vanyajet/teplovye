import { Button, Container, Typography } from '@mui/material'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const CartTotal:FC = () => {
  
    return (
        <React.Fragment>
            <Container>
                <div className="cart-total">
                    <Link to='/'>
                        <Button 
                            variant="contained" 
                            color="error"
                            // onClick={() => {
                            //     dispatch({
                            //         type: 'clearCart'
                            //     })
                            // }}
                        >
                            Очистить корзину
                        </Button>
                    </Link>
                    <br/>
                    <Button 
                            variant="contained" 
                            color="success"
                            size='large'
                            style={{padding: '1rem'}}
                            // onClick={toggle}
                        >
                            Оформить заказ
                    </Button>
                    <Typography variant='h5' align='center'>
                            Итого: <strong>cartTotal руб</strong>
                    </Typography>
                </div>
            </Container>
        </React.Fragment>
    )

}

export default CartTotal