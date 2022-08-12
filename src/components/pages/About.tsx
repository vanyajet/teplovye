import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import React, { FC } from 'react'
import FlipCard from '../animations/FlipCard'
import Trail from '../animations/Trail'
import CallButton from '../animations/CallButton'
import { Typography } from '@mui/material'


const url = (name: string, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`



const Home:FC = () => {

    return (

    <div style={{ width: '100%', height: '100%', background: '#253237' }}>
      <Parallax pages={3}>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

        

        

        <ParallaxLayer offset={1.3} speed={0.4} style={{ opacity: 0.6 }}>
          <img src='img/svg/mushroom.svg' alt='Грибы Тепловье' style={{ display: 'block', width: '10%', marginLeft: '5%', marginTop: '35%' }} />
          
        </ParallaxLayer>

        {/* <ParallaxLayer offset={0.2} speed={-0.1} style={{ opacity: 0.7 }} >
          <img src='img/up-down_arrow.svg' style={{ width: '10%', marginLeft: '3%' }} />
        </ParallaxLayer> */}

        
        
        <ParallaxLayer offset={0.8} speed={-0.1} style={{ opacity: 0.4 }}> 
          <img src='img/svg/salad.svg' alt='Салат Тепловье' style={{ display: 'block', width: '25%', marginLeft: '70%' }} />
          
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: 'img/svg/greenCover.svg',
            backgroundSize: 'cover',
          }}
        />

        

        {/* <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src='img/groceries.svg' style={{ width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer> */}

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src='img/svg/tomato.svg' alt='Томат Тепловье' style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src='img/svg/tomato1.svg' alt='Томат Тепловье' style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src='img/svg/tomato2.svg' alt='Томат Тепловье' style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src='img/svg/cucumber.svg' alt='Огурец Тепловье' style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src='img/svg/tomato4.svg' alt='Томат Тепловье' style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        

        <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}>
          <img src={url('earth')} alt='Земля' style={{ width: '60%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
            backgroundImage: 'img/svg/restaurantTable.svg',
          }}
        />

        <ParallaxLayer offset={0.99} speed={0.2}>
          <div className='grey_text_left'>
            <Typography variant={`${window.innerWidth > 1024 ? 'h3' : 'h5'}`}>Мы готовы поставлять свежие овощи круглый год, а также производить необходимые объемы продукции индивидуально для Вас (вашей компании?)</Typography>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.1}
          style={{
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'center',
            marginTop: '6rem',
          }}>

          {/* <div onClick={() => set(state => !state)} style={{ marginLeft: '3%', marginTop: '45%' }}>           
            <FlipCard flipped={flipped} back='img/tomato_farm_close.jpg' front='img/tomato_farm.jpg' shadow='dark'/>
          </div> */}
          
          <div className='spring_container' style={{ alignItems: 'start', marginTop: `${window.innerWidth > 768 ? '6rem' : '2rem'}` }} >
          
            <Trail open={true}>
              <span>Мы</span>
              <span>Кормим</span>
              <span>Людей</span>
            </Trail>
          </div>

          <img src='img/svg/shop.svg' alt='Магазин Тепловье' style={{ width: '30%' }} />

        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <img src='img/svg/restaurantFork.svg' alt='Поставки в Ресторан' style={{ width: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          >
          <img src='img/svg/restaurantTable.svg' alt='Поставки в Ресторан' style={{ width: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={window.innerWidth > 600 ? 0.5 : 0.25} speed={0.2}>
          <div style={{ marginLeft: `${window.innerWidth > 600 ? '3%' : '0%'}`, marginTop: `${window.innerWidth > 768 ? '0' : '3rem'}`, fontSize: `${window.innerWidth > 430 ? '1rem' : '0.85rem'}` }}>           
            <FlipCard
              back='ООО «Тепличный» — лидер в Поволжье по круглогодичному выращиванию овощей. Общая площадь теплиц — 16 га, более 200 сотрудников и за год здесь собирают более 6 млн кг овощей. Основные направления — производство огурцов и томатов. Кроме того, здесь выращивают грибы, редис, салат, зеленые культуры, производится мед различных сортов.'
              front='img/products2.jpg'
              initial='flipped'
              shadow='bright'/>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={window.innerWidth > 600 ? 0.7 : 0.62} speed={0.3} >
          <div style={{ marginLeft: `${window.innerWidth > 600 ? '60%' : '0%'}`, marginTop: `${window.innerWidth > 768 ? '0' : '1rem'}`, fontSize: `${window.innerWidth > 430 ? '1rem' : '0.85rem'}` }}>           
          <FlipCard
            back='Наша продукция - самый высокий стандарт по соотношению цена - качество. Каждый плод выращеный в теплицах чистый и экологичный, а за счет валового сбора удаётся сдерживать цены на продукцию, поэтому она пользуется спросом.'
            front='img/tomato_farm.jpg'

            shadow='bright'/>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.7} speed={0.5}>
          <div className='grey_text_right'>
            <Typography variant={`${window.innerWidth > 1024 ? 'h3' : 'h5'}`}>Нам доверяют такие крупные предприятия как <a href='https://dodopizza.ru/samara/about' target="_blank" rel="noopener noreferrer" style={{ color: '#ff6900', cursor: 'pointer',}}>Додо Пицца</a> и еще кто нибудь</Typography>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.9} speed={0.8}>
          <div style={{ marginLeft: `${window.innerWidth > 600 ? '50%' : '0'}`, marginTop: '25%' }}>           
            <FlipCard
              back='Свяжитесь с нашим менеджером и оставьте заявку, мы обработаем Ваш заказ и доставим необходимые объемы продукции в указанные сроки'
              front='img/mushroom.jpg'
              initial='flipped'
              shadow='bright'/>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.2} speed={0.3} style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center'}}>
          <CallButton shortPhone='79053001016' title='Связаться с менеджером' sizing='large' color='#7BB32E'/>
        </ParallaxLayer>


      </Parallax>
    </div>
  )
}


export default Home