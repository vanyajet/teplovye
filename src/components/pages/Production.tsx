import { Container, Divider } from '@mui/material'
import React, { FC } from 'react'
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

            <div className="production-item"  >
            <FlipCard 
                back='ООО «Тепличный» — крупнейшее тепличное хозяйство в Поволжье, производящее круглый год овощную продукцию.'
                front='img/tomato_farm_close1.jpg'
                shadow='bright'
                
                />
            </div>

            <div className="production-item">
            <FlipCard
                back='Общая площадь теплиц — 16 га, более 200 сотрудников и за год здесь собирают более 6 млн кг овощей.'
                front='img/vertical_tomato_yellow.jpg'
                shadow='bright'
                flipTime={4500}
                />
            </div>

            <div className="production-item">
            <FlipCard
                back='Основные направления — производство огурцов и томатов. Кроме того, здесь выращивают грибы, редис, салат, зеленые культуры, производится мед различных сортов.'
                front='img/vertical_products.jpg'
                flipTime={3000}
                
                shadow='bright'/>
            </div>

            <div className="production-item">
            <FlipCard
                back='Теплица даёт полный контроль процесса выращивания: температура, влажность, полив, освещение, тепло, микроклимат). Есть своя агрохимическая и биологическая лаборатория.'
                front='img/products.jpg'
                shadow='bright'/>
            </div>

            <div className="production-item">
            <FlipCard
                back='В наших теплицах используются около 3000 ламп по 600 ватт каждая, и это позволяет нам собирать урожай круглый год. Каждый год жители Самары и области получают экологически чистые и вкусные овощи.'
                front='img/cucumber_farm.jpg'
                flipTime={4500}
                shadow='bright'
                
                />
            </div>

            <div className="production-item">
            <FlipCard
                back='Закрытый грунт - это выращивание всех овощных культур под стеклом, где выдерживается температура, влажность, происходит сбалансированное питание растений.'
                front='img/tomato_farm.jpg'
                shadow='bright'/>
            </div>

            <div className="production-item">
            <FlipCard
                back='Мы применяем технологию «светокультура». Это голландско-израильская технология, но оборудование и программное обеспечение полностью отечественные.'
                front='img/vertical_salad_farm.jpg'
                flipTime={3000}
                
                shadow='bright'/>
            </div>

            <div className="production-item">
            <FlipCard
                back='Мы не применяем ядохимикаты. Борьба с вредителями идёт с применением биологической защиты - энтомофагов (поедает вредителя, но не вредит растению)'
                front='img/basil_farm.jpg'
                shadow='bright'/>
            </div>

            <div className="production-item">
            <FlipCard
                back='Энергоресурсы очень дорогие, но за счёт валового сбора удаётся сдерживать цены на продукцию, поэтому она пользуется спросом'
                front='img/vertical_products_1.jpg'
                flipTime={3000}
                shadow='bright'/>
            </div>

            <div className="production-item">
            <FlipCard
                back='Самый популярный продукт - пчелоопыляемые гибриды. У них отличные вкусовые Качества. Это огурец Атлет, томаты розовые, томаты Черри'
                front='img/vertical_products_2.jpg'
                shadow='bright'/>
            </div>

            <div className="production-item">
            <FlipCard
                back='Мы используем голландских и израильских шмелей. Они качественно опыляют культуры огурца и томата. Есть и своя пасека пчёл для опыления огурца.'
                front='img/vertical_honey.jpg'
                flipTime={3000}
                shadow='bright'/>
            </div>

            <div className="production-item">
            <FlipCard
                back='Мы используем оборудование капельного полива и микроклимата Российской фирмы ФИТО, на компьютерах контролируется весь режим выращивания растений.'
                front='img/tomato_farm1.jpg'
                shadow='bright'/>
            </div>

        </div>
    </Container>
    <Footer />
    </>

  )
}

export default Production