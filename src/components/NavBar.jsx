import React from 'react'
import '../index.css'

export function NavBar() {
    return (
        <div className='navBar'>
            <img className= "logo" src="../media/logo.png" alt="" />
            <div className="buttons">
                <button className="buttonHeader">Collections</button>
                <button className="buttonHeader">Men</button>
                <button className="buttonHeader">Women</button>
                <button className="buttonHeader">About</button>
                <button className="buttonHeader">Contact</button>
            </div>
            <div className="userContent">
                <img src="../media/shoppingCart.png" alt="" />
                <img src="../media/userAvatar.jpeg" alt="" />
            </div>
        </div>
    )
}