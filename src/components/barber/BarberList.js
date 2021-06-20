import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router"
import { BarberContext } from "./BarberProvider.js"

export const BarberList = (props) => {
    const { barbers, getBarbers } = useContext(BarberContext)
    const history = useHistory()

    useEffect(() => {
        getBarbers()
    }, [])

    return (
        <>
            <article className="barbers">
                <header className="barbers__header">
                    <h1>Our Barbers</h1>
                </header>
                {
                    Array.isArray(barbers) ? barbers.map(barber => {
                        return <section key={barber.user} className="registration">
                            <div className="registration__game">{barber.user.first_name}</div>
                            <div>{barber.user.last_name}</div>
                        </section>
                    }): ''
                }
            </article >
        </>
    )
}