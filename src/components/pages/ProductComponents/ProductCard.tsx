import React, { FC } from "react";
import { motion } from "framer-motion";
import { Box, Button, Divider, TextField } from "@mui/material";
import ImageGallery, { swipePower } from "../../animations/ImageGallery";
import CloseIcon from '@mui/icons-material/Close';
import { ICardData } from "../../../data/productCardData";

const ProductCard:FC<{index:string, setIndex:React.Dispatch<React.SetStateAction<string|null>>, product?: ICardData}> = props => {
  
    const close:()=>void = () => props.setIndex(null);

    const swipeConfidenceThreshold = 10000;
  
    return (
      <div className="product-card-container" >
        <motion.div
          layoutId={props.index}
          drag="y"
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.y, velocity.y);           
            if (swipe > swipeConfidenceThreshold) {
              close()
            } else return null
          }}
          className="single-product-card"
          onClick={e => e.stopPropagation()}
          style={{ backgroundColor: '#a9a9a9' }}
          dragSnapToOrigin={true}
        >
            {window.innerWidth > 768 ? null : <Button onClick={close} style={{position: 'absolute', top: '2%', right: '0', zIndex: '3', color: '#343434'}} >
                <CloseIcon />
            </Button>}
            <ImageGallery images={props.product!.img} />
            <Box sx={{
              mx: '1rem',
              mt: '1rem',
              mb: 0,
              flexWrap: 'wrap',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center'}}
            >
              <h4 className="card-content-category">{props.product!.category}</h4>
              <h2 className="card-content-title">{props.product!.title}</h2>
              <p className="card-content-text">
                {props.product!.contentText}
              </p>
              <div className="card-content-price">
                <TextField
                  label={`от ${props.product!.price[0].mass} кг`}
                  defaultValue={`${props.product!.price[0].price} руб/кг`}
                  InputProps={{
                    readOnly: true,
                  }}
                  color='primary'
                  className='input_price'
                />
                <TextField
                  label={`от ${props.product!.price[1].mass} кг`}
                  defaultValue={`${props.product!.price[1].price} руб/кг`}
                  InputProps={{
                    readOnly: true,
                  }}
                  color='primary'
                  className='input_price'
                />
                <TextField
                  label={`от ${props.product!.price[2].mass} кг`}
                  defaultValue={`${props.product!.price[2].price} руб/кг`}
                  InputProps={{
                    readOnly: true,
                  }}
                  color='primary'
                  className='input_price'
                />
              </div>

              <Divider sx={{ my: 0.5 }} />
              
              <div className="card-content-bju">
                <TextField
                  label='Белки'
                  defaultValue={`${props.product!.bju.belki} г`}
                  InputProps={{
                    readOnly: true,
                  }}
                  color='secondary'
                  className='input_price'
                />
                <TextField
                  label='Жиры'
                  defaultValue={`${props.product!.bju.jiri} г`}
                  InputProps={{
                    readOnly: true,
                  }}
                  color='secondary'
                  className='input_price'
                />
                <TextField
                  label='Углеводы'
                  defaultValue={`${props.product!.bju.uglevodi} г`}
                  InputProps={{
                    readOnly: true,
                  }}
                  color='secondary'
                  className='input_price'
                />
                <TextField
                  label='Эн. Ценность'
                  defaultValue={`${props.product!.bju.kkal} ккал`}
                  InputProps={{
                    readOnly: true,
                  }}
                  color='secondary'
                  className='input_price'
                />
              </div>
            </Box>
        </motion.div>
      </div>
    );
  }

export default ProductCard