import React from 'react'

export default function (props) {
    return (
        <div className='navbar-wrapper'>
            <div class="navbar-top-left">
                <div className="nav-link-wrapper"> 
                    <NavLink exact to="/" activeClassName="nav-link-active">
                        Home
                    </NavLink>  
                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/womens-apparel" activeClassName="nav-link-active">
                        Women's Apparel
                    </NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/mens-apparel" activeClassName="nav-link-active">
                        Men's Apparel
                    </NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/accessories" activeClassName="nav-link-active">
                        Accessories
                    </NavLink>
                </div>
            </div>
                


            <div class="navbar-top-right">
                
                <div className="nav-link-wrapper">
                    <NavLink to="/logout" activeClassName="nav-link-active">
                        Logout
                    </NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/cart" activeClassName="nav-link-active">
                        My cart
                    </NavLink>
                </div>
            </div>
        </div>
    )
}