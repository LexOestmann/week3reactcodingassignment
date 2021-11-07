import React, { Component } from 'react';
import { HousesList } from './Components/HousesList';
import 'bootswatch/dist/solar/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>HOUSE APP</h1>
        <HousesList />
      </div>
    )
  }
}

export default App;
