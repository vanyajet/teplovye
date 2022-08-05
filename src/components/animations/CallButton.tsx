import React, { FC, useState } from 'react'
import { Button, Menu, MenuItem} from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { ArrowDropDown } from '@mui/icons-material';

const CallButton:FC<{ shortPhone:string, title:string, sizing:string, color:string }> = ({ shortPhone, title, sizing, color }) => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const size = sizing === 'large' ? `${window.innerWidth > 600 ? '2rem' : '1.2rem'}` : '1rem' 

  return (

    <>
        <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            size={window.innerWidth > 600 ? 'large' : 'small'}
            variant="contained"
            style={{fontWeight: 'bold', fontSize: size, backgroundColor: color}}
            endIcon={<ArrowDropDown /> }
        >
            {title}
        </Button>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem ><a href={`tel:+${shortPhone}`} target="_blank" rel="noopener noreferrer" style={{color: '#7BB32E', fontSize:size}}>Телефон <PhoneIcon fontSize='inherit' /></a></MenuItem>
            <MenuItem ><a href={`viber://chat?number=+${shortPhone}`} target="_blank" rel="noopener noreferrer" style={{color: '#7f40bd', fontSize:size}}>Viber <img src='img/viber.svg' alt='VB' style={{width: size, height: size}} /></a></MenuItem>
            <MenuItem ><a href={`https://wa.me/${shortPhone}`} target="_blank" rel="noopener noreferrer" style={{color: '#25D366', fontSize:size}}>WhatsApp <WhatsAppIcon fontSize='inherit' /></a></MenuItem>
            <MenuItem ><a href={`https://t.me/+${shortPhone}`} target="_blank" rel="noopener noreferrer" style={{color: '#000000', fontSize:size}}>Telegram <img src='img/telegram.svg' alt='TG' style={{width: size, height: size}} /></a></MenuItem>
        </Menu>

    </>

  )
}

export default CallButton