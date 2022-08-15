import { Button, ButtonGroup, Grid } from '@mui/material';
import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import cart, { ICartItem } from '../../../store/cart';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import { observer } from 'mobx-react-lite';

const CartItem:FC<{ item:ICartItem }> = observer(({ item }) => {

    const handleRemove = () => {
        cart.removeFromCart(item.id)
    }

    const handleDecrement = () => {
        cart.decrementAmount(item.id)
    }

    const handleIncrement = () => {
        cart.incrementAmount(item.id)
    }

   
    return (
        <React.Fragment>
        <Grid container className='cart-item'>
            <Grid item sm={10} md={2} lg={2} display='flex' justifyContent='center' alignItems='center'>
                <Link to='/details' style={{ display: 'flex'}}>
                <img 
                    src={item.img[0]}
                    className='img-fluid img-cart'
                    alt={`${item.title}  ${item.subTitle}`}
                    // onClick={() => handleDetail(item.id)}
                />
                </Link>
            </Grid>
            
            <Grid item sm={10} md={2} lg={2} className='cart-item__title'>
                <Link to='/details' 
                    // onClick={() => handleDetail(item.id)}
                >
                {item.title} {item.subTitle}
                </Link>
            </Grid>
            <Grid item sm={10} md={2} lg={2} className='cart-item__price'>
                <span className="d-lg-none">Цена: </span>
                <span className='cart-item-price' >{item.finalPrice} <CurrencyRubleIcon fontSize='small' /> </span>
            </Grid>
            <Grid item sm={10} md={2} lg={2} className='cart-item__change-amount' >
                <ButtonGroup variant="contained" aria-label="contained button group" color='info' >
                    <Button
                        style={{ fontWeight: 'bolder' }}
                        onClick={handleDecrement}
                    >-</Button>
                    <Button style={{ fontWeight: 'bolder' }} >{item.amount}</Button>
                    <Button 
                        style={{ fontWeight: 'bolder' }}
                        onClick={handleIncrement}
                    >+</Button>
                </ButtonGroup>
            </Grid>
            <Grid item sm={10} md={2} lg={2} className='cart-item__remove'>
                <Button
                    onClick={handleRemove}
                >
                    <DeleteIcon color='error' />
                </Button>
            </Grid>
            <Grid item sm={10} md={2} lg={2} className='cart-item__cost'>
                <span className="d-lg-none">Стоимость: </span>
                <span className='cart-item-cost' >{item.cost} <CurrencyRubleIcon fontSize='small' /></span>
            </Grid>
        </Grid>
        </React.Fragment>
    )


})

export default CartItem