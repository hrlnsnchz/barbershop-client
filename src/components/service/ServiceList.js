import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router"
import { useParams } from "react-router-dom"
import { ServiceContext } from "./ServiceProvider.js"

export const ServiceList = (props) => {
    const { services, getServices } = useContext(ServiceContext)
    const history = useHistory()
    const queueMethod = useParams()
    console.log('queueMethod: ', queueMethod);

    useEffect(() => {
        getServices()
    }, [])

    return (
        <>
            <article className="services">
                <header className="services__header">
                    <h1>Our Services</h1>
                </header>
                {
                    Array.isArray(services) ? services.map(service => {
                        return <section key={service.label} className="registration">
                            <button className="registration__game" onClick={() => {
                    history.push("/services")
                    }}>{service.label} {' $'}
                            {service.price}</button>
                        </section>
                    }): ''
                }
            </article >
        </>
    )
}