import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import Navbar from "react-bootstrap/Navbar"
import { Nav, Button} from "react-bootstrap"

export const NavBar = (props) => {
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand to="/">{<Link className="navbar__link" to="/">
                <img alt="barbershop-logo" src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/140113397/original/e9a1b1a91080609775774548d676d18d2be57f44/design-original-exclusive-barbershop-logo-design-without-any-copyright-concept.jpg" /></Link>
                }
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/barbers">Barbers</Nav.Link>
                <Nav.Link href="/services">Services</Nav.Link>
            </Nav>
            {
    (localStorage.getItem("lu_token") !== null) ?
        <Nav className="nav-item">
            <Button className="nav-link fakeLink"
                onClick={() => {
                    localStorage.removeItem("lu_token")
                    props.history.push({ pathname: "/" })
                }}
                >Logout</Button>
        </Nav> :
        <>
            <Nav className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
            </Nav>
            <Nav className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
            </Nav>
        </>
}    
        </Navbar>
        </>
    )
}