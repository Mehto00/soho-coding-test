import React from 'react';
import './Header.css'

const header = (props) => {
  
  const test = {
    backgroundImage: 'url(' + props.hotels[0].imageURLs[0] + ')',
  } 

  return (
    <section className="header">
      <div className="header__carousel" style={test} ></div>
      <div className="header__content">
        <h2>{props.hotels[0].name}</h2>
        <p>
          {props.hotels[0].address.street}, {props.hotels[0].address.postCode}, {props.hotels[0].address.city}
        </p>
        <button className="header__btn">Kartta</button>
        <a href={props.hotels[0].webURL}><button className="header__btn">Tutustu hotelliin</button></a>
      </div>
    </section>
  )
}

export default header;