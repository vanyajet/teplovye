import React, { useState, FC } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Favorite } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import YardIcon from '@mui/icons-material/Yard';
import { Button } from '@mui/material';

const DesktopMenu:FC = () => {
    
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
            icon={<Favorite />}
            iconPosition="end"
            component={Link}
            to="/"
            color='primary'
          />
          <Tab
            value="about"
            label="О нас"
            icon={<InfoIcon />}
            iconPosition="end"
            component={Link}
            to='/about'
            color='primary'
          />
          <Tab
            value="production"
            label="Производство"
            icon={<YardIcon />}
            iconPosition="end"
            component={Link}
            to='/production'
            color='primary'
          />
          <Tab
            value="contacts"
            label="Контакты"
            icon={<ConnectWithoutContactIcon />}
            iconPosition="end"
            component={Link}
            to='/contacts'
            color='primary'
          />
          <Button
            component={Link}
            to='/cart'
            style={{marginRight: '1rem', marginTop: '1rem', marginBottom: '1rem', fontWeight: 'bold', backgroundColor: '#7BB32E', color: '#000'}}
          >
            Сделать Заказ
          </Button>
        
      </Tabs>
      
    </>
  )
}

export default DesktopMenu