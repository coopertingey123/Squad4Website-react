import React, { Component } from 'react'
import { Link } from "react-router-dom"


import shirtImage from "../../../static/assets/images/womens.jpg"

export default class Item extends Component {
    constructor() {
        super()

        this.state = {
            id: "",
            name: "",
            price: "",
            description: ""
        }
    }

    render() {
        return (
            <div className='item-container'>
                <div className="name-wrapper">
                    T-shirt
                </div>
                <div className="image-wrapper">
                    <img src={shirtImage} alt=""/>
                </div>
                <div className="price-wrapper">
                    $15.00
                </div>
                <div className="button-wrapper">
                    <button>Add to cart</button>
                </div>

            </div>
        )
    }
}