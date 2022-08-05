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
    img:['img/dom_molodeji.jpg','img/hz_5.jpg'],
    defaultExpanded: true,
},
{
    id: '2',
    title:'Метро Московская',
    contentText:'Магазин расположен на пересечении улиц Ставропольской - Кирова',
    img:['img/dom_molodeji.jpg','img/hz_5.jpg'],
    defaultExpanded: true,
},
{
    id: '3',
    title:'Хлеб Завод №5 - Победа 166А',
    contentText:'Магазин расположен на пересечении улиц Ставропольской - Кирова',
    img:['img/dom_molodeji.jpg','img/hz_5.jpg'],
    defaultExpanded: false,
},
{
    id: '4',
    title:'Метро Советская Павильон № 1',
    contentText:'Магазин расположен на пересечении улиц Ставропольской - Кирова',
    img:['img/dom_molodeji.jpg','img/hz_5.jpg'],
    defaultExpanded: false,
},
{
    id: '5',
    title:'Дом молодежи - ул. Аэродромная 16А',
    contentText:'Магазин расположен на пересечении улиц Ставропольской - Кирова',
    img:['img/dom_molodeji.jpg','img/hz_5.jpg'],
    defaultExpanded: false,
},
{
    id: '6',
    title:'Метро Победа Павильон № 56',
    contentText:'Магазин расположен на пересечении улиц Ставропольской - Кирова',
    img:['img/dom_molodeji.jpg','img/hz_5.jpg'],
    defaultExpanded: false,
},
{
    id: '6',
    title:'Метро Безымянка Павильон № 16',
    contentText:'Магазин расположен на пересечении улиц Ставропольской - Кирова',
    img:['img/dom_molodeji.jpg','img/hz_5.jpg'],
    defaultExpanded: false,
},
]