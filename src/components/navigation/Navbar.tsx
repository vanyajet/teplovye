import React, { FC } from 'react';
import Box from '@mui/material/Box';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import { Link } from 'react-router-dom';



const NavBar:FC = () => {
  
  return (

    <Box sx={{ width: '100%', display:'flex', justifyContent:'space-between', bgcolor: '#075921', color:'#ffffff', fontWeight: 'bold', alignItems: 'center', position: 'fixed', overflow: 'hidden', zIndex: 100, top: 0 }}>
      <Link to='/' className='mobile-logo' ><img src='img/svg/tomato.svg'  alt='Тепловье'/></Link>
      <Link to='/' className='desktop-logo' ><img src='img/logo.png'  alt='Тепловье'/></Link>
      {window.innerWidth > 768 ? <DesktopMenu /> : <MobileMenu />}
      
    </Box>

  );
}

export default NavBar
