import React from 'react';
import Carousel from 'nuka-carousel';

import './Carousel.scss'

const carousel = (props) => {
    return (
      <Carousel 
        className="carousel"
        autoplay={false}
        initialSlideHeight={'90'}

        renderCenterLeftControls={false}
        renderCenterRightControls={false}
        
      >
        <img src={props.hotels[0].imageURLs[0]} alt=""/>
        <img src={props.hotels[0].imageURLs[1]} alt=""/>
        <img src={props.hotels[0].imageURLs[2]} alt=""/>
      </Carousel>
    
  )
}

export default carousel;