import React, { FC } from "react";
import { motion } from "framer-motion";
import { Box, Button } from "@mui/material";
import ImageGallery, { swipePower } from "../../animations/ImageGallery";
import CloseIcon from '@mui/icons-material/Close';
import { IProductData } from "../../../data/productData";
import AdditionalInfoButton from "../../animations/AdditionalInfoButton";
import ProductTotal from "./ProductCardComponents/ProductTotal";

const ProductCard:FC<{index:string, setIndex:React.Dispatch<React.SetStateAction<string|null>>, product?: IProductData}> = ({ index, setIndex, product }) => {
  
    const close:()=>void = () => setIndex(null);

    const { title, subTitle, img, contentText, category, bju } = product!

    const swipeConfidenceThreshold = 400000;
  
    return (
      <div className="product-card-container" >
        <motion.div
          layoutId={index}
          drag='y'
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.y, velocity.y);           
            if (Math.abs(swipe) > swipeConfidenceThreshold) {
              close()
            } else return null
          }}
          className="single-product-card"
          dragPropagation={true}
          onClick={e => e.stopPropagation()}
          style={{ backgroundColor: '#a9a9a9'}}
          dragConstraints={{ bottom: 200, top: -320 }}
          dragSnapToOrigin={false}
        >
            {window.innerWidth > 768 ? null :
            <Button onClick={close} style={{position: 'absolute', top: '2%', right: '0', zIndex: '3', color: '#343434'}} >
                <CloseIcon />
            </Button>}
            <ImageGallery images={img} />
            <Box sx={{
              mx: '1rem',
              mt: '1rem',
              mb: 0,
              flexWrap: 'wrap',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center'}}
            >
              <h4 className="card-content-category">{category}</h4>
              <h2 className="card-content-title">{title} {subTitle}
              <AdditionalInfoButton
                title='Пищевая ценность' 
                menuItems={ [`Белки: ${bju.belki} г`,
                `Жиры: ${bju.jiri} г`,
                `Углеводы: ${bju.uglevodi} г`,
                `Эн. Ценность: ${bju.kkal} ккал`,
              ]} 
              /></h2>
              <p className="card-content-text">
                {contentText}
              </p>
              <div className="card-content-price">

                <ProductTotal product={product!} />
                
              </div>
            </Box>
        </motion.div>
      </div>
    );
  }

export default ProductCard