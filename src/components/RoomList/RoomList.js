import React from 'react';
import { ReactComponent as BedIcon } from '../../assets/bed.svg';
import Room from '../Room/Room'
import './RoomList.scss'


const RoomsList = (props) => {
  
  const iconStyle = {
    'display': 'inline',
    'margin': '0rem 0.5rem 0rem 1rem'
  }

  const rooms = props.hotels[0].rooms.map( (room, index) => {
    return (
        <Room key={index} room={room} />
    )
  })
  
  return(
    <section className="rooms">
      <div className="rooms__ribbon" aria-hidden="true">
        <BedIcon style={iconStyle}/>
        <div className="rooms__ribbon__half rooms__type"><span>Valitse huone 1</span></div>
        <div className="rooms__ribbon__half rooms__visitor-count"><span>1 Adult</span></div>
      </div>
      <ul className="rooms__list" aria-label="Available rooms">
        {rooms}
      </ul>
    </section>
  )
}

export default RoomsList;