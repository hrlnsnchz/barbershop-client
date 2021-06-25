import React from "react"
import { useHistory } from "react-router-dom"
import { Button } from "react-bootstrap"

export const Home = () => {
    const history = useHistory()

    return (

        <>
        <h2>Welcome to Luis' Barbershop</h2>
        <address>
            <Button variant="light" onClick={() => {
                history.push("/waitlist")
            }}>Get in Line</Button>
            <Button variant="light" onClick={() => {
                history.push({ pathname: "/appointment" })
            }}>Appointment</Button>
        </address>
        </>
    )
}