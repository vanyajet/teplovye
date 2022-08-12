import React, { FC, useState } from "react";
import { motion } from "framer-motion";
import { IProductData } from "../../../data/productData";

const ProductGallery:FC<{ items:IProductData[], setIndex:React.Dispatch<React.SetStateAction<string|null>>, index:string|null}> = ({ items, setIndex, index }) => {

  const [selected, setSelected] = useState<boolean>(false);

  const handleClick = (item:string|null) => {
      if (index === null) {
        setIndex(item);
        setSelected(true);
      } else {
        setIndex(null);
        setSelected(false);
        setTimeout(() => {
          setIndex(item)
          setSelected(true);
        }, 100);
      }
      

  }

  return (

    <motion.ul className="gallery-container">
      {items.map((item:IProductData) => (
        <motion.li
          layoutId={item.id}
          style={{ display: `${index=== item.id && selected ? 'none' : 'flex'}`, flex: `${selected ? '1 1 225px' : '1 1 300px'}` }}
          onClick={() => handleClick(item.id)}
          className="gallery-item"
          key={item.id}
        >
          <motion.img src={item.img[0]} className='gallery-item__bg-image' />
          <h4 className="gallery-item__category-text">{item.category}</h4>
          <h2 className="gallery-item__title-text">{item.title}</h2>
          <h2 className="gallery-item__subtitle-text">{item.subTitle}</h2>
        </motion.li>
      ))}
    </motion.ul>
  );
  }

export default ProductGallery