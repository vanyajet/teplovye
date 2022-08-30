export interface IShopData {
    id: string;
    urlTitle:string;
    title:string;
    contentText:string;
    img:string[];
    defaultExpanded: boolean;
}
  
export const shopData: IShopData[] = [
{
    id: '1',
    urlTitle:'kirova',
    title:'Ставропольская 200',
    contentText:'Магазин расположен на пересечении улиц Ставропольской - Кирова',
    img:[
        'img/shops/kirova/kirova-1.JPG',
        'img/shops/kirova/kirova-2.JPG',
        'img/shops/kirova/kirova-3.JPG',
        'img/shops/kirova/kirova-4.JPG',
        'img/shops/kirova/kirova-5.JPG',
        'img/shops/kirova/kirova-6.JPG',
    ],
    defaultExpanded: true,
},
{
    id: '2',
    urlTitle:'moskva',
    title:'Метро Московская',
    contentText:'Магазин расположен на пересечении улиц Ставропольской - Кирова',
    img:[
        'img/shops/moskva/moskva-1.JPG',
        'img/shops/moskva/moskva-2.JPG',
        'img/shops/moskva/moskva-3.JPG',
    ],
    defaultExpanded: true,
},
{
    id: '3',
    urlTitle:'hz5',
    title:'Хлеб Завод №5 - Победа 166А',
    contentText:'Магазин расположен на пересечении улиц Ставропольской - Кирова',
    img:[
        'img/shops/hz5/hz5-1.JPG',
        'img/shops/hz5/hz5-2.JPG',
        'img/shops/hz5/hz5-3.JPG',
        'img/shops/hz5/hz5-4.JPG',
        'img/shops/hz5/hz5-5.JPG',
        'img/shops/hz5/hz5-6.JPG',
    ],
    defaultExpanded: true,
},
{
    id: '4',
    urlTitle:'sovet',
    title:'Метро Советская Павильон № 1',
    contentText:'Магазин расположен на пересечении улиц Ставропольской - Кирова',
    img:[
        'img/shops/sovet/sovet-1.JPG',
        'img/shops/sovet/sovet-2.JPG',
        'img/shops/sovet/sovet-3.JPG',
        'img/shops/sovet/sovet-4.JPG',
        'img/shops/sovet/sovet-5.JPG',
        'img/shops/sovet/sovet-6.JPG',
    ],
    defaultExpanded: true,
},
{
    id: '5',
    urlTitle:'dom-m',
    title:'Дом молодежи - ул. Аэродромная 16А',
    contentText:'Магазин расположен на пересечении улиц Ставропольской - Кирова',
    img:[
        'img/shops/dom-m/dom-m-1.JPG',
        'img/shops/dom-m/dom-m-2.JPG',
        'img/shops/dom-m/dom-m-3.JPG',
        'img/shops/dom-m/dom-m-4.JPG',
        'img/shops/dom-m/dom-m-5.JPG',
        'img/shops/dom-m/dom-m-6.JPG',
    ],
    defaultExpanded: false,
},
{
    id: '6',
    urlTitle:'pobeda',
    title:'Метро Победа Павильон № 56',
    contentText:'Магазин расположен на пересечении улиц Ставропольской - Кирова',
    img:[
        'img/shops/pobeda/pobeda-1.JPG',
        'img/shops/pobeda/pobeda-2.JPG',
        'img/shops/pobeda/pobeda-3.JPG',
        'img/shops/pobeda/pobeda-4.JPG',
        'img/shops/pobeda/pobeda-5.JPG',
        'img/shops/pobeda/pobeda-6.JPG',
    ],
    defaultExpanded: false,
},
{
    id: '7',
    urlTitle:'beza',
    title:'Метро Безымянка Павильон № 16',
    contentText:'Магазин расположен на пересечении улиц Ставропольской - Кирова',
    img:[
        'img/shops/beza/beza-1.JPG',
        'img/shops/beza/beza-2.JPG',
        'img/shops/beza/beza-3.JPG',
        'img/shops/beza/beza-4.JPG',
    ],
    defaultExpanded: false,
},
]