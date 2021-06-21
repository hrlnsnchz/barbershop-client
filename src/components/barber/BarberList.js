import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router"
import { useParams } from "react-router-dom"
import { BarberContext } from "./BarberProvider.js"

export const BarberList = (props) => {
    const { barbers, getBarbers } = useContext(BarberContext)
    const history = useHistory()
    const queueMethod = useParams()
    console.log('queueMethod: ', queueMethod);

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
                            <button className="registration__game" onClick={() => {
                    history.push("/services")
                    }}>{barber.user.first_name} {' '}
                            {barber.user.last_name}</button>
                        </section>
                    }): ''
                }
            </article >
        </>
    )
}