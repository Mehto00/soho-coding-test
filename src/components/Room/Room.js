
import React from 'react';
import './Room.scss'

const Room = (props) => {
  
  const imgstyling = {
    backgroundImage: 'url(' + props.room.imageURLs[0] + ') ',
    borderRadius: "5px 0 0 5px"
  } 


  return(
    <li className="room__item" aria-label="Available room">
      <div className="room__half room__half__image" style={imgstyling} >
      </div>
      <div className="room__half room__half__content">
        <p className="room__title" aria-label="Room type">{props.room.title}</p>
        <button className="room__btn" aria-label="Price starting from 231,00 €">alk. 231,00 €</button>
      </div>
    </li>
  )
}

export default Room;