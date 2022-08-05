import React, { FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@mui/material";
import ProductGallery from "./ProductComponents/ProductGallery";
import ProductCard from "./ProductComponents/ProductCard";
import { Header } from "./ProductComponents/Header";
import { productCardData } from "../../data/productCardData";
import Footer from "../navigation/Footer";

const Products:FC = () => {
  const [index, setIndex] = useState<string|null>(null);
  
  return (
    <>
    <Header />
    <Container style={{display: 'flex', paddingLeft: 0, paddingRight: 0}}>
      <>
      <ProductGallery items={productCardData} setIndex={setIndex} index={index} />
      <AnimatePresence>
        {index !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            className="overlay"
            onClick={() => setIndex(null)}
          />
        )}
      </AnimatePresence>

        {index !== null && (
          <ProductCard index={index} setIndex={setIndex} product={productCardData.find(item => item.id === index)} />
        )}

      </>
    </Container>
    <Footer />
  </>    
  );
}

export default Products