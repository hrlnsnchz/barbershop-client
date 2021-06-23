import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router"
import { useParams } from "react-router-dom"
import { BarberContext } from "./BarberProvider.js"
import { Link } from "react-router-dom"


export const BarberList = (props) => {
    const { barbers, getBarbers } = useContext(BarberContext)

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
                        return <section key={barber.id} className="registration">
                            <Link to={`/services/${barber.id}`}>
                                <button className="registration__game" 
                                >{barber.user.first_name} {' '}
                                {barber.user.last_name}</button>
                            </Link>
                        </section>
                    }): ''
                }
            </article >
        </>
    )
}