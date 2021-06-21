import React from "react"
import "./Barbershop.css"
import { Route, Redirect, useHistory } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"

export const Barbershop = () => {
    const history = useHistory()

    return (

        <>
        <h2>Welcome to Luis' Barbershop</h2>
        <address>
            <button onClick={() => {
                history.push("/waitlist")
            }}>Get in Line</button>
            <button onClick={() => {
                history.push({ pathname: "/appointment/new" })
            }}>Appointment</button>
        </address>
        <Route render={() => {
            if (localStorage.getItem("lu_token")) {
                return <>
                    <Route render={NavBar} />
                    <Route render={props => <ApplicationViews {...props} />} />
                </>
             } else {
                 return <Redirect to="/login" />
                }
            }} />
        <Route path="/login" render={Login} />
        <Route path="/register" render={Register} />
        </>
    )
}

