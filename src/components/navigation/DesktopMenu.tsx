import React, { useState, FC } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Favorite } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import YardIcon from '@mui/icons-material/Yard';

const DesktopMenu:FC = () => {
    
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Tabs 
        
          onChange={handleChange} 
          aria-label="nav tabs example"
          textColor="inherit"
          indicatorColor='secondary'
        >
          <Tab
            label="Продукция"
            icon={<Favorite />}
            iconPosition="end"
            component={Link}
            to="/"
            color='primary'
          />
          <Tab
            label="О нас"
            icon={<InfoIcon />}
            iconPosition="end"
            component={Link}
            to='/about'
            color='primary'
          />
          <Tab
            label="Производство"
            icon={<YardIcon />}
            iconPosition="end"
            component={Link}
            to='/production'
            color='primary'
          />
          <Tab
            label="Контакты"
            icon={<ConnectWithoutContactIcon />}
            iconPosition="end"
            component={Link}
            to='/contacts'
            color='primary'
          />
        
      </Tabs>
  )
}

export default DesktopMenu