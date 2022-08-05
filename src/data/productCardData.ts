export interface ICardData {
    id: string;
    category: string;
    title: string;
    img: string[];    
    contentText: string;
    price: Array<{mass: number, price:number}>;
    bju: {belki: number, jiri: number, uglevodi: number, kkal: number};
  }

export const productCardData: ICardData[] = [
{
    id: '1',
    category: 'Овощи',
    title: 'Томат Торреро',
    img: ['img/tomato_bold.jpg', 'img/tomato_bold1.jpg', 'img/tomato_bold2.jpg', 'img/tomato_farm.jpg', 'img/tomato_farm_close.jpg'],
    contentText: 'Красноплодный биф томат, однородные, крупные плоды насыщенного красного цвета с высокой плотностью. Средняя масса плода 150-360 грамм, диаметром от 70 до 90 мм. В одной коробке 10 килограмм.',
    price: [{mass: 50, price:155},{mass: 100, price:135},{mass: 150, price:120}],
    bju: {belki: 0.6, jiri: 0.2, uglevodi: 4.2, kkal: 20},
},
{
    id: '2',
    category: 'Овощи',
    title: 'Огурец Демарраж',
    img: ['img/cucumber_small.jpg', 'img/products_packed1.jpg', 'img/cucumber_farm.jpg'],
    contentText: 'Длинноплодный огурец, салатный, с превосходными вкусовыми качествами ярко зеленого цвета и плотным строением, средний вес 350-500 грамм. В длинну 30-32 см. В одной коробке 10 килограмм.',
    price: [{mass: 50, price:155},{mass: 100, price:135},{mass: 150, price:120}],
    bju: {belki: 0.8, jiri: 0.1, uglevodi: 2.8, kkal: 15},
},
{
    id: '3',
    category: 'Зелень',
    title: 'Салат Старфайтер',
    img: ['img/salad.jpg', 'img/salad_farm_close.jpg', 'img/salad_farm.jpg', 'img/salad_farm_young.jpg'],
    contentText: 'Салат батавия с темнозелеными листьями черезвычайно нежный и сочный листовой салат, является прекрасным компонентом витаминных блюд. Масса куста 150-200 грамм.',
    price: [{mass: 50, price:155},{mass: 100, price:135},{mass: 150, price:120}],
    bju: {belki: 1.5, jiri: 0.2, uglevodi: 2.3, kkal: 17},
},
{
    id: '4',
    category: 'Овощи',
    title: 'Томат сотовой',
    img: ['img/tomato_notbold.jpg', 'img/tomato_farm1.jpg', 'img/tomato_farm_close1.jpg'],
    contentText: 'Кистевой томат коктельного типа с вкусными плодами на мощном и пластичном растении. В одной коробке 10 килограмм.',
    price: [{mass: 50, price:155},{mass: 100, price:135},{mass: 150, price:120}],
    bju: {belki: 0.8, jiri: 0.2, uglevodi: 3.92, kkal: 18},
},
{
    id: '5',
    category: 'Грибы',
    title: 'Вешенки',
    img: ['img/mushroom.jpg', 'img/products1.jpg', 'img/products2.jpg'],
    contentText: 'В упаковке 400 грамм, шляпка гриба выпуклая 3-4 см. с завернутым краем. Поверхность глянцевая и гладкая. Цвет шляпки от светло серого до темно серого. Мякоть белая, сочная. Этот вид грибов является одним из самых вкусных и питательных. Готовить можно любым способом.',
    price: [{mass: 50, price:155},{mass: 100, price:135},{mass: 150, price:120}],
    bju: {belki: 3.3, jiri: 0.5, uglevodi: 6.5, kkal: 43},
},
{
    id: '6',
    category: 'Овощи',
    title: 'Редис Донар',
    img: ['img/redis_farm_close.jpg', 'img/products.jpg', 'img/products_packed.jpg'],
    contentText: 'Круглые однородные корнеплоды насыщенного темного-красного цвета, с листовым аромаратом, мякоть сочная, без горечи. Диаметр плода 30 мм, масса 25 грамм, вес пучка 250 грамм.',
    price: [{mass: 50, price:155},{mass: 100, price:135},{mass: 150, price:120}],
    bju: {belki: 0.6, jiri: 0.2, uglevodi: 4.2, kkal: 35},
},
{
    id: '7',
    category: 'Зелень',
    title: 'Базилик',
    img: ['img/basil_farm_close.jpg', 'img/basil_farm.jpg', 'img/products_packed.jpg'],
    contentText: 'Растение с темнопурпурными,зубчатыми и гладкими листьями источающими ярко выраженный пряный аромат с коричными нотками. В пучке 100 грамм.',
    price: [{mass: 50, price:155},{mass: 100, price:135},{mass: 150, price:120}],
    bju: {belki: 2.56, jiri: 0.61, uglevodi: 4.34, kkal: 27},
},
{
    id: '8',
    category: 'Микрозелень',
    title: 'Подсолнух',
    img: ['img/salad_farm_close.jpg', 'img/salad_farm.jpg', 'img/salad_farm_young.jpg'],
    contentText: 'Микрозелень подсолнечника полезна и содержит в своем составе множество витаминов и микроэлементов, а главное, сбалансированную формулу растительного белка, которая надолго насыщает организм. В одном контейнере 50 грамм.',
    price: [{mass: 50, price:63},{mass: 100, price:57},{mass: 150, price:55}],
    bju: {belki: 0.8, jiri: 0.1, uglevodi: 2.8, kkal: 15},
},
{
    id: '9',
    category: 'Микрозелень',
    title: 'Горох',
    img: ['img/salad_farm_close.jpg', 'img/salad_farm.jpg', 'img/salad_farm_young.jpg'],
    contentText: 'Ее добавляют в супы, салаты, напитки или используют в качестве украшения блюд. Она содержит большое количество витаминов, В одном контейнере 50 грамм.',
    price: [{mass: 50, price:63},{mass: 100, price:57},{mass: 150, price:55}],
    bju: {belki: 0.6, jiri: 0.2, uglevodi: 4.2, kkal: 20},
},
{
    id: '10',
    category: 'Микрозелень',
    title: 'Горчица',
    img: ['img/salad_farm_close.jpg', 'img/salad_farm.jpg', 'img/salad_farm_young.jpg'],
    contentText: 'Стимулирует аппетит и кровообращение! Максимальная концентрация витаминов, минеральных и других биологически активных веществ, каратинойдов, нейтрализующих свободные радикалы. В одном контейнере 50 грамм.',
    price: [{mass: 50, price:79},{mass: 100, price:73},{mass: 150, price:69}],
    bju: {belki: 0.8, jiri: 0.1, uglevodi: 2.8, kkal: 15},
},
{
    id: '11',
    category: 'Микрозелень',
    title: 'ВидГрасс',
    img: ['img/salad_farm_close.jpg', 'img/salad_farm.jpg', 'img/salad_farm_young.jpg'],
    contentText: 'Волшебное растение, превращающее вас в великого магистра Светлой Магии. В одном контейнере 50 грамм.',
    price: [{mass: 50, price:63},{mass: 100, price:58},{mass: 150, price:55}],
    bju: {belki: 2.56, jiri: 0.61, uglevodi: 4.34, kkal: 27},
},
];