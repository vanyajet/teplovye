import React, { FC } from 'react'
import { Avatar, Container, Divider, Grid, Typography } from '@mui/material'
import CustomAccordion from '../animations/CustomAccordion'
import CallButton from '../animations/CallButton';
import Footer from '../navigation/Footer';
import { IShopData, shopData } from '../../data/shopData';


const Contacts:FC = () => {

  return (
    
    <>
      <div className='production-header'>
        <h1>Контакты</h1>
      </div>

      <Divider sx={{ my: 0.5, mb: 2 }} style={{ borderColor: 'rgb(251 248 248 / 80%)', borderBottomWidth: 'thick'}} />

      <Container>

        <div className='contacts-shops'>
          <Typography variant='h5' className='contacts-shops-header'>
            Нам доверяют десятки тысяч людей по всему городу, посетите один из наших магазинов и убедитесь в свежести и высоких вкусовых качествах наших продуктов!
            <span role="img" aria-label="Love">❤️</span>
          </Typography>
          <Grid container spacing={4} style={{display: 'flex', justifyContent: 'space-between', width: 'auto'}}>

            {shopData.map((item:IShopData) => (
              <Grid item sm={12} md={5.5} lg={5.5} style={{ marginLeft: '0.5rem', marginRight: '0.5rem', marginBottom: '0.5rem', marginTop: '0.5rem'}}>
                <CustomAccordion
                  key={item.id}
                  title={item.title}
                  contentText={item.contentText} 
                  img={item.img}
                  defaultExpanded={item.defaultExpanded} />
              </Grid>
            ))}

          </Grid>
          
        </div>

        <Typography variant='h3' style={{ color: '#fff', textAlign: 'center'}}>Контактные лица</Typography>
        <div className='contacts-people'>
          <div className='contacts-people-box'>
            <div className='contacts-people-info'>
              <Typography variant='h4' >
                Менеджер Дмитрий
              </Typography>
              <Typography variant='body1' >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro consequatur molestias accusamus delectus optio officia eum deserunt aliquid quibusdam minus.
              </Typography>
              <CallButton shortPhone='79053001016' title='+7(905) 300-10-16' sizing='small' color='#7BB32E' />
            </div>
            <Avatar 
              alt="Директор Тимофей"
              src="img/Timofey_avatar.jpg"
              sx={{ width: '8rem', height: '8rem', marginLeft: '1rem' }}
            />
          </div>
          <div className='contacts-people-box'>
            <div className='contacts-people-info'>
              <Typography variant='h4' >
                Диспетчерская
              </Typography>
              <Typography variant='body1' >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro consequatur molestias accusamus delectus optio officia eum deserunt aliquid quibusdam minus.
              </Typography>
              <CallButton shortPhone='79639100112' title='+7(963) 910-01-12' sizing='small' color='#7BB32E' />
            </div>
            <Avatar 
              alt="Директор Тимофей"
              src="img/Timofey_avatar.jpg"
              sx={{ width: '8rem', height: '8rem', marginLeft: '1rem' }}
            />
          </div>
        </div>

      </Container>
      <Footer />
    </>
    
  )
}

export default Contacts