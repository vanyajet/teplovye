import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Favorite } from '@mui/icons-material';
import InfoIcon from '@mui/icons-material/Info';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import YardIcon from '@mui/icons-material/Yard';
import { Link } from 'react-router-dom';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';


const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: 'rgb(55, 65, 81)',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        // color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
}));

const MobileMenu:React.FC = () => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        style={{marginRight: '1rem', marginTop: '1rem', marginBottom: '1rem', fontWeight: 'bold', backgroundColor: '#7BB32E'}}
      >
        Меню
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >

      
        <MenuItem component={Link} to='/' onClick={handleClose} >
          <Favorite />
          Продукция
        </MenuItem>

        <Divider sx={{ my: 0.5 }} />

        <MenuItem component={Link} to='/about'  onClick={handleClose}>
          <InfoIcon />
          О нас
        </MenuItem>

        <Divider sx={{ my: 0.5 }} />

        <MenuItem component={Link} to='/production' onClick={handleClose}>
          <YardIcon />
          Производство
        </MenuItem>

        <Divider sx={{ my: 0.5 }} />

        <MenuItem component={Link} to='/contacts' onClick={handleClose}>
          <ConnectWithoutContactIcon />
          Контакты
        </MenuItem>

      </StyledMenu>

      <Button
        component={Link}
        to='/cart'
        style={{marginRight: '1rem', marginTop: '1rem', marginBottom: '1rem', fontWeight: 'bold', backgroundColor: '#7BB32E', color: '#000'}}
      >
        <ShoppingCartCheckoutIcon />
      </Button>
    </div>
  );
}

export default MobileMenu