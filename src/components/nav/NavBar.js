import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <>
        <ul className="navbar">
        <li>
        <img className="logo" alt="barbershop-logo" src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/140113397/original/e9a1b1a91080609775774548d676d18d2be57f44/design-original-exclusive-barbershop-logo-design-without-any-copyright-concept.jpg" />
        </li>
            <li className="navbar__item">
            <Link className="nav-link" to="/">Home</Link>
                
            
            </li>
            {
                (localStorage.getItem("lu_token") !== null) ?
                    <li className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("lu_token")
                                props.history.push({ pathname: "/" })
                            }}
                            >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
            </>
    )
}