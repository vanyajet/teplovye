import { Container, Typography } from '@mui/material'
import React, { FC } from 'react'

const Default:FC = () => {
    return (
        <Container style={{ display: 'flex', justifyContent: 'center', marginTop: '7rem', color: '#fff' }}>
            <Typography variant="h3" component="div" gutterBottom>
                Извините, но такой страницы не найдено
            </Typography>
        </Container>
    )
}

export default Default