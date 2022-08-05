import React, { FC, useState } from 'react'
import { useSpring, a } from '@react-spring/web'

const FlipCard:FC<{ back: string, front: string, shadow?: string, initial?: string }> = ({ back, front, shadow, initial }) => {

  const [flipped, setFlipped] = useState(initial === 'flipped' ? false : true)

  const boxShadow = shadow === 'dark' ? '0px 0px 32px 16px rgba(34, 60, 80, 0.3)' : '0px 0px 32px 16px rgba(240, 240, 240, 0.3);'
  
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })
  return (
    <>
      <a.div
        className='c back'
        onClick={() => setFlipped(state => !state)}
        style={{ 
            opacity: opacity.to(o => 1 - o),
            display: flipped ? 'none' : 'block',
            transform,
            boxShadow: boxShadow
        }}
      >
        <h3 className='FlipCard-text'>{back}</h3>
      </a.div>
      <a.div
        className='c front'
        onClick={() => setFlipped(state => !state)}
        style={{
          opacity,
          display: flipped ? 'block' : 'none',
          transform,
          rotateX: '180deg',
          backgroundImage: `url(${front})`,
          boxShadow: boxShadow
        }}
      />
    </>
  )
}


export default FlipCard