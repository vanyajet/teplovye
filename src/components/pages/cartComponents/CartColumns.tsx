import { Container, Grid, Typography } from '@mui/material'
import React, { FC } from 'react'
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';

const CartColumns:FC = () => {
  
    return (

        <Container sx={{ my:3 }} maxWidth={false} className='d-none d-lg-block' >
            <Grid container >
                <Grid item display='flex' alignItems='center' justifyContent='center' sm={10} md={2} lg={2}>
                    <Typography variant='body1' align='center' >Продукты</Typography>
                </Grid>
                <Grid item display='flex' alignItems='center' justifyContent='center' sm={10} md={2} lg={2}>
                    <Typography variant='body1' align='center' >Название</Typography>
                </Grid>
                <Grid item display='flex' alignItems='center' justifyContent='center' sm={10} md={2} lg={2}>
                    <Typography variant='body1' align='center' style={{display: 'flex',  alignItems: 'start'}} >Цена, <CurrencyRubleIcon fontSize='small' /></Typography>
                </Grid>
                <Grid item display='flex' alignItems='center' justifyContent='center' sm={10} md={2} lg={2}>
                    <Typography variant='body1' align='center' >Количество</Typography>
                </Grid>
                <Grid item display='flex' alignItems='center' justifyContent='center' sm={10} md={2} lg={2}>
                    <Typography variant='body1' align='center' >Удалить</Typography>
                </Grid>
                <Grid item display='flex' alignItems='center' justifyContent='center' sm={10} md={2} lg={2}>
                    <Typography variant='body1' align='center' style={{display: 'flex',  alignItems: 'start'}} >Стоимость, <CurrencyRubleIcon fontSize='small' /></Typography>
                </Grid>
            </Grid>
        </Container>
    )

}

export default CartColumns