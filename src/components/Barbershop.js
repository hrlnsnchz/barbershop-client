import React from "react"
import "./Barbershop.css"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"

export const Barbershop = () => (
    <>
        <h2>Welcome to Luis' Barbershop</h2>
        <address>
            <button>Get in Line</button>
            <button>Appointment</button>
        </address>
        <Route render={() => {
            // if (localStorage.getItem("lu_token")) {
                return <>
                    <Route render={NavBar} />
                    <Route render={props => <ApplicationViews {...props} />} />
                </>
            // } else {
            //     return <Redirect to="/login" />
            // }
        }} />
        <Route path="/login" render={Login} />
    </>
)
