import React from 'react';
import './RoomList.css'
import Room from '../Room/Room'

const RoomsList = (props) => {

  const rooms = props.hotels[0].rooms.map( (room, index) => {
    return (
      <Room key={index}
            room={room}
      />
    )
  })
  
  return(
    <section className="rooms">
      {rooms}
    </section>
  )
}

export default RoomsList;