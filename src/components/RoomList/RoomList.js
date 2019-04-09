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
      <div className="rooms__ribbon">
        <div className="rooms__ribbon__half rooms__type"><span>Choose rooms for 1</span></div>
        <div className="rooms__ribbon__half rooms__visitor-count"><span>1 Adult</span></div>
      </div>
      {rooms}
    </section>
  )
}

export default RoomsList;