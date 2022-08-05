import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { ChevronRight } from "@mui/icons-material";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 100 : -100,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0
    };
  }
};


const swipeConfidenceThreshold = 10000;
export const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const ImageGallery:React.FC<{images: string[]}> = props => {
  const [[page, direction], setPage] = useState([0, 0]);

  
  const imageIndex = wrap(0, props.images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="image-gallery-container" onDrag={e => e.stopPropagation()}>
      <AnimatePresence initial={false} custom={direction} >
        <motion.img
          key={page}
          className='imggallery'
          src={props.images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          style={{borderRadius: 'inherit', width: '100%'}}
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            e.stopPropagation();
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <div className="next" onClick={() => paginate(1)}>
        <ChevronRight />
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        <ChevronRight />
      </div>
    </div>
  );
};

export default ImageGallery
