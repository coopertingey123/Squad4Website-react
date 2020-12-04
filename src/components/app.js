import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from "../components/navigation/navbar"
import Accessories from "./pages/accessories"
import MensApparel from "./pages/mens-apparel"
import WomensApparel from "./pages/womens-apparel"
import Home from "./pages/home"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" render={() => <Home />} />
              <Route path="/accessories" render={() => <Accessories/>} />
              <Route path="/mens-apparel" render={() => <MensApparel />} />
              <Route path="/womens-apparel" render={() =><WomensApparel />} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
