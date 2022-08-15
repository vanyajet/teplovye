import { Container, Divider } from '@mui/material'
import React, { FC } from 'react'
import { IProductionItem, productionData } from '../../data/productionData'
import FlipCard from '../animations/FlipCard'
import Footer from '../navigation/Footer'

const Production:FC = () => {

  return (

    <>
    <div className='production-header'>
        <h1>Производство</h1>
    </div>

    <Divider sx={{ my: 0.5, mb: 2 }} style={{ borderColor: 'rgb(251 248 248 / 80%)', borderBottomWidth: 'thick'}} />
    <Container style={{ padding: 0 }} >
        <div className='production-container'>

            {productionData.map((item:IProductionItem) => (
                <div className="production-item">
                    <FlipCard
                        key={item.id}
                        back={item.back}
                        front={item.front}
                        shadow={item.shadow}
                        flipTime={item.flipTime}
                    />
                </div>
            ))}

        </div>
    </Container>
    <Footer />
    </>

  )
}

export default Production