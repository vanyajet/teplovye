import React, { useState, FC } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Favorite } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import YardIcon from '@mui/icons-material/Yard';
import { Badge, BadgeProps, Button, styled } from '@mui/material';
import cart from '../../store/cart';
import { observer } from 'mobx-react-lite';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    position: 'absolute',
    top: 15,
    right: 19,
  },
}));


const DesktopMenu:FC = observer(() => {
    
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
      <>
        <Tabs 
          onChange={handleChange} 
          aria-label="nav tabs example"
          textColor="inherit"
          indicatorColor='secondary'
        >
          <Tab
            value="home"
            label="Продукция"
            icon={<Favorite style={{ marginBottom: '8px'}} />}
            iconPosition="end"
            component={Link}
            to="/"
            color='primary'
          />
          <Tab
            value="about"
            label="О нас"
            icon={<InfoIcon style={{ marginBottom: '8px'}} />}
            iconPosition="end"
            component={Link}
            to='/about'
            color='primary'
          />
          <Tab
            value="production"
            label="Производство"
            icon={<YardIcon style={{ marginBottom: '8px'}} />}
            iconPosition="end"
            component={Link}
            to='/production'
            color='primary'
          />
          <Tab
            value="contacts"
            label="Контакты"
            icon={<ConnectWithoutContactIcon style={{ marginBottom: '8px'}} />}
            iconPosition="end"
            component={Link}
            to='/contacts'
            color='primary'
          />
          <StyledBadge badgeContent={cart.cartList.length} color="error" style={{  }}>
            <Button
              component={Link}
              to='/cart'
              style={{marginRight: '1rem', marginTop: '1rem', marginBottom: '1rem', fontWeight: 'bold', backgroundColor: '#7BB32E', color: '#000'}}
            >
              Сделать Заказ
            </Button>
          </StyledBadge>
          
        
      </Tabs>
      
    </>
  )
})

export default DesktopMenu