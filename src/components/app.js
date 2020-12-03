import React, { Component } from 'react';

import Navbar from "../components/navigation/navbar"
import Home from "./pages/home"

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <div>
          <Navbar/>
          <Home/>
        </div>
      </div>
    );
  }
}
