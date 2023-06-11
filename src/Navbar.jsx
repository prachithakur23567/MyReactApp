import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <div className="nav-logo">
                    <h2>YourChallenge</h2>
                </div>
                <div className="nav-link"  >
                    <ul >

                        <li className='links' ><NavLink exact activeClassName="active_item" style={{
                            textDecoration: "none", color: "black",
                        }} to="/">Products</NavLink></li>
                        <li><NavLink exact activeClassName="active_item" style={{ textDecoration: "none", color: "black" }}
                            to="/download">Download</NavLink></li>

                        <li><NavLink exact activeClassName="active_item" style={{ textDecoration: "none", color: "black" }} to="/pricing">Pricing</NavLink></li>
                    </ul>
                </div>

            </nav >
        </>


    )
}

export default Navbar
