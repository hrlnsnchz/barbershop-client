import React, { useContext, useEffect } from "react"
import { BarberContext } from "./BarberProvider.js"
import { Link, useParams } from "react-router-dom"
import { Button } from "react-bootstrap"

export const BarberList = (props) => {
    const { barbers, getBarbers } = useContext(BarberContext)
    const queueMethod = useParams()

    useEffect(() => {
        getBarbers()
    }, [])

    return (
        <>
            <article className="barbersList">
                <header className="barbers__header">
                    <h1>Our Barbers</h1>
                </header>
                {
                    Array.isArray(barbers) ? barbers.map(barber => {
                        return <section key={barber.id} className="registration">
                            <Link to={`waitlist/services/${barber.id}`}>
                                <Button variant="light">{' '}{barber.user.first_name} {' '}
                                {barber.user.last_name}</Button>
                            </Link>
                        </section>
                    }): ''
                }
            </article >
        </>
    )
}