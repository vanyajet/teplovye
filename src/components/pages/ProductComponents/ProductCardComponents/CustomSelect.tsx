import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import { Select, SelectChangeEvent } from '@mui/material';

const CustomSelect:React.FC<{ measure:string, prices:Array<{mass: number, price:number}> }> = ({ measure, prices }) => {
  
  const [amount, setAmount] = React.useState('');

  const [cost, setCost] = React.useState(prices[0].price);

  const handleChange = (event: SelectChangeEvent) => {
    if (JSON.parse(event.target.value) > prices[2].mass) {
      setCost(prices[2].price)
    } else if (JSON.parse(event.target.value) > prices[1].mass) {
      setCost(prices[1].price)
    } else {
      setCost(prices[0].price)
    }
    setAmount(event.target.value)
  };

  

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">{cost} руб/{measure}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
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
    </div>
  );
}
export default CustomSelect