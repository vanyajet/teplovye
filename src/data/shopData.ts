export interface IShopData {
    id: string;
    title:string;
    contentText:string;
    img:string[];
    defaultExpanded: boolean;
}
  
export const shopData: IShopData[] = [
{
    id: '1',
    title:'Ставропольская 200',
    contentText:'Магазин расположен на пересечении улиц Ставропольской - Кирова',
    img:[
        'img/shops/kirova/kirova-1.jpg',
        'img/shops/kirova/kirova-2.jpg',
        'img/shops/kirova/kirova-3.jpg',
        'img/shops/kirova/kirova-4.jpg',
        'img/shops/kirova/kirova-5.jpg',
        'img/shops/kirova/kirova-6.jpg',
    ],
    defaultExpanded: true,
},
{
    id: '2',
    title:'Метро Московская',
    contentText:'Магазин расположен на пересечении улиц Ставропольской - Кирова',
    img:[
        'img/shops/moskva/moskva-1.jpg',
        'img/shops/moskva/moskva-2.jpg',
        'img/shops/moskva/moskva-3.jpg',
    ],
    defaultExpanded: true,
},
{
    id: '3',
    title:'Хлеб Завод №5 - Победа 166А',
    contentText:'Магазин расположен на пересечении улиц Ставропольской - Кирова',
    img:[
        'img/shops/hz5/hz5-1.jpg',
        'img/shops/hz5/hz5-2.jpg',
        'img/shops/hz5/hz5-3.jpg',
        'img/shops/hz5/hz5-4.jpg',
        'img/shops/hz5/hz5-5.jpg',
        'img/shops/hz5/hz5-6.jpg',
    ],
    defaultExpanded: true,
},
{
    id: '4',
    title:'Метро Советская Павильон № 1',
    contentText:'Магазин расположен на пересечении улиц Ставропольской - Кирова',
    img:[
        'img/shops/sovet/sovet-1.jpg',
        'img/shops/sovet/sovet-2.jpg',
        'img/shops/sovet/sovet-3.jpg',
        'img/shops/sovet/sovet-4.jpg',
        'img/shops/sovet/sovet-5.jpg',
        'img/shops/sovet/sovet-6.jpg',
    ],
    defaultExpanded: true,
},
{
    id: '5',
    title:'Дом молодежи - ул. Аэродромная 16А',
    contentText:'Магазин расположен на пересечении улиц Ставропольской - Кирова',
    img:[
        'img/shops/dom-m/dom-m-1.jpg',
        'img/shops/dom-m/dom-m-2.jpg',
        'img/shops/dom-m/dom-m-3.jpg',
        'img/shops/dom-m/dom-m-4.jpg',
        'img/shops/dom-m/dom-m-5.jpg',
        'img/shops/dom-m/dom-m-6.jpg',
    ],
    defaultExpanded: false,
},
{
    id: '6',
    title:'Метро Победа Павильон № 56',
    contentText:'Магазин расположен на пересечении улиц Ставропольской - Кирова',
    img:[
        'img/shops/pobeda/pobeda-1.jpg',
        'img/shops/pobeda/pobeda-2.jpg',
        'img/shops/pobeda/pobeda-3.jpg',
        'img/shops/pobeda/pobeda-4.jpg',
        'img/shops/pobeda/pobeda-5.jpg',
        'img/shops/pobeda/pobeda-6.jpg',
    ],
    defaultExpanded: false,
},
{
    id: '7',
    title:'Метро Безымянка Павильон № 16',
    contentText:'Магазин расположен на пересечении улиц Ставропольской - Кирова',
    img:[
        'img/shops/beza/beza-1.jpg',
        'img/shops/beza/beza-2.jpg',
        'img/shops/beza/beza-3.jpg',
        'img/shops/beza/beza-4.jpg',
    ],
    defaultExpanded: false,
},
]