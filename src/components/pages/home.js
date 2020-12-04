import React, { Component } from 'react'
import { Link } from "react-router-dom"


import squadImage from "../../../static/assets/images/squad.jpg"

export default class Home extends Component {
    constructor() {
        super()

        this.state = {
            
        }
    }

    render() {
        return (
            <div className='body'>
                
                <div className="intro">
                    Hi! We are squad 4! We do the best trick shots in the world!
                </div>

                <div className="photo">
                    <img src={squadImage} alt=""/>
                </div>

                <div className="shop">
                    Check out some of our new merch!
                </div>

                <div className="homepage-links"> 
                    <Link className="body-nav-link" to="/womens-apparel">
                        Women's Apparel
                    </Link>
                    <Link className="body-nav-link" to="/mens-apparel">
                        Men's apparel
                    </Link>
                    <Link className="body-nav-link" to="/accessories">
                        Accessories
                    </Link>
                </div>
     
            </div>
        )
    }
}
