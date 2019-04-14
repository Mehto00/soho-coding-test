
import React from 'react';
import './Room.scss'

const Room = (props) => {
  
  const imgstyling = {
    backgroundImage: 'url(' + props.room.imageURLs[0] + ') ',
    borderRadius: "5px 0 0 5px"
  } 


  return(
    <div className="room__item">
      <div className="room__half room__half__image" style={imgstyling} >
      </div>
      <div className="room__half room__half__content">
        <p className="room__title">{props.room.title}</p>
        <button className="room__btn">alk. 231,00 €</button>
      </div>
    </div>
  )
}

export default Room;