import React, { FC, useState } from 'react'
import { Button, Menu, MenuItem} from '@mui/material'
import { ArrowDropDown } from '@mui/icons-material';

const AdditionalInfoButton:FC<{ title:string, menuItems:string[] }> = ({ title, menuItems }) => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

  return (

    <>
        <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            variant="text"
            sx={ { mx:2 } }
            style={{fontWeight: 'bold'}}
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
            {menuItems.map(item => (
                <MenuItem disabled style={{color:'#000', opacity: '0.9'}} >{item} </MenuItem>
            ) )}
            
            
        </Menu>

    </>

  )
}

export default AdditionalInfoButton