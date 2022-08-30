import React, { FC } from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Grid, Fab, Container } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';


const Footer:FC = () => {

  return (
    <div>
      <footer className='footer'>
        <Container>
          <Grid container spacing={4}>
  
            <Grid item sm={12} md={12} lg={4} >
                <h3 className='footer-box-title'>О нас</h3>
                <div className="footer-box">
                <p>Наша цель - кормить людей экологически чистыми продуктами круглый год.</p>
                <p>Вся наша продукция произведена в самаркком комбинате "Тепличный".</p>
                <p>Мы гарантируем Вам свежесть и пользу всей своей продукции.</p>
                <p>ИП Ускова Татьяна Владимировна</p>
                <p>ИНН 019238109381</p>
                <p>ОГРН 198237918273918</p>
              </div>
            </Grid>
            
            <Grid item sm={12} md={12} lg={4} >
              <h3 className='footer-box-title'>Контакты</h3>
              <div className='footer-media-container'>
            <Fab color="secondary" href='https://www.instagram.com/smolly.ru/' target="_blank" rel="noopener noreferrer" variant='extended' className='footer-media'>
                <InstagramIcon />
              <h5 className='footer-media-text'>@teplovye</h5>
            </Fab>
            <Fab color="secondary" href='tel:+79053001016' target="_blank" rel="noopener noreferrer" variant='extended' className='footer-media'>
                <PhoneIcon />
              <h5 className='footer-media-text'>+7(905) 300-10-16</h5>
            </Fab>
            <Fab color="secondary" href='https://wa.me/79053001016' target="_blank" rel="noopener noreferrer" variant='extended' className='footer-media'>
                <WhatsAppIcon />
              <h5 className='footer-media-text'>+7(905) 300-10-16</h5>
            </Fab>
            <Fab color="secondary" href='tel:+79370608621' target="_blank" rel="noopener noreferrer" variant='extended' className='footer-media'>
              <h5 className='footer-media-text'>Звонок директору</h5>
            </Fab>
              </div>
            </Grid> 
            
            <Grid item sm={12} md={12} lg={4} >
                <h3 className='footer-box-title'>Адреса наших магазинов</h3>
                <div className="footer-box" style={{display: 'flex', flexDirection: 'column',}}>
                    <Link to={{ pathname:'/contacts', hash:'#shops'}}><LocationOnIcon /> Ставропольская 200</Link>
                    <Link to={{ pathname:'/contacts', hash:'#shops'}}><LocationOnIcon /> Метро Московская</Link>
                    <Link to={{ pathname:'/contacts', hash:'#shops'}}><LocationOnIcon /> Хлеб Завод №5 - Победа 166А</Link>
                    <Link to={{ pathname:'/contacts', hash:'#shops'}}><LocationOnIcon /> Метро Советская Павильон № 1</Link>
                    <Link to={{ pathname:'/contacts', hash:'#shops'}}><LocationOnIcon /> Дом молодежи - ул. Аэродромная 16А</Link>
                    <Link to={{ pathname:'/contacts', hash:'#shops'}}><LocationOnIcon /> Метро Победа Павильон № 56</Link>
                    <Link to={{ pathname:'/contacts', hash:'#shops'}}><LocationOnIcon /> Метро Безымянка Павильон № 16</Link>

                </div>
            </Grid>

        </Grid>
        </Container> 
      </footer>
    </div>
  );
}

export default Footer
