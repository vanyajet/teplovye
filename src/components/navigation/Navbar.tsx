import React, { FC } from 'react';
import Box from '@mui/material/Box';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';



const NavBar:FC = () => {
  
  return (

    <Box sx={{ width: '100%', display:'flex', justifyContent:'space-between', bgcolor: '#075921', color:'#ffffff', fontWeight: 'bold', alignItems: 'center', position: 'fixed', overflow: 'hidden', zIndex: 100, top: 0 }}>
      <img src='img/tomato.svg' className='mobile-logo' alt='Тепловье'/>
      <img src='img/logo.png' className='desktop-logo' alt='Тепловье'/>
      {window.innerWidth > 600 ? <DesktopMenu /> : <MobileMenu />}
      
    </Box>

  );
}

export default NavBar
