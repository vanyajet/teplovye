import React, { FC } from "react";
import { motion } from "framer-motion";
import { ICardData } from "../../../data/productCardData";

const ProductGallery:FC<{ items:ICardData[], setIndex:React.Dispatch<React.SetStateAction<string|null>>, index:string|null}> = props => {


  const handleClick = (item:string|null) => {
      props.index === null ? props.setIndex(item) 
      :
      props.setIndex(null); setTimeout(() => props.setIndex(item), 500);
  }  

  return (

    <motion.ul className="gallery-container">
      {props.items.map((item:ICardData) => (
        <motion.li
          layoutId={item.id}

          onClick={() => handleClick(item.id)}
          className="gallery-item"
          key={item.id}
        >
          <motion.img src={item.img[0]} className='gallery-item__bg-image' />
          <h4 className="gallery-item__category-text">{item.category}</h4>
          <h2 className="gallery-item__title-text">{item.title}</h2>
        </motion.li>
      ))}
    </motion.ul>
  );
  }

export default ProductGallery