import React, { Component } from 'react';

import Navbar from "../components/navigation/navbar"

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <div>
          <Navbar/>
        </div>
      </div>
    );
  }
}
