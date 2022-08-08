import { Button, ButtonGroup, Grid } from '@mui/material';
import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import { IProductData } from '../../../data/productData';
import DeleteIcon from '@mui/icons-material/Delete';

const CartItem:FC<{ product:IProductData}> = ({ product }) => {
   
    return (
        <React.Fragment>
        <Grid container columnSpacing={2} justifyContent='center' className='cart-item'>
            <Grid item sm={10} md={2} lg={2} display='flex' justifyContent='center' alignItems='center'>
                <Link to='/details'>
                <img 
                    src={product.img[1]} 
                    className='img-fluid img-cart'
                    alt={product.title}
                    // onClick={() => handleDetail(product.id)}
                />
                </Link>
            </Grid>
            
            <Grid item sm={10} md={2} lg={2} display='flex' justifyContent='center' alignItems='center' textAlign='center' className='cart-item__title'>
                <Link to='/details' 
                    // onClick={() => handleDetail(product.id)}
                >
                {product.title}
                </Link>
            </Grid>
            <Grid item sm={10} md={2} lg={2} display='flex' justifyContent='center' alignItems='center' className='cart-item__price'>
                <span className="d-lg-none">Цена: </span>
                {product.price[1].price}
            </Grid>
            <Grid item sm={10} md={2} lg={2} display='flex' justifyContent='center' alignItems='center' >
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                    <Button>-</Button>
                    <Button >{product.id}</Button>
                    <Button>+</Button>
                </ButtonGroup>
            </Grid>
            <Grid item sm={10} md={2} lg={2} display='flex' justifyContent='center' alignItems='center'>
                <Button
                    // onClick={() => {
                    //     dispatch({
                    //         type: 'removeFromCart',
                    //         payload: product.id
                    //     });
                    // }} 
                >
                    <DeleteIcon />
                </Button>
            </Grid>
            <Grid item sm={10} md={2} lg={2} display='flex' justifyContent='center' alignItems='center'>
                <strong className="d-lg-none">Стоимость: </strong>
                <strong>{product.price[1].price}</strong>
            </Grid>
        </Grid>
        </React.Fragment>
    )


}

export default CartItem