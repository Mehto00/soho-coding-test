import React from 'react';
import Carousel from '../Carousel/Carousel';

import { ReactComponent as LeftArrow } from '../../assets/left-arrow.svg';
import './Header.scss'

const header = (props) => {

  const arrowSize = {
    height : '28px',
    width : '28px'
  }

  return (
    <section className="header">
      <div className="header__bar">
      <span className="header__icon"><LeftArrow style={arrowSize}/></span>
      <h1 className="header__city">Pasila</h1>
      <span className="header__date" aria-label="Visiting dates">17.8-18.8</span></div>
      
      <Carousel hotels={props.hotels}/>

      <div className="header__content">
        <h2 className="header__hotel-name">{props.hotels[0].name}</h2>
        <p className="header__hotel-address">
          {props.hotels[0].address.street}, {props.hotels[0].address.postCode}, {props.hotels[0].address.city}
        </p>
        <button className="header__btn" aria-label="Hotels location on map">Kartta</button>
        <a className="header__btn" role="button" aria-label="Read more about the hotel" href={props.hotels[0].webURL}>Tutustu hotelliin</a>
      </div>
    </section>
  )
}

export default header;