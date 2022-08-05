import { Container } from "@mui/system";
import * as React from "react";
import { Avatar } from "@mui/material";
import CallButton from "../../animations/CallButton";


export const Header = () => {

  return (
  <div className="product-header">
    <Container>
    
    <div className="header-title">
    <h1 className="card-title">Прайс лист</h1>
    <div className="manager">
      <div>
        <CallButton shortPhone='79053001016' title='Связаться с менеджером' sizing='small' color='#7BB32E' />
      </div>
      <Avatar 
        alt="Директор Тимофей"
        src="img/Timofey_avatar.jpg"
        sx={{ width: '4rem', height: '4rem', marginLeft: '1rem' }}
      />
    </div>
      
    </div>
    </Container>
  </div>
)};
