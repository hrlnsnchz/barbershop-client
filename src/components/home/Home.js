import React from "react"
import { useHistory } from "react-router-dom"

export const Home = () => {
    const history = useHistory()

    return (

        <>
        <h2>Welcome to Luis' Barbershop</h2>
        <address>
            <button onClick={() => {
                history.push("/waitlist")
            }}>Get in Line</button>
            <button onClick={() => {
                history.push({ pathname: "/appointment" })
            }}>Appointment</button>
        </address>
        </>
    )
}