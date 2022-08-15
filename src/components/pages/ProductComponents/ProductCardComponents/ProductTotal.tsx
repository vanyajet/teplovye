import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import { Button, Select, SelectChangeEvent } from '@mui/material';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import { IProductData } from '../../../../data/productData';
import cart from '../../../../store/cart';
import CustomSnackbar from '../../../animations/CustomSnackbar';

const ProductTotal:React.FC<{ product:IProductData }> = ({ product }) => {

  const { price, measure } = product

  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  
  const [amount, setAmount] = React.useState('');

  const [finalPrice, setFinalPrice] = React.useState(price[0].price);

  const [cost, setCost] = React.useState(0);

  const handleChange = (event: SelectChangeEvent) => {
    if (JSON.parse(event.target.value) > price[2].mass) {
      setFinalPrice(price[2].price)
      setCost(JSON.parse(event.target.value)*price[2].price)
    } else if (JSON.parse(event.target.value) > price[1].mass) {
      setFinalPrice(price[1].price)
      setCost(JSON.parse(event.target.value)*price[1].price)
    } else {
      setFinalPrice(price[0].price)
      setCost(JSON.parse(event.target.value)*price[0].price)
    }
    setAmount(event.target.value)
  };

  const handleAddToCart = () => {
    cart.addToCart(product, JSON.parse(amount), finalPrice, cost);
    setOpenSnackbar(true)
  }
  

  return (
    <div className='product-total'>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="select-helper-label">{finalPrice} <CurrencyRubleIcon fontSize='small' />/{measure}</InputLabel>
        <Select
          labelId="select-helper-label"
          id="select-helper"
          value={amount}
          label='Количество'
          onChange={handleChange}
        >
          <MenuItem value={10}>10 {measure}</MenuItem>
          <MenuItem value={20}>20 {measure}</MenuItem>
          <MenuItem value={30}>30 {measure}</MenuItem>
          <MenuItem value={50}>50 {measure}</MenuItem>
          <MenuItem value={140}>140 {measure}</MenuItem>
          <MenuItem value={180}>180 {measure}</MenuItem>
        </Select>
        <FormHelperText>Больше количество - меньше цена</FormHelperText>
        
      </FormControl>

      <Button 
        variant='contained'
        size='large'
        style={{ height: '58px', color: '#ffffff', marginTop: '0.5rem' }}
        onClick={handleAddToCart}
      >
        Стоимость: {cost} <CurrencyRubleIcon style={{ marginBottom: '4px'}} fontSize='small' />
      </Button>

      <CustomSnackbar open={openSnackbar} setOpen={setOpenSnackbar}/>

    </div>
  );
}
export default ProductTotal