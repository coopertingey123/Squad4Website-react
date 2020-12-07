import React, { Component } from 'react'

import Item from "../merchandise/item"
import Navbar from '../navigation/navbar'


export default class WomensApparel extends Component {
    constructor() {
        super()

        this.state = {
            
        }
    }

    render() {
        return (
            <div className=''>
                <Navbar />
                <Item/>
            </div>
        )
    }
}