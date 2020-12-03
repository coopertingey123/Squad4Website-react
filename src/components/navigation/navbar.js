import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class Navbar extends Component {
    render() {

        return (
            <div className='navbar-wrapper'>
                <div className="navbar-top-left">
                    <div className="nav-link-wrapper"> 
                        <Link className="nav-link" to="/">
                            Home
                        </Link>  
                    </div>

                    <div className="nav-link-wrapper">
                        <Link className="nav-link" to="/womens-apparel">
                            Women's Apparel
                        </Link>
                    </div>

                    <div className="nav-link-wrapper">
                        <Link className="nav-link" to="/mens-apparel">
                            Men's Apparel
                        </Link>
                    </div>

                    <div className="nav-link-wrapper">
                        <Link className="nav-link" to="/accessories">
                            Accessories
                        </Link>
                    </div>
                </div>
                    


                <div className="navbar-top-right">
                    
                    <div className="nav-link-wrapper">
                        <Link className="nav-link" to="/logout">
                            Logout
                        </Link>
                    </div>

                    <div className="nav-link-wrapper">
                        <Link className="nav-link" to="/cart">
                            My cart
                        </Link>
                    </div>
                </div>
            </div>
        )
}
}