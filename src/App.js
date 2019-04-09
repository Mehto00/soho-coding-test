import React, { Component } from 'react';
import Radium from 'radium';

import './App.css';
import contentData from './assets/availability.json'

import Header from './components/Header/Header';
import RoomList from './components/RoomList/RoomList';
class App extends Component {
  
  state= {
    hotels: contentData.hotels
  }

  render() {
    return (
      <div className="App">
        <Header hotels={this.state.hotels} />
        <RoomList hotels={this.state.hotels} />
      </div>
    );
  }
}

export default Radium(App);
